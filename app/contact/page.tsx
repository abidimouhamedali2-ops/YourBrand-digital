import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import SafeImage from '@/components/ui/SafeImage'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Calendar, ExternalLink, MessageSquare, Building2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | YourBrand - Let\'s Build Something Great Together',
  description:
    'Get in touch with our team. Tell us about your project or request. We typically respond within 24 hours. Schedule a meeting or reach out via email, phone, or social media.',
  openGraph: {
    title: 'Contact Us | YourBrand',
    description:
      'Get in touch with our team. Tell us about your project or request. We typically respond within 24 hours.',
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: '123 Business Street\nSuite 500\nCity, State 12345\nUnited States',
    href: 'https://maps.google.com/?q=123+Business+Street+City+State',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (234) 567-8900',
    href: 'tel:+12345678900',
    action: 'Call us',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@yourbrand.com',
    href: 'mailto:info@yourbrand.com',
    action: 'Send email',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM EST\nSaturday: 10:00 AM - 4:00 PM EST\nSunday: Closed',
  },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/yourbrand',
    color: 'hover:text-[#0077b5]',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourbrand',
    color: 'hover:text-text-primary',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <AnimatedSection>
              <div>
                <h1 className="text-display font-bold text-text-primary mb-6 leading-tight">
                  Let's Build Something{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Great Together
                  </span>
                </h1>
                <p className="text-body-lg text-text-secondary mb-8 max-w-2xl">
                  Tell us about your project or request. We typically respond within 24 hours. Whether
                  you're looking to start a new project, explore a partnership, or need technical
                  support, we're here to help.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" asChild>
                    <a href="#contact-form" className="scroll-smooth">
                      Get Started
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://calendly.com/yourbrand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Meeting
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Hero Image */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <SafeImage
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80&auto=format"
                  alt="Professional business communication and digital partnership - Team collaboration and client consultation in modern workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  placeholder={
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4 opacity-50">💼</div>
                        <p className="text-body-lg text-text-primary font-semibold">Let's Connect</p>
                      </div>
                    </div>
                  }
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2" id="contact-form">
              <AnimatedSection>
                <Card className="shadow-xl border-2 border-border/50">
                  <CardContent className="p-8 md:p-12">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-h2 font-bold text-text-primary">Send us a Message</h2>
                          <p className="text-body-sm text-text-secondary mt-1">
                            We typically respond within 24 hours
                          </p>
                        </div>
                      </div>
                      <p className="text-body text-text-secondary">
                        Fill out the form below and we'll get back to you as soon as possible. All fields
                        marked with <span className="text-error font-semibold">*</span> are required.
                      </p>
                    </div>
                    <ContactForm />
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="space-y-6 sticky top-24">
                  {/* Contact Info Cards */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <h2 className="text-h2 font-bold text-text-primary">Get in Touch</h2>
                    </div>
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      return (
                        <Card key={info.title} hover={!!info.href} className="transition-all duration-300 shadow-md hover:shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-h4 font-semibold text-text-primary mb-2">
                                  {info.title}
                                </h3>
                                <p className="text-body-sm text-text-secondary whitespace-pre-line mb-3 leading-relaxed">
                                  {info.content}
                                </p>
                                {info.href && (
                                  <a
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-200"
                                  >
                                    {info.action || 'View on Map'}
                                    {info.href.startsWith('http') && (
                                      <ExternalLink className="ml-1 h-3 w-3" />
                                    )}
                                  </a>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Social Media Links */}
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-h4 font-semibold text-text-primary mb-4 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        Connect With Us
                      </h3>
                      <p className="text-body-sm text-text-secondary mb-4">
                        Follow us on social media for updates, insights, and industry news.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {socialLinks.map((social) => {
                          const Icon = social.icon
                          return (
                            <a
                              key={social.name}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`h-11 w-11 rounded-lg bg-surface dark:bg-surface-dark flex items-center justify-center text-text-secondary transition-all duration-200 ${social.color} hover:bg-primary/10 hover:scale-110 shadow-sm`}
                              aria-label={`Follow us on ${social.name}`}
                            >
                              <Icon className="h-5 w-5" />
                            </a>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Schedule Meeting CTA */}
                  <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/20 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-h4 font-semibold text-text-primary mb-2">
                        Schedule a Meeting
                      </h3>
                      <p className="text-body-sm text-text-secondary mb-6 leading-relaxed">
                        Book a time that works for you. We'll discuss your project and answer any
                        questions you may have.
                      </p>
                      <Button variant="primary" size="md" className="w-full shadow-md hover:shadow-lg transition-shadow" asChild>
                        <a
                          href="https://calendly.com/yourbrand"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Book a Meeting
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gradient-to-b from-background to-surface dark:to-surface-dark border-t border-border dark:border-border-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-h2 font-bold text-text-primary mb-4">Find Us</h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                Visit our office or get directions. We're located in the heart of the business
                district and welcome in-person meetings.
              </p>
            </div>
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-border dark:border-border-dark bg-gradient-to-br from-primary/5 to-secondary/5">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576675!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Office Location - YourBrand"
                aria-label="Interactive map showing YourBrand office location at 123 Business Street, City, State 12345"
              />
              {/* Fallback overlay - shown when map doesn't load */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-center p-8 bg-background/90 dark:bg-surface-dark/90 rounded-xl backdrop-blur-sm">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-body-lg text-text-primary font-semibold">123 Business Street</p>
                  <p className="text-body text-text-secondary mt-2">Suite 500</p>
                  <p className="text-body text-text-secondary">City, State 12345</p>
                  <a
                    href="https://maps.google.com/?q=123+Business+Street+City+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm text-primary hover:underline"
                  >
                    Get Directions
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
            {/* Address Card Below Map */}
            <div className="mt-8 flex justify-center">
              <Card className="max-w-md shadow-lg">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-h4 font-semibold text-text-primary mb-2">Our Office</h3>
                  <p className="text-body text-text-secondary whitespace-pre-line">
                    123 Business Street, Suite 500{'\n'}
                    City, State 12345{'\n'}
                    United States
                  </p>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <a
                      href="https://maps.google.com/?q=123+Business+Street+City+State"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
