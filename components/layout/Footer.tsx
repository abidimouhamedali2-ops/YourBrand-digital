import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-text-primary">YourBrand</span>
            </Link>
            <p className="text-body-sm text-text-secondary">
              Building innovative solutions for modern businesses. We help you achieve your goals
              with cutting-edge technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-h4 font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-h4 font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-h4 font-semibold text-text-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-body-sm text-text-secondary">
                  123 Business Street<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-body-sm text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@yourbrand.com"
                  className="text-body-sm text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  info@yourbrand.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-body-sm text-text-secondary">
              © {currentYear} YourBrand. All rights reserved.
            </p>
            <p className="text-body-sm text-text-secondary">
              Built with{' '}
              <span className="text-primary" aria-label="love">
                ❤️
              </span>{' '}
              for modern web
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

