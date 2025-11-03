import React from 'react'
import styles from "./datenschutz.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import { getTranslations } from 'next-intl/server'

const Datenschutz = async ({
    params
} : {
    params: Promise<{ locale: string }>
}) => {
    const { locale } = await params
    const t = await getTranslations("Datenschutz")
  return (
    <>
        <section className={styles.datenschutz}>
            <MainHeading>
                <h2>
                    {t("Heading")}
                </h2>
            </MainHeading>
            <div className="container">
                {
                    locale === "en" ? 
                    <>
                        <br />
                        <div>
                            Welcome to our Neurology Clinic
                            Our clinic is committed to providing a respectful, calm, and professional environment.
                            Your well-being and medical care are our top priorities.
                            <br />
                            <br />
                            <h3>
                                Clinic Policy:
                            </h3>
                            <br />
                            Visits are by appointment only.
                            <br />
                            <br />
                            Please arrive 15 minutes before your appointment to complete administrative details.
                            <br />
                            <br />
                            Please bring all relevant documents (e.g., insurance card, medication list, previous reports or imaging).
                            <br />
                            <br />
                            We accept patients insured with ÖGK, BVAEB, KFA, SVS, as well as patients with private supplementary insurance (Zusatzversicherung) and self-paying (private) patients.
                            <br />
                            <br />
                            Online booking is available. Please select your appointment according to your insurance type (public, private, or Zusatzversicherung).
                            <br />
                            <br />
                            Medical certificates, reports, or diagnostic procedures are issued only when medically justified, not upon patient request.
                            <br />
                            <br />
                            Some services (e.g., extended reports, longer consultations, or specific treatments) are not covered by insurance and require additional payment.
                            <br />
                            <br />
                            Please bring only one accompanying person, and only if necessary.
                            <br />
                            <br />
                            Phone calls, loud talking, eating, or recording (photo/video) are not allowed inside the clinic.
                            <br />
                            <br />
                            The doctor does not provide home visits.
                            <br />
                            <br />
                            Short telephone follow-ups are only available for patients previously examined in person, and only via the official clinic phone number, not private numbers or WhatsApp.
                            <br />
                            <br />
                            Email communication is for administrative purposes only (e.g., appointment scheduling) and not for medical advice.
                            <br />
                            <br />
                            Patients must provide accurate health and medication information and follow medical instructions.
                            <br />
                            <br />
                            The clinic does not handle emergencies; in urgent cases please contact emergency services or go to the nearest hospital.
                            <br />
                            <br />
                            A translator can be arranged if needed for patients who do not speak German, Arabic or English.
                            <br />
                            <br />
                            <h3>
                                Cancellation Policy:
                            </h3>
                            <br />
                            Appointments must be canceled at least 24 hours in advance.
                            <br />
                            <br />
                            Missed or late-canceled appointments may incur a compensation fee based on the reserved time.
                            <br />
                            <br />
                            Delays of more than 10 minutes may result in rescheduling.
                            <br />
                            <br />
                            <h3>
                                Payment:
                            </h3>
                            <br />
                            The consultation fee is to be paid after each visit, in cash or by card.
                            <br />
                            <br />
                            Any additional fees, if applicable, must be settled immediately after the appointment.
                            <br />
                            <br />
                            A list of common additional fees (e.g., reports, therapies, extended examinations) is available upon request.
                            <br />
                            <br />
                            <h3>
                                Communication:
                            </h3>
                            <br />
                            All communication must be via official channels (clinic phone or email).
                            <br />
                            <br />
                            Messages via social media or messenger apps (e.g., WhatsApp, Signal) will not be answered.
                            <br />
                            <br />
                            The clinic is not responsible for medical advice given via unofficial channels.
                            <br />
                            <br />
                            <h3>
                                Data Protection:
                            </h3>
                            <br />
                            All data is handled confidentially according to GDPR.
                            <br />
                            <br />
                            Electronic records are password-protected.
                            <br />
                            <br />
                            Records are retained for 10 years, as required by law.
                            <br />
                            <br />
                            No data sharing with third parties without patient consent, except where legally required.
                            <br />
                            <br />
                            <h3>
                                Patient Rights:
                            </h3>
                            <br />
                            Patients have the right to information, access to records, and respectful treatment.
                            <br />
                            <br />
                            Patients are responsible for following clinic rules to ensure safety and efficiency.
                            <br />
                            <br />
                            <h5>
                                Neurology Clinic Dr. Muhammad Yacob <br />
                                Vienna – Austria
                            </h5>
                        </div>
                    </> : 
                    locale === "de" ?
                    <>
                        <br />
                        <div>
                            Willkommen in unserer neurologischen Praxis
                            Unsere Praxis legt großen Wert auf eine respektvolle, ruhige und professionelle Atmosphäre.
                            Ihr Wohlbefinden und Ihre medizinische Versorgung stehen für uns im Mittelpunkt.
                            <br />
                            <br />
                            <h3>
                                Ordinationsrichtlinien
                            </h3>
                            <br />
                            Termine nur nach vorheriger Vereinbarung.
                            <br />
                            <br />
                            Bitte kommen Sie etwa 15 Minuten vor Ihrem Termin, um administrative Daten zu vervollständigen.
                            <br />
                            <br />
                            Bitte bringen Sie alle relevanten Unterlagen mit (z. B. E‑Card, Medikamentenliste, frühere medizinische Berichte oder Bildgebung).
                            <br />
                            <br />
                            Wir betreuen Patienten mit Versicherungen von ÖGK, BVAEB, KFA, SVS, sowie Patienten mit Zusatzversicherung oder Privatpatienten.
                            <br />
                            <br />
                            Online-Terminbuchung ist möglich. Bitte wählen Sie den Termin je nach Ihrem Versicherungsstatus (Kassen-, Privat- oder Zusatzversicherung).
                            <br />
                            <br />
                            Medizinische Berichte, Gutachten oder Diagnosen werden ausschließlich nach ärztlicher Einschätzung erstellt, nicht auf Wunsch des Patienten.
                            <br />
                            <br />
                            Bestimmte Leistungen (z. B. spezielle Berichte, verlängerte Untersuchungen oder Therapien) sind nicht durch die Versicherung abgedeckt und müssen privat bezahlt werden.
                            <br />
                            <br />
                            Bitte bringen Sie maximal eine Begleitperson mit – und nur, wenn es notwendig ist.
                            <br />
                            <br />
                            Telefonieren, lautes Sprechen, Essen oder Aufnahmen (Foto/Video) in der Praxis sind nicht gestattet.
                            <br />
                            <br />
                            Der Arzt führt keine Hausbesuche durch.
                            <br />
                            <br />
                            Kurze telefonische Verlaufskontrollen sind ausschließlich für Patienten möglich, die bereits persönlich in der Praxis untersucht wurden, und nur über die offizielle Praxisnummer, nicht über private Nummern oder WhatsApp.
                            <br />
                            <br />
                            E-Mail-Kontakt dient nur administrativen Zwecken (z. B. Terminvereinbarung) und nicht für medizinische Beratung.
                            <br />
                            <br />
                            Patienten sind verpflichtet, korrekte Angaben zu ihrer Gesundheit und Medikamenteneinnahme zu machen, und den ärztlichen Anweisungen zu folgen.
                            <br />
                            <br />
                            Die Praxis ist nicht für Notfälle zuständig; in akuten Situationen wenden Sie sich bitte an den Notruf oder das nächste Krankenhaus.
                            <br />
                            <br />
                            Wir können bei Bedarf einen Dolmetscher für Patienten bereitstellen, die nicht Deutsch, Arabisch oder Englisch sprechen.
                            <br />
                            <br />
                            <h3>
                                Absageregelung
                            </h3>
                            <br />
                            Termine müssen mindestens 24 Stunden im Voraus abgesagt werden.
                            <br />
                            <br />
                            Bei Nichterscheinen oder kurzfristiger Absage behalten wir uns vor, eine Ausfallsgebühr entsprechend dem Zeitaufwand zu verrechnen.
                            <br />
                            <br />
                            Bei Verspätung von über 10 Minuten kann der Termin verschoben werden.
                            <br />
                            <br />
                            <h3>
                                Bezahlung
                            </h3>
                            <br />
                            Die Konsultationsgebühr ist nach jedem Termin bar oder mit Bankkarte zu bezahlen.
                            <br />
                            <br />
                            Etwaige zusätzliche Gebühren, falls vorhanden, sind direkt nach dem Termin zu begleichen.
                            <br />
                            <br />
                            Eine Übersicht häufiger zusätzlicher Gebühren (z. B. spezielle Berichte, Therapien, längere Untersuchungen) ist auf Anfrage verfügbar.
                            <br />
                            <br />
                            <h3>
                                Kommunikation
                            </h3>
                            <br />
                            Alle Kommunikation erfolgt ausschließlich über die offiziellen Kanäle (Telefon und E-Mail-Adresse der Praxis).
                            <br />
                            <br />
                            Nachrichten über soziale Medien oder Messenger-Dienste (z. B. WhatsApp, Signal) werden nicht beantwortet.
                            <br />
                            <br />
                            Die Praxis haftet nicht für medizinische Beratungen, die über unoffizielle Kanäle erfolgen.
                            <br />
                            <br />
                            <h3>
                                Datenschutz
                            </h3>
                            <br />
                            Alle Daten werden gemäß der DSGVO vertraulich behandelt.
                            <br />
                            <br />
                            Elektronische Patientenakten sind passwortgeschützt.
                            <br />
                            <br />
                            Daten werden 10 Jahre aufbewahrt, sofern gesetzlich vorgeschrieben.
                            <br />
                            <br />
                            Keine Weitergabe an Dritte ohne Zustimmung, außer gesetzlich erforderlich.
                            <br />
                            <br />
                            <h3>
                                Patientenrechte
                            </h3>
                            <br />
                            Patienten haben das Recht auf Information, Einsicht in Unterlagen und respektvolle Behandlung.
                            <br />
                            <br />
                            Patienten sind verpflichtet, die Regeln der Praxis einzuhalten, um die Sicherheit und Effizienz zu gewährleisten.
                            <br />
                            <br />
                            <h5>
                                Neurologische Praxis Dr. Muhammad Yacob <br />
                                Wien – Österreich
                            </h5>

                        </div>
                    </>
                    :
                    <>
                        <br />
                        <div style={{ direction: "rtl", textAlign: "right" }}>
                            مرحباً بكم في عيادة الأمراض العصبية
                            نحرص في عيادتنا على بيئة هادئة ومحترمة ومهنية.
                            سلامتكم وجودة الرعاية الطبية هدفنا الأول.
                            <br />
                            <br />
                            <h3>
                                سياسة العيادة:
                            </h3>
                            <br />
                            يتم استقبال المرضى بموعد مسبق فقط.
                            <br />
                            <br />
                            يرجى الحضور إلى العيادة قبل الموعد بحوالي 15 دقيقة لاستكمال البيانات الإدارية.
                            <br />
                            <br />
                            يرجى إحضار جميع المستندات اللازمة (مثل بطاقة التأمين، قائمة الأدوية، التقارير الطبية السابقة أو الصور الشعاعية).
                            <br />
                            <br />
                            تستقبل العيادة المرضى المؤمنين لدى ÖGK، BVAEB، KFA، SVS، وكذلك المرضى المؤمنين بتأمين خاص (Zusatzversicherung) والمرضى غير المؤمنين في النمسا (Privat).
                            <br />
                            <br />
                            يمكن حجز المواعيد إلكترونياً حسب نوع التأمين (تأمين عام، خاص، أو Zusatzversicherung).
                            <br />
                            <br />
                            لا تُصدر العيادة شهادات مرضية أو تقارير أو تشخيصات إلا عند الضرورة الطبية، وليس بناءً على رغبة المريض.
                            <br />
                            <br />
                            بعض الخدمات مثل التقارير الإضافية أو الوقت الإضافي أو وسائل علاج معينة لا يغطيها التأمين ويجب دفع رسوم إضافية.
                            <br />
                            <br />
                            يرجى اصطحاب مرافق واحد فقط عند الضرورة.
                            <br />
                            <br />
                            يُمنع التحدث بالهاتف أو رفع الصوت أو تناول الطعام أو التصوير/التسجيل داخل العيادة.
                            <br />
                            <br />
                            لا يقوم الطبيب بزيارات منزلية.
                            <br />
                            <br />
                            يمكن إجراء متابعات هاتفية قصيرة فقط للمرضى الذين تمت معاينتهم شخصياً مسبقاً، وذلك عبر رقم العيادة الرسمي حصراً، وليس عبر الرقم الخاص أو تطبيق واتسآب.
                            <br />
                            <br />
                            التواصل عبر البريد الإلكتروني مخصص للشؤون الإدارية فقط وليس للاستشارات الطبية.
                            <br />
                            <br />
                            يُتوقع من المرضى تقديم معلومات صحيحة عن حالتهم الصحية والأدوية واتباع التعليمات الطبية.
                            <br />
                            <br />
                            العيادة غير مخصصة للحالات الطارئة؛ في الحالات العاجلة يرجى الاتصال بخدمة الطوارئ أو التوجه إلى المستشفى.
                            <br />
                            <br />
                            يمكن توفير مترجم عند الحاجة للمرضى الذين لا يتحدثون الألمانية أو الإنجليزية أو العربية.
                            <br />
                            <br />
                            <h3>
                                سياسة الإلغاء:
                            </h3>
                            <br />
                            يجب إلغاء المواعيد قبل 24 ساعة على الأقل.
                            <br />
                            <br />
                            في حال عدم الحضور أو الإلغاء المتأخر، يحق للعيادة تحصيل رسوم تعويضية تتناسب مع الوقت المحجوز.
                            <br />
                            <br />
                            في حال التأخر عن الموعد أكثر من 10 دقائق، قد يتم إعادة جدولته.
                            <br />
                            <br />
                            <h3>
                                الدفع:
                            </h3>
                            <br />
                            يتم دفع رسوم المعاينة بعد كل زيارة نقداً أو بواسطة البطاقة البنكية.
                            <br />
                            <br />
                            يتم دفع الرسوم الإضافية في حال وجودها مباشرة بعد انتهاء الزيارة.
                            <br />
                            <br />
                            يمكن طلب قائمة بالرسوم الإضافية الشائعة (مثل التقارير، العلاج، أو الفحوصات الممتدة).
                            <br />
                            <br />
                            <h3>
                                التواصل:
                            </h3>
                            <br />
                            يُرجى التواصل مع العيادة فقط عبر القنوات الرسمية (هاتف أو بريد إلكتروني العيادة).
                            <br />
                            <br />
                            لن يتم الرد على أي رسائل تُرسل عبر تطبيقات التواصل أو وسائل التواصل الاجتماعي.
                            <br />
                            <br />
                            العيادة غير مسؤولة عن الاستشارات الطبية عبر القنوات غير الرسمية.
                            <br />
                            <br />
                            <h3>
                                حماية البيانات:
                            </h3>
                            <br />
                            تُعامل جميع البيانات الشخصية والطبية بسرية تامة وفق اللائحة العامة لحماية البيانات الأوروبية (GDPR).
                            <br />
                            <br />
                            الملفات الإلكترونية محمية بكلمة مرور.
                            <br />
                            <br />
                            تُحتفظ الملفات لمدة 10 سنوات حسب القانون.
                            <br />
                            <br />
                            لا يتم تبادل أي بيانات مع أطراف أخرى دون موافقة المريض، إلا إذا كان ذلك مطلوباً قانوناً.
                            <br />
                            <br />
                            <h3>
                                حقوق المرضى:
                            </h3>
                            <br />
                            يحق للمرضى الحصول على معلومات، الاطلاع على الملفات، والحفاظ على احترامهم وخصوصيتهم.
                            <br />
                            <br />
                            يجب على المرضى الالتزام بقواعد العيادة لضمان السلامة والكفاءة.
                            <br />
                            <br />
                            <h5>
                                
                                عيادة الأمراض العصبية د. محمد يعقوب <br />
                                فيينا – النمسا
                            </h5>
                        </div>
                    </>
                }
            </div>
        </section>
    </>
  )
}

export default Datenschutz