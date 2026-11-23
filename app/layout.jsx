import "./globals.css";

export const metadata = {
  title: "L'Atelier de Marie — créations cousues à la main",
  description:
    "Une vitrine de démonstration pour des créations cousues et faites main.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
