import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return(
  <Layout pageTitle="HomePage">
  <main>
    <div>
      <title>Home Page</title>
      <h1>Welcome to LoTR games!</h1>
      <p>On this website you will find games of Lord of the Rings</p>
    </div>
    
  </main>
  </Layout>)
}


export default IndexPage
/*
<Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    
  </Layout>*/
