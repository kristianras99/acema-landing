import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acema AI — AI-puhelinassistentti yrityksellesi',
  description: 'Acema räätälöi yrityksellesi AI-puhelinassistentin joka vastaa puheluihin, varaa aikoja ja kerää asiakastiedot — 24/7 ilman taukoja.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  )
}
