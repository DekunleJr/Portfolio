# Portfolio — Samuel Adekunle Oyebamiji

Personal portfolio website for **Samuel Adekunle Oyebamiji — Software Engineer**, built with React (Create React App).

**"I build reliable software systems that solve real business problems."**

## Sections

- **Hero** — positioning + system-flow visual (User → Application → Backend → Data → Integrations)
- **About** — background, education and certifications
- **Experience** — professional timeline (Trulaju, Cabvibe, Iammcoding, Locai, ALX Africa)
- **Projects** — flagship Trulaju card + live project links
- **Trulaju case study** — telemetry pipeline, architecture, real-time telemetry, business workflows, engineering scale metrics, background processing, security
- **Skills / Capabilities / How I Build Systems** — technology and engineering-practice overview
- **Contact / Footer**

## Content management

All copy lives in `src/data/`:

| File | Contents |
| --- | --- |
| `profile.js` | name, contact links, education, certifications |
| `experience.js` | work history |
| `projects.js` | project cards and links |
| `skills.js` | technology groups |
| `trulaju.js` | case-study copy, metrics, flows |

## Development

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # run tests once
npm run build    # production build into build/
```

## Notes

- No runtime dependencies beyond React — animations are CSS + IntersectionObserver.
- `prefers-reduced-motion` is respected throughout.
- LinkedIn is linked via `linkedin.url` in `src/data/profile.js`.
