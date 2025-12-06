import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Terms of Service | YourBrand',
  description:
    'Read our terms of service to understand the rules and regulations for using YourBrand services and website.',
}

export default function TermsPage() {
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
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-h1 font-bold text-text-primary mb-4">Terms of Service</h1>
          <p className="text-body-lg text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                Permission is granted to temporarily download one copy of the materials on YourBrand's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                The materials on YourBrand's website are provided on an 'as is' basis. YourBrand makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                In no event shall YourBrand or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or
                inability to use the materials on YourBrand's website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revisions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                YourBrand may revise these terms of service at any time without notice. By using this website you are
                agreeing to be bound by the then current version of these terms of service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="mt-4 p-4 bg-surface rounded-lg">
                <p className="font-semibold text-text-primary">YourBrand</p>
                <p>Email: legal@yourbrand.com</p>
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

