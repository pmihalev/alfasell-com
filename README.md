# alfasell.com

Site vitrine marketing d'**AlfaSell** — la plateforme SaaS de gestion commerciale
(CRM / ERP) éditée par **Milex Planète Informatique**.

- **Stack** : [Astro 5](https://astro.build) (sortie statique) + Tailwind CSS.
- **Hébergement** : [Fly.io](https://fly.io) (région `cdg`, Paris), servi par nginx.
- **CDN / cache** : Cloudflare en frontal (CNAME proxifié → l'app Fly).
- **Achat / essai** : tous les CTA pointent vers la page de paiement réelle
  [`milex.fr/pricing`](https://milex.fr/pricing).

> La grille tarifaire affichée ici (per-siège : Essentiel 49 €/u, Business 69 €/u,
> Enterprise 99 €/u + modules par utilisateur) doit rester alignée sur la source de
> vérité PostgreSQL `milex.pricing_plans` / `pricing_addons` du dépôt `milex-modern`.

## Développement

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/ (statique)
npm run preview
```

## Déploiement

Auto-déployé sur Fly.io à chaque push sur `main`
(`.github/workflows/fly-deploy.yml`, nécessite le secret `FLY_API_TOKEN`).

Déploiement manuel :

```bash
flyctl deploy
```

## Structure

```
src/
  layouts/Base.astro       # shell HTML + SEO/OG + fonts + JSON-LD
  components/Pricing.astro  # grille per-siège (plans + modules)
  pages/index.astro         # landing une page
  styles/global.css
public/alfasell/            # logos & icônes de marque (SVG)
Dockerfile                  # build Astro → nginx:alpine (:8080)
nginx.conf                  # cache headers + /healthz
fly.toml                    # app alfasell-com, région cdg
```
