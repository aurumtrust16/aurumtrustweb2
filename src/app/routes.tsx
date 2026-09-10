import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { BuyPhonePage } from './pages/BuyPhonePage';
import { BuyLuxuryPage } from './pages/BuyLuxuryPage';
import { BlogPage } from './pages/BlogPage';
import { SellVsPawnArticle } from './pages/articles/SellVsPawnArticle';

const legacyArticlePaths = [
  'blog/iphone-pawn-which-model-best-price',
  'blog/how-to-choose-pawn-shop',
  'blog/rolex-pawn-authenticity-check',
  'blog/hermes-bag-pawn-guide',
];

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'services/phone', Component: BuyPhonePage },
      { path: 'services/luxury', Component: BuyLuxuryPage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/sell-vs-pawn-differences', Component: SellVsPawnArticle },
      ...legacyArticlePaths.map((path) => ({
        path,
        element: <Navigate to="/blog/sell-vs-pawn-differences" replace />,
      })),
      {
        path: '*',
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--aurum-navy)' }}>
                404 - ไม่พบหน้านี้
              </h1>
              <p className="text-gray-600 mb-6">ขออภัย หน้าที่คุณต้องการไม่มีอยู่</p>
              <a href="/" className="px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: 'var(--aurum-gold)', color: 'var(--aurum-navy)' }}>
                กลับหน้าแรก
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
]);
