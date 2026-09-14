import './globals.css'

export const metadata = {
  title: 'David — Developer',
  description: 'Self-taught developer building products for African markets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">{children}</body>
    </html>
  )
}
