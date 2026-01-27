import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Send, CheckCircle } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants'
import FadeIn from '../animation/FadeIn'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: PERSONAL_INFO.location,
      href: null
    }
  ]

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' }
  ]

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full filter blur-3xl animate-blob'></div>
        <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000'></div>
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
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn delay={0}>
          <div className='text-center mb-16'>
            <div className='flex items-center justify-center gap-2 bg-primary/10 mb-4 border border-primary/30 rounded-full px-4 py-2 mx-auto w-max'>
              <Mail className='w-5 h-5 text-primary'/>
              <span className='text-primary font-medium'>Entre em Contato</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Vamos Trabalhar Juntos
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              Tem um projeto em mente? Eu adoraria ouvir você. Envie-me uma mensagem e responderei o mais rápido possível.
            </p>
          </div>
        </FadeIn>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Contact Info & Social */}
          <div className='lg:col-span-1 space-y-6'>
            <FadeIn delay={100}>
              <div className='bg-gray-900/50 border border-gray-800 rounded-lg p-6'>
                <h3 className='text-xl font-semibold text-white mb-6'>Informações de Contato</h3>
                <div className='space-y-4'>
                  {contactInfo.map((item, index) => (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <item.icon className='w-5 h-5 text-primary'/>
                      </div>
                      <div className='flex-1'>
                        <p className='text-gray-400 text-sm mb-1'>{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className='text-white hover:text-primary transition-colors break-words'
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='text-white break-words'>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className='bg-gray-900/50 border border-gray-800 rounded-lg p-6'>
                <h3 className='text-xl font-semibold text-white mb-6'>Me Siga</h3>
                <div className='flex gap-3'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1'
                      aria-label={social.label}
                    >
                      <social.icon className='w-5 h-5 text-primary'/>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <FadeIn delay={100}>
              <div className='bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8'>
                {isSubmitted ? (
                  <div className='flex flex-col items-center justify-center py-12'>
                    <CheckCircle className='w-16 h-16 text-primary mb-4'/>
                    <h3 className='text-2xl font-semibold text-white mb-2'>Mensagem Enviada!</h3>
                    <p className='text-gray-400 text-center'>Obrigado por entrar em contato. Responderei em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                          Seu Nome
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all'
                          placeholder='João Silva'
                        />
                      </div>
                      <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                          Seu Email
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all'
                          placeholder='joao@exemplo.com'
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
                        Assunto
                      </label>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all'
                        placeholder='Consulta de Projeto'
                      />
                    </div>
                    <div>
                      <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                        Mensagem
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows='6'
                        className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none'
                        placeholder='Fale-me sobre seu projeto...'
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='w-full md:w-auto px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2'
                    >
                      <span>Enviar Mensagem</span>
                      <Send className='w-5 h-5'/>
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact