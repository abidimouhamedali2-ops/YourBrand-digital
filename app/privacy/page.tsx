import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Privacy Policy | YourBrand',
  description:
    'Learn how YourBrand collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
}

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-h1 font-bold text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-body-lg text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                At YourBrand, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
              <p>
                By using our website, you consent to the data practices described in this policy. If you do not agree
                with the practices described in this policy, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Personal Information</h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Register for an account</li>
                  <li>Fill out a contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Automatically Collected Information</h3>
                <p>
                  We automatically collect certain information about your device and how you interact with our website,
                  including IP address, browser type, pages visited, and time spent on pages.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage and trends</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body text-text-secondary">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at:
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

