import { Metadata } from 'next';
import '../styles/index.css'

type Props = {
  children: React.ReactNode
};

export const metadata: Metadata = {
  title: 'kenta7777-blog',
  description: 'kenta7777-blog'
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
