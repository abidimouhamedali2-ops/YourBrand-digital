# 🚀 Quick Setup Guide

Follow these steps to get your professional website up and running.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and configure:

```env
# For development, use SQLite (no setup needed)
DATABASE_URL="file:./dev.db"

# Or use PostgreSQL
# DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_NAME="Your Website Name"
```

## Step 3: Initialize Database

```bash
# Generate Prisma Client
npm run db:generate

# Create database and tables
npm run db:push
```

## Step 4: Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🎉 You're Ready!

Your website is now running. Start customizing:

1. **Update Branding**: Change "YourBrand" to your brand name
2. **Customize Colors**: Edit `tailwind.config.ts`
3. **Add Content**: Update pages in `app/` directory
4. **Configure Database**: Add your services and blog posts

## 📚 Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Check [PROJECT_PLAN.md](./PROJECT_PLAN.md) for architecture details
- Customize components in `components/` directory
- Add your content and images

## 🆘 Troubleshooting

### Database Issues

If you get database errors:

```bash
# Reset database (SQLite)
rm prisma/dev.db
npm run db:push

# Or for PostgreSQL, check connection string
```

### Port Already in Use

```bash
# Use a different port
PORT=3001 npm run dev
```

### TypeScript Errors

```bash
# Regenerate types
npm run type-check
```

---

**Need Help?** Check the [README.md](./README.md) for more information.

