# Carambar & co - Front

Landing page responsive conçue pour afficher une blague aléatoire provenant de l’API `cbr-back`. Elle reprend les codes couleurs de la marque tout en restant légère pour un déploiement GitHub Pages.

## Stack front
- HTML / CSS / JavaScript vanilla
- `http-server` (via `pnpm`) pour démarrer un serveur de développement local simple
- Consommation de `https://api.x402librarian.xyz/api/v1/blagues/random`

## Développement local
1. `pnpm install`
2. `pnpm start` (ouvre `http://localhost:8080` par défaut via `http-server`)
3. Cliquer sur « Afficher une blague » pour tester l’appel à l’API

### Configuration de l’API
- L’URL de base est injectée dans `index.html` via `window.CBR_API_URL`. Tu peux la modifier pour pointer vers un autre environnement ou vers un proxy local.

## Déploiement
- Front déployé sur GitHub Pages : https://augustin-v.github.io/cbr-front/
- Le bouton appelle `https://api.x402librarian.xyz/api/v1/blagues/random` ; assure-toi que ce domaine est accessible depuis le site (CORS activé côté API).

## Liens utiles
- API (Swagger) : https://api.x402librarian.xyz/api-docs/
