// Theme Toggle - Preserved your original implementation
const themeSelect = document.getElementById('theme-select');
if (themeSelect) {
    const preferredTheme = localStorage.getItem('theme') || 'light';

    function setTheme(theme) {
        document.body.className = theme === 'dark' ? 'dark-mode' : '';
        themeSelect.value = theme;
        localStorage.setItem('theme', theme);
    }

    // Check system preference
    if (preferredTheme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    } else {
        setTheme(preferredTheme);
    }

    themeSelect.addEventListener('change', (e) => {
        if (e.target.value === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        } else {
            setTheme(e.target.value);
        }
    });
}

// Text animation - Preserved your original implementation
const textElement = document.querySelector('.animated-text');
if (textElement) {
    const texts = ['Haqq Tech', 'a Developer', 'a Designer', 'a Programmer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 500);
        } else {
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeText, speed);
        }
    }

    // Start the typing effect
    setTimeout(typeText, 1000);
}

// Smooth scrolling - Preserved your original implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language switching - Enhanced but compatible version
const languageSelect = document.getElementById('language-select');
if (languageSelect) {
    const translations = {
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            education: "Education",
            projects: "Projects",
            contact: "Contact",
            heroTitle: "Hi, I'm <span class='name-highlight'>HaqqTech</span>",
            intro: "A passionate web developer creating beautiful, functional websites and applications. I specialize in front-end development with a focus on user experience and also on the user request handling to add a great experience for the user.",
            heroSubtitle: "Software Engineer & Full-Stack Developer",
            viewMyWork: "View my work",
            aboutText1: "Hello! I'm HaqqTech, a passionate software engineer specializing in full-stack JavaScript development.",
            aboutText2: "With expertise in React, Node.js, Express and MySQL, I build scalable web applications that solve real-world problems.",
            aboutText3: "When I'm not coding, I enjoy contributing to open-source projects and exploring new tech trends.",
            p1_titie: "DocLab Medical Booking System",
            p1_intro: "A comprehensive healthcare platform enabling patients to book, reschedule, and manage appointments with medical professionals. Features real-time doctor availability, automated reminders, and secure patient records.",
            p2_intro: "An interactive university website showcasing academic programs, campus life, and admission processes. Features dynamic course displays, virtual campus tours, and responsive design for prospective students.",
            p3_intro: "A robust authentication system featuring real-time input validation, password strength analysis, and multi-factor authentication options. Includes comprehensive error handling and security best practices.",
            contactHeading: "Let's Connect!",
            contactText: "Have a project in mind? Feel free to reach out!",
            greetings: "Hi, I'm",
            education: "Education",
            downloadCV: "Download My CV",
            downloadPDF: "PDF Version",
            downloadDOC: "Word Version",
            sendMessage: "Send Message",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            viewDetails: "View Details",
            liveDemo: "Live Demo",
            sourceCode: "Source Code",
            downloadCV: "Download CV",
            doclabTitle: "Doktor Lab Schedule System",
            edufordTitle: "Eduford University",
            doclabDescription: "Doctor Lab Schedule System is a web application that allows students to view, manage, and edit their doctor lab schedules. It uses React, Redux, and Firebase for backend development.",
            pageTitle: "HaqqTech Portfolio",
            // portfolio: "Portfolio",
            closeMenu: "closeMenu",
            // Education Section
            educationDate1: "2020 - 2022",
            educationTitle1: "Advanced Frontend Development",
            educationInstitution1: "Online Coding Academy",
            educationDesc1: "Completed intensive training in modern JavaScript frameworks and responsive design.",
            educationDate2: "2023 - 2024",
            educationTitle2: "Full Stack Web Development",
            educationInstitution2: "Femtech Information Technology Institute",
            educationDesc2: "Specialized in Web Development and Database management. Graduated with Honors.",
           


        },
        ar: {
            home: "الرئيسية",
            about: "عني",
            skills: "المهارات",
            education: "التعليم",
            projects: "المشاريع",
            contact: "اتصل",
            heroTitle: "مرحبًا، أنا ",
            heroSubtitle: "مهندس برمجيات ومطور Full-Stack",
            intro: "مطور ويب شغوف يقوم بإنشاء مواقع وتطبيقات جميلة وعملية. أمتلك خبرة في تطوير الواجهة الأمامية مع التركيز على تجربة المستخدم، وأيضًا على معالجة طلبات المستخدم لإضافة تجربة رائعة للمستخدم.",
            viewMyWork: "شاهد عملي",
            aboutText1: "مرحبًا! أنا HaqqTech، مهندس برمجيات شغوف ومتخصص في تطوير JavaScript الشامل (Full-Stack).",
            aboutText2: "بخبرة في React وNode.js وExpress وMySQL، أقوم ببناء تطبيقات ويب قابلة للتطوير تحل المشكلات الحقيقية.",
            aboutText3: "عندما لا أكتب الكود، أحب أنا ضافة المشاريع التي تعمل على المتطورين والتجربات الجديدة.",
            p1_titie: "نظام حجز المواعيد الطبية DocLab",
            p1_intro: "منصة رعاية صحية شاملة تُمكّن المرضى من حجز وإعادة جدولة وإدارة المواعيد مع المتخصصين الطبيين. تتميز بتوافر الأطباء في الوقت الفعلي، والتذكيرات التلقائية، وسجلات المرضى الآمنة.",
            p2_intro: "موقع إلكتروني تفاعلي للجامعة يعرض البرامج الأكاديمية، حياة الحرم الجامعي، وعمليات القبول. يحتوي على عرض ديناميكي للدورات الدراسية، جولات افتراضية في الحرم الجامعي، وتصميم متجاوب للطلاب المحتملين.",
            p3_intro: "نظام تحقق قوي يتضمن التحقق الفوري من المدخلات، تحليل قوة كلمة المرور، وخيارات التحقق المتعدد العوامل. يشمل معالجة الأخطاء بشكل شامل وأفضل ممارسات الأمان.",
            contactHeading: "الاتصال معي!",
            contactText: "هل لديك مشروع فقط صل بي!",
            greetings: "مرحبا، أنا",
            seeMore: "عرض المزيد المشاريع",
            showLess: "عرض أقل",
            education: "التعليم",
            downloadCV: "تحميل السيرة الذاتية",
            downloadPDF: "نسخة PDF",
            downloadDOC: "نسخة Word",
            sendMessage: "أرسل رسالة",
            namePlaceholder: "اسمك",
            emailPlaceholder: "بريدك الإلكتروني",
            messagePlaceholder: "رسالتك",
            viewDetails: "عرض التفاصيل",
            liveDemo: "عرض مباشر",
            sourceCode: "الكود المصدري",
            downloadCV: "تحميل السيرة الذاتية",
            doclabTitle: "نظام حجز المواعيد الطبية دوك لاب",
            edufordTitle: "موقع جامعة إيدفورد",
            secureauthTitle: "نظام التحقق من تسجيل الدخول",
            // Project Descriptions
            doclabDesc: "منصة طبية متكاملة تمكن المرضى من حجز وتعديل المواعيد مع الأطباء. تتضمن نظام متابعة حية لجدول الأطباء وتذكيرات تلقائية.",
            edufordDesc: "موقع تفاعلي للجامعة يعرض البرامج الأكاديمية والحياة الجامعية وعمليات القبول. يحتوي على عروض ديناميكية للبرامج وجولات افتراضية.",
            secureauthDesc: "نظام أمان متقدم لتسجيل الدخول يحتوي على تحقق في الوقت الحقيقي، تحليل قوة كلمة المرور وخيارات التحقق متعدد العوامل.",
            pageTitle: "ملفي الشخصي",
            // portfolio: "المحفظة",
            closeMenu: "إغلاق",
            name: "حق تك",
            profileAlt: "صورة الملف الشخصي",
            aboutImageAlt: "صورة حولي",
            mySkills: "مهاراتي",
            myProjects: "مشاريعي",
            viewDetails: "عرض التفاصيل",
            educationDate1: "٢٠٢٠ - ٢٠٢٢",
            educationTitle1: "تطوير واجهات متقدمة",
            educationInstitution1: "أكاديمية البرمجة أونلاين",
            educationDesc1: "أكملت تدريبًا مكثفًا في أطر عمل جافاسكريبت الحديثة والتصميم المتجاوب",
            educationDate2: "٢٠٢٣ - ٢٠٢٤",
            educationTitle2: "تطوير الويب الكامل",
            educationInstitution2: "معهد فيم تك لتكنولوجيا المعلومات",
            educationDesc2: "متخصص في تطوير الويب وإدارة قواعد البيانات. تخرجت بامتياز.",
            pdfVersion: "نسخة PDF",
            wordVersion: "نسخة Word",
            contactTitle: "تواصل معي",
            nameLabel: "الاسم",
            emailLabel: "البريد الإلكتروني",
            messageLabel: "الرسالة",
            // copyright: "© ٢٠٢٥ ملفي الشخصي. جميع الحقوق محفوظة. بواسطة HaqqTech ديف",
            // Project specific translations
            p1Alt: "نظام حجز المواعيد الطبية دوك لاب",
            p1shortDesc: "منصة مواعيد طبية",
            p2Alt: "موقع جامعة إيدفورد",
            p2shortDesc: "بوابة معلومات جامعية",
            p3Alt: "نظام التحقق من تسجيل الدخول",
            p3shortDesc: "نظام أمان للتسجيل"
        },
        fr: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            education: "Éducation",
            projects: "Projets",
            contact: "Contact",
            heroTitle: "Bonjour, je suis <span class='name-highlight'>HaqqTech</span>",
            intro: "Un développeur web passionné créant des sites web et des applications beaux et fonctionnels. Je me spécialise dans le développement front-end avec un accent sur l'expérience utilisateur et également sur la gestion des requêtes des utilisateurs pour améliorer leur expérience.",
            viewMyWork: "Voir mon travail",
            aboutText1: "Bonjour ! Je suis HaqqTech, un ingénieur logiciel passionné spécialisé dans le développement Full-Stack JavaScript.",
            aboutText2: "Avec une expertise en React, Node.js, Express et MySQL, je crée des applications web évolutives qui résolvent des problèmes concrets.",
            aboutText3: "Quand je ne code pas, j’aime contribuer à des projets open source et explorer les nouvelles tendances technologiques.",
            p1_intro: "Une plateforme de santé complète permettant aux patients de prendre, reprogrammer et gérer leurs rendez-vous avec des professionnels de santé. Elle offre la disponibilité des médecins en temps réel, des rappels automatiques et des dossiers patients sécurisés.",
            p1_titie: "Système de réservation médicale DocLab",
            p2_intro: "Un site web interactif pour l'université présentant les programmes académiques, la vie sur le campus et les processus d'admission. Il propose des affichages dynamiques des cours, des visites virtuelles du campus et un design responsive pour les étudiants potentiels.",
            p3_intro: "Un système d'authentification robuste avec validation en temps réel des entrées, analyse de la force des mots de passe et options d'authentification multi-facteurs. Comprend une gestion des erreurs complète et les meilleures pratiques en matière de sécurité.",
            contactHeading: "Cette contact",
            contactText: " Vous avez un projet en tête ? N'hésitez pas à me contacter !",
            greetings: "Salut, je suis",
            heroSubtitle: "Ingénieur Logiciel & Développeur Full-Stack",
            seeMore: "Voir Plus de Projets",
            showLess: "Voir Moins",
            downloadCV: "Télécharger CV",
            downloadPDF: "Version PDF",
            downloadDOC: "Version Word",
            sendMessage: "Envoyer le Message",
            namePlaceholder: "Votre Nom",
            emailPlaceholder: "Votre Email",
            messagePlaceholder: "Votre Message",
            viewDetails: "Voir Détails",
            liveDemo: "Voir Démo",
            sourceCode: "Code Source",
            downloadCV: "Télécharger CV",
            doclabTitle: "Plateforme de réservation et suivi de rendez-vous médicaux",
            edufordTitle: "Site de l'École d'Éducation Supérieure",
            secureauthTitle: "Plateforme de Sécurité pour Connexion",
            // Project Descriptions
            doclabDesc: "Plateforme de soins intensifs complète qui permet aux patients de réserver et modifier les rendez-vous médicaux. Elle comprend un plan de suivi en ligne pour suivre les docteurs et des alertes automatiques.",
            edufordDesc: "Site interactif de l'école, qui affiche les programmes académiques, la vie scolaire et les acceptations. Il contient des cours en ligne et des séances de démonstration par défaut.",
            secureauthDesc: "Plateforme de sécurité complète pour vous connecter qui vérifie le temps réel de votre connexion, analyse la force de votre mot de passe et propose des options de vérification multiple par moyen.",
            pageTitle: "Les",
            portfolio: "Portfolio",
            closeMenu: "Fadhiri",
            name: "HaqqTech",
            profileAlt: "Profili Foto",
            aboutImageAlt: "Foto Makubishi",
            mySkills: "Ujuzi Mimi",
            htmlSkill: "HTML/CSS",
            jsSkill: "JavaScript",
            reactSkill: "React",
            nodeSkill: "Node.js",
            myProjects: "Miradi",
            viewDetails: "Tafadhali Kikamilisha",
            githubAlt: "Github",
            linkedinAlt: "LinkedIn",
            whatsappAlt: "WhatsApp",
            educationInstitution1: "Online Coding Academy",
            educationDate1: "2020 - 2022",
            educationTitle1: "Advanced Frontend Development",
            educationDesc1: "A terminé une formation intensive sur les frameworks JavaScript modernes et le design responsive.",
            educationTitle2: "Full Stack Web Development",
            educationInstitution2: "Femtech Information Technology Institute",
             educationDesc2:"Spécialisé(e) en développement web et gestion de bases de données. Diplômé(e) avec mention.",
            // copyright:""
        },
        sw: {
            home: "Nyumbani",
            about: "Kuhusu",
            skills: "Ujuzi",
            education: "Elimu",
            projects: "Miradi",
            contact: "Mawasiliano",
            heroTitle: "Habari, mimi ni <span class='name-highlight'>HaqqTech</span>",
            intro: "Mtaalamu wa maendeleo ya wavuti mwenye shauku anayebuni tovuti na programu nzuri na zenye ufanisi. Nina utaalam katika maendeleo ya mbele kwa mtazamo wa uzoefu wa mtumiaji na pia katika kushughulikia maombi ya mtumiaji ili kuboresha uzoefu wake.",
            viewMyWork: "Tazama kazi yangu",
            aboutText1: "Habari! Mimi ni HaqqTech, mhandisi wa programu mwenye shauku anayebobea katika maendeleo ya Full-Stack JavaScript.",
            aboutText2: "Kwa utaalamu katika React, Node.js, Express na MySQL, najenga programu za wavuti zinazoweza kupanuka ambazo hutatua matatizo halisi.",
            aboutText3: "Wakati siandiki msimbo, hufurahia kuchangia katika miradi ya chanzo huria na kuchunguza mitindo mipya ya teknolojia.",
            p1_intro: "Jukwaa la huduma za afya lenye kina linalowawezesha wagonjwa kuhifadhi, kupanga upya, na kudhibiti miadi na wataalamu wa matibabu. Lina vipengele vya upatikanaji wa madaktari kwa wakati halisi, vikumbusho vya moja kwa moja, na rekodi salama za wagonjwa.",
            p1_titie: " Mfumo wa kuhifadhi miadi ya matibabu wa DocLab",
            p2_intro: "Jukwaa la sajili wa kushaulewa, kwa kushirika mahali ya kilicho kutoka kwa Elimu, na kilicho kuwa na mahali ya kushirika. Ilitakusanya kilicho kupandeka kwa mahali, na kuwa na mahali ya kushirika, na kilicho",
            p3_intro: "Jukwaa la ujumbe wa kujulisha kuingiza rohoni, kutumia imehifadhi, na kuwa na mtazamo wa mwisho wa kushughulikia mazoezi ya kuendelea. Ilitakusanya kuchangia kwa miradi ya kufanya kazi za kushughulikia na kuwa na ",
            contactHeading: "Tuungane!",
            contactText: "Una mradi akilini? Usisite kuwasiliana!",
            greetings: "Habari, mimi ni",
            heroSubtitle: "Mhandisi wa Programu & Msanidi Kamili",
            seeMore: "Angalia Miradi Zaidi",
            showLess: "Onyesha Kidogo",
            downloadCV: "Pakia CV",
            downloadPDF: "Versi PDF",
            downloadDOC: "Versi Word",
            sendMessage: "Tuma Ujumbe",
            namePlaceholder: "Jina Lako",
            emailPlaceholder: "Barua Pepe Yako",
            messagePlaceholder: "Ujumbe Wako",
            viewDetails: "Angalia Utajiri",
            liveDemo: "Tazama Demonstrasi",
            sourceCode: "Kodwa Mpangilio",
            downloadCV: "Pakia CV",
            doclabTitle: "Umwaka wa Ruka za Hadi na Mwakilishi",
            edufordTitle: "Sajili ya Eduford University",
            secureauthTitle: "Umwaka wa Kujulisha Kuingiza",
            // Project Descriptions
            doclabDesc: "Plataforma de atención médica integral que permite a pacientes reservar y modificar citas médicas. Tiene un seguimiento en línea para seguir a los médicos y alertas automáticas.",
            edufordDesc: "Sitio interactivo de la Universidad de Eduford, que muestra los programas académicos, la vida universitaria y las aceptaciones. Tiene cursos en línea y sesiones de demostración predeterminadas.",
            secureauthDesc: "Plataforma de seguridad completa para conectarse que verifica el tiempo real de su conexión, analiza la fuerza de su contraseña y proporciona opciones de verificación múltiple por medio.",
            educationInstitution1: "Online Coding Academy",
            educationDate1: "2020 - 2022",
            educationTitle1: "Advanced Frontend Development",
            educationDesc1: "Amemaliza mafunzo makini ya mifumo ya kisasa ya JavaScript na usanidi wa kukabiliana (responsive design).",
            educationTitle2: "Full Stack Web Development",
            educationInstitution2: "Femtech Information Technology Institute",
            educationDesc2: "Especializado en desarrollo web y gestión de bases de datos. Graduado con una mención.",
            // copyright:""
        },
        es: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            education: "Educación",
            projects: "Proyectos",
            contact: "Contacto",
            heroTitle: "Hola, soy <span class='name-highlight'>HaqqTech</span>",
            intro: "Soy un desarrollador web aficionado creando sitios web y aplicaciones modernas. Me gusta especializarme en el desarrollo front-end con un foco en la experiencia de usuario y también en la gestión de peticiones de los usuarios para mejorar su experiencia.",
            viewMyWork: "Ver mi trabajo",
            aboutText1: "¡Hola! Soy HaqqTech, un apasionado ingeniero de software especializado en desarrollo Full-Stack con JavaScript.",
            aboutText2: "Con experiencia en React, Node.js, Express y MySQL, desarrollo aplicaciones web escalables que resuelven problemas del mundo real.",
            aboutText3: "Cuando no estoy programando, disfruto contribuyendo a proyectos de código abierto y explorando nuevas tendencias tecnológicas.",
            p1_titie: "Sistema de reservas médicas DocLab",
            p1_intro: "Una plataforma de atención médica integral que permite a los pacientes reservar, reprogramar y gestionar citas con profesionales médicos. Cuenta con disponibilidad de médicos en tiempo real, recordatorios automáticos y registros de pacientes seguros.",
            p2_intro: "Un sitio web interactivo que muestra la educación y la vida universitaria. Tiene cursos en línea y sesiones de demostración predeterminadas.",
            p3_intro: "Una plataforma de seguridad completa para conectarse que verifica el tiempo real de su conexión, analiza la fuerza de su contraseña y proporciona opciones de verificación múltiple por medio.",
            contactHeading: "¡Conectemos!",
            contactText: "¿Tienes un proyecto en mente? ¡No dudes en contactarme!",
            greetings: "Hola, soy",
            heroSubtitle: "Ingeniero de Software & Desarrollador Full-Stack",
            seeMore: "Ver Más Proyectos",
            showLess: "Ver Menos",
            downloadCV: "Descargar CV",
            downloadPDF: "Versión PDF",
            downloadDOC: "Versión Word",
            sendMessage: "Enviar Mensaje",
            namePlaceholder: "Tu Nombre",
            emailPlaceholder: "Tu Correo",
            messagePlaceholder: "Tu Mensaje",
            viewDetails: "Ver Detalles",
            liveDemo: "Ver Demostración",
            sourceCode: "Código Fuente",
            downloadCV: "Descargar CV",
            doclabTitle: "Plataforma de reserva y seguimiento de citas médicas",
            edufordTitle: "Sitio de la Universidad de Eduford",
            secureauthTitle: "Plataforma de seguridad para la conexión",
            // Project Descriptions
            doclabDesc: "Plataforma de salud integral que permite a pacientes reservar y modificar citas médicas. Tiene un seguimiento en línea para seguir a los médicos y alertas automáticas.",
            edufordDesc: "Sitio interactivo de la Universidad de Eduford, que muestra los programas académicos, la vida universitaria y las aceptaciones. Tiene cursos en línea y sesiones de demostración predeterminadas.",
            secureauthDesc: "Plataforma de seguridad completa para conectarse que verifica el tiempo real de su conexión, analiza la fuerza de su contraseña y proporciona opciones de verificación múltiple por medio.",
            educationInstitution1: "Online Coding Academy",
            educationDate1: "2020 - 2022",
            educationTitle1: "Advanced Frontend Development",
            educationDesc1: "Completó una formación intensiva en frameworks modernos de JavaScript y diseño responsivo.",
            educationTitle2: "Full Stack Web Development",
            educationInstitution2: "Femtech Information Technology Institute",
            educationDesc2: "Graduado con una mención en desarrollo web y gestión de bases de datos.",
            // copyright:""

        }
    };

    function setLanguage(lang) {
        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.body.classList.add('rtl');
            document.body.dir = 'rtl';
            document.body.style.fontFamily = "'ArabicFont', 'Tahoma', sans-serif";

            // Fix for Font Awesome icons
            document.querySelectorAll('.fa').forEach(icon => {
                icon.style.transform = 'scaleX(-1)';
            });
        } else {
            document.body.classList.remove('rtl');
            document.body.dir = 'ltr';
            document.body.style.fontFamily = '';

            // Reset icon transforms
            document.querySelectorAll('.fa').forEach(icon => {
                icon.style.transform = '';
            });
        }

        localStorage.setItem('language', lang);
    }

    // Set initial language
    const preferredLanguage = localStorage.getItem('language') || 'en';
    languageSelect.value = preferredLanguage;
    setLanguage(preferredLanguage);

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

}

// Responsive menu - Fixed but compatible version
const menu = document.querySelector(".menu");
const responsiveness = document.querySelector(".responsiveness");

if (menu && responsiveness) {
    menu.addEventListener("click", () => {
        // Toggle display using class instead of direct style manipulation
        responsiveness.classList.toggle("show");

        // Optional: Toggle body overflow
        document.body.style.overflow = responsiveness.classList.contains("show") ? "hidden" : "";
    });

    // Close menu when clicking on links (optional)
    responsiveness.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            responsiveness.classList.remove("show");
            document.body.style.overflow = "";
        });
    });


}

