# Vertexora — Digital Agency Website

A premium, modern, responsive one-page website for a fictional digital agency. Built with plain HTML, CSS, and JavaScript, so it can be hosted on GitHub Pages without a build step.

## Project name

**Vertexora** — a made-up agency brand name intended for this demo. Check name/domain availability and any trademark considerations before using it commercially.

## Files

- `index.html` — page structure, SEO metadata, sections, and contact form
- `style.css` — responsive layout, typography, color system, and visual design
- `script.js` — mobile navigation, dynamic footer year, and email-draft form interaction
- `README.md` — project and deployment instructions

## Run locally

1. Download and unzip the project.
2. Open `index.html` in a modern browser.
3. For a local development server, use the VS Code Live Server extension or another static-file server.

No package installation or build command is required.

## Publish with GitHub Pages

1. Sign in to [GitHub](https://github.com/).
2. Create a new repository, for example `vertexora-agency`.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's **root** folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for the Pages deployment to finish. GitHub will show the live URL in **Settings → Pages**, usually:
   `https://YOUR-USERNAME.github.io/vertexora-agency/`

If you name the repository `YOUR-USERNAME.github.io`, the site can use that root URL instead.

## Before going live

- In `index.html`, replace `hello@vertexora.example` with your actual business email.
- In `script.js`, update the `recipient` constant to that same real email address.
- Replace the portfolio concept projects with real projects or clearly label them as concepts. The current visuals and project names are illustrative, not claims about actual clients.
- Update the meta description, social links, and contact details for your business.
- Google Fonts are loaded from Google Fonts; a network connection is needed for those web fonts. The page still has fallback fonts if they cannot load.
- Test the live site on mobile and desktop.

## Contact form limitation

GitHub Pages serves static files; it does not run a server-side form handler. This demo validates the fields in the browser and opens the visitor's default email app with a prefilled draft. It does **not** send or store messages by itself. The visitor must send the email. For a true on-page submission form, connect a form backend/service or your own server and review its privacy/security requirements.

## Customization

- Change colors near the top of `style.css` in the `:root` variables.
- Edit page copy and sections in `index.html`.
- Update mobile menu or form behavior in `script.js`.
