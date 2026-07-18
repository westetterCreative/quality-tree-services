# Quality Tree Services — generated site

## Design brief (generator)

Preset: **tree_service** — Rugged, green/brown, safety-focused

- **Location:** Jackson, MO 63755
- **Tone:** Steady, safety-forward, experienced
- **Layout:** Earthy palette, strong section separation, proof of expertise
- **CTA strategy:** Primary: on-site assessment. Secondary: emergency call button.

Full machine-readable brief: `design-brief.json`.

---

## Develop

```bash
npm install
npm run dev
```

---

## Deploy to Netlify

Scripts use `npx netlify-cli` so you do **not** need a global install (optional: `npm install -g netlify-cli` if you prefer).

### One-time login

```bash
npx netlify-cli login
```

From this folder (`generated-sites/quality-tree-services/`), link the folder to a Netlify site:

```bash
npx netlify-cli init
```

### Preview deploy

```bash
npm run deploy:netlify
```

Or manually:

```bash
npm run build
npx --yes netlify-cli deploy --dir=dist
```

### Production deploy

```bash
npm run deploy:netlify:prod
```

Or:

```bash
npm run build
npx --yes netlify-cli deploy --dir=dist --prod
```

---

## Custom domain (free on Netlify)

1. Deploy the site to Netlify (preview or production).
2. In the Netlify dashboard: **Domain management** → **Add custom domain**.
3. Enter the client’s domain (e.g. `www.theirbusiness.com`).
4. Either:
   - **Use Netlify DNS:** follow the wizard to use Netlify as the DNS host, or  
   - **External DNS:** add the records Netlify shows (typically **A** / **AAAA** to Netlify load balancer, or **CNAME** to the `*.netlify.app` target).
5. Wait for DNS to propagate, then **Verify** — Netlify provisions **SSL/TLS** automatically once DNS is correct.

Replace placeholder URLs in `index.html` (Open Graph / canonical) with the final domain when known.

---

## Netlify Forms (quote form)

This site includes a Netlify-compatible quote form (`name="quote-request"`). A hidden static copy exists in `index.html` so Netlify can detect fields at build time.

After first deploy, confirm the form appears under **Forms** in the Netlify UI.

---

## Stack

Vite + React + TypeScript. Build output: `dist/` (see `netlify.toml`).
