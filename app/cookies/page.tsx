import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Cookie, Settings } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Cookie Policy | YourBrand',
  description:
    'Learn about how YourBrand uses cookies and similar technologies to enhance your browsing experience and improve our services.',
}

export default function CookiesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-text-secondary hover:text-primary mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-h1 font-bold text-text-primary mb-4">Cookie Policy</h1>
          <p className="text-body-lg text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to the website
                owners.
              </p>
              <p>
                Cookies allow a website to recognize your device and store some information about your preferences or
                past actions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                How We Use Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core functionality such
                  as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Marketing Cookies</h3>
                <p>
                  These cookies are used to track visitors across websites to display relevant advertisements and measure
                  campaign effectiveness.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking
                cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p>Most browsers allow you to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>See what cookies you have and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 bg-surface rounded-lg">
                <p className="font-semibold text-text-primary">YourBrand</p>
                <p>Email: privacy@yourbrand.com</p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Address: 123 Business Street, City, State 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

