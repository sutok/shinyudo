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

const sectionStyles = {
  marginBottom: 48,
}

const sectionTitleStyles = {
  fontSize: 28,
  fontWeight: "bold",
  marginBottom: 24,
  color: "#663399",
}

const paragraphStyles = {
  fontSize: 16,
  lineHeight: 1.6,
  marginBottom: 16,
  color: "#232129",
}

const listStyles = {
  marginBottom: 24,
  paddingLeft: 20,
}

const listItemStyles = {
  fontSize: 16,
  lineHeight: 1.6,
  marginBottom: 8,
  color: "#232129",
}

const footerStyle = {
  marginTop: 48,
  paddingTop: 24,
  borderTop: "1px solid #eaeaea",
  textAlign: "center",
  fontSize: 14,
  color: "#666",
}

const AboutPage = () => {
  return (
    <Layout>
      <div style={pageStyles}>
        <h1 style={headingStyles}>
          <span style={headingAccentStyles}>— 会社概要</span>
        </h1>
        
        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>会社名</h2>
          <p style={paragraphStyles}>
            晋祐堂（しんゆうどう）
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>事業内容</h2>
          <p style={paragraphStyles}>
            システム開発、サーバー構築、Webアプリケーション開発、データベース設計・構築、
            AI・DXソリューション提供、カフェインレスコーヒーの販売を行っています。
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>技術スタック</h2>
          <ul style={listStyles}>
            <li style={listItemStyles}>プログラミング言語: PHP, Python, JavaScript, React, Perl, Golang, Shellscript, SQL, HTML</li>
            <li style={listItemStyles}>データベース: MySQL, PostgreSQL, MongoDB, Redis, Memcache, SQLServer, Firebase</li>
            <li style={listItemStyles}>インフラ: Linuxサーバー構築, Docker, クラウドサービス</li>
            <li style={listItemStyles}>その他: AI・DX技術, システム設計, プロジェクト管理</li>
          </ul>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>開発プロセス</h2>
          <p style={paragraphStyles}>
            顧客との折衝から始まり、工数計算、要件定義、設計、実装、テスト、デバッグ、
            メンテナンス、保守、運用まで一貫したサービスを提供しています。
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>理念</h2>
          <p style={paragraphStyles}>
            最新技術を活用しながら、顧客のニーズに最適なソリューションを提供し、
            持続可能なシステム構築を目指しています。
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={sectionTitleStyles}>お問い合わせ</h2>
          <p style={paragraphStyles}>
            システム開発やサーバー構築またはホームページの運用についてご相談がございましたら、
            お気軽にお問い合わせください。
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>会社概要 - 晋祐堂</title> 