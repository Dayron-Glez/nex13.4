import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Roboto } from 'next/font/google'
import { Container, SSRProvider } from '@/components/bootstrap';
import NavBar from './NavBar';

const roboto = Roboto({
  subsets: ["latin"],
  weight: '100'
})

export const metadata = {
  title: 'Next 13.4',
  description: 'Pruebas con Next 13.4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <NavBar />
          <main>
            <Container className='py-4'>
              {children}
            </Container>
          </main>
        
      </body>
    </html>
  )
}
