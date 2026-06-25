import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'QMet — Compliance, Cybersecurity & Consulting',
  description:
    'QMet is your trusted partner for ISO consultancy, cybersecurity services, compliance frameworks, and training. Serving organizations across the GCC since 2005.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
