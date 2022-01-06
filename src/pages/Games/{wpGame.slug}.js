import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  flexboxGamepage,
  gameInfo,
  imagecss,
} from "../../page.module.css"

const GamePage = ({
  data: {
    wpGame: {
      games: game,
      pegis: { nodes: pegis },
    },
  },
}) => {
  const image = getImage(game.thumbnail.localFile)
  const platforms = game.platforms
  return (
    <Layout pageTitle="Games Template">
      <title>{game.title}</title>
      <div>
        <h1>{game.title}</h1>
        <div className={flexboxGamepage}>
          <GatsbyImage
            className={imagecss}
            image={image}
            alt={game.thumbnail.altText}
          />
          <div className={gameInfo}>
            <div>
              {pegis.map((pegi, i) => (
                <p key={i}>
                  {" "}
                  <strong>pegi:</strong> {pegi.name}{" "}
                  {i + 1 < pegi.length && "- "}
                </p>
              ))}
            </div>

            <p>
              <strong>Developers:</strong> {game.developers}
            </p>
            <p>
              <strong>Publishers:</strong> {game.publishers}
            </p>
            <p>
              <strong>Genres:</strong> {game.genres}
            </p>
            <p>
              <strong>Releasdate:</strong> {game.releasedatum}
            </p>
            <p>
              <strong>Mode:</strong>{" "}
              {game.modus[1]
                ? `${game.modus[0]} / ${game.modus[1]}`
                : `${game.modus[0]}`}
            </p>
          </div>
        </div>
        <h2 style={{ paddingTop: 20 }}>platforms</h2>
        {platforms.map((platform,i) => (
          <div key={i}>
            <p className={gameInfo}>{platform}</p>
          </div>
        ))}
        <h2>description</h2>
        <p>{game.description}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpGame(id: { eq: $id }) {
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
