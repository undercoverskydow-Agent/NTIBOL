# N TI BOL - Quick Reference Guide

## 🚀 Start Development in 30 Seconds

```bash
cd /workspaces/NTIBOL
npm run dev
# Visit http://localhost:3000
```

## 📂 Project Directory Quick Reference

| Path | Purpose |
|------|---------|
| `app/` | Next.js app router, layouts, main page |
| `components/navigation/` | Navigation header component |
| `components/sections/` | 8 page sections (Hero, Story, Experience, etc.) |
| `lib/constants.ts` | Menu items, restaurant info, reviews |
| `lib/types.ts` | TypeScript type definitions |
| `lib/animations.ts` | GSAP & Framer Motion utilities |
| `tailwind.config.ts` | Color palette and Tailwind config |
| `.env.example` | Environment variables template |

## 🎨 Components Quick Reference

| Component | Location | Features |
|-----------|----------|----------|
| **Navigation** | `components/navigation/` | Sticky header, mobile menu |
| **HeroSection** | `components/sections/` | Animated bowl, scroll-triggered |
| **StorySection** | `components/sections/` | Ingredient timeline |
| **ExperienceSection** | `components/sections/` | Horizontal scroll |
| **FoodExplorerSection** | `components/sections/` | 6 interactive dish cards |
| **OrderingSection** | `components/sections/` | 5-step order flow |
| **SocialProofSection** | `components/sections/` | Reviews & stats |
| **LocationSection** | `components/sections/` | Address, hours, delivery |
| **FinalCTASection** | `components/sections/` | Final call-to-action |

## 🔧 Common Tasks

### Update Menu Items
```typescript
// Edit: lib/constants.ts
export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Dish Name',
    price: 150,
    // ... update fields
  },
];
```

### Update Restaurant Info
```typescript
// Edit: lib/constants.ts
export const RESTAURANT_INFO = {
  name: 'N TI BOL',
  address: 'Update address here',
  phone: '+230 XXXX XXXX',
  // ... update other fields
};
```

### Update Colors
```typescript
// Edit: tailwind.config.ts
colors: {
  gold: {
    400: '#f8b855', // Update this
  },
  // ... other colors
}
```

### Add Environment Variables
```bash
# Copy example
cp .env.example .env.local

# Edit and add values
NEXT_PUBLIC_WHATSAPP_PHONE=+230XXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

## 🏃 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run type-check` | Check TypeScript types |
| `npm install` | Install dependencies |

## 🎯 Section Navigation (In Code)

Each section component is imported and used in `app/page.tsx`:

```typescript
import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
// ... etc
```

To add a new section:
1. Create `components/sections/NewSection.tsx`
2. Add to `app/page.tsx`
3. Use 'use client' directive if needed
4. Add animations (GSAP/Framer Motion)

## 🎨 Animation Quick Reference

### GSAP ScrollTrigger
```typescript
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 1,
  },
  // animation properties
});
```

### Framer Motion
```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## 📱 Responsive Breakpoints

Tailwind CSS responsive prefixes:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

## 🌐 Deployment

### Vercel
```bash
vercel
# Auto-deploys on git push
```

### Docker
```bash
docker build -t ntibol .
docker run -p 3000:3000 ntibol
```

### Self-Hosted
```bash
npm run build
npm run start
# Then configure reverse proxy (nginx, etc.)
```

## 🔐 Environment Variables

Get these from:
1. **WhatsApp**: Business account phone number
2. **Google Maps**: API console
3. **Cloudinary**: Optional, for image optimization
4. **Google Analytics**: GA4 property ID

## 📊 Data Structure

### Menu Item
```typescript
{
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  ingredients: string[];
  category: 'main' | 'sandwich';
}
```

### Order
```typescript
{
  customerName: string;
  customerPhone: string;
  orderType: 'pickup' | 'delivery';
  date: string;
  time: string;
  items: CartItem[];
  total: number;
}
```

## 🎯 SEO Pages to Create

- `/mine-bouille`
- `/panini-poulet`
- `/panini-agneau`
- `/halim-quatre-bornes`
- `/salmi-poulet`
- `/boulettes-quatre-bornes`
- `/livraison-quatre-bornes`

Each should:
- Be dynamic with slug parameter
- Include 1000+ word content
- Add Schema.org markup
- Customize Open Graph

## 🐛 Debugging Tips

```bash
# Check for errors
npm run type-check

# Build in debug mode
npm run build -- --debug

# Check bundle size
npm run build && npm run analyze
```

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **GSAP Docs**: https://greensock.com/docs/v3
- **Framer Motion**: https://www.framer.com/motion/

## 📝 File Naming Conventions

- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utils: camelCase (e.g., `animations.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `MENU_ITEMS`)
- Types: PascalCase (e.g., `MenuItem`)

## 🚨 Common Issues & Solutions

### Issue: Dev server won't start
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Issue: TypeScript errors after changes
```bash
npm run type-check
# Fix errors shown in output
```

### Issue: CSS not updating
```bash
# Rebuild Tailwind cache
rm -rf .next
npm run dev
```

### Issue: Animations not smooth
- Check browser hardware acceleration
- Reduce animation complexity
- Use `will-change` CSS property

## ✅ Pre-Deployment Checklist

- [ ] Environment variables set in .env.local
- [ ] Restaurant info updated in constants.ts
- [ ] Menu prices correct
- [ ] WhatsApp phone number configured
- [ ] Build passes without errors (`npm run build`)
- [ ] Mobile responsive verified
- [ ] Analytics configured
- [ ] Favicon added (if needed)
- [ ] Domain pointing to server
- [ ] SSL certificate installed

## 🎓 Learning Resources

**GSAP ScrollTrigger**
- Docs: https://greensock.com/docs/v3/Plugins/ScrollTrigger

**Framer Motion**
- Docs: https://www.framer.com/motion/
- Examples: https://www.framer.com/motion/

**Tailwind CSS**
- Customization: https://tailwindcss.com/docs/configuration
- Plugins: https://tailwindcss.com/docs/plugins

**Next.js 15**
- App Router: https://nextjs.org/docs/app
- Layouts: https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates

## 📞 Support

For issues or questions:
1. Check documentation files (README.md, SETUP.md)
2. Review COMPLETION_SUMMARY.md
3. Check code comments in components
4. Verify environment variables

---

**Last Updated**: June 9, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
