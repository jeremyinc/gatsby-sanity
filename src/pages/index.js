import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Index = ({ data }) => {
  console.log(data)
  var { allSanityPost } = data
  return (
    <div style={{ fontFamily: "system-ui" }}>
      {allSanityPost.edges.map(({ node }) => (
        <>
          <h1>{node.title}</h1>
          <h3>{node.description}</h3>
        </>
      ))}
    </div>
  )
}

export default Index

export const data = graphql`
  query MyQuery {
    allSanityPost {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
