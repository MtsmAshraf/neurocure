"use client"
import React from 'react'
import styles from "./hero.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import heroImg from "../../../public/images/hero-img.png"
import logo from "../../../public/images/logo.png"

import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const Hero = ({
  lo
} : {
  lo: string
}) => {

    const t = useTranslations("HomePage.Hero")

  return (
    <section className={lo === "ar" ? styles.hero + " " + styles.ar : styles.hero} id='hero'>
        <div className={styles.swiper}>
            <Swiper
                autoplay={{
                    delay: 10000
                }}
                slidesPerView= {1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                    el: `.heroPagination`
                }}
                lazyPreloadPrevNext={2}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                effect='slide'
                className='mySwiperProdHero'
                autoHeight={true}
                >
                <SwiperSlide className={styles.slide + ` relative min-h-[80vh] flex items-center bg-neutral-100 overflow-hidden`}>
                    <div className={styles.text}>
                        <Image src={logo} alt='Logo'></Image>
                        <h1>
                            {t("heading")}
                        </h1>

                        <p>
                            {t("description")}
                        </p>

                        <Link
                            href="/"
                        >
                        {t("cta")}
                        </Link>
                    </div>
                        <Image src={heroImg} alt='Brain Image'></Image>
                </SwiperSlide>
            </Swiper>
            <div className={styles.heroPagination}>
                <div className={`heroPagination`}></div>
            </div>
            <button className='featured-swiper-button-prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='featured-swiper-button-next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    </section>
  )
}

export default Hero