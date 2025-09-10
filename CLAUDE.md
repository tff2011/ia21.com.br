# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IA21 Educação is an AI education platform built with Next.js 15 (App Router), shadcn/ui, Sanity CMS, NextAuth.js, tRPC, and Prisma ORM. The application supports dual themes (gold for "Para Você", blue for "Para Empresas") and includes user authentication, program enrollment, and content management.

## Architecture

### Tech Stack
- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **UI**: shadcn/ui components, Tailwind CSS 4, Radix UI primitives
- **Backend**: tRPC for type-safe APIs, Prisma ORM with PostgreSQL
- **CMS**: Sanity for blog content management
- **Authentication**: NextAuth.js with Google OAuth and credentials
- **State Management**: TanStack React Query (via tRPC)

### Key Files & Directories
- `app/`: Next.js App Router structure with grouped routes
- `lib/`: Core utilities (auth, database, tRPC, Sanity clients)
- `components/ui/`: shadcn/ui components 
- `prisma/schema.prisma`: Database schema with User, Company, Program, Enrollment models
- `schemas/`: Sanity CMS schema definitions (Post, Author, Category)

### Database Models
- **User**: Authentication with roles (visitor, aluno, mentor, empresa_admin, staff)
- **Company**: Enterprise client management
- **Program**: Courses with themes (gold/blue), pricing, enrollment
- **Enrollment**: User-program relationships with status tracking

### Route Structure
- `/`: Homepage
- `/para-voce`: Personal education section (gold theme)
- `/para-empresas`: Business education section (blue theme)
- `/programas/[slug]`: Individual program pages
- `/conteudos`: Blog listing
- `/dashboard`: User dashboard
- `/login`, `/signup`: Authentication pages
- `/(studio)/studio`: Sanity CMS admin

## Development Commands

### Core Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run type-check   # TypeScript type checking
```

### Database Commands
```bash
npm run db:studio    # Open Prisma Studio
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:reset     # Reset database
```

### Sanity CMS Commands
```bash
npm run sanity       # Start Sanity Studio locally
npm run sanity:build # Build Sanity Studio
npm run sanity:deploy # Deploy Sanity Studio
```

## Code Guidelines

### Styling
- Use Tailwind classes exclusively for styling
- Implement dual theme system using CSS custom properties
- Gold theme: `--brand-gold: #C8A64B`
- Blue theme: `--brand-blue: #1C3B6F`

### Components
- Follow shadcn/ui patterns and conventions
- Use TypeScript with proper type definitions
- Implement accessibility features (tabindex, aria-labels, keyboard navigation)
- Use descriptive naming with "handle" prefix for event functions
- Prefer const functions over function declarations
- Implement early returns for better readability

### Authentication & Authorization
- User roles: visitor, aluno, mentor, empresa_admin, staff
- Use `protectedProcedure` for authenticated routes
- Use `staffProcedure` for admin-only functionality
- NextAuth.js handles both OAuth and credentials authentication

### API Layer
- All API calls use tRPC for type safety
- Routers located in `lib/routers/`
- Use `publicProcedure`, `protectedProcedure`, or `staffProcedure`
- Validation with Zod schemas

### Environment Variables
Required variables (see `env.example.txt`):
- `DATABASE_URL`: PostgreSQL connection
- `NEXTAUTH_URL`, `NEXTAUTH_SECRET`: Authentication
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`: OAuth
- `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`, `SANITY_READ_TOKEN`: CMS

## Development Notes

### Current Implementation Status
- ✅ Core Next.js structure and routing
- ✅ Database schema and Prisma setup
- ✅ Authentication system (NextAuth.js)
- ✅ tRPC API layer with type safety
- ✅ Sanity CMS configuration
- ✅ shadcn/ui component library
- ✅ Dual theme system (gold/blue)
- ✅ SEO setup (metadata, sitemap, robots)

### Path Aliases
- `@/*`: Maps to project root (configured in tsconfig.json)

### Code Quality
Always run linting and type checking before commits:
```bash
npm run lint && npm run type-check
```