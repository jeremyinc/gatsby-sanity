import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Index = ({ data }) => {
  console.log(data)
  var { allSanityPost } = data
  return (
    <div style={{ fontFamily: "system-ui" }}>
      {allSanityPost.edges.map(({ node }) => (
        <>
          <h1>{node.title}</h1>
          <h3>{node.description}</h3>
          <h4>{node.author.name}</h4>
          <Img fluid={node.mainImage.asset.fluid} />
        </>
      ))}
    </div>
  )
}

export default Index

export const data = graphql`
  query Myquery {
    allSanityPost {
      edges {
        node {
          title
          description
          author {
            name
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
