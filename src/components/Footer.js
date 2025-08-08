import * as React from "react"

const footerStyles = {
  backgroundColor: "#f8f9fa",
  padding: "40px 96px",
  borderTop: "1px solid #eaeaea",
  marginTop: "auto",
}

const footerContentStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
}

const copyrightStyles = {
  fontSize: "14px",
  color: "#666",
  margin: 0,
}

const footerNavStyles = {
  display: "flex",
  gap: "24px",
}

const footerLinkStyles = {
  color: "#663399",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
}

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <p style={copyrightStyles}>
          Copyright © 2015 shinyudo.com. All rights reserved.
        </p>
        <nav style={footerNavStyles}>
          <a href="/" style={footerLinkStyles}>
            ホーム
          </a>
          <a href="/about" style={footerLinkStyles}>
            会社概要
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer 