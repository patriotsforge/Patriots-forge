import "./globals.css";

export const metadata = {
  title: "Patriots Forge",
  description: "Custom firearms and tactical gear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
