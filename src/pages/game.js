import * as React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
const GamesPage = ({data: {allWpGame: {edges}}}) => {
  return (
    <Layout pageTitle="GameList">
      <title>GameList</title>
        <p>Hi</p> 
        {edges.map((item) => {
        const game = item.node.games;
        const slug = item.node.slug;

        return (
          <Link to={`/Games/${slug}`}>
            <div>
              <p key={item.node.id}>{game.title}</p>
            </div>
          </Link>)
      })}
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
                childrenImageSharp {
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