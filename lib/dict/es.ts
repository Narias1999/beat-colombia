// Colombian Spanish dictionary.
// Same shape as the English dict (enforced by the Dict type) so nothing drifts.
// Voice: Colombian "tú", neutral-Colombian vocabulary (bici, llantas, boleta).

import { routes, ext, uc, ORIGINAL } from '../config';
import { localePath } from '../i18n';
import type { Dict } from './en';

const p = (path: string) => localePath('es', path);

export const es: Dict = {
  /* ------------------------------------------------------------------ UI -- */
  ui: {
    htmlLang: 'es-CO',
    joinNow: '¡Únete!',
    shop: 'Tienda',
    login: 'Iniciar sesión',
    account: 'Mi cuenta',
    home: 'Inicio de BEAT Cycling Club',
    menu: 'Menú',
    partnersHeading: 'Socios y Proveedores Oficiales',
    footerBlurb:
      'BEAT Cycling Club — un club de los ciclistas, para todos los que quieren sacarle más al ciclismo, sobre la bici y fuera de ella.',
    footerRights: '© 2026 BEAT Cycling Club. Todos los derechos reservados.',
    footerBuilt: 'Versión en español — hecha con Next.js (SSG).',
    poweredBy: 'Con el respaldo de',
  },

  meta: {
    home: {
      title: 'BEAT Cycling Club — el primer club de ciclismo profesional',
      description:
        'Únete al primer club de ciclismo profesional: 1.500 miembros, un equipo profesional, retos, eventos y beneficios exclusivos.',
    },
    club: { title: 'El Club – BEAT Cycling Club' },
    benefits: { title: 'Beneficios para Miembros – BEAT Cycling Club' },
    clubhouse: { title: 'Casa Club Online – BEAT Cycling Club' },
    join: { title: 'Únete al Club – BEAT Cycling Club' },
    challenges: { title: 'Retos 2026 – BEAT Cycling Club' },
    about: { title: 'Sobre BEAT – BEAT Cycling Club' },
  },

  nav: [
    { label: 'Sobre BEAT', href: p(routes.about) },
    { label: 'Primer Equipo', href: ext.firstTeam },
    { label: 'Club', href: p(routes.club) },
  ],

  footer: {
    columns: [
      {
        heading: 'El Club',
        links: [
          { label: 'Club', href: p(routes.club) },
          { label: 'Beneficios para Miembros', href: p(routes.benefits) },
          { label: 'Casa Club Online', href: p(routes.clubhouse) },
          { label: 'Retos', href: p(routes.challenges) },
          { label: 'Únete al Club', href: p(routes.join) },
        ],
      },
      {
        heading: 'BEAT',
        links: [
          { label: 'Organización', href: ext.organisation },
          { label: 'Vacantes', href: ext.careers },
          { label: 'Sostenibilidad', href: ext.sustainability },
          { label: 'Socios', href: ext.partners },
          { label: 'Contacto', href: ext.contact },
          { label: 'Términos y Condiciones', href: ext.terms },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- Homepage -- */
  home: {
    hero: {
      title: 'Bienvenido al club',
      paragraphs: [
        'Somos el primer club de ciclismo profesional del mundo. No somos un equipo con hinchas alrededor, sino un club de 1.500 miembros del que tú haces parte, con un equipo profesional que va camino a lo más alto del ciclismo.',
        'Como miembro vives el ciclismo profesional desde adentro. No solo lo sigues: lo vives. Y como Ciclista le sacas mucho más a tus propias metas, con el mismo respaldo que tienen nuestros profesionales.',
      ],
      cta: { label: 'Únete al club', href: p(routes.join) },
      promoImage: uc('f0aeec22-0e6a-4af3-9377-ad8d230e1eb4', 'become-a-member.png', 1400),
      promoKicker: 'Hazte miembro de BEAT hoy',
      promoHeadline: 'Un solo club — profesionales y miembros juntos',
    },
    news: {
      heading: 'Lo que está pasando en el club',
      href: ORIGINAL,
      items: [
        { title: 'Warre van den Meersche llega al Primer Equipo como practicante', tag: 'Noticias', cta: 'Más info', image: uc('2ab9fe73-05ae-46d4-9d4e-041d00770bd0', 'news1.png') },
        { title: '10 años de BEAT: celebremos una década con todo el club', tag: 'Evento', cta: 'Consigue tu boleta', image: uc('20120f41-c5e1-4223-bdbf-22ee73737487', 'news2.png') },
        { title: 'Jochem Kerckhaert, tercero en el Campeonato Nacional de Ruta', tag: 'Noticias', cta: 'Ver más', image: uc('ddf09791-11c6-4df8-9158-ddce11e11d33', 'news3.png') },
        { title: 'Un bike fit profesional, sin ser profesional', tag: 'Blog', cta: 'Leer más', image: uc('85998d7d-bdf7-49f8-a9bd-9a00b97f2532', 'news4.png') },
        { title: 'Nuestro documental ya está en Amazon Prime Video', tag: 'Noticias', cta: 'Leer más', image: uc('beb68b7e-08bc-4667-910e-9c7e01780199', 'news5.png') },
        { title: 'Maleta BEAT x VASAD gratis (valorada en €50) con tu membresía', tag: 'Promoción', cta: 'Reclama tu bono', image: uc('016f98a4-ae59-4597-8606-df5fc80c1c66', 'news6.png') },
        { title: 'David Dekker gana la Omloop van de Braakman', tag: 'Noticias', cta: 'Leer más', image: uc('6ebdcd1b-79c9-4888-84aa-b8338e5119fd', 'news7.png') },
        { title: 'Saxo vuelve al pelotón como patrocinador principal de BEAT', tag: 'Noticias', cta: 'Más info', image: uc('031701e4-c83e-47c5-82be-5c161cbced14', 'news8.png') },
        { title: 'David Dekker esprinta hasta el séptimo lugar en la Scheldeprijs', tag: 'Noticias', cta: 'Leer más', image: uc('01252ece-e3b9-458e-8240-da796510b919', 'news9.png') },
        { title: 'Cómo BEAT CC pone a la comunidad ciclista en primer plano', tag: 'Prensa', cta: 'Leer el artículo', image: uc('66ab5e17-09ee-464a-b067-5cfe13f6ec05', 'news10.png') },
        { title: 'Michiel Coppens gana el GP Vermarc', tag: 'Noticias', cta: 'Leer más', image: uc('3431ede7-6122-4dec-9551-323e1efc7c4c', 'news11.png') },
        { title: 'BEAT le da la bienvenida a VOYAH como nuevo socio de movilidad', tag: 'Noticias', cta: 'Más info', image: uc('6cbe3eaf-ec1e-425f-960a-d7ed2c91aadc', 'news12.png') },
        { title: '¡La nueva Colección de Club AGU x BEAT 2026 ya está disponible!', tag: 'Tienda', cta: 'Comprar ahora', image: uc('8f0f0a32-e9a2-43ab-90e5-78b1c09c52f1', 'news13.png') },
        { title: 'BEAT le da la bienvenida a Eneve como nuevo socio', tag: 'Noticias', cta: 'Más info', image: uc('894af1ac-05f6-41a0-8699-6b00f0bb42d2', 'news14.png') },
        { title: '¡Esta es nuestra nueva máquina BEAT x Ridley!', tag: 'Noticias', cta: 'Más info', image: uc('412e7afc-5f62-4963-9edd-e794c72ef82e', 'news15.png') },
        { title: 'The BEAT Big 5: cinco carreras icónicas de gravel y Gran Fondo', tag: 'Noticias', cta: 'Más info', image: uc('16890c71-2772-4150-94df-39c0259669bc', 'news16.png') },
      ],
    },
    podcast: {
      heading: '¡Escucha nuestro pódcast!',
      body: 'Métete detrás de cámaras del Primer Equipo y del club con Thijs Zonneveld y sus invitados.',
      image: uc('6309207f-c082-4f93-8289-2be0fb89e17f', 'podcast.jpg', 1400),
      cta: { label: 'Escuchar el pódcast', href: `${ORIGINAL}/pages/podcast` },
    },
    membership: {
      heading: 'Hazte miembro de BEAT',
      sub: 'Puedes unirte de dos maneras: como Ciclista o como Amigo.',
      body: 'Regístrate como miembro de BEAT y haz parte del primer (y más grande) club de ciclismo profesional del mundo.',
      becomeA: 'Hazte',
      options: [
        { name: 'Ciclista', desc: 'Acompáñanos sobre la bici: equipos, retos, eventos y respaldo de nivel profesional.', price: '€60 / año', href: p(routes.join) },
        { name: 'Amigo', desc: 'Acompáñanos detrás de cámaras: comunidad, novedades y la Casa Club Online.', price: '€30 / año', href: p(routes.join) },
      ],
    },
    collection: {
      heading: 'Colección de Club BEAT 2026',
      sub: 'La nueva colección de club AGU x BEAT 2026 ya está disponible.',
      shopNow: 'Comprar ahora',
      href: ext.shop,
      products: [
        { name: 'Mangas AGU', image: uc('746a0043-c1a1-4ae6-9b93-24bed287c0c5', 'armwarmers.png', 800) },
        { name: 'Rompevientos AGU', image: uc('1403f6ff-b095-4f1b-b848-4f48ee72f3ea', 'windbreaker.png', 800) },
        { name: 'Medias BEAT', image: uc('610043f2-4788-4157-91fb-beb8346c8283', 'socks.png', 800) },
        { name: 'Enterizo AGU', image: uc('fdb705ec-a811-4675-ad7f-bcc2823a20ea', 'racesuit.png', 800) },
        { name: 'Licra Larga AGU', image: uc('3ac7d34a-640d-45ae-9c03-23581a4b09cb', 'bibtight.png', 800) },
        { name: 'Perneras AGU', image: uc('b0636823-9ec0-4d5e-bcce-59ae0411226d', 'legwarmers.png', 800) },
        { name: 'Camiseta Pro AGU', image: uc('29203284-2d22-4f00-b8be-07fe58b86cb9', 'proshirt.png', 800) },
        { name: 'Camiseta de Club AGU', image: uc('1609036b-3b2b-4a5c-afb5-1eb1e0610585', 'clubshirt.png', 800) },
        { name: 'Licra Corta AGU', image: uc('0f92fb9e-8c6b-4fe1-986e-8ddf31195511', 'bibshort.png', 800) },
        { name: 'Manga Larga AGU', image: uc('350cc000-13bd-4186-a479-fa832308c270', 'longsleeve.png', 800) },
        { name: 'Licra Corta Pro AGU', image: uc('a2f15a01-1f74-44bd-bf7c-d0575b48c0b2', 'pro-bibshort.png', 800) },
      ],
    },
  },

  /* ----------------------------------------------------------------- Club -- */
  club: {
    hero: {
      title: 'El Club',
      lead: 'Entra al club y sácale todo el provecho a tus metas en el ciclismo, sobre la bici y fuera de ella.',
      paragraphs: [
        'En la Casa Club Online vives BEAT desde adentro. A través de los BEAT Teams conoces a otros ciclistas del club y entre todos se llevan a un nivel más alto.',
        'Los BEAT Challenges te retan a vivir nuevas aventuras sobre la bici, y en los eventos te encuentras con tus compañeros de club en persona. Además tienes acceso a beneficios exclusivos del club y de nuestros socios para que llegues más lejos.',
      ],
      image: uc('f0aeec22-0e6a-4af3-9377-ad8d230e1eb4', 'club-hero.png', 1400),
      imageAlt: 'Ciclistas de BEAT Cycling Club en una salida de ruta',
    },
    features: [
      { title: 'Retos', href: p(routes.challenges), image: uc('6a0bd0d1-6358-4249-a42a-b1d54968864f', 'challenges.png'), alt: 'BEAT Challenges' },
      { title: 'Beneficios para Miembros', href: p(routes.benefits), image: uc('85fb048f-123a-4588-b388-a86d4b5ac2b7', 'benefits.png'), alt: 'Beneficios para miembros' },
      { title: 'BEAT Teams', href: p(routes.clubhouse), image: uc('21caadfe-f35c-49ab-b76c-af5e3910c75a', 'teams.png'), alt: 'BEAT Teams rodando juntos' },
      { title: 'Casa Club Online', href: p(routes.clubhouse), image: uc('78108abb-4c0e-45f1-aca1-847ec4ff1a23', 'clubhouse.png'), alt: 'La Casa Club Online' },
    ],
  },

  /* ------------------------------------------------------------- Benefits -- */
  benefits: {
    hero: {
      title: 'Beneficios para Miembros',
      lead: 'En BEAT les damos a nuestros miembros el mismo acceso a conocimiento y equipamiento que tiene el Primer Equipo.',
      paragraphs: [
        'No son descuentos sueltos, sino un ecosistema completo pensado para mejorar tu rendimiento: desde equipamiento y acompañamiento médico hasta logística y licencias.',
      ],
      image: uc('355a64e4-343c-4aba-aa55-f7570fbaff78', 'benefits-hero.png', 1400),
      imageAlt: 'Ciclistas de BEAT celebrando',
    },
    groups: [
      {
        title: 'Equipamiento y Material',
        image: uc('fc29479c-5026-4519-8c63-a0af751e82c1', 'equipment.png', 1200),
        intro: 'Nos aseguramos de que nuestros miembros roden con el mismo material del Primer Equipo.',
        items: [
          { name: 'Tienda BEAT', desc: '20% de descuento de club en toda la ropa y en productos de socios como Maurten, U-Sport, Wahoo y más.' },
          { name: 'Bicicletas Ridley', desc: '10% de descuento en cuadros Ridley (Noah, Astr, Falcn), con un diseño BEAT exclusivo de regalo (valorado en €399).' },
          { name: 'Llantas Vredestein', desc: 'Acceso directo al programa de embajadores para conseguir precios especiales en llantas de competencia y entrenamiento.' },
        ],
      },
      {
        title: 'Entrenamiento y Acompañamiento Médico',
        image: uc('e2c9ecaa-9535-4af4-a580-5a559f11fad1', 'training.png', 1200),
        intro: 'Mejora tu rendimiento con el conocimiento y las herramientas que también usan nuestros profesionales.',
        items: [
          { name: 'Medicina Deportiva Países Bajos Centro', desc: '20% de descuento en pruebas de esfuerzo, ajuste de posición en la bici y exámenes médico-deportivos.' },
          { name: 'JOIN y TrainingPeaks', desc: 'Usa los planes oficiales de entrenamiento de BEAT con 25% de descuento en JOIN Cycling o 20% en la suscripción anual de TrainingPeaks.' },
          { name: 'Asesoría en Nutrición', desc: '20% de descuento en acompañamiento personalizado con Iris van Kleef, la nutricionista deportiva del Primer Equipo.' },
        ],
      },
      {
        title: 'Logística y Afiliaciones',
        image: uc('fb8b0009-00df-4e3a-a348-5de2a7b94205', 'logistics.png', 1200),
        intro: 'Los beneficios prácticos de tu membresía.',
        items: [
          { name: 'Care Packages', desc: 'Apoyo exclusivo a lo largo de la ruta en Gran Fondos y carreras de gravel seleccionadas.' },
          { name: 'Afiliación NTFU', desc: '10% de descuento en la afiliación a la NTFU, con seguro y beneficios adicionales incluidos.' },
          { name: 'Licencia KNWU', desc: 'Solicita a través de BEAT una licencia oficial de competencia y corre bajo los colores del club.' },
        ],
      },
    ],
    cta: {
      title: '¿Listo para sacarle todo el jugo al club?',
      body: 'Cada herramienta y cada apoyo te están esperando dentro del club. Hazte miembro y desbloquéalo todo.',
      buttons: [
        { label: 'Únete al club', href: p(routes.join), variant: 'solid' as const },
        { label: 'Casa Club Online', href: p(routes.clubhouse), variant: 'outline' as const },
      ],
    },
  },

  /* ------------------------------------------------------------ Clubhouse -- */
  clubhouse: {
    hero: {
      title: 'Casa Club Online',
      lead: 'La Casa Club Online es donde pasa todo dentro de BEAT Cycling Club.',
      paragraphs: [
        'Es el lugar donde ves lo que pasa detrás de cámaras, conoces a los más de 1.500 miembros de BEAT y vives el club de verdad. Desde el análisis de carreras hasta la planeación de salidas: esto es BEAT desde adentro.',
      ],
      image: uc('940662e8-c2aa-4c77-b323-990535f893ed', 'clubhouse-hero.png', 1400),
      imageAlt: 'La aplicación de la Casa Club Online',
    },
    callouts: [
      {
        title: '¿Todavía no eres miembro?',
        body: 'Únete al club para desbloquear el acceso completo a la Casa Club Online y a todo lo que hay adentro.',
        cta: { label: 'Únete al club', href: p(routes.join) },
      },
      {
        title: '¿Ya eres miembro y no puedes entrar?',
        body: 'Escríbenos y nuestro equipo te ayuda a volver a entrar a la casa club.',
        cta: { label: 'Contactar soporte', href: ext.contact },
      },
    ],
    appCta: { label: 'Ir a la Casa Club Online', href: ext.clubhouseApp },
    featuresHeading: '¿Qué es la Casa Club Online?',
    featuresIntro: 'Rodamos en el mundo “real”, pero nos encontramos todos los días en la Casa Club Online. Esto es lo que pasa allí:',
    featuresImage: uc('eaeadb75-e634-4f00-80d7-14f01d940fe5', 'clubhouse-collage.png', 1400),
    features: [
      { title: 'Detrás de cámaras', desc: 'Blogs desde la sala de juntas, vlogs desde la bici y todo lo que pasa en el club.' },
      { title: 'Primer Equipo', desc: 'Contenido exclusivo: análisis de carreras, el porqué de nuestras decisiones y actualizaciones en vivo desde las competencias.' },
      { title: 'Retos', desc: 'En la casa club siempre encuentras nuevos retos para llevar tu ciclismo a otro nivel.' },
      { title: 'Comunidad', desc: 'Conoce a más de 1.500 compañeros de club, inspírate con sus historias, haz preguntas y planea nuevas aventuras.' },
      { title: 'Tienda', desc: 'En ningún otro lugar estás tan cerca del desarrollo de la ropa del club y del resto del equipamiento.' },
    ],
    joinBand: {
      heading: '¿Te unes?',
      body: '¡Hazte miembro con el botón de abajo y descubre la casa club por ti mismo!',
      cta: { label: 'Únete al club', href: p(routes.join) },
    },
  },

  /* ----------------------------------------------------------------- Join -- */
  join: {
    hero: {
      title: 'Hazte miembro de BEAT',
      lead: 'En BEAT no te quedas mirando desde la orilla: estás justo en el corazón del club.',
      paragraphs: [
        'Haces parte de una comunidad de 1.500 miembros que ruedan juntos, se apoyan, se ríen, crecen y sueñan en grande juntos.',
        'Ciclismo profesional, con sabor a club.',
      ],
      image: uc('8dff8bd0-7fa8-4115-8f37-7d5afd375d6b', 'join-hero.png', 1400),
      imageAlt: 'Miembros de BEAT rodando juntos',
    },
    chooseHeading: 'Elige cómo quieres unirte',
    chooseSub: 'La diferencia es simple: como Ciclista nos acompañas sobre la bici. Como Amigo nos acompañas detrás de cámaras.',
    mostChosen: 'La más elegida',
    payNote: 'Las membresías se completan en el sitio oficial de BEAT Cycling Club.',
    lead: {
      heading: '¿Quieres más información?',
      body: 'Déjanos tus datos y te contactamos con todo lo que necesitas saber para unirte al club.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      email: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      phone: 'Teléfono',
      phonePlaceholder: '300 000 0000',
      submit: 'Enviar',
      sending: 'Enviando…',
      success: '¡Gracias! Ya tenemos tus datos y te contactamos muy pronto.',
      error: 'Algo salió mal. Por favor intenta de nuevo.',
      invalidEmail: 'Ingresa un correo electrónico válido.',
      required: 'Por favor completa todos los campos.',
      privacy: 'Solo usamos tus datos para contactarte sobre el club.',
      notConfigured: 'El formulario aún no está conectado. Intenta más tarde.',
    },
    plans: [
      {
        name: 'Membresía Ciclista',
        price: '€60',
        period: 'por año',
        href: ext.register,
        button: 'Hazte Ciclista',
        highlight: true,
        groups: [
          {
            label: 'Comunidad',
            items: [
              'Haces parte del primer club de ciclismo profesional del mundo',
              'Conoces ciclistas que piensan como tú',
              'Encuentras tu lugar en los BEAT Teams (Ruta, Gravel, Gran Fondo, MTB, eRacing)',
              'Participas en retos, salidas y eventos',
            ],
          },
          {
            label: 'Detrás de cámaras',
            items: [
              'Novedades exclusivas del Primer Equipo por Thijs Zonneveld',
              'Acceso directo al conocimiento de entrenadores y ciclistas profesionales',
              'Acceso a la Casa Club Online',
            ],
          },
          {
            label: 'Beneficios',
            items: ['Descuentos con los socios de BEAT', 'Afiliación a la KNWU y la NTFU', 'Apoyo con caramañolas en carrera'],
          },
        ],
      },
      {
        name: 'Membresía Amigo',
        price: '€30',
        period: 'por año',
        href: ext.register,
        button: 'Hazte Amigo',
        highlight: false,
        groups: [
          {
            label: 'Comunidad',
            items: ['Haces parte del primer club de ciclismo profesional del mundo', 'Conectado con 1.500 miembros'],
          },
          {
            label: 'Detrás de cámaras',
            items: ['Novedades exclusivas del Primer Equipo', 'Acceso a la Casa Club Online'],
          },
          { label: 'Beneficios', items: ['Descuentos con los socios de BEAT'] },
        ],
      },
    ],
    testimonials: [
      {
        quote: 'Gracias a BEAT descubrí los Gran Fondos y empecé a correr en lugares a los que nunca habría llegado por mi cuenta. Con mis compañeros viajamos por Europa para rodar y competir juntos. BEAT une a los ciclistas.',
        name: 'Ton Ippel',
        role: 'Ciclista BEAT',
        image: uc('7f73c99d-27cd-4b98-82b3-d3186df6e1c0', 'rider1.png', 800),
      },
      {
        quote: 'BEAT me ha dado muchísimo como ciclista. Lo mejor es rodar con gente que piensa igual y que tiene sus propias metas. Dentro del club hay lugar para todos, sin importar el nivel.',
        name: 'Thomas Bogaard',
        role: 'Ciclista BEAT',
        image: uc('9768f19f-b43a-485c-a7ea-189d089d7daa', 'rider2.png', 800),
      },
      {
        quote: 'Gracias a BEAT me volví a subir a la bici con una meta sencilla: terminar la Unbound. La realidad resultó aún mejor, con un puesto inesperado en el podio. Un momento de piel de gallina que nunca habría vivido sin BEAT.',
        name: 'Arjan Eekelder',
        role: 'Ciclista BEAT',
        image: uc('002a4657-ef67-4bc3-b60a-022e758c8a24', 'rider3.png', 800),
      },
    ],
    podcast: {
      heading: 'Escucha a BEAT en De Rode Lantaarn',
      body: 'En este episodio del pódcast de ciclismo De Rode Lantaarn, nuestro director deportivo Thijs Zonneveld se sienta frente al micrófono. Habla de su rol y de la historia del club, del crecimiento de BEAT, de lo que implica trabajar con un equipo profesional y de su visión del ciclismo neerlandés.',
      image: uc('c0969bc5-e713-4999-bd03-ceda40ed3c54', 'podcast.png', 1200),
      cta: { label: 'Escuchar el pódcast', href: `${ORIGINAL}/pages/podcast` },
    },
    press: {
      heading: 'Lee sobre BEAT en Sporza',
      body: 'Hace poco nuestro club fue protagonista en Sporza. El artículo cuenta cómo BEAT es visto como un nuevo modelo en el ciclismo: desde el papel de la comunidad hasta el camino hacia el máximo nivel. Es lindo ver cómo se percibe desde afuera lo que estamos construyendo juntos.',
      image: uc('8394de53-86dc-4328-891b-698ca484bba1', 'sporza.png', 1200),
      cta: { label: 'Leer el artículo', href: ORIGINAL },
    },
  },

  /* ----------------------------------------------------------- Challenges -- */
  challenges: {
    hero: {
      title: 'Retos 2026',
      lead: 'En 2026 te retamos a sacarle más a tus salidas que nunca antes.',
      paragraphs: [
        'Con tres retos diferentes — Strikhedonia, el SHIMANO SOS Challenge y BEAT Every Day — siempre hay un momento para que te sumes.',
      ],
      image: uc('ac1da7ec-aa18-4714-8e42-6e10fd20d073', 'challenges-hero.jpeg', 1400),
      imageAlt: 'Ciclistas de BEAT enfrentando un reto',
    },
    howLabel: '¿Cómo funciona?',
    itemCta: 'Míralo en la Casa Club Online',
    items: [
      {
        title: 'Strikhedonia',
        tagline: 'Reta Tu Límite',
        blurb: 'Al diablo con todo. Strikhedonia vuelve este año: el reto “hazlo tú mismo” más grande de BEAT y la oportunidad de encontrar tu propio límite.',
        how: 'Agenda el sábado 13 y el domingo 14 de junio. El reto es simple: recorre 200 o 400 km en una sola actividad. Conoce el ultra ciclismo y quizás hagas una de las salidas más largas de tu vida. Cómo lo enfrentas depende solo de ti: ¿un hotel cinco estrellas, un paradero de bus o simplemente no dormir? Es tu aventura.',
        meta: ['13–14 de junio de 2026', 'Recorre 200 o 400 km en una sola actividad'],
        video: 'c2cT44Cko-o',
        image: uc('44f7363a-ac3f-43f2-9134-8edc167056f5', 'strikhedonia.png', 1200),
        href: ext.clubhouseApp,
      },
      {
        title: 'SHIMANO SOS Challenge',
        tagline: 'Reta Tu Creatividad',
        blurb: 'Del sábado 11 de julio al 2 de agosto asumimos el SHIMANO SOS Challenge junto con todo el club.',
        how: 'Sal a cazar puntos: cada poste SOS vale 5 puntos y cada Shimano Service Center vale 2. Hay puntos extra por completar retos bonus. Quien más puntos sume se gana un premio, y todos entran al sorteo del gran premio, además de un premio aparte en redes a la mejor foto.',
        meta: ['11 de julio – 2 de agosto', '5 pts por poste SOS · 2 pts por Service Center'],
        video: 'Lzv7WUmh1do',
        image: uc('c4233d85-2613-4a5c-8673-ab18149c5b84', 'sos.png', 1200),
        href: ext.clubhouseApp,
      },
      {
        title: 'BEAT Every Day',
        tagline: 'Reta Tu Constancia',
        blurb: 'El reto más antiguo de BEAT vuelve otra vez. La tradición arranca en septiembre.',
        how: 'El reto es simple: rueda todos los días, mínimo 25 km, sin días de descanso. Pon a prueba tu resistencia e intenta mantenerlo durante todo el mes. Edwin Gulickx —cofundador de BEAT y padre espiritual de este reto— mantiene a todos al día en la Casa Club Online durante el BEAT Every Day.',
        meta: ['Arranca en septiembre', 'Mínimo 25 km todos los días'],
        video: 'CLbkJhgkNhs',
        image: uc('128421c4-54a0-41f7-bb77-5ea0bba65902', 'everyday.png', 1200),
        href: ext.clubhouseApp,
      },
    ],
    eventsHeading: 'Donde también rodamos juntos',
    events: [
      { date: '30 may', name: 'REBOUND', place: 'Países Bajos' },
      { date: '20 sep', name: 'Saxo Dam tot Dam Fietsclassic', place: 'Países Bajos' },
      { date: '24 oct', name: 'Fiesta de los 10 años de BEAT', place: 'Países Bajos' },
    ],
    strava: {
      title: 'Sigue todo en Strava',
      body: 'Todos los retos de BEAT se sincronizan con Strava. Únete al BEAT Cycling Club en Strava para registrar tus salidas, seguir las tablas de posiciones y alentar a tus compañeros de club.',
      cta: { label: 'Únete en Strava', href: ext.strava },
    },
  },

  /* ---------------------------------------------------------------- About -- */
  about: {
    hero: {
      title: 'El primer y único club de ciclismo profesional',
      lead: 'BEAT está hecho para ser un club al que perteneces.',
      paragraphs: [
        'No es un equipo de ciclismo tradicional que se mantiene a distancia, sino un club profesional donde los profesionales y los miembros hacen parte de lo mismo.',
        'Fundado en 2016 como una alternativa sostenible a los equipos que dependen de patrocinadores: los miembros no son espectadores sino participantes activos, y el equipo profesional y la comunidad comparten una sola identidad y una sola ambición.',
      ],
      image: uc('0f2d5ac9-fadb-4c6a-8cc3-c7e00b60a7ad', 'about-hero.png', 1400),
      imageAlt: 'Collage de ciclistas y resultados de BEAT Cycling Club',
      cta: { label: 'Únete al club', href: p(routes.join) },
    },
    historyHeading: 'Nuestra historia como club',
    timeline: [
      { year: '2016', text: 'Empezamos con una idea: sin equipo y sin estructura de patrocinio.' },
      { year: '2017', text: 'Lanzamos las primeras actividades para miembros y creamos un equipo UCI de pista.' },
      { year: '2018', text: 'Primera victoria en Copa del Mundo: velocidad por equipos con Theo Bos, Roy van den Berg y Matthijs Büchli.' },
      { year: '2019', text: 'Fundamos un equipo UCI Continental. Piotr Havik ganó la Ronde van Overijssel.' },
      { year: '2020', text: 'Nació BEAT Every Day con 110 participantes. Primera victoria en ruta: Piotr Havik en el GP Zottegem.' },
      { year: '2021', text: 'Matthijs Büchli se coronó campeón mundial de keirin. Se creó la Casa Club Online.' },
      { year: '2022', text: 'Büchli ganó el oro olímpico en velocidad por equipos. Yoeri Havik fue campeón mundial de puntuación.' },
      { year: '2023', text: 'Creció la comunidad en Gran Fondo y gravel. Recibimos el UCI Rainbow Award por nuestro trabajo en sostenibilidad.' },
      { year: '2024', text: 'Michiel Coppens ganó el GP Slovenian Istria. Frits Biesterbos fue segundo en el Mundial de Gravel.' },
      { year: '2025', text: 'Saxo se convirtió en patrocinador principal y el equipo pasó a llamarse “BEAT CC powered by Saxo”.' },
    ],
    future: {
      heading: 'Esto apenas empieza',
      paragraphs: [
        'BEAT no está terminado. En los próximos años seguimos construyendo: del actual equipo UCI Continental hacia un UCI ProTeam.',
        'Con una sola meta: competir en las carreras más grandes del mundo. Un equipo profesional sostenido por una comunidad de miembros es más duradero que una estructura tradicional de patrocinio.',
      ],
      leaders: [
        { name: 'Thijs Zonneveld', role: 'Director Deportivo' },
        { name: 'Geert Broekhuizen', role: 'Fundador' },
      ],
      image: uc('c9ea386b-bda5-4e6c-9b85-78ceaf0f6599', 'about-future.png', 1200),
      imageAlt: 'El futuro de BEAT Cycling Club',
    },
  },
};
