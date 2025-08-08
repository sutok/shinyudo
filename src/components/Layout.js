import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

const layoutStyles = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}

const mainStyles = {
  flex: 1,
  padding: "0 96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ children }) => {
  return (
    <div style={layoutStyles}>
      <Header />
      <main style={mainStyles}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 