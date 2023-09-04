import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FindUsPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <div className="columns is-centered">
                <div
                  className="find-us-image margin-top-0"
                  style={{
                    backgroundImage: `url(${
                      !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                    border: '5px solid rgb(162, 178, 159)'
                  }}
                >
              </div>
            </div>    
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FindUsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const FindUsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FindUsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

FindUsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FindUsPage

export const findUsPageQuery = graphql`
  query FindUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
