# IA21 Educação

Uma plataforma completa de educação em desenvolvimento de software construída com Next.js 15, shadcn/ui, Sanity CMS, NextAuth, tRPC e Prisma.

## 🚀 Tecnologias

- **Frontend**: Next.js 15 (App Router, TypeScript)
- **UI**: shadcn/ui + Tailwind CSS
- **CMS**: Sanity (conteúdo do blog)
- **Autenticação**: NextAuth.js (Google OAuth + credenciais)
- **API**: tRPC (TypeScript-first RPC)
- **Banco de dados**: PostgreSQL + Prisma ORM
- **Deploy**: Docker + Coolify

## 📋 Pré-requisitos

- Node.js 20+
- PostgreSQL
- Conta no Sanity (para CMS)
- Conta no Google (para OAuth)

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd ia21.com.br
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp env.example.txt .env.local
   ```

   Edite o `.env.local` com suas configurações:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/ia21_db"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # Sanity CMS
   SANITY_PROJECT_ID="your-sanity-project-id"
   SANITY_DATASET="production"
   SANITY_API_VERSION="2025-01-01"
   SANITY_READ_TOKEN="your-sanity-read-token"
   ```

4. **Configure o banco de dados**
   ```bash
   # Gere o cliente Prisma
   npx prisma generate

   # Execute as migrações
   npx prisma db push
   ```

5. **Configure o Sanity**
   ```bash
   # Inicialize o Sanity (se necessário)
   npm create sanity@latest

   # Configure o projeto Sanity com o Project ID do passo anterior
   ```

6. **Execute o projeto**
   ```bash
   npm run dev
   ```

## 📁 Estrutura do Projeto

```
ia21.com.br/
├── app/                          # Next.js App Router
│   ├── (studio)/studio/[[...index]]/  # Sanity Studio
│   ├── api/                      # API Routes
│   ├── conteudos/                # Blog pages
│   ├── programas/                # Programs pages
│   ├── para-voce/                # Personal section
│   ├── para-empresas/            # Business section
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── sections/                 # Page sections
│   ├── blog/                     # Blog components
│   └── programs/                 # Program components
├── lib/                          # Utility libraries
│   ├── auth.ts                   # NextAuth config
│   ├── trpc.ts                   # tRPC config
│   ├── prisma.ts                 # Prisma client
│   └── sanity.client.ts          # Sanity client
├── prisma/                       # Database schema
│   └── schema.prisma
├── sanity/                       # Sanity configuration
│   ├── config.ts
│   └── schemas/
├── public/                       # Static assets
└── styles/                       # Global styles
```

## 🎨 Tema e Design

O projeto utiliza dois temas principais:

- **Dourado** (`theme-gold`): Para seção "Para Você"
- **Azul** (`theme-blue`): Para seção "Para Empresas"

### Cores principais:
```css
--brand-gold: #C8A64B
--brand-blue: #1C3B6F
```

## 📝 Schemas do Banco de Dados

### User
- `id`: String (CUID)
- `name`: String
- `email`: String (único)
- `role`: Role (visitor, aluno, mentor, empresa_admin, staff)
- `companyId`: String? (relacionamento com Company)

### Company
- `id`: String (CUID)
- `name`: String
- `contactEmail`: String?

### Program
- `id`: String (CUID)
- `slug`: String (único)
- `title`: String
- `summary`: String
- `format`: String
- `level`: String
- `duration`: String
- `price`: Float?
- `theme`: Theme (gold, blue)
- `published`: Boolean

### Enrollment
- `id`: String (CUID)
- `userId`: String
- `programId`: String
- `status`: EnrollmentStatus
- `createdAt`: DateTime
- `updatedAt`: DateTime

## 📚 Schemas do Sanity CMS

### Post
- `title`: String
- `slug`: Slug
- `excerpt`: Text
- `body`: Array (Portable Text)
- `coverImage`: Image
- `tags`: Array<String>
- `categories`: Array<Reference>
- `author`: Reference
- `publishedAt`: Datetime

### Author
- `name`: String
- `slug`: Slug
- `image`: Image
- `bio`: Text
- `email`: Email
- `website`: URL
- `social`: Object

### Category
- `title`: String
- `slug`: Slug
- `description`: Text
- `color`: String

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linting

# Database
npx prisma studio    # Interface gráfica do Prisma
npx prisma db push   # Aplica mudanças no schema
npx prisma generate  # Gera cliente Prisma

# Sanity
npm run sanity       # Abre Sanity Studio localmente
```

## 🚀 Deploy no Coolify (Nixpacks)

1. **Configure o repositório no Coolify**
2. **Selecione Nixpacks** como método de build
3. **Adicione as variáveis de ambiente** no painel do Coolify
4. **Configure o banco PostgreSQL** no Coolify
5. **Deploy automático** será feito quando fizer push para a branch main

### Arquivos de configuração:
- `nixpacks.toml` - Configuração do Nixpacks
- `package.json` - Scripts de build e start

### Variáveis de ambiente no Coolify:
- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`
- `SANITY_READ_TOKEN`

## 📊 Funcionalidades

### ✅ Implementadas
- [x] Estrutura Next.js 15 com App Router
- [x] Configuração shadcn/ui
- [x] Schema Prisma completo
- [x] Configuração NextAuth
- [x] Setup tRPC
- [x] Configuração Sanity CMS
- [x] Páginas principais (/, /para-voce, /para-empresas, /programas, /conteudos, /sobre)
- [x] Componentes de UI responsivos
- [x] SEO básico (metadata, sitemap, robots)
- [x] Dockerfile para deploy
- [x] Tema dourado/azul

### 🚧 Em desenvolvimento
- [ ] Funcionalidade completa do blog com Sanity
- [ ] Sistema de autenticação completo
- [ ] Dashboard do usuário
- [ ] Sistema de matrículas
- [ ] Painel administrativo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: contato@ia21.com.br
- WhatsApp: (11) 9999-9999

---

**IA21 Educação** - Transformando carreiras através da educação tecnológica.