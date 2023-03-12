import './globals.css'

export const metadata = {
  title: 'Fruit Comparison',
  description: 'Comparing fruit nutritional values',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
