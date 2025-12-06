import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | YourBrand - Technology Insights and Updates',
  description:
    'Stay updated with the latest insights, tips, and news from our team. Learn about technology trends, best practices, web development, and industry updates.',
  keywords: [
    'technology blog',
    'web development blog',
    'tech insights',
    'development tips',
    'industry news',
  ],
  openGraph: {
    title: 'Blog | YourBrand',
    description:
      'Stay updated with the latest insights, tips, and news from our team. Learn about technology trends, best practices, and industry updates.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

