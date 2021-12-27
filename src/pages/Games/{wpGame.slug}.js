import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import{ flexboxGamepage, gameInfo, imagecss } from "../../page.module.css"

const GamePage = ({data: {wpGame: {games :game,pegis: { nodes: pegis }}}}) => {
  const image = getImage(game.thumbnail.localFile)
  const platforms = game.platforms;
  return (
    <Layout pageTitle="Games Template">
      <title>{game.title}</title>
    <div>
      <h1>{game.title}</h1>
      <div className={flexboxGamepage}>
        <GatsbyImage className={imagecss} image={image} alt={game.thumbnail.altText} />
        <div className={gameInfo}>
          <div>
            {pegis.map((pegi, i) => (
              <p key={i}> pegi: {pegi.name} {i + 1 < pegi.length && "- "}</p>
            ))}
          </div>
          
          <p>developers: {game.developers}</p>
          <p>publishers: {game.publishers}</p>
          <p>Genres: {game.genres}</p>
          <p>Releasdate: {game.releasedatum}</p>
          <p>mode: {game.modus[1]? `${game.modus[0]} / ${game.modus[1]}`: `${game.modus[0]}`}</p>
        </div>
      </div>
      <h2>platforms</h2> 
      {platforms.map(platform =>
        <p className={gameInfo}>{platform}</p>
        )}
      <h2>description</h2>
      <p>{game.description}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpGame (id: {eq: $id}) {
      games {
        description
        developers
        genres
        modus
        publishers
        platforms
        releasedatum
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
      pegis {
        nodes {
          name
        }
      }
    }
  }

`

export default GamePage