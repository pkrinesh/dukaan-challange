import { LogosGithubIcon, MailIcon } from './icons'

export function Footer() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <p className="text-lg lg:text-sm text-card-fg-muted">Developed by Krinesh</p>
      <a
        href="https://github.com/pkrinesh/dukan-challange"
        target="_blank"
        className="text-card-fg-muted"
      >
        <LogosGithubIcon />
      </a>
      <a href="mailto:pkrinesh95@gmail.com" target="_blank" className="text-xl text-card-fg-muted">
        <MailIcon />
      </a>
    </div>
  )
}
