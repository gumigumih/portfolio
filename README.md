# gumigumih portfolio

React + TypeScript + Vite portfolio site.

## Development

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Cloudflare Pages

This project is configured for Cloudflare Pages with Basic authentication provided by a Pages Function middleware.

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Production URL: Cloudflare Pages default `*.pages.dev` URL
- Custom domain: `portfolio.meggumi.com`

Set these encrypted secrets in Cloudflare Pages before deploying:

- `BASIC_AUTH_USERNAME`
- `BASIC_AUTH_PASSWORD`

Optional environment variable:

- `BASIC_AUTH_REALM`

For local Pages Functions testing, create `.dev.vars` from the example file:

```sh
cp .dev.vars.example .dev.vars
```

Then run the built site with Wrangler:

```sh
npm run build
npx wrangler pages dev dist
```

Deploy with the Cloudflare Pages Git integration. GitHub Pages deployment workflow has been removed.

Manual deployment with Wrangler is also possible:

```sh
npx wrangler pages deploy dist
```

See [docs/cloudflare-pages.md](docs/cloudflare-pages.md) for the Cloudflare Pages, custom domain, and Basic auth setup steps.
