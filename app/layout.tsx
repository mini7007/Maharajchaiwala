import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import LayoutShell from '@/components/layout-shell';
import PWARegister from '@/components/pwa-register';

export const metadata = {
  title: 'Maharaj Chai Wala | Har Ghoont Mein Maharaj',
  description: 'Premium PWA chai experience with immersive motion, online ordering, and franchise growth.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider><PWARegister /><LayoutShell>{children}</LayoutShell></ThemeProvider>
      </body>
    </html>
  );
}
