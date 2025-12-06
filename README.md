# 🚀 Professional Full-Stack Website

A modern, production-ready website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma. This project demonstrates best practices for building scalable, performant, and accessible web applications.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- ⚡ **High Performance** - Optimized for speed with Next.js 14 App Router
- 🔒 **Type-Safe** - Full TypeScript support with Zod validation
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG 2.1 compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, and structured data
- 📝 **Form Handling** - Contact and newsletter forms with validation
- 🗄️ **Database Ready** - Prisma ORM with PostgreSQL/SQLite support
- 🎭 **State Management** - Zustand for client-side state
- 🧪 **Testing Ready** - Jest and Playwright configured
- 🚀 **Deployment Ready** - Optimized for Vercel, Netlify, or Docker

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Database**: Prisma ORM (PostgreSQL/SQLite)
- **Validation**: Zod

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or **yarn** / **pnpm**)
- **PostgreSQL** (optional, SQLite can be used for development)

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Navigate to the project directory
cd professional-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Setup

Copy the example environment file and configure it:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Database (use SQLite for development)
DATABASE_URL="file:./dev.db"

# Or use PostgreSQL
# DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_NAME="Your Website Name"
```

### 3. Database Setup

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database (creates tables)
npm run db:push

# Or run migrations (for production)
npm run db:migrate
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
professional-website/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/               # UI components
│   └── forms/            # Form components
├── lib/                   # Utility functions
│   ├── prisma.ts         # Prisma client
│   ├── utils.ts          # Helper functions
│   └── validations.ts    # Zod schemas
├── prisma/                # Database schema
│   └── schema.prisma
├── public/               # Static assets
├── store/                # State management
├── hooks/                # Custom React hooks
└── types/                # TypeScript types
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#6366F1',  // Your primary color
    dark: '#4F46E5',
    light: '#818CF8',
  },
  // ... more colors
}
```

### Typography

Fonts are configured in `app/layout.tsx`. Update the font imports and variables as needed.

### Content

- **Services**: Edit `app/services/page.tsx` or fetch from database
- **Blog Posts**: Edit `app/blog/page.tsx` or fetch from database
- **Navigation**: Update `components/layout/Header.tsx`
- **Footer**: Update `components/layout/Footer.tsx`

## 🗄️ Database Management

### View Database (Prisma Studio)

```bash
npm run db:studio
```

This opens a visual database browser at `http://localhost:5555`

### Create Migration

```bash
npm run db:migrate
```

### Reset Database (Development)

```bash
# Delete the database file (SQLite)
rm prisma/dev.db

# Or reset PostgreSQL database
# Then run:
npm run db:push
```

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm test

# Watch mode
npm run test:watch

# E2E tests
npm run test:e2e
```

## 📦 Building for Production

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy (automatic on push)

### Netlify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables
4. Deploy

### Docker

1. Build the image:
   ```bash
   docker build -t professional-website .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 professional-website
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types
- `npm test` - Run tests
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## 📝 Environment Variables

See `.env.example` for all available environment variables. Key variables:

- `DATABASE_URL` - Database connection string
- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_SITE_NAME` - Your site name
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID` - Meta Pixel ID (optional)

## 🔒 Security Best Practices

- ✅ Input validation with Zod
- ✅ Rate limiting on API routes
- ✅ CSRF protection (Next.js built-in)
- ✅ Environment variables for secrets
- ✅ SQL injection prevention (Prisma)
- ✅ XSS protection (React)

## 📊 Performance Optimization

- ✅ Image optimization with `next/image`
- ✅ Code splitting (automatic)
- ✅ Font optimization
- ✅ Lazy loading
- ✅ Static generation where possible

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast (WCAG 2.1 AA)
- ✅ Screen reader support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support, email info@yourbrand.com or open an issue in the repository.

## 🎯 Next Steps

After setting up the project:

1. **Customize Content**: Update text, images, and branding
2. **Configure Database**: Set up PostgreSQL for production
3. **Add Email Service**: Integrate Resend, SendGrid, or similar
4. **Set Up Analytics**: Add Google Analytics and Meta Pixel
5. **Configure Domain**: Point your domain to the deployment
6. **Add Authentication**: Set up NextAuth.js if needed
7. **SEO Optimization**: Add sitemap, robots.txt, and verify with Google Search Console

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

