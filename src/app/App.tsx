import { RouterProvider } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { router } from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18173464456"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18173464456');
          `}
        </script>

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PawnShop",
            "name": "AURUM TRUST",
            "description": "ร้านรับจำนำมาตรฐานพรีเมียม รับจำนำมือถือ นาฬิกา แบรนด์เนม ให้ราคาดี โปร่งใส",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 ถนนพระราม 3",
              "addressLocality": "ช่องนนทรี",
              "addressRegion": "กรุงเทพมหานคร",
              "postalCode": "10120",
              "addressCountry": "TH"
            },
            "telephone": "+66-82-717-2250",
            "email": "aurumtrust16@gmail.com",
            "url": "https://aurumtrustco.com",
            "priceRange": "฿฿฿",
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa-Su 10:00-17:00"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1250"
            }
          })}
        </script>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}