const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const revealElements = document.querySelectorAll(".reveal");
const languageButtons = document.querySelectorAll("[data-lang]");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const LANG_STORAGE_KEY = "maison-lumara-lang";

const translations = {
  es: {
    "brand.tagline": "Rituals of Wellness",
    "brand.emotional": "Where Light Becomes Calm",
    "nav.home": "Inicio",
    "nav.treatments": "Tratamientos",
    "nav.rituals": "Rituales",
    "nav.about": "Sobre nosotros",
    "nav.contact": "Contacto",
    "button.reserve": "Reserva tu momento",
    "button.learnMore": "Conoce más",
    "button.discoverRitual": "Descubrir ritual",
    "button.viewAllRituals": "Ver todos los rituales",
    "button.contact": "Contactar",
    "button.viewRituals": "Ver rituales",
    "button.reserveThisRitual": "Reservar este ritual",
    "hero.title": "Rituales que transforman",
    "hero.text": "Masajes y tratamientos diseñados para restaurar tu cuerpo y belleza natural.",
    "home.welcome.eyebrow": "Bienvenido a Maison Lumara",
    "home.welcome.title": "Un espacio de bienestar donde cada detalle está pensado para ti",
    "home.welcome.text": "Inspirados en antiguas tradiciones de bienestar y belleza, nuestros rituales combinan técnicas manuales, aceites aromáticos y elementos naturales para ofrecerte una experiencia única de relajación y equilibrio.",
    "home.signature.eyebrow": "Nuestros",
    "home.signature.title": "Rituales Signature",
    "values.holistic.title": "Bienestar holístico",
    "values.holistic.text": "Cuerpo, mente y espíritu en armonía.",
    "values.natural.title": "Ingredientes naturales",
    "values.natural.text": "Utilizamos productos de la más alta calidad y origen natural.",
    "values.personalized.title": "Rituales personalizados",
    "values.personalized.text": "Experiencias adaptadas a tus necesidades y momento.",
    "values.balance.title": "Equilibrio y armonía",
    "values.balance.text": "Un espacio para desconectar y reconectar contigo.",
    "cta.eyebrow": "Maison Lumara",
    "cta.title": "Tu momento de calma empieza aquí",
    "cta.text": "Reserva tu ritual y déjate guiar por la luz hacia el bienestar.",
    "about.eyebrow": "Sobre Maison Lumara",
    "about.title": "El bienestar no es solo una pausa, sino una transformación.",
    "about.p1": "Maison Lumara nace de una idea esencial: el bienestar no es solo una pausa, sino una transformación.",
    "about.p2": "El nombre Lumara surge de la unión de dos conceptos profundamente ligados a esta visión. Por un lado, lumen, del latín, que significa luz; por otro, ara, que hace referencia a un altar, un espacio de conexión y recogimiento. Juntos, evocan un lugar donde la luz se convierte en ritual, y donde el cuidado del cuerpo trasciende lo físico para convertirse en una experiencia consciente.",
    "about.p3": "En Maison Lumara entendemos el bienestar como un proceso natural de equilibrio. Cada ritual está diseñado para acompañar al cuerpo y a la mente hacia un estado de calma profunda, respetando su ritmo y escuchando sus necesidades. No se trata únicamente de relajar, sino de transformar: liberar tensiones, restaurar la energía y crear un espacio donde todo vuelve a su centro.",
    "about.p4": "Inspirados en tradiciones ancestrales y reinterpretados con una sensibilidad contemporánea, nuestros rituales combinan técnicas manuales, aceites aromáticos y elementos naturales para ofrecer experiencias que envuelven los sentidos y generan un bienestar duradero.",
    "about.p5": "Maison Lumara es, en esencia, un lugar íntimo donde el tiempo se detiene. Un espacio donde la luz se convierte en calma, y donde cada detalle está pensado para reconectar contigo.",
    "about.meaning.title": "El significado de Lumara",
    "about.meaning.lumen.title": "Lumen",
    "about.meaning.lumen.text": "Significa luz. Representa claridad, energía y presencia consciente.",
    "about.meaning.ara.eyebrow": "Origen",
    "about.meaning.ara.title": "Ara",
    "about.meaning.ara.text": "Significa altar. Representa un espacio sagrado de conexión y recogimiento.",
    "ritual.detail.includes": "Qué incluye",
    "ritual.detail.benefits": "Beneficios",
    "ritual.detail.duration": "Duración",
    "ritual.detail.durationValue": "60 minutos",
    "ritual.detail.price": "Precio",
    "ritual.detail.priceValue": "70 €",
    "price.ritual": "70 €",
    "ritual.detail.reserveTitle": "Reservar este ritual",
    "ritual.detail.reserveText": "Agenda tu experiencia Maison Lumara por email.",
    "ritual.detail.reserveTextLumara": "Escríbenos y prepararemos tu experiencia Maison Lumara.",
    "ritual.contact.title": "¿Tienes dudas?",
    "ritual.contact.text": "Estamos aquí para ayudarte",
    "footer.navigation": "Navegación",
    "footer.rituals": "Rituales",
    "footer.schedule": "Lunes a Domingo 10:00 – 20:00",
    "footer.rights": "© 2026 Maison Lumara. Todos los derechos reservados.",
    "footer.privacy": "Política de privacidad",
    "footer.legal": "Aviso legal",

    "rituals.ayurveda.title": "Ritual Ayurveda",
    "rituals.ayurveda.subtitle": "Armonía · Energía · Tradición",
    "rituals.ayurveda.cardText": "Inspirado en la sabiduría milenaria Ayurveda, este ritual utiliza aceites aromáticos y movimientos envolventes para equilibrar cuerpo y mente.",
    "rituals.ayurveda.detailTitle": "Sabiduría milenaria y calma profunda",
    "rituals.ayurveda.detailText1": "Inspirado en la sabiduría milenaria Ayurveda, este ritual utiliza aceites aromáticos y movimientos envolventes para equilibrar el cuerpo y la mente.",
    "rituals.ayurveda.detailText2": "Las técnicas aplicadas ayudan a liberar tensiones, reducir el estrés y favorecer la circulación energética, generando una sensación de bienestar integral. Incluye un delicado ritual inicial de pies con aceites esenciales.",
    "rituals.ayurveda.includes.1": "Ritual inicial de pies con aceites esenciales",
    "rituals.ayurveda.includes.2": "Masaje envolvente de inspiración Ayurveda",
    "rituals.ayurveda.includes.3": "Trabajo suave sobre tensión y circulación energética",
    "rituals.ayurveda.includes.4": "Cierre aromático para prolongar la sensación de calma",
    "rituals.ayurveda.benefits.1.title": "Armoniza",
    "rituals.ayurveda.benefits.1.text": "Equilibra cuerpo y mente.",
    "rituals.ayurveda.benefits.2.title": "Relaja",
    "rituals.ayurveda.benefits.2.text": "Reduce estrés y tensión.",
    "rituals.ayurveda.benefits.3.title": "Activa",
    "rituals.ayurveda.benefits.3.text": "Favorece la circulación.",
    "rituals.ayurveda.benefits.4.title": "Centra",
    "rituals.ayurveda.benefits.4.text": "Aporta sensación de bienestar integral.",

    "rituals.oceanic.title": "Ritual Oceánico",
    "rituals.oceanic.subtitle": "Fluidez · Serenidad · Relajación profunda",
    "rituals.oceanic.cardText": "Conchas marinas calientes que se deslizan sobre el cuerpo, liberando tensiones y transportándote a un estado de serenidad profunda.",
    "rituals.oceanic.detailTitle": "La calma del océano en un gesto envolvente",
    "rituals.oceanic.detailText1": "Un tratamiento sensorial inspirado en la calma del océano. Las conchas marinas calientes se deslizan suavemente sobre el cuerpo, recreando el ritmo natural de las olas mientras liberan tensiones y relajan la musculatura.",
    "rituals.oceanic.detailText2": "Acompañado de aceites de inspiración marina, este ritual envuelve los sentidos y transporta a un estado de serenidad profunda.",
    "rituals.oceanic.includes.1": "Bienvenida con aroma suave de inspiración marina",
    "rituals.oceanic.includes.2": "Trabajo corporal con conchas calientes",
    "rituals.oceanic.includes.3": "Deslizamientos largos para soltar tensión acumulada",
    "rituals.oceanic.includes.4": "Cierre calmante para prolongar la sensación de fluidez",
    "rituals.oceanic.benefits.1.title": "Suaviza",
    "rituals.oceanic.benefits.1.text": "Relaja la musculatura en profundidad.",
    "rituals.oceanic.benefits.2.title": "Serena",
    "rituals.oceanic.benefits.2.text": "Invita a un estado de quietud interior.",
    "rituals.oceanic.benefits.3.title": "Envuelve",
    "rituals.oceanic.benefits.3.text": "Estimula los sentidos con una calidez delicada.",
    "rituals.oceanic.benefits.4.title": "Libera",
    "rituals.oceanic.benefits.4.text": "Disuelve tensión física y mental.",

    "rituals.volcanic.title": "Ritual Volcánico",
    "rituals.volcanic.subtitle": "Calor · Liberación · Profundidad",
    "rituals.volcanic.cardText": "Piedras volcánicas calientes que relajan la musculatura, mejoran la circulación y liberan tensiones acumuladas.",
    "rituals.volcanic.detailTitle": "Calor envolvente y descanso muscular",
    "rituals.volcanic.detailText1": "Un ritual profundamente relajante que combina el poder terapéutico de las piedras volcánicas calientes con aceites aromáticos de inspiración oriental.",
    "rituals.volcanic.detailText2": "Las piedras, aplicadas estratégicamente, transmiten un calor envolvente que penetra en los tejidos, ayudando a relajar la musculatura, mejorar la circulación y liberar tensiones acumuladas. Una experiencia reconfortante que restaura el equilibrio físico y mental.",
    "rituals.volcanic.includes.1": "Preparación aromática previa al masaje",
    "rituals.volcanic.includes.2": "Aplicación de piedras volcánicas calientes",
    "rituals.volcanic.includes.3": "Trabajo profundo en zonas de mayor tensión",
    "rituals.volcanic.includes.4": "Cierre reconfortante para prolongar el descanso corporal",
    "rituals.volcanic.benefits.1.title": "Calma",
    "rituals.volcanic.benefits.1.text": "Relaja la musculatura en profundidad.",
    "rituals.volcanic.benefits.2.title": "Mejora",
    "rituals.volcanic.benefits.2.text": "Favorece la circulación y la soltura corporal.",
    "rituals.volcanic.benefits.3.title": "Alivia",
    "rituals.volcanic.benefits.3.text": "Disminuye la tensión acumulada.",
    "rituals.volcanic.benefits.4.title": "Reconforta",
    "rituals.volcanic.benefits.4.text": "Devuelve sensación de abrigo y equilibrio.",

    "rituals.aromatic.title": "Ritual Aromático",
    "rituals.aromatic.subtitle": "Sensorial · Exótico · Calma",
    "rituals.aromatic.cardText": "Pindas calientes de hierbas y especias que, junto con aceites aromáticos, relajan el cuerpo y los sentidos en profundidad.",
    "rituals.aromatic.detailTitle": "Fragancias envolventes y descanso profundo",
    "rituals.aromatic.detailText1": "Un ritual inspirado en las tradiciones orientales que combina pindas calientes de hierbas y especias con aceites aromáticos cuidadosamente seleccionados.",
    "rituals.aromatic.detailText2": "El calor de las pindas libera fragancias envolventes que actúan sobre los sentidos, mientras los movimientos suaves y continuos relajan el cuerpo y disipan la tensión acumulada. Una experiencia profundamente sensorial que invita a desconectar y sumergirse en un estado de calma absoluta.",
    "rituals.aromatic.includes.1": "Bienvenida aromática según el estado del momento",
    "rituals.aromatic.includes.2": "Masaje con pindas calientes de hierbas y especias",
    "rituals.aromatic.includes.3": "Aplicación de aceites aromáticos seleccionados",
    "rituals.aromatic.includes.4": "Cierre sensorial para prolongar la calma",
    "rituals.aromatic.benefits.1.title": "Calma",
    "rituals.aromatic.benefits.1.text": "Suaviza cuerpo y respiración.",
    "rituals.aromatic.benefits.2.title": "Envuelve",
    "rituals.aromatic.benefits.2.text": "Activa los sentidos con calor y aroma.",
    "rituals.aromatic.benefits.3.title": "Libera",
    "rituals.aromatic.benefits.3.text": "Disminuye tensión acumulada.",
    "rituals.aromatic.benefits.4.title": "Desconecta",
    "rituals.aromatic.benefits.4.text": "Invita a una pausa profundamente sensorial.",

    "rituals.lumara.title": "Ritual Lumara",
    "rituals.lumara.eyebrow": "Signature",
    "rituals.lumara.subtitle": "Equilibrio · Energía · Conexión",
    "rituals.lumara.cardText": "Un ritual completo que combina técnicas exclusivas para reconectar cuerpo, mente y espíritu.",
    "rituals.lumara.detailText1": "Un ritual completo que representa la esencia de Maison Lumara. Combina técnicas manuales, piedras calientes y elementos aromáticos para armonizar cuerpo, mente y energía en una experiencia profundamente restauradora.",
    "rituals.lumara.detailText2": "Un viaje sensorial diseñado para reconectar con el equilibrio natural y alcanzar un estado de calma profunda.",
    "rituals.lumara.includes.1": "Bienvenida y diagnóstico personalizado",
    "rituals.lumara.includes.2": "Masaje relajante con aceites aromáticos",
    "rituals.lumara.includes.3": "Piedras calientes para liberar tensiones profundas",
    "rituals.lumara.includes.4": "Técnicas manuales exclusivas Maison Lumara",
    "rituals.lumara.includes.5": "Ritual de armonización final",
    "rituals.lumara.benefits.1.title": "Equilibrio",
    "rituals.lumara.benefits.1.text": "Armoniza cuerpo, mente y energía.",
    "rituals.lumara.benefits.2.title": "Energía",
    "rituals.lumara.benefits.2.text": "Restaura vitalidad y bienestar.",
    "rituals.lumara.benefits.3.title": "Conexión",
    "rituals.lumara.benefits.3.text": "Reconecta contigo misma en profundidad.",
    "rituals.lumara.benefits.4.title": "Armonía",
    "rituals.lumara.benefits.4.text": "Profunda sensación de calma y paz."
  },
  en: {
    "brand.tagline": "Rituals of Wellness",
    "brand.emotional": "Where Light Becomes Calm",
    "nav.home": "Home",
    "nav.treatments": "Treatments",
    "nav.rituals": "Rituals",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "button.reserve": "Book your moment",
    "button.learnMore": "Learn more",
    "button.discoverRitual": "Discover ritual",
    "button.viewAllRituals": "View all rituals",
    "button.contact": "Contact",
    "button.viewRituals": "View rituals",
    "button.reserveThisRitual": "Book this ritual",
    "hero.title": "Rituals that transform",
    "hero.text": "Massages and treatments designed to restore your body and natural beauty.",
    "home.welcome.eyebrow": "Welcome to Maison Lumara",
    "home.welcome.title": "A wellness space where every detail is designed for you",
    "home.welcome.text": "Inspired by ancient wellness and beauty traditions, our rituals combine manual techniques, aromatic oils, and natural elements to offer you a unique experience of relaxation and balance.",
    "home.signature.eyebrow": "Our",
    "home.signature.title": "Signature Rituals",
    "values.holistic.title": "Holistic wellbeing",
    "values.holistic.text": "Body, mind, and spirit in harmony.",
    "values.natural.title": "Natural ingredients",
    "values.natural.text": "We use products of the highest quality and natural origin.",
    "values.personalized.title": "Personalized rituals",
    "values.personalized.text": "Experiences tailored to your needs and moment.",
    "values.balance.title": "Balance and harmony",
    "values.balance.text": "A space to disconnect and reconnect with yourself.",
    "cta.eyebrow": "Maison Lumara",
    "cta.title": "Your moment of calm begins here",
    "cta.text": "Book your ritual and let the light guide you toward wellbeing.",
    "about.eyebrow": "About Maison Lumara",
    "about.title": "Wellbeing is not just a pause, but a transformation.",
    "about.p1": "Maison Lumara is born from an essential idea: wellbeing is not just a pause, but a transformation.",
    "about.p2": "The name Lumara arises from the union of two concepts deeply connected to this vision. On one side, lumen, from Latin, meaning light; on the other, ara, referring to an altar, a space of connection and retreat. Together, they evoke a place where light becomes ritual, and where caring for the body transcends the physical to become a conscious experience.",
    "about.p3": "At Maison Lumara, we understand wellbeing as a natural process of balance. Each ritual is designed to guide body and mind toward a state of deep calm, respecting their rhythm and listening to their needs. It is not only about relaxation, but about transformation: releasing tension, restoring energy, and creating a space where everything returns to its center.",
    "about.p4": "Inspired by ancestral traditions and reinterpreted with contemporary sensitivity, our rituals combine manual techniques, aromatic oils, and natural elements to offer experiences that envelop the senses and create lasting wellbeing.",
    "about.p5": "Maison Lumara is, at its essence, an intimate place where time stands still. A space where light becomes calm, and where every detail is designed to reconnect you with yourself.",
    "about.meaning.title": "The meaning of Lumara",
    "about.meaning.lumen.title": "Lumen",
    "about.meaning.lumen.text": "It means light. It represents clarity, energy, and conscious presence.",
    "about.meaning.ara.eyebrow": "Origin",
    "about.meaning.ara.title": "Ara",
    "about.meaning.ara.text": "It means altar. It represents a sacred space of connection and retreat.",
    "ritual.detail.includes": "What is included",
    "ritual.detail.benefits": "Benefits",
    "ritual.detail.duration": "Duration",
    "ritual.detail.durationValue": "60 minutes",
    "ritual.detail.price": "Price",
    "ritual.detail.priceValue": "£60",
    "price.ritual": "£60",
    "ritual.detail.reserveTitle": "Book this ritual",
    "ritual.detail.reserveText": "Schedule your Maison Lumara experience by email.",
    "ritual.detail.reserveTextLumara": "Write to us and we will prepare your Maison Lumara experience.",
    "ritual.contact.title": "Do you have questions?",
    "ritual.contact.text": "We are here to help you",
    "footer.navigation": "Navigation",
    "footer.rituals": "Rituals",
    "footer.schedule": "Monday to Sunday 10:00 – 20:00",
    "footer.rights": "© 2026 Maison Lumara. All rights reserved.",
    "footer.privacy": "Privacy policy",
    "footer.legal": "Legal notice",

    "rituals.ayurveda.title": "Ayurveda Ritual",
    "rituals.ayurveda.subtitle": "Harmony · Energy · Tradition",
    "rituals.ayurveda.cardText": "Inspired by ancient Ayurvedic wisdom, this ritual uses aromatic oils and enveloping movements to balance body and mind.",
    "rituals.ayurveda.detailTitle": "Ancient wisdom and deep calm",
    "rituals.ayurveda.detailText1": "Inspired by ancient Ayurvedic wisdom, this ritual uses aromatic oils and enveloping movements to balance body and mind.",
    "rituals.ayurveda.detailText2": "The techniques help release tension, reduce stress, and support energetic circulation, creating a sense of holistic wellbeing. It includes a delicate opening foot ritual with essential oils.",
    "rituals.ayurveda.includes.1": "Opening foot ritual with essential oils",
    "rituals.ayurveda.includes.2": "Enveloping Ayurveda-inspired massage",
    "rituals.ayurveda.includes.3": "Gentle work on tension and energetic circulation",
    "rituals.ayurveda.includes.4": "Aromatic closing to prolong the feeling of calm",
    "rituals.ayurveda.benefits.1.title": "Harmonizes",
    "rituals.ayurveda.benefits.1.text": "Balances body and mind.",
    "rituals.ayurveda.benefits.2.title": "Relaxes",
    "rituals.ayurveda.benefits.2.text": "Reduces stress and tension.",
    "rituals.ayurveda.benefits.3.title": "Activates",
    "rituals.ayurveda.benefits.3.text": "Encourages circulation.",
    "rituals.ayurveda.benefits.4.title": "Centers",
    "rituals.ayurveda.benefits.4.text": "Brings a sense of holistic wellbeing.",

    "rituals.oceanic.title": "Oceanic Ritual",
    "rituals.oceanic.subtitle": "Flow · Serenity · Deep relaxation",
    "rituals.oceanic.cardText": "Warm seashells glide over the body, releasing tension and transporting you into a state of deep serenity.",
    "rituals.oceanic.detailTitle": "The calm of the ocean in an enveloping gesture",
    "rituals.oceanic.detailText1": "A sensory treatment inspired by the calm of the ocean. Warm seashells glide gently over the body, recreating the natural rhythm of the waves while releasing tension and relaxing the muscles.",
    "rituals.oceanic.detailText2": "Paired with marine-inspired oils, this ritual envelops the senses and carries you into a state of deep serenity.",
    "rituals.oceanic.includes.1": "Welcome with a soft marine-inspired aroma",
    "rituals.oceanic.includes.2": "Bodywork with warm seashells",
    "rituals.oceanic.includes.3": "Long strokes to release accumulated tension",
    "rituals.oceanic.includes.4": "Calming closing to extend the feeling of flow",
    "rituals.oceanic.benefits.1.title": "Softens",
    "rituals.oceanic.benefits.1.text": "Relaxes the muscles deeply.",
    "rituals.oceanic.benefits.2.title": "Soothes",
    "rituals.oceanic.benefits.2.text": "Invites an inner state of stillness.",
    "rituals.oceanic.benefits.3.title": "Envelops",
    "rituals.oceanic.benefits.3.text": "Stimulates the senses with delicate warmth.",
    "rituals.oceanic.benefits.4.title": "Releases",
    "rituals.oceanic.benefits.4.text": "Dissolves physical and mental tension.",

    "rituals.volcanic.title": "Volcanic Ritual",
    "rituals.volcanic.subtitle": "Heat · Release · Depth",
    "rituals.volcanic.cardText": "Warm volcanic stones relax the muscles, improve circulation, and release accumulated tension.",
    "rituals.volcanic.detailTitle": "Enveloping heat and muscular rest",
    "rituals.volcanic.detailText1": "A deeply relaxing ritual that combines the therapeutic power of warm volcanic stones with oriental-inspired aromatic oils.",
    "rituals.volcanic.detailText2": "Applied strategically, the stones transmit enveloping heat that penetrates the tissues, helping to relax the muscles, improve circulation, and release accumulated tension. A comforting experience that restores physical and mental balance.",
    "rituals.volcanic.includes.1": "Aromatic preparation before the massage",
    "rituals.volcanic.includes.2": "Application of warm volcanic stones",
    "rituals.volcanic.includes.3": "Deep work on areas of greater tension",
    "rituals.volcanic.includes.4": "Comforting closing to extend bodily rest",
    "rituals.volcanic.benefits.1.title": "Calms",
    "rituals.volcanic.benefits.1.text": "Deeply relaxes the muscles.",
    "rituals.volcanic.benefits.2.title": "Improves",
    "rituals.volcanic.benefits.2.text": "Supports circulation and body ease.",
    "rituals.volcanic.benefits.3.title": "Relieves",
    "rituals.volcanic.benefits.3.text": "Reduces accumulated tension.",
    "rituals.volcanic.benefits.4.title": "Comforts",
    "rituals.volcanic.benefits.4.text": "Restores a feeling of warmth and balance.",

    "rituals.aromatic.title": "Aromatic Ritual",
    "rituals.aromatic.subtitle": "Sensory · Exotic · Calm",
    "rituals.aromatic.cardText": "Warm herbal compresses and aromatic oils relax the body and senses in depth.",
    "rituals.aromatic.detailTitle": "Enveloping fragrances and deep rest",
    "rituals.aromatic.detailText1": "A ritual inspired by Eastern traditions that combines warm herbal and spice compresses with carefully selected aromatic oils.",
    "rituals.aromatic.detailText2": "The warmth of the compresses releases enveloping fragrances that act on the senses, while gentle continuous movements relax the body and dissolve accumulated tension. A deeply sensory experience that invites you to disconnect and sink into a state of absolute calm.",
    "rituals.aromatic.includes.1": "Aromatic welcome aligned with your present state",
    "rituals.aromatic.includes.2": "Massage with warm herbal and spice compresses",
    "rituals.aromatic.includes.3": "Application of selected aromatic oils",
    "rituals.aromatic.includes.4": "Sensory closing to prolong calm",
    "rituals.aromatic.benefits.1.title": "Calms",
    "rituals.aromatic.benefits.1.text": "Softens body and breath.",
    "rituals.aromatic.benefits.2.title": "Envelops",
    "rituals.aromatic.benefits.2.text": "Awakens the senses through warmth and aroma.",
    "rituals.aromatic.benefits.3.title": "Releases",
    "rituals.aromatic.benefits.3.text": "Reduces accumulated tension.",
    "rituals.aromatic.benefits.4.title": "Disconnects",
    "rituals.aromatic.benefits.4.text": "Invites a deeply sensory pause.",

    "rituals.lumara.title": "Lumara Ritual",
    "rituals.lumara.eyebrow": "Signature",
    "rituals.lumara.subtitle": "Balance · Energy · Connection",
    "rituals.lumara.cardText": "A complete ritual that combines exclusive techniques to reconnect body, mind, and spirit.",
    "rituals.lumara.detailText1": "A complete ritual that embodies the essence of Maison Lumara. It combines manual techniques, warm stones, and aromatic elements to harmonize body, mind, and energy in a deeply restorative experience.",
    "rituals.lumara.detailText2": "A sensory journey designed to reconnect with natural balance and reach a state of deep calm.",
    "rituals.lumara.includes.1": "Personalized welcome and diagnosis",
    "rituals.lumara.includes.2": "Relaxing massage with aromatic oils",
    "rituals.lumara.includes.3": "Warm stones to release deep tension",
    "rituals.lumara.includes.4": "Exclusive Maison Lumara manual techniques",
    "rituals.lumara.includes.5": "Final harmonizing ritual",
    "rituals.lumara.benefits.1.title": "Balance",
    "rituals.lumara.benefits.1.text": "Harmonizes body, mind, and energy.",
    "rituals.lumara.benefits.2.title": "Energy",
    "rituals.lumara.benefits.2.text": "Restores vitality and wellbeing.",
    "rituals.lumara.benefits.3.title": "Connection",
    "rituals.lumara.benefits.3.text": "Reconnects you with yourself in depth.",
    "rituals.lumara.benefits.4.title": "Harmony",
    "rituals.lumara.benefits.4.text": "A profound sense of calm and peace."
  }
};

const selectorTranslations = [
  ["#sobre-nosotros + .section .about-actions .button", "button.reserve"],
  ["#ritual-ayurveda .ritual-intro .eyebrow", "rituals.ayurveda.title"],
  ["#ritual-ayurveda .ritual-intro h2", "rituals.ayurveda.subtitle"],
  ["#ritual-ayurveda .ritual-intro .stack-md p:nth-of-type(1)", "rituals.ayurveda.detailText1"],
  ["#ritual-ayurveda .ritual-intro .stack-md p:nth-of-type(2)", "rituals.ayurveda.detailText2"],
  ["#ritual-ayurveda .ritual-panel .eyebrow", "ritual.detail.includes"],
  ["#ritual-ayurveda .ritual-bullets li:nth-child(1)", "rituals.ayurveda.includes.1"],
  ["#ritual-ayurveda .ritual-bullets li:nth-child(2)", "rituals.ayurveda.includes.2"],
  ["#ritual-ayurveda .ritual-bullets li:nth-child(3)", "rituals.ayurveda.includes.3"],
  ["#ritual-ayurveda .ritual-bullets li:nth-child(4)", "rituals.ayurveda.includes.4"],
  ["#ritual-ayurveda .stack-lg > section.reveal:nth-of-type(2) .eyebrow", "ritual.detail.benefits"],
  ["#ritual-ayurveda .benefit-card:nth-child(1) h3", "rituals.ayurveda.benefits.1.title"],
  ["#ritual-ayurveda .benefit-card:nth-child(1) p", "rituals.ayurveda.benefits.1.text"],
  ["#ritual-ayurveda .benefit-card:nth-child(2) h3", "rituals.ayurveda.benefits.2.title"],
  ["#ritual-ayurveda .benefit-card:nth-child(2) p", "rituals.ayurveda.benefits.2.text"],
  ["#ritual-ayurveda .benefit-card:nth-child(3) h3", "rituals.ayurveda.benefits.3.title"],
  ["#ritual-ayurveda .benefit-card:nth-child(3) p", "rituals.ayurveda.benefits.3.text"],
  ["#ritual-ayurveda .benefit-card:nth-child(4) h3", "rituals.ayurveda.benefits.4.title"],
  ["#ritual-ayurveda .benefit-card:nth-child(4) p", "rituals.ayurveda.benefits.4.text"],
  ["#ritual-ayurveda .ritual-stat article:nth-child(1) strong", "ritual.detail.duration"],
  ["#ritual-ayurveda .ritual-stat article:nth-child(1) span", "ritual.detail.durationValue"],
  ["#ritual-ayurveda .ritual-stat article:nth-child(2) strong", "ritual.detail.price"],
  ["#ritual-ayurveda .ritual-stat article:nth-child(2) span", "ritual.detail.priceValue"],
  ["#ritual-ayurveda .ritual-aside-card:last-child h3", "ritual.detail.reserveTitle"],
  ["#ritual-ayurveda .ritual-aside-card:last-child p", "ritual.detail.reserveText"],
  ["#ritual-ayurveda .ritual-aside-card:last-child .button", "button.reserveThisRitual"],

  ["#ritual-oceanico .ritual-intro .eyebrow", "rituals.oceanic.title"],
  ["#ritual-oceanico .ritual-intro h2", "rituals.oceanic.subtitle"],
  ["#ritual-oceanico .ritual-intro .stack-md p:nth-of-type(1)", "rituals.oceanic.detailText1"],
  ["#ritual-oceanico .ritual-intro .stack-md p:nth-of-type(2)", "rituals.oceanic.detailText2"],
  ["#ritual-oceanico .ritual-panel .eyebrow", "ritual.detail.includes"],
  ["#ritual-oceanico .ritual-bullets li:nth-child(1)", "rituals.oceanic.includes.1"],
  ["#ritual-oceanico .ritual-bullets li:nth-child(2)", "rituals.oceanic.includes.2"],
  ["#ritual-oceanico .ritual-bullets li:nth-child(3)", "rituals.oceanic.includes.3"],
  ["#ritual-oceanico .ritual-bullets li:nth-child(4)", "rituals.oceanic.includes.4"],
  ["#ritual-oceanico .stack-lg > section.reveal:nth-of-type(2) .eyebrow", "ritual.detail.benefits"],
  ["#ritual-oceanico .benefit-card:nth-child(1) h3", "rituals.oceanic.benefits.1.title"],
  ["#ritual-oceanico .benefit-card:nth-child(1) p", "rituals.oceanic.benefits.1.text"],
  ["#ritual-oceanico .benefit-card:nth-child(2) h3", "rituals.oceanic.benefits.2.title"],
  ["#ritual-oceanico .benefit-card:nth-child(2) p", "rituals.oceanic.benefits.2.text"],
  ["#ritual-oceanico .benefit-card:nth-child(3) h3", "rituals.oceanic.benefits.3.title"],
  ["#ritual-oceanico .benefit-card:nth-child(3) p", "rituals.oceanic.benefits.3.text"],
  ["#ritual-oceanico .benefit-card:nth-child(4) h3", "rituals.oceanic.benefits.4.title"],
  ["#ritual-oceanico .benefit-card:nth-child(4) p", "rituals.oceanic.benefits.4.text"],
  ["#ritual-oceanico .ritual-stat article:nth-child(1) strong", "ritual.detail.duration"],
  ["#ritual-oceanico .ritual-stat article:nth-child(1) span", "ritual.detail.durationValue"],
  ["#ritual-oceanico .ritual-stat article:nth-child(2) strong", "ritual.detail.price"],
  ["#ritual-oceanico .ritual-stat article:nth-child(2) span", "ritual.detail.priceValue"],
  ["#ritual-oceanico .ritual-aside-card:last-child h3", "ritual.detail.reserveTitle"],
  ["#ritual-oceanico .ritual-aside-card:last-child p", "ritual.detail.reserveText"],
  ["#ritual-oceanico .ritual-aside-card:last-child .button", "button.reserveThisRitual"],

  ["#ritual-volcanico .ritual-intro .eyebrow", "rituals.volcanic.title"],
  ["#ritual-volcanico .ritual-intro h2", "rituals.volcanic.subtitle"],
  ["#ritual-volcanico .ritual-intro .stack-md p:nth-of-type(1)", "rituals.volcanic.detailText1"],
  ["#ritual-volcanico .ritual-intro .stack-md p:nth-of-type(2)", "rituals.volcanic.detailText2"],
  ["#ritual-volcanico .ritual-panel .eyebrow", "ritual.detail.includes"],
  ["#ritual-volcanico .ritual-bullets li:nth-child(1)", "rituals.volcanic.includes.1"],
  ["#ritual-volcanico .ritual-bullets li:nth-child(2)", "rituals.volcanic.includes.2"],
  ["#ritual-volcanico .ritual-bullets li:nth-child(3)", "rituals.volcanic.includes.3"],
  ["#ritual-volcanico .ritual-bullets li:nth-child(4)", "rituals.volcanic.includes.4"],
  ["#ritual-volcanico .stack-lg > section.reveal:nth-of-type(2) .eyebrow", "ritual.detail.benefits"],
  ["#ritual-volcanico .benefit-card:nth-child(1) h3", "rituals.volcanic.benefits.1.title"],
  ["#ritual-volcanico .benefit-card:nth-child(1) p", "rituals.volcanic.benefits.1.text"],
  ["#ritual-volcanico .benefit-card:nth-child(2) h3", "rituals.volcanic.benefits.2.title"],
  ["#ritual-volcanico .benefit-card:nth-child(2) p", "rituals.volcanic.benefits.2.text"],
  ["#ritual-volcanico .benefit-card:nth-child(3) h3", "rituals.volcanic.benefits.3.title"],
  ["#ritual-volcanico .benefit-card:nth-child(3) p", "rituals.volcanic.benefits.3.text"],
  ["#ritual-volcanico .benefit-card:nth-child(4) h3", "rituals.volcanic.benefits.4.title"],
  ["#ritual-volcanico .benefit-card:nth-child(4) p", "rituals.volcanic.benefits.4.text"],
  ["#ritual-volcanico .ritual-stat article:nth-child(1) strong", "ritual.detail.duration"],
  ["#ritual-volcanico .ritual-stat article:nth-child(1) span", "ritual.detail.durationValue"],
  ["#ritual-volcanico .ritual-stat article:nth-child(2) strong", "ritual.detail.price"],
  ["#ritual-volcanico .ritual-stat article:nth-child(2) span", "ritual.detail.priceValue"],
  ["#ritual-volcanico .ritual-aside-card:last-child h3", "ritual.detail.reserveTitle"],
  ["#ritual-volcanico .ritual-aside-card:last-child p", "ritual.detail.reserveText"],
  ["#ritual-volcanico .ritual-aside-card:last-child .button", "button.reserveThisRitual"],

  ["#ritual-aromatico .ritual-intro .eyebrow", "rituals.aromatic.title"],
  ["#ritual-aromatico .ritual-intro h2", "rituals.aromatic.subtitle"],
  ["#ritual-aromatico .ritual-intro .stack-md p:nth-of-type(1)", "rituals.aromatic.detailText1"],
  ["#ritual-aromatico .ritual-intro .stack-md p:nth-of-type(2)", "rituals.aromatic.detailText2"],
  ["#ritual-aromatico .ritual-panel .eyebrow", "ritual.detail.includes"],
  ["#ritual-aromatico .ritual-bullets li:nth-child(1)", "rituals.aromatic.includes.1"],
  ["#ritual-aromatico .ritual-bullets li:nth-child(2)", "rituals.aromatic.includes.2"],
  ["#ritual-aromatico .ritual-bullets li:nth-child(3)", "rituals.aromatic.includes.3"],
  ["#ritual-aromatico .ritual-bullets li:nth-child(4)", "rituals.aromatic.includes.4"],
  ["#ritual-aromatico .stack-lg > section.reveal:nth-of-type(2) .eyebrow", "ritual.detail.benefits"],
  ["#ritual-aromatico .benefit-card:nth-child(1) h3", "rituals.aromatic.benefits.1.title"],
  ["#ritual-aromatico .benefit-card:nth-child(1) p", "rituals.aromatic.benefits.1.text"],
  ["#ritual-aromatico .benefit-card:nth-child(2) h3", "rituals.aromatic.benefits.2.title"],
  ["#ritual-aromatico .benefit-card:nth-child(2) p", "rituals.aromatic.benefits.2.text"],
  ["#ritual-aromatico .benefit-card:nth-child(3) h3", "rituals.aromatic.benefits.3.title"],
  ["#ritual-aromatico .benefit-card:nth-child(3) p", "rituals.aromatic.benefits.3.text"],
  ["#ritual-aromatico .benefit-card:nth-child(4) h3", "rituals.aromatic.benefits.4.title"],
  ["#ritual-aromatico .benefit-card:nth-child(4) p", "rituals.aromatic.benefits.4.text"],
  ["#ritual-aromatico .ritual-stat article:nth-child(1) strong", "ritual.detail.duration"],
  ["#ritual-aromatico .ritual-stat article:nth-child(1) span", "ritual.detail.durationValue"],
  ["#ritual-aromatico .ritual-stat article:nth-child(2) strong", "ritual.detail.price"],
  ["#ritual-aromatico .ritual-stat article:nth-child(2) span", "ritual.detail.priceValue"],
  ["#ritual-aromatico .ritual-aside-card:last-child h3", "ritual.detail.reserveTitle"],
  ["#ritual-aromatico .ritual-aside-card:last-child p", "ritual.detail.reserveText"],
  ["#ritual-aromatico .ritual-aside-card:last-child .button", "button.reserveThisRitual"],

  ["#ritual-lumara .ritual-intro .eyebrow", "rituals.lumara.eyebrow"],
  ["#ritual-lumara .ritual-intro h2", "rituals.lumara.subtitle"],
  ["#ritual-lumara .ritual-intro .stack-md p:nth-of-type(1)", "rituals.lumara.detailText1"],
  ["#ritual-lumara .ritual-intro .stack-md p:nth-of-type(2)", "rituals.lumara.detailText2"],
  ["#ritual-lumara .ritual-panel .eyebrow", "ritual.detail.includes"],
  ["#ritual-lumara .ritual-bullets li:nth-child(1)", "rituals.lumara.includes.1"],
  ["#ritual-lumara .ritual-bullets li:nth-child(2)", "rituals.lumara.includes.2"],
  ["#ritual-lumara .ritual-bullets li:nth-child(3)", "rituals.lumara.includes.3"],
  ["#ritual-lumara .ritual-bullets li:nth-child(4)", "rituals.lumara.includes.4"],
  ["#ritual-lumara .ritual-bullets li:nth-child(5)", "rituals.lumara.includes.5"],
  ["#ritual-lumara .stack-lg > section.reveal:nth-of-type(2) .eyebrow", "ritual.detail.benefits"],
  ["#ritual-lumara .benefit-card:nth-child(1) h3", "rituals.lumara.benefits.1.title"],
  ["#ritual-lumara .benefit-card:nth-child(1) p", "rituals.lumara.benefits.1.text"],
  ["#ritual-lumara .benefit-card:nth-child(2) h3", "rituals.lumara.benefits.2.title"],
  ["#ritual-lumara .benefit-card:nth-child(2) p", "rituals.lumara.benefits.2.text"],
  ["#ritual-lumara .benefit-card:nth-child(3) h3", "rituals.lumara.benefits.3.title"],
  ["#ritual-lumara .benefit-card:nth-child(3) p", "rituals.lumara.benefits.3.text"],
  ["#ritual-lumara .benefit-card:nth-child(4) h3", "rituals.lumara.benefits.4.title"],
  ["#ritual-lumara .benefit-card:nth-child(4) p", "rituals.lumara.benefits.4.text"],
  ["#ritual-lumara .ritual-stat article:nth-child(1) strong", "ritual.detail.duration"],
  ["#ritual-lumara .ritual-stat article:nth-child(1) span", "ritual.detail.durationValue"],
  ["#ritual-lumara .ritual-stat article:nth-child(2) strong", "ritual.detail.price"],
  ["#ritual-lumara .ritual-stat article:nth-child(2) span", "ritual.detail.priceValue"],
  ["#ritual-lumara .ritual-aside-card:last-child h3", "ritual.detail.reserveTitle"],
  ["#ritual-lumara .ritual-aside-card:last-child p", "ritual.detail.reserveTextLumara"],
  ["#ritual-lumara .ritual-aside-card:last-child .button", "button.reserveThisRitual"],

  ["#contacto .eyebrow", "cta.eyebrow"],
  ["#contacto h2", "cta.title"],
  ["#contacto .final-cta__content p", "cta.text"]
];

const syncHeaderState = () => {
  if (!header) return;
  if (window.scrollY > 24) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
};

const setActiveLanguage = (lang) => {
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
};

const applyTranslations = (lang) => {
  const dictionary = translations[lang] || translations.es;
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key || !(key in dictionary)) return;
    node.textContent = dictionary[key];
  });

  selectorTranslations.forEach(([selector, key]) => {
    const node = document.querySelector(selector);
    if (!node || !(key in dictionary)) return;
    node.textContent = dictionary[key];
  });

  document.documentElement.lang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  setActiveLanguage(lang);
  if (menuButton && mobilePanel) {
    menuButton.setAttribute("aria-expanded", "false");
    mobilePanel.classList.remove("is-open");
  }
  if (menuButton) {
    menuButton.setAttribute("aria-label", lang === "en" ? "Open menu" : "Abrir menú");
  }
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if (menuButton && mobilePanel) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    mobilePanel.classList.toggle("is-open", !isExpanded);
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobilePanel.classList.remove("is-open");
    });
  });
}

if ("IntersectionObserver" in window && revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
applyTranslations(savedLanguage && translations[savedLanguage] ? savedLanguage : "es");
