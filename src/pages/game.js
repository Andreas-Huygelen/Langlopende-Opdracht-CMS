import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import{ gameList, flexboxGameListpage, gameImagecss, gameIdList, gametitle } from "../page.module.css"
const GamesPage = ({data: {allWpGame: {edges}}}) => {
  return (
    <Layout pageTitle="GameList">
      <title>GameList</title>
      <div>
        <h1>GameList</h1> 
          <div className={flexboxGameListpage}>
        {edges.map((item) => {
        const game = item.node.games;
        const slug = item.node.slug;
        const image = getImage(game.thumbnail.localFile)
        return (
          <div className={gameList}>
          <Link to={`/Games/${slug}`}>
            <div key={item.node.id} className={gameIdList}>
              <GatsbyImage className={gameImagecss} image={image} alt={game.thumbnail.altText} />
              <p className={gametitle}>{game.title}</p>
            </div>
          </Link>
        </div>)
        })}</div>
        </div>
      </Layout>
  )
}
export const query = graphql`
  query {
    allWpGame {
      edges {
        node {
          games {
            title
            thumbnail {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
              altText
            }
          }
          id
          slug
        }
      }
    }
  }

`
export default GamesPage