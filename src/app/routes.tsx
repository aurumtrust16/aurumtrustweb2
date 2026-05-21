import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { PhonePawnPage } from "./pages/PhonePawnPage";
import { LuxuryPawnPage } from "./pages/LuxuryPawnPage";
import { BlogPage } from "./pages/BlogPage";
import { IphonePawnArticle } from "./pages/articles/IphonePawnArticle";
import { HowToChoosePawnShopArticle } from "./pages/articles/HowToChoosePawnShopArticle";
import { RolexPawnArticle } from "./pages/articles/RolexPawnArticle";
import { HermesBagArticle } from "./pages/articles/HermesBagArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "services/phone",
        Component: PhonePawnPage,
      },
      {
        path: "services/luxury",
        Component: LuxuryPawnPage,
      },
      {
        path: "blog",
        Component: BlogPage,
      },
      {
        path: "blog/iphone-pawn-which-model-best-price",
        Component: IphonePawnArticle,
      },
      {
        path: "blog/how-to-choose-pawn-shop",
        Component: HowToChoosePawnShopArticle,
      },
      {
        path: "blog/rolex-pawn-authenticity-check",
        Component: RolexPawnArticle,
      },
      {
        path: "blog/hermes-bag-pawn-guide",
        Component: HermesBagArticle,
      },
      {
        path: "*",
        Component: () => (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: "var(--aurum-navy)" }}
              >
                404 - ไม่พบหน้านี้
              </h1>
              <p className="text-gray-600 mb-6">
                ขออภัย หน้าที่คุณต้องการไม่มีอยู่
              </p>
              <a
                href="/"
                className="px-6 py-3 rounded-lg font-semibold"
                style={{
                  backgroundColor: "var(--aurum-gold)",
                  color: "var(--aurum-navy)",
                }}
              >
                กลับหน้าแรก
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
]);