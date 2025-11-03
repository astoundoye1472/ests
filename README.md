# Site Web ESTS Informatique

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Contributors](https://img.shields.io/github/contributors/Hojgaetan/ests-informatique)](https://github.com/Hojgaetan/ests-informatique/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/Hojgaetan/ests-informatique?style=social)](https://github.com/Hojgaetan/ests-informatique/network/members)
[![Build](https://img.shields.io/badge/CI-GitHub%20Actions-lightgrey?logo=github-actions&logoColor=white)](#continuous-integration)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/new)
[![Deploy on Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://app.netlify.com/start)

Bienvenue dans le dépôt du site web d'ESTS Informatique, une entreprise spécialisée dans la vente de matériel informatique, la maintenance, les réseaux, et les services IT au Sénégal.

Lien Figma (maquette originale): https://www.figma.com/design/6sKWZpA630XawMEsX2AdO4/Prototype-for-ESTS-Informatique

## But et objectifs du site
Ce site a pour mission de connecter le pays (Sénégal) au monde grâce à des solutions informatiques fiables, innovantes et accessibles, et de servir de vitrine digitale pour ESTS Informatique.

Objectifs clés:
- Présenter clairement l’offre de services: vente de matériel, maintenance & réparation, réseaux & câblage, installation & configuration, support technique, consulting IT (cf. section « Services »).
- Mettre en avant un catalogue de produits avec visuels et caractéristiques (sections « Produits » / « ProductsAll », données dans `src/data`).
- Faciliter la prise de contact et les demandes de devis via des appels à l’action et la section « Contact ».
- Rassurer et crédibiliser grâce aux preuves: statistiques de satisfaction, années d’expérience, valeurs de l’entreprise et partenaires (cf. « À propos »).
- Offrir une expérience rapide, responsive et accessible (React + Vite, Tailwind), adaptée au mobile.
- Préparer le référencement et le déploiement: site statique optimisable SEO, icônes et manifest PWA pour une bonne intégration sur les appareils.
- Permettre l’évolution facile du contenu: composants modulaires et données structurées pour mettre à jour le catalogue et les sections sans refonte.

## Fonctionnalités
- Section Héro et messages clés (rapidité, fiabilité, expertise)
- Présentation des services (vente, maintenance, réseaux, installation, support, consulting)
- Catalogue des produits avec images (extrait et page dédiée)
- À propos (mission, histoire, valeurs, statistiques)
- Contact (adresse, téléphones, email, horaires, CTA d’appel et email, urgence)
- Icônes et manifest PWA, favicons générables via script

## Aperçu

![Aperçu de la page d'accueil](public/images/imagebanniere.png)

## Stack technique
- Vite 6 + React 18 + TypeScript
- Plugin: `@vitejs/plugin-react-swc`
- UI/utilitaires: Radix UI, lucide-react, react-router-dom, recharts, etc.
- Styles: Tailwind CSS (précompilé via `src/index.css`)
- Alias d'import: `@` → `./src` (cf. `vite.config.ts`)

## Prérequis
- Node.js 18+ (LTS recommandé)
- npm (inclus avec Node)

## Installation
Ouvrez un terminal à la racine du projet puis exécutez:

```cmd
npm install
```

## Démarrer en développement
Lance le serveur Vite sur http://localhost:3000 avec ouverture auto du navigateur.

```cmd
npm run dev
```

## Construire la version de production
Génère les fichiers statiques optimisés dans le dossier `build/` (voir `vite.config.ts` → `build.outDir`).

```cmd
npm run build
```

### Prévisualiser la build (optionnel)
Après `npm run build`, vous pouvez servir localement la build:

```cmd
npx vite preview --open
```

> Par défaut, Vite utilisera le répertoire de sortie configuré (`build/`).

## Structure du projet (extrait)
- `src/` — code source (React/TSX, composants UI, pages)
- `public/` — assets statiques (icônes, manifest, images)
- `scripts/` — scripts utilitaires (ex: génération des favicons)
- `index.html` — point d'entrée HTML
- `vite.config.ts` — configuration Vite (alias, port 3000, outDir=build)
- `package.json` — dépendances et scripts

## Générer les favicons et le Web App Manifest
Un script est fourni pour générer les icônes à partir du logo `public/images/logo-ags.jpg` et créer `public/site.webmanifest`.

1) Installez les dépendances nécessaires (si non présentes):
```cmd
npm install --save-dev sharp to-ico
```

2) Exécutez le script:
```cmd
node scripts\generate-favicons.mjs
```

Les fichiers générés incluent: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192x192.png`, `icon-512x512.png` et `site.webmanifest`.

## Scripts disponibles
- `npm run dev` — démarre le serveur de développement (Vite)
- `npm run build` — construit la version de production dans `build/`

## Déploiement
Il s'agit d'un site statique. Après `npm run build`, déployez le contenu du dossier `build/` sur votre hébergeur statique (Netlify, Vercel, GitHub Pages, S3, etc.).

- Netlify/Vercel: commande de build `npm run build`, répertoire de publication `build/`.
- Serveur statique: servez directement le dossier `build/`.

## Roadmap
- [ ] SEO: titres/desc par page, balises Open Graph, sitemap, robots.txt
- [ ] Tracking/Analytics: Matomo/GA4 (avec consentement)
- [ ] i18n: versions FR/EN
- [ ] Tests E2E (Playwright) et unitaires pour composants clés
- [ ] Pipeline CI (GitHub Actions) pour lint/build/preview
- [ ] Déploiement continu sur Vercel/Netlify
- [ ] Back-office simple pour la gestion du catalogue produits

## Release Notes
- 0.1.0 (initial): mise en place Vite + React, pages d’accueil/services/produits, à propos, contact; génération favicons/manifest; build vers `build/`.

## Contact
- Adresse: 54x65 Geule Tapée Résidence Cheikh Bamba NDIONGUE (Siège social)
- Téléphone: +221 77 387 00 30 / 33 822 63 67 (Support 24h/6j)
- Email: contact@ests-informatique.sn (réponse sous 24h)
- Horaires: Lun–Ven 8h00–18h00, Sam 8h00–13h00
- Urgences: Assistance d'urgence au +221 77 268 41 88

## Contribution
Les contributions sont les bienvenues !
- Créez une branche à partir de `main` (feature/xxx ou fix/xxx)
- Respectez le style existant et structurez les composants
- Testez localement puis ouvrez une Pull Request avec une description claire

### Intégration continue (CI)
Aucun workflow n’est encore fourni. Pour activer le badge de build GitHub Actions:
- Créez `.github/workflows/ci.yml` avec des jobs `npm ci`, `npm run build`, et si besoin des tests.
- Remplacez le badge CI par l’URL générée par votre workflow.

## Sécurité
Consultez `SECURITY.md` pour les bonnes pratiques et le processus de signalement des vulnérabilités.

## Licence
Ce projet est distribué sous licence MIT — voir le fichier [LICENSE](LICENSE) pour plus d’informations.

## Contributeurs
Merci aux contributeurs qui ont aidé à développer ce projet !
- [Joel Gaëtan HASSAM OBAH](https://github.com/Hojgaetan)
- [Astou NDOYE](https://github.com/astoundoye1472)