# Comfortzone — Coworking Landing Page

Landing page one-page per il coworking **Comfortzone**, situato nel centro di Battipaglia.

## Stack Tecnologico

- [Astro](https://astro.build/) - Framework per siti web statici ultra-veloci
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [daisyUI v5](https://daisyui.com/) - Componenti UI per Tailwind CSS

## Struttura del Progetto

Il progetto è strutturato a componenti per massimizzare la riusabilità:

- `src/components/`: Sezioni della landing page e componenti UI
- `src/layouts/`: Layout base (HTML boilerplate, SEO)
- `src/pages/`: Pagine dell'applicazione (solo `index.astro` per ora)
- `src/data/`: Configurazione centralizzata dei contenuti (`site.ts`)
- `src/types/`: Definizioni TypeScript
- `src/styles/`: Configurazione CSS-first del design system (`global.css`)

## Gestione Contenuti (Dove modificare testi e link)

Tutti i contenuti testuali, contatti, link social e FAQ sono **centralizzati** in un unico file:
👉 **`src/data/site.ts`**

Se hai bisogno di modificare un testo, i prezzi (se in futuro li vorrai mostrare) o un indirizzo email, modificalo lì e si aggiornerà in tutto il sito.

### Come sostituire le immagini

- **Logo**: le varianti del logo sono in `public/logos/`. Il logo attivo è configurato in `site.ts`.
- **Immagini Hero/Gallery/Spaces**: Inserisci le tue foto in `public/images/`. Aggiorna poi i percorsi all'interno di `site.ts` per farli puntare alle tue nuove immagini al posto dei gradienti placeholder correnti in `Gallery.astro` e `Spaces.astro` o in `Hero.astro`.

### Configurazione Form Contatti

Il form contatti si trova in `src/components/ContactForm.astro`. Al momento è un form HTML statico.
Per ricevere email, puoi usare servizi come [Formspree](https://formspree.io/) o [Netlify Forms](https://docs.netlify.com/forms/setup/).
Basta modificare l'attributo `action` nel tag `<form>`:

```html
<!-- Esempio Formspree -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
```

## Future Booking Evolution

Il progetto è stato strutturato in modo da poter evolvere facilmente verso un sistema di prenotazione reale per uffici e postazioni.

### Cosa è già pronto:

- **Modellazione dei Dati**: In `src/types/index.ts` sono già definiti i tipi base (`BookingRequest`, `TimeSlot`, `BookingSlot`) e lo `SpaceType` (flex-desk / private-office).
- **Contenuti Separati**: L'entità "Spazio" è già definita come oggetto in `site.ts`, pronto per essere idratato da un CMS o da un database in futuro.

### Passi per aggiungere il booking in futuro:

1. **Nuova Pagina**: Crea `src/pages/booking.astro` (o usa la strategia di routing dinamico se i dettagli variano molto per spazio).
2. **Componenti**: Crea componenti interattivi (`BookingCalendar.tsx`/`svelte`/`vue` o Web Components vanilla) se serve seleziona date. Puoi integrarli in Astro facilmente grazie alle "Astro Islands" (`client:load`).
3. **Integrazione Backend**: Sostituisci il form statico con una API (es. Astro API routes in `src/pages/api/book.ts`) che contatta un CRM, Calendly, Airtable o Stripe per i pagamenti.

## Comandi Utili

Tutti i comandi vanno eseguiti dalla root del progetto:

| Comando           | Azione                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Installa le dipendenze                     |
| `npm run dev`     | Avvia il server di sviluppo in locale      |
| `npm run build`   | Compila il sito di produzione in `./dist/` |
| `npm run preview` | Testa la build di produzione in locale     |
