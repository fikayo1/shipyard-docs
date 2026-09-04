import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Shipyard Docs',
    template: '%s — Shipyard Docs'
  },
  description:
    'Developer documentation for Shipyard, the deterministic-harness software factory.'
}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
        <span aria-hidden style={{ fontSize: 18 }}>⚓</span>
        Shipyard
      </span>
    }
    projectLink="https://github.com"
  />
)

const footer = (
  <Footer>
    <span>
      Shipyard docs — internal, updated as the harness evolves.
    </span>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          docsRepositoryBase="https://github.com/your-org/shipyard-py/tree/main/shipyard-docs"
          sidebar={{ defaultMenuCollapseLevel: 2, toggleButton: true }}
          editLink="Edit this page"
          feedback={{ content: 'Question or gap? Note it here.' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
