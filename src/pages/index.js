import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const footerStyle = {
  marginTop: 48,
  paddingTop: 24,
  borderTop: "1px solid #eaeaea",
  textAlign: "center",
  fontSize: 14,
  color: "#666",
}

const links = [
  {
    text: "Linuxサーバー構築",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Dockerfileの作成",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "工程",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "顧客折衝、工数計算、要件定義、設計、テスト、デバッグ、メンテナンス、保守、運用",
    color: "#BC027F",
  },
  {
    text: "プログラミング",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "PHP,Python,JavaScript,React,Perl,Golang,Shellscript,SQL,HTML.",
    color: "#BC027F",
  },
  {
    text: "データベース",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "MySQL,PostgreSQL,MongoDB,Redis,Memcache,SQLServer,Firebase",
    color: "#0D96F2",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <br />
        <span style={headingAccentStyles}>— Shinyudo</span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              {link.text}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <footer style={footerStyle}>
        Copyright © 2015 shinyudo.com. All rights reserved.
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>晋祐堂</title>
