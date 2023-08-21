// Les éléments communs à toutes les pages
// La boîte qui englobe le reste

import { Inter } from 'next/font/google'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import '../style/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Astenshia's blog",
  description: "Astenshia's blog website, created by Claire Savel-Vioux",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Rajdhani&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Header></Header>
        <div id="pageContent">
          {children}
        </div>
        
        <Footer></Footer>
      </body>
    </html>
  )
}
