import { RouterProvider } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { router } from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>AURUM TRUST รับซื้อสินค้าแบรนด์เนม มือถือ และนาฬิกา</title>
        <meta name="description" content="รับซื้อ-ขาย iPhone มือถือ นาฬิกา และกระเป๋าแบรนด์เนม ประเมินราคาฟรี ตรวจสอบสินค้าอย่างโปร่งใส ตกลงราคาก่อนขาย" />
        <meta name="keywords" content="รับซื้อ iPhone, รับซื้อมือถือ, รับซื้อนาฬิกา, รับซื้อ Rolex, รับซื้อกระเป๋าแบรนด์เนม, ขายของมือสอง" />
        <link rel="canonical" href="https://aurumtrustco.com/" />
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "AURUM TRUST",
            "description": "บริการรับซื้อ-ขายมือถือ นาฬิกา และสินค้าแบรนด์เนม พร้อมประเมินราคาก่อนตัดสินใจขาย",
            "telephone": "+66-82-717-2250",
            "email": "aurumtrust16@gmail.com",
            "url": "https://aurumtrustco.com",
            "priceRange": "฿฿",
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa-Su 10:00-17:00"
            ]
          })}
        </script>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
