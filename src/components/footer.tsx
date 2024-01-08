import { ExternalLink, LogosGithubIcon } from './icons'

export function Footer() {
  return (
    <a
      href="https://github.com/pkrinesh/dukan-challange"
      target="_blank"
      className="flex items-center text-sm text-card-fg-muted gap-2 hover:underline"
    >
      <span>
        <LogosGithubIcon />
      </span>{' '}
      Developed by Krinesh
      <span>
        <ExternalLink />
      </span>
    </a>
  )
}
