export const metadata = {
  title: 'Helpdesk - CSCE',
  description: 'Helpdesk - CSCE',
  keywords: 'Helpdesk - CSCE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
