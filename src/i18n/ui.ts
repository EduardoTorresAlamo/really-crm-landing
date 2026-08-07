export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

/** Prefix a path with the locale. `es` is the default locale and stays unprefixed. */
export function localizePath(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

export const ui = {
  es: {
    meta: {
      title: 'Really CRM — Tu cartera de compradores, emparejada con cada listado',
      description:
        'CRM inmobiliario que guarda las preferencias de cada cliente y usa IA para decirte quién encaja con un listado nuevo. Pipeline, documentos, seguimientos y correo en lote.',
      lang: 'es',
    },
    nav: {
      features: 'Funciones',
      how: 'Cómo funciona',
      pricing: 'Precios',
      login: 'Entrar',
      cta: 'Empezar',
      menu: 'Menú',
    },
    hero: {
      eyebrow: 'CRM inmobiliario con IA',
      title: 'Tu cartera de compradores,',
      titleAccent: 'emparejada con cada listado.',
      subtitle:
        'Really CRM guarda las preferencias de cada cliente —presupuesto, zonas, tipo de propiedad, cash o préstamo— y usa Claude para decirte quién encaja con un listado nuevo. En segundos, no en una tarde entera.',
      ctaPrimary: 'Empezar gratis',
      ctaSecondary: 'Ver cómo funciona',
      note: '14 días de prueba · Sin tarjeta de crédito',
      mock: {
        label: 'Resultados del match',
        listing: '3 cuartos · 2 baños · Guaynabo · $385,000',
        reason: 'Razón',
        matches: [
          {
            name: 'María Rivera',
            score: '94',
            reason: 'Zona y presupuesto exactos. Pre-aprobada hasta $400k.',
          },
          {
            name: 'Carlos Méndez',
            score: '81',
            reason: 'Busca 3/2 en el área metro. Compra en cash.',
          },
          {
            name: 'Ana Colón',
            score: '63',
            reason: 'Encaja en tipo de propiedad; $35k sobre su tope.',
          },
        ],
      },
    },
    features: {
      eyebrow: 'Funciones',
      title: 'Todo lo que un realtor repite cada semana, en un solo lugar.',
      subtitle:
        'Sin módulos que nadie usa. Cada función salió de algo que ya hacías a mano.',
      items: [
        {
          key: 'ai',
          title: 'Emparejamiento con IA',
          body: 'Pega el URL de un listado. Claude extrae precio, cuartos, baños y ubicación, luego ordena tu cartera por calidad de match con la razón escrita de cada uno. Sin plantillas de puntuación que tengas que configurar.',
        },
        {
          key: 'clients',
          title: 'Fichas de cliente',
          body: 'Compradores y vendedores con presupuesto, zonas preferidas, tipo de propiedad y forma de pago —cash o préstamo.',
        },
        {
          key: 'pipeline',
          title: 'Pipeline visual',
          body: 'Kanban de primer contacto a cierre. Arrastra y suelta; cada cambio queda en un historial que no se puede editar.',
        },
        {
          key: 'docs',
          title: 'Documentos',
          body: 'IDs, cartas de pre-aprobación, contratos. Estado Pendiente / Recibido / Verificado por cada cliente.',
        },
        {
          key: 'followups',
          title: 'Seguimientos y digest diario',
          body: 'Fecha de seguimiento por cliente y un correo cada mañana con exactamente a quién le toca hoy.',
        },
        {
          key: 'email',
          title: 'Plantillas y correo en lote',
          body: 'Guarda los correos que ya escribes y mándalos a un segmento completo de tu cartera de una vez.',
        },
      ],
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'De listado nuevo a llamada hecha en tres pasos.',
      steps: [
        {
          n: '01',
          title: 'Carga tu cartera',
          body: 'Crea la ficha de cada cliente con presupuesto, zonas y tipo de propiedad. Toma unos minutos y solo se hace una vez.',
        },
        {
          n: '02',
          title: 'Pega el listado',
          body: 'Un URL basta. La IA lee la propiedad y puntúa a cada comprador de tu cartera, explicando por qué encaja o por qué no.',
        },
        {
          n: '03',
          title: 'Da seguimiento y cierra',
          body: 'Manda el match por correo, mueve al cliente por el pipeline y deja que el digest de la mañana te recuerde el resto.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Un precio por agente. Sin cargo por contacto.',
      subtitle: 'Precios en USD. Dos meses gratis al pagar anual.',
      perMonth: '/mes',
      popular: 'Más elegido',
      cta: 'Empezar',
      ctaEnterprise: 'Hablar con ventas',
      plans: [
        {
          name: 'Solo',
          price: '$29',
          tagline: 'Un agente trabajando su propia cartera.',
          features: [
            'Clientes y propiedades ilimitados',
            '50 matches con IA al mes',
            'Documentos y seguimientos',
            'Digest diario por correo',
            'Historial de transacciones',
          ],
        },
        {
          name: 'Equipo',
          price: '$79',
          tagline: 'Hasta 5 agentes con cartera compartida.',
          features: [
            'Todo lo de Solo',
            'Matches con IA ilimitados',
            'Pipeline compartido del equipo',
            'Plantillas y correo en lote',
            'Roles y permisos',
          ],
        },
        {
          name: 'Agencia',
          price: 'A la medida',
          tagline: 'Oficinas con varias sucursales.',
          features: [
            'Todo lo de Equipo',
            'Agentes ilimitados',
            'Inicio de sesión con SSO',
            'Migración asistida de tus datos',
            'Soporte prioritario con SLA',
          ],
        },
      ],
    },
    footer: {
      tagline: 'CRM inmobiliario para realtors que trabajan su propia cartera.',
      product: 'Producto',
      company: 'Compañía',
      legal: 'Legal',
      links: {
        features: 'Funciones',
        pricing: 'Precios',
        login: 'Entrar',
        changelog: 'Novedades',
        about: 'Nosotros',
        contact: 'Contacto',
        privacy: 'Privacidad',
        terms: 'Términos',
      },
      language: 'Idioma',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    meta: {
      title: 'Really CRM — Your buyer list, matched to every listing',
      description:
        'A real estate CRM that stores every client’s preferences and uses AI to tell you who fits a new listing. Pipeline, documents, follow-ups and bulk email.',
      lang: 'en',
    },
    nav: {
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      login: 'Log in',
      cta: 'Get started',
      menu: 'Menu',
    },
    hero: {
      eyebrow: 'AI real estate CRM',
      title: 'Your buyer list,',
      titleAccent: 'matched to every listing.',
      subtitle:
        'Really CRM stores each client’s preferences — budget, areas, property type, cash or financed — and uses Claude to tell you who fits a new listing. In seconds, not a whole afternoon.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'See how it works',
      note: '14-day trial · No credit card',
      mock: {
        label: 'Match results',
        listing: '3 bed · 2 bath · Guaynabo · $385,000',
        reason: 'Reason',
        matches: [
          {
            name: 'María Rivera',
            score: '94',
            reason: 'Exact area and budget. Pre-approved up to $400k.',
          },
          {
            name: 'Carlos Méndez',
            score: '81',
            reason: 'Wants a 3/2 in the metro area. Paying cash.',
          },
          {
            name: 'Ana Colón',
            score: '63',
            reason: 'Property type fits; $35k over her ceiling.',
          },
        ],
      },
    },
    features: {
      eyebrow: 'Features',
      title: 'Everything a realtor repeats every week, in one place.',
      subtitle:
        'No modules nobody opens. Every feature came from something you were already doing by hand.',
      items: [
        {
          key: 'ai',
          title: 'AI property matching',
          body: 'Paste a listing URL. Claude pulls out price, beds, baths and location, then ranks your book by match quality with a written reason for each one. No scoring rules to configure.',
        },
        {
          key: 'clients',
          title: 'Client profiles',
          body: 'Buyers and sellers with budget range, preferred areas, property types and how they’re paying — cash or loan.',
        },
        {
          key: 'pipeline',
          title: 'Visual pipeline',
          body: 'Kanban from first contact to closing. Drag and drop; every change lands in an audit log that can’t be edited.',
        },
        {
          key: 'docs',
          title: 'Document tracking',
          body: 'IDs, pre-approval letters, contracts. Pending / Received / Verified status on every client.',
        },
        {
          key: 'followups',
          title: 'Follow-ups and daily digest',
          body: 'A follow-up date per client and one email each morning with exactly who is due today.',
        },
        {
          key: 'email',
          title: 'Templates and bulk email',
          body: 'Save the emails you already write and send them to a whole segment of your book at once.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'New listing to placed call in three steps.',
      steps: [
        {
          n: '01',
          title: 'Load your book',
          body: 'Create a profile per client with budget, areas and property type. Takes a few minutes, and only happens once.',
        },
        {
          n: '02',
          title: 'Paste the listing',
          body: 'A URL is enough. The AI reads the property and scores every buyer in your book, explaining why they fit or why they don’t.',
        },
        {
          n: '03',
          title: 'Follow up and close',
          body: 'Email the match, move the client along the pipeline, and let the morning digest remember the rest.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'One price per agent. No charge per contact.',
      subtitle: 'Prices in USD. Two months free when billed annually.',
      perMonth: '/mo',
      popular: 'Most picked',
      cta: 'Get started',
      ctaEnterprise: 'Talk to sales',
      plans: [
        {
          name: 'Solo',
          price: '$29',
          tagline: 'One agent working their own book.',
          features: [
            'Unlimited clients and properties',
            '50 AI matches per month',
            'Documents and follow-ups',
            'Daily email digest',
            'Transaction history',
          ],
        },
        {
          name: 'Team',
          price: '$79',
          tagline: 'Up to 5 agents on a shared book.',
          features: [
            'Everything in Solo',
            'Unlimited AI matches',
            'Shared team pipeline',
            'Templates and bulk email',
            'Roles and permissions',
          ],
        },
        {
          name: 'Agency',
          price: 'Custom',
          tagline: 'Offices running multiple branches.',
          features: [
            'Everything in Team',
            'Unlimited agents',
            'SSO sign-in',
            'Assisted data migration',
            'Priority support with SLA',
          ],
        },
      ],
    },
    footer: {
      tagline: 'A real estate CRM for realtors working their own book.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        login: 'Log in',
        changelog: 'Changelog',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy',
        terms: 'Terms',
      },
      language: 'Language',
      rights: 'All rights reserved.',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
