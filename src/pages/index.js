import React from "react"
import { grapqhl, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  {
    conferences {
      listConferences {
        items {
          id
          name
          description
          weather
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Cool Conferences</h1>
    <ul>
      {data.conferences.listConferences.items.map(conf => (
        <li key={conf.id}>
          <h2>{conf.name}</h2>
          <p>{conf.description}</p>
          <p>{conf.weather}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
