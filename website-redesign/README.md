# Next.js + Tailwind CSS + shadcn/ui Template

A modern, production-ready website template built with Next.js 15, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Next.js 15** - Latest version with App Router and Server Components
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🧩 **shadcn/ui** - Beautiful, accessible component library built with Radix UI
- 📝 **TypeScript** - Fully typed for better developer experience
- 🎯 **ESLint** - Code linting and formatting
- 📱 **Responsive Design** - Mobile-first approach
- 🌗 **Dark Mode Ready** - Built-in dark mode support

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
website-redesign/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── ui/              # shadcn/ui components
│       ├── navigation.tsx   # Navigation bar
│       ├── hero.tsx         # Hero section
│       ├── features.tsx     # Features section
│       ├── cta.tsx          # Call-to-action section
│       └── footer.tsx       # Footer
├── public/                  # Static assets
└── components.json          # shadcn/ui configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add tabs
```

## Customization

### Colors and Theme

Edit `src/app/globals.css` to customize the color scheme. The template uses CSS variables for theming:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}
```

### Fonts

The template uses Geist Sans and Geist Mono fonts. To change fonts, edit `src/app/layout.tsx`.

### Components

All components are located in `src/components/`. Feel free to modify them to match your design requirements:

- **Navigation** (`navigation.tsx`) - Update links and branding
- **Hero** (`hero.tsx`) - Customize headline and CTA buttons
- **Features** (`features.tsx`) - Add or modify feature cards
- **CTA** (`cta.tsx`) - Adjust the call-to-action section
- **Footer** (`footer.tsx`) - Update company info and links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's instructions for deploying Next.js applications.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This template is open source and available for personal and commercial use.
