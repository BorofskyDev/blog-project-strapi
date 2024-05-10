import '../styles/global.scss'


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body >
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  )
}
