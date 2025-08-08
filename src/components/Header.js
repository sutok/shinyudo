import * as React from "react"

const headerStyles = {
  backgroundColor: "#663399",
  color: "white",
  padding: "20px 96px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const logoStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  textDecoration: "none",
  color: "white",
}

const navStyles = {
  display: "flex",
  gap: "32px",
}

const navLinkStyles = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  transition: "opacity 0.2s ease",
}

const navLinkHoverStyles = {
  opacity: 0.8,
}

const Header = () => {
  return (
    <header style={headerStyles}>
      <a href="/" style={logoStyles}>
        晋祐堂
      </a>
      <nav style={navStyles}>
        <a href="/" style={navLinkStyles}>
          ホーム
        </a>
        <a href="/about" style={navLinkStyles}>
          会社概要
        </a>
      </nav>
    </header>
  )
}

export default Header 