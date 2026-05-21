# 🚀 คู่มือการ Deploy AURUM TRUST Website

## วิธีที่ 1: Deploy บน GitHub Pages (แนะนำ)

### ✅ ข้อดี
- ฟรี 100%
- ตั้งค่าง่าย
- Auto-deploy เมื่อ push code
- SSL/HTTPS ให้อัตโนมัติ

### ⚠️ ข้อจำกัด
- URL จะเป็น `https://username.github.io/repo-name`
- ถ้าต้องการโดเมนของตัวเอง ต้องซื้อและตั้งค่าเพิ่ม

### 📝 ขั้นตอนการ Deploy

#### 1. เตรียม Repository

```bash
# สร้าง repository ใหม่บน GitHub ก่อน
# จากนั้นรันคำสั่งเหล่านี้ในโปรเจกต์

git init
git add .
git commit -m "Initial commit: AURUM TRUST website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

#### 2. แก้ไข Configuration Files

**แก้ไข `vite.config.ts`** (บรรทัด 7):
```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

**แก้ไข `package.json`** (หลังบรรทัด 11):
```json
"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
```

**ตัวอย่าง:**
- ถ้า username = `somchai123`
- ถ้า repo name = `aurum-trust`
- แก้เป็น:
  ```typescript
  base: process.env.NODE_ENV === 'production' ? '/aurum-trust/' : '/',
  ```
  ```json
  "homepage": "https://somchai123.github.io/aurum-trust",
  ```

#### 3. Commit และ Push การเปลี่ยนแปลง

```bash
git add vite.config.ts package.json
git commit -m "Configure for GitHub Pages deployment"
git push
```

#### 4. เปิดใช้งาน GitHub Pages

1. ไปที่ repository บน GitHub
2. คลิก **Settings** (เมนูบนขวา)
3. คลิก **Pages** (เมนูซ้าย)
4. ที่ **Source** เลือก **"GitHub Actions"**
5. คลิก **Save**

#### 5. รอการ Deploy

1. ไปที่แท็บ **Actions**
2. จะเห็น workflow "Deploy to GitHub Pages" กำลังรัน
3. รอประมาณ 2-5 นาที
4. เมื่อเห็นเครื่องหมาย ✅ สีเขียว แสดงว่า deploy สำเร็จ

#### 6. เปิดเว็บไซต์

ไปที่ `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## วิธีที่ 2: Deploy บน Vercel (สำหรับ Production)

### ✅ ข้อดี
- Performance ดีกว่า GitHub Pages
- รองรับ Custom Domain ฟรี
- Auto-deploy
- Analytics ฟรี

### 📝 ขั้นตอน

#### 1. สร้างบัญชี Vercel

ไปที่ [vercel.com](https://vercel.com) และสมัครด้วย GitHub

#### 2. แก้ไข Router Mode

**แก้ไข `src/app/routes.tsx`** (บรรทัด 12-13):
```typescript
// ลบบรรทัดนี้
const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter;

// เปลี่ยนเป็น
const createRouter = createBrowserRouter;
```

**แก้ไข `vite.config.ts`** (บรรทัด 7):
```typescript
base: '/', // เปลี่ยนเป็น root path
```

#### 3. Push Code

```bash
git add .
git commit -m "Configure for Vercel deployment"
git push
```

#### 4. Import Project

1. ไปที่ [Vercel Dashboard](https://vercel.com/dashboard)
2. คลิก **"Add New Project"**
3. เลือก repository ของคุณ
4. คลิก **"Import"**
5. ตั้งค่า:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
6. คลิก **"Deploy"**

#### 5. รอการ Deploy

รอประมาณ 1-3 นาที เสร็จแล้วจะได้ URL ฟรีแบบนี้:
`https://aurum-trust.vercel.app`

#### 6. ตั้งค่า Custom Domain (Optional)

1. ซื้อโดเมน (เช่น `aurumtrustco.com`)
2. ไปที่ Project Settings → Domains
3. เพิ่มโดเมนของคุณ
4. ตั้งค่า DNS ตามคำแนะนำ

---

## วิธีที่ 3: Deploy บน Netlify

### 📝 ขั้นตอน

#### 1. สร้างบัญชี Netlify

ไปที่ [netlify.com](https://netlify.com)

#### 2. แก้ไข Router Mode (เหมือน Vercel)

```typescript
// src/app/routes.tsx
const createRouter = createBrowserRouter;
```

```typescript
// vite.config.ts
base: '/',
```

#### 3. สร้างไฟล์ `netlify.toml`

```bash
cat > netlify.toml << 'EOF'
[build]
  command = "pnpm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
```

#### 4. Push Code

```bash
git add .
git commit -m "Configure for Netlify deployment"
git push
```

#### 5. Deploy

1. ไปที่ Netlify Dashboard
2. คลิก "Add new site" → "Import an existing project"
3. เชื่อมต่อ GitHub
4. เลือก repository
5. ตั้งค่า:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
6. คลิก "Deploy site"

---

## 🔧 Troubleshooting

### ปัญหา: หน้าอื่นๆ ที่ไม่ใช่ homepage แสดง 404

**สาเหตุ**: GitHub Pages ไม่รองรับ client-side routing

**วิธีแก้**:
- ใช้ HashRouter (ที่ตั้งค่าไว้แล้ว)
- หรือ deploy บน Vercel/Netlify แทน

### ปัญหา: CSS ไม่โหลด หรือ assets 404

**สาเหตุ**: Base path ไม่ถูกต้อง

**วิธีแก้**:
ตรวจสอบว่า `vite.config.ts` มี base path ถูกต้อง:
```typescript
base: '/YOUR-REPO-NAME/' // ต้องมี / ทั้งหน้าและหลัง
```

### ปัญหา: GitHub Actions failed

**วิธีแก้**:
1. ตรวจสอบว่าเปิด GitHub Pages แล้ว (Settings → Pages)
2. เลือก Source เป็น "GitHub Actions"
3. ตรวจสอบ permissions ที่ Settings → Actions → General → Workflow permissions
   - เลือก "Read and write permissions"

### ปัญหา: Build failed - Module not found

**วิธีแก้**:
```bash
# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

---

## 📊 Performance Optimization

หลังจาก deploy แล้ว ควรตรวจสอบ:

1. **Page Speed**: ใช้ [PageSpeed Insights](https://pagespeed.web.dev/)
2. **SEO**: ใช้ [Google Search Console](https://search.google.com/search-console)
3. **Mobile**: ทดสอบบนมือถือจริง

---

## 🎯 Next Steps หลัง Deploy

1. **Google Analytics**: เพิ่ม tracking code
2. **Google Search Console**: Submit sitemap
3. **Social Media**: แชร์เว็บไซต์
4. **Custom Domain**: ถ้าต้องการ
5. **SSL Certificate**: ตรวจสอบว่าใช้งานได้

---

## 📞 ต้องการความช่วยเหลือ?

เจอปัญหา? เปิด Issue บน GitHub หรือติดต่อทีมพัฒนา

---

**Good luck! 🚀**
