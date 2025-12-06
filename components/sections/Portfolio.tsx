'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SafeImage from '@/components/ui/SafeImage'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features and seamless user experience.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['React', 'Next.js', 'TypeScript', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application for iOS and Android.',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    link: '#',
  },
  {
    id: '3',
    title: 'Cloud Migration',
    description: 'Successful migration of enterprise infrastructure to cloud with zero downtime.',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    link: '#',
  },
  {
    id: '4',
    title: 'SaaS Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['Vue.js', 'D3.js', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    id: '5',
    title: 'Healthcare App',
    description: 'Patient management system with telemedicine capabilities.',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['Flutter', 'Firebase', 'HIPAA'],
    link: '#',
  },
  {
    id: '6',
    title: 'AI-Powered Analytics',
    description: 'Machine learning platform for predictive business analytics.',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80&auto=format',
    tags: ['Python', 'TensorFlow', 'React'],
    link: '#',
  },
]

const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Strategy']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 bg-surface dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-text-primary dark:text-text-primary-dark mb-4">
              Our Portfolio
            </h2>
            <p className="text-body-lg text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform their
              digital presence.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-background dark:bg-surface-dark text-text-secondary dark:text-text-secondary-dark hover:bg-surface dark:hover:bg-surface-dark'
                }`}
              >
                <Filter className="inline h-4 w-4 mr-2" />
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  hover
                  onClick={() => setSelectedProject(project)}
                  className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <SafeImage
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      fallbackClassName="bg-gradient-to-br from-primary/20 to-secondary/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className="text-xs text-primary font-medium mb-2 block">
                          {project.category}
                        </span>
                        <CardTitle>{project.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded text-xs bg-primary/10 text-primary dark:bg-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-background dark:bg-surface-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="relative h-64 md:h-96 w-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <SafeImage
                    src={selectedProject.image}
                    alt={`${selectedProject.title} - ${selectedProject.description}`}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-t-2xl"
                    fallbackClassName="bg-gradient-to-br from-primary/20 to-secondary/20"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm text-primary font-medium mb-2 block">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-h2 font-bold text-text-primary dark:text-text-primary-dark mb-2">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                          aria-label="View project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-surface dark:bg-surface-dark text-text-primary dark:text-text-primary-dark hover:bg-border dark:hover:bg-border-dark transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-body text-text-secondary dark:text-text-secondary-dark mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary dark:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

