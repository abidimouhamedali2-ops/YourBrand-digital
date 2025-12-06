import type { Metadata } from 'next'
import SafeImage from '@/components/ui/SafeImage'
import AnimatedSection from '@/components/ui/AnimatedSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  Target,
  Users,
  Award,
  Heart,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
  Shield,
  Calendar,
  Globe,
  Code,
  Rocket,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | YourBrand - Leading Technology Solutions Provider',
  description:
    'Learn about our mission, vision, values, and the expert team behind YourBrand. We are committed to delivering exceptional technology solutions that drive your business success.',
  openGraph: {
    title: 'About Us | YourBrand',
    description:
      'Learn about our mission, values, and the expert team behind YourBrand. We are committed to delivering exceptional technology solutions.',
    type: 'website',
  },
}

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description:
      'We are committed to helping businesses achieve their goals through innovative technology solutions that create measurable impact.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description:
      'Your success is our success. We prioritize understanding your unique needs and delivering tailored solutions that exceed expectations.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We maintain the highest standards in everything we do, from initial consultation to final implementation and ongoing support.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We build trust through transparency, honesty, and ethical practices in all our business relationships and interactions.',
    color: 'from-red-500 to-rose-500',
  },
]

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '500+ successful projects delivered with 98% client satisfaction rate',
    stat: '500+',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies and methodologies to stay ahead',
    stat: '15+',
  },
  {
    icon: Shield,
    title: 'Reliable Partnership',
    description: 'Long-term relationships built on trust, quality, and consistent delivery',
    stat: '98%',
  },
  {
    icon: CheckCircle2,
    title: 'End-to-End Support',
    description: 'From strategy to implementation and beyond, we support you every step of the way',
    stat: '24/7',
  },
]

const timeline = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through technology',
    icon: Rocket,
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients across 20+ countries',
    icon: Globe,
  },
  {
    year: '2018',
    title: '500+ Projects',
    description: 'Reached milestone of 500 successful project deliveries',
    icon: Code,
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as a top technology solutions provider',
    icon: Award,
  },
]

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-h1 font-bold text-text-primary mb-6">About Us</h1>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to transforming businesses through
            innovative technology solutions. With years of experience and a commitment to
            excellence, we help companies achieve their goals and reach new heights in the digital
            landscape.
          </p>
        </div>

        {/* Who We Are Section with Image */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold text-text-primary mb-6">Who We Are</h2>
              <div className="space-y-4 text-body text-text-secondary">
                <p>
                  Founded with a vision to bridge the gap between technology and business success,
                  YourBrand has grown into a trusted partner for companies seeking digital
                  transformation. Our team combines deep technical expertise with business acumen to
                  deliver solutions that drive real results.
                </p>
                <p>
                  We specialize in modern web development, cloud solutions, mobile applications, and
                  digital strategy. Our approach is collaborative, transparent, and results-oriented.
                  We don't just build software—we build partnerships that help your business thrive.
                </p>
                <p>
                  With offices across multiple regions and a global team of experts, we bring
                  together diverse perspectives and skills to tackle complex challenges and deliver
                  exceptional outcomes for our clients.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-body-sm text-text-secondary">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-body-sm text-text-secondary">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-body-sm text-text-secondary">Award-Winning Team</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <SafeImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=800&fit=crop&q=80&auto=format"
                alt="Our professional team working together on innovative technology solutions - Diverse group of experts collaborating in a modern workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder={
                  <div className="text-center p-8">
                    <Users className="h-16 w-16 mx-auto mb-4 text-primary/50" />
                    <p className="text-body-lg text-text-primary font-semibold">Our Team</p>
                    <p className="text-body-sm text-text-secondary mt-2">50+ Expert Professionals</p>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-8 md:p-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-h2 font-bold text-text-primary mb-6">Our Mission</h2>
              <p className="text-body-lg text-text-secondary leading-relaxed">
              To empower businesses of all sizes with cutting-edge technology solutions that drive
              growth, enhance efficiency, and create lasting value. We believe in building
                partnerships, not just delivering projects. Our mission is to be the catalyst that
                transforms your vision into reality through innovative technology and unwavering
                commitment to excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 rounded-2xl p-8 md:p-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mb-6">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-h2 font-bold text-text-primary mb-6">Our Vision</h2>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                To become the world's most trusted technology partner, recognized for innovation,
                excellence, and transformative impact. We envision a future where every business,
                regardless of size, has access to world-class technology solutions that enable them
                to compete, grow, and thrive in the digital economy.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="mb-20">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <AnimatedSection delay={0.1}>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="text-body-sm text-text-secondary">Happy Clients</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={1000} suffix="+" />
                    </div>
                    <div className="text-body-sm text-text-secondary">Projects Completed</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={98} suffix="%" />
                    </div>
                    <div className="text-body-sm text-text-secondary">Client Satisfaction</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-body-sm text-text-secondary">Team Members</div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-text-primary mb-4">Our Journey</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              A timeline of our growth and milestones over the years
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 text-center md:text-right md:pr-8">
                      {index % 2 === 0 && (
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                          <h3 className="text-h4 font-semibold text-text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-body text-text-secondary">{item.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10">
                      <div className="h-16 w-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left md:pl-8">
                      {index % 2 !== 0 && (
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                          <h3 className="text-h4 font-semibold text-text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-body text-text-secondary">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-text-primary mb-4">Our Values</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and
              each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div
                      className={`h-16 w-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 shadow-md`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="bg-surface rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-text-primary mb-4">Why Choose Us</h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results
                that drive your business forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-h4 font-semibold text-text-primary">{item.title}</h3>
                        <span className="text-2xl font-bold text-primary">{item.stat}</span>
                      </div>
                      <p className="text-body text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-text-primary mb-4">Our Team</h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of combined experience in
              technology, design, and business strategy.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-body text-text-secondary">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-body text-text-secondary">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-body text-text-secondary">Countries Served</div>
              </div>
            </div>
            <p className="text-body-lg text-text-secondary text-center max-w-3xl mx-auto">
              We are united by our passion for innovation and our commitment to delivering
              exceptional results for our clients. From developers and designers to strategists and
              project managers, every team member plays a crucial role in our success.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="relative h-64 w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop&q=80&auto=format"
                  alt="Our modern office workspace - Collaborative environment for innovation with open spaces, modern furniture, and technology infrastructure"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  placeholder={
                    <div className="text-center">
                      <Calendar className="h-12 w-12 mx-auto mb-3 text-primary/50" />
                      <p className="text-body text-text-primary font-semibold">Our Office</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
