import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Heart, ArrowUp, Wrench } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS, Nav_links } from '../../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' }
  ]

  const quickLinks = [
    { label: 'Sobre', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Serviços', id: 'services' }
  ]

  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-20 rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 opacity-20 rounded-full filter blur-3xl'></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-white">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Desenvolvimento Web</li>
              <li className="text-gray-400 text-sm">Desenvolvimento de Aplicativos Móveis</li>
              <li className="text-gray-400 text-sm">Design UI/UX</li>
              <li className="text-gray-400 text-sm">Otimização de Desempenho</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {PERSONAL_INFO.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados. Feito com{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-red-500" /> no Brasil
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer