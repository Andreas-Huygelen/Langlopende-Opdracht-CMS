import * as React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import{ gameImageHomePage, gameList, flexboxGameListpage, gameIdList, flexboxHomePage, bannerImg, homepageDescription } from "../page.module.css"

const IndexPage = ({data: {wpPage: {homePage}}}) => {
  let featuredProducts = homePage.featuredProducts;
  let bannerPhoto = getImage(homePage.bannerPhoto.localFile);
  return(
  <Layout pageTitle="HomePage">
  <main>
    <div>
      <title>Home Page</title>
      <div className={flexboxHomePage}>
        <div>
          <h1>{homePage.title}</h1>
          <p className={homepageDescription}>{homePage.description}</p>
        </div>
        <GatsbyImage className={bannerImg} image={bannerPhoto} alt={homePage.bannerPhoto.altText} />
      </div>
      <h2>{featuredProducts.title}</h2>
      <p>{featuredProducts.description}</p>
      
      <div className={flexboxGameListpage}>
      {featuredProducts.games.map(games =>{
        let image = getImage(games.games.thumbnail.localFile)
        return(
          <div className={gameList}>
              <div key={games.id} className={gameIdList}>

                <GatsbyImage className={gameImageHomePage} image={image} alt={games.games.thumbnail.altText} />
              </div>
          </div>)
        })}
      </div>
    </div>
    
  </main>
  </Layout>)
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "home-page"}) {
      homePage {
        bannerPhoto {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
        featuredProducts {
          description
          title
          games {
            ... on WpGame {
              id
              games {
                thumbnail {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: DOMINANT_COLOR)
                    }
                  }
                }
              }
            }
          }
        }
        title
        description
      } 
    }
  }
`


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
