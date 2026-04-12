import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface ExternalLink {
  label: string
  href: string
}

interface Options {
  links: ExternalLink[]
}

export default ((opts: Options) => {
  const ExternalLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`external-links ${displayClass ?? ""}`}>
        <ul>
          {opts.links.map((link) => (
            <li>
              <a href={link.href} data-external>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  ExternalLinks.css = `
.external-links {
  margin-top: 0.5rem;
}

.external-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.external-links li a {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--dark);
  opacity: 0.75;
  font-size: 0.85rem;
  line-height: 1.5rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.external-links li a:hover {
  opacity: 1;
  color: var(--tertiary);
}

.external-links li a svg {
  flex-shrink: 0;
  opacity: 0.5;
}

.external-links li a:hover svg {
  opacity: 1;
  color: var(--tertiary);
}
`

  return ExternalLinks
}) satisfies QuartzComponentConstructor
