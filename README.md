# AURUM TRUST - Premium Pawn Shop Website

เว็บไซต์รับจำนำมาตรฐานพรีเมียม รับจำนำทอง มือถือ นาฬิกา แบรนด์เนม

## 🚀 Features

- ✅ ระบบประเมินราคาออนไลน์
- ✅ SEO-Optimized (Schema.org, Meta Tags)
- ✅ Responsive Design
- ✅ React + TypeScript + Tailwind CSS
- ✅ Multi-page with React Router
- ✅ Blog System
- ✅ 3 Pillar Pages (Gold, Phone, Luxury)

## 📦 Tech Stack

- **Frontend**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm 10+
- **SEO**: react-helmet-async

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🌐 Deploy to GitHub Pages

### Step 1: เตรียม Repository

1. สร้าง repository ใหม่บน GitHub
2. แก้ไข `vite.config.ts` เปลี่ยน `'repo-name'` เป็นชื่อ repo ของคุณ:

```typescript
base: process.env.NODE_ENV === 'production' ? '/repo-name/' : '/',
```

3. แก้ไข `package.json` เปลี่ยน URL:

```json
"homepage": "https://YOUR-USERNAME.github.io/repo-name"
```

### Step 2: เปิดใช้ GitHub Pages

1. ไปที่ Settings → Pages
2. Source: เลือก "GitHub Actions"
3. Save

### Step 3: Push Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/repo-name.git
git push -u origin main
```

### Step 4: รอ Deployment

- ไปที่ Actions tab เพื่อดูสถานะการ deploy
- เมื่อเสร็จสิ้น เว็บไซต์จะพร้อมใช้งานที่ `https://YOUR-USERNAME.github.io/repo-name`

## 📝 Alternative: Deploy with Custom Domain

ถ้าต้องการใช้โดเมนของตัวเอง (ไม่ใช่ GitHub Pages):

1. แก้ไข `src/app/routes.tsx`:
```typescript
// เปลี่ยนจาก
const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter;

// เป็น
const createRouter = createBrowserRouter;
```

2. แก้ไข `vite.config.ts`:
```typescript
base: '/', // ลบ base path
```

3. Deploy ไปยัง hosting ที่รองรับ SPA routing (Vercel, Netlify, etc.)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/       # Shared components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── GoldPawnPage.tsx
│   │   ├── PhonePawnPage.tsx
│   │   ├── LuxuryPawnPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── articles/
│   │       └── GoldPawn1BahtArticle.tsx
│   ├── layouts/         # Layout components
│   │   └── RootLayout.tsx
│   ├── routes.tsx       # Router configuration
│   └── App.tsx          # Main app component
└── styles/
    ├── theme.css        # Theme variables
    └── fonts.css        # Font imports
```

## 🎨 Color Scheme

```css
--aurum-gold: #D4AF37
--aurum-navy: #172337
--aurum-dark-navy: #0F1825
--aurum-teal: #5A8B8C
```

## 📄 SEO Pages

1. **Homepage** (`/`) - Landing page with all sections
2. **Gold Pawn** (`/services/gold`) - SEO pillar page for gold pawn
3. **Phone Pawn** (`/services/phone`) - SEO pillar page for phone pawn
4. **Luxury Pawn** (`/services/luxury`) - SEO pillar page for luxury items
5. **Blog** (`/blog`) - Blog index with articles
6. **Article** (`/blog/gold-pawn-1-baht-2026`) - Example SEO article

## 🔧 Configuration

### Base Path (สำคัญสำหรับ GitHub Pages!)

ถ้า deploy บน GitHub Pages จะต้องตั้ง base path เป็นชื่อ repository:

```typescript
// vite.config.ts
base: '/repo-name/'
```

### Router Mode

- **Production (GitHub Pages)**: HashRouter (`/#/path`)
- **Development**: BrowserRouter (`/path`)

## 📱 Features Details

### Price Estimator
- Real-time price calculation
- Support for: Gold, Phone, Watch, Luxury items
- Condition-based pricing
- LINE integration CTA

### SEO Optimization
- Schema.org LocalBusiness markup
- Meta tags (title, description, keywords)
- Open Graph tags
- Semantic HTML
- Internal linking
- FAQ Schema

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly UI
- Mobile navigation menu

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

AURUM TRUST
- Phone: 082-717-2250
- Email: aurumtrust16@gmail.com
- Address: 123 ถนนพระราม 3 แขวงช่องนนทรี เขตยานนาวา กรุงเทพฯ 10120

## 📜 License

This project is private and proprietary.

---

Made with ❤️ by AURUM TRUST Team
