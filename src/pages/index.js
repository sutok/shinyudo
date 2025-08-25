import * as React from "react"
import Layout from "../components/Layout"

const pageStyles = {
  color: "#232129",
  padding: "48px 0",
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
    description: [
      "・WebサイトのSSL証明書設定",
      "・Linuxサーバーの初期設定",
      "・ユーザー管理と権限設定",
      "・セキュリティ対策（ファイアウォール、SSH設定など）",
      "・Webサーバー（Apache/Nginx）構築",
      "・データベースサーバー構築",
      "・バックアップと運用管理"
    ],
    color: "#E95800",
    isList: true,
  },
  {
    text: "Dockerfileの作成",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Dockerfileをゼロから作成、既存環境の最適化",
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
  {
    text: "AI・DX",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "準備中",
    color: "#E95800",
  },
  {
    text: "画像生成AI",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description: `最先端のAI技術を活用し、イメージを言葉からダイレクトに形にするオーダーメイド画像生成サービスです。
お客様の要望をもとに、広告やSNS、プレゼン資料、商品パッケージなど、幅広い用途に最適化された高品質なビジュアルを制作します。
「欲しいイメージはあるのに見つからない」
「オリジナルのビジュアルで差別化したい」
そんなお悩みを解決し、ブランドの魅力を最大限に引き出すデザインをお届けします。
AI生成ならではのスピードと柔軟性に加え、クリエイターの監修でクオリティを担保。
安心してご利用いただける、次世代のクリエイティブソリューションです。`,
    color: "#E95800",
  },
  {
    text: "Decaf,ディカフェ,カフェインレスコーヒーの販売",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "準備中",
    color: "#E95800",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <div style={pageStyles}>
        <h1 style={headingStyles}>
          <span style={headingAccentStyles}>— サービス内容</span>
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
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>晋祐堂</title>
