import "./globals.css";

export const metadata = {
  title: "Vinyl Player",
  description: "Vinyl Player Animation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
