/**
 * Cross-domain configuration for the marketing landing.
 *
 * The landing is deployed on Cloudflare Pages; the actual CRM app lives on Vercel at a
 * different origin. These constants point the landing's auth/CTA links at the real app.
 * Override APP_URL at build time with the PUBLIC_APP_URL env var (Cloudflare Pages).
 */
export const APP_URL = import.meta.env.PUBLIC_APP_URL ?? 'https://app.reallycrm.com';

/** The CRM uses passwordless magic-link auth, so login and signup are the same entry point. */
export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = `${APP_URL}/login`;

/** Sales contact for the "Hablar con ventas" / enterprise CTA. */
export const SALES_EMAIL = 'ventas@reallycrm.com';
export const SALES_MAILTO = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
  'Consulta de ventas — Really CRM',
)}`;
