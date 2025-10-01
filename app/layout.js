import './globals.css'

export const metadata = {
  title: 'SMKN 3 JEMBER - Rekayasa Perangkat Lunak',
  description: 'Website Resmi Jurusan Rekayasa Perangkat Lunak SMKN 3 Jember - Home of Future Software Engineers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="5aIAW2c6mcX-W8JPqSUQ_IGte85gz8KWwQ3HBVAabEE" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}