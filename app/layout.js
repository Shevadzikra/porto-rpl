import './globals.css'

export const metadata = {
  title: 'SMKN 3 JEMBER - Rekayasa Perangkat Lunak',
  description: 'Website Resmi Jurusan Rekayasa Perangkat Lunak SMKN 3 Jember - Home of Future Software Engineers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}