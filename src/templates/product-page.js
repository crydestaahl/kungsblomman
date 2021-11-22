import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Fade from 'react-reveal/Fade';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container product-jumbo margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        border: '5px solid rgb(154, 200, 139)'
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: 'rgba(211, 182, 212, 0.5), -0.5rem 0 0 rgba(211, 182, 212, 0.5)',
          color: 'white',
          padding: '1rem',
          borderRadius: '20px'          
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">      
        <div className="section">
          <div className="columns">
            <Fade cascade>
              <div className="column  is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                <p>{description}</p>
              </div>
            </Fade>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns is-centered">
                <Fade cascade>
                  <div className="column is-half">
                    <h3 className="has-text-weight-semibold is-size-3" id={main.heading}>
                      {main.heading}               
                    </h3>
                    <p>{main.description}</p>
                  </div>
                  <div className="column is-half">
                    <h3 className="has-text-weight-semibold is-size-3" id={main.heading2}>
                      {main.heading2}              
                    </h3>
                    <p>{main.description2}</p>
                  </div>
                </Fade>
              </div>
              <Fade cascade>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>                    
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>                    
                  </div>

                  <div className="columns is-10 is-offset-1 is-centered">
                    <div className="column is-half">
                      <h3 className="has-text-weight-semibold is-size-3" id={main.heading3}>
                        {main.heading3}              
                      </h3>
                      <p>{main.description3}</p>
                    </div>
                    <div className="column is-half">
                      <h3 className="has-text-weight-semibold is-size-3" id={main.heading4}>
                        {main.heading4}              
                      </h3>
                      <p>{main.description4}</p>
                    </div>
                  </div>

                  <div className="columns is-centered">
                    <div className="column is-half">
                      <h3 className="has-text-weight-semibold is-size-3" id={main.heading5}>
                        {main.heading5}              
                      </h3>
                      <p>{main.description5}</p>
                    </div>
                    <div className="column is-half">
                      <h3 className="has-text-weight-semibold is-size-3" id={main.heading6}>
                        {main.heading6}              
                      </h3>
                      <p>{main.description6}</p>
                    </div>
                  </div>
                  <div className="columns is-centered">
                    <div className="column is-half">
                      <h3 className="has-text-weight-semibold is-size-3" id={main.heading7}>
                        {main.heading7}              
                      </h3>
                      <p>{main.description8}</p>
                    </div>
                    <div className="column is-half">
                      <h3 className="has-text-weight-semibold is-size-3" id={main.heading8}>
                        {main.heading8}              
                      </h3>
                      <p>{main.description8}</p>
                    </div>
                  </div>


                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>              
              </div> 
              </Fade>      
              <Fade cascade>                                   
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image4} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image5} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image6} />
                    </article>
                  </div>
                </div>
              </div>
              </Fade>          
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />

              {/*
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
               */}
            </div>
          </div>
        </div>        
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    heading2: PropTypes.string,
    description2: PropTypes.string,
    heading3: PropTypes.string,
    description3: PropTypes.string,
    heading4: PropTypes.string,
    description4: PropTypes.string,
    heading5: PropTypes.string,
    description5: PropTypes.string,
    heading6: PropTypes.string,
    description6: PropTypes.string,
    heading7: PropTypes.string,
    description7: PropTypes.string,
    heading8: PropTypes.string,
    description8: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          heading2
          description2
          heading3
          description3
          heading4
          description4
          heading5
          description5
          heading6
          description6
          heading7
          description7
          heading8
          description8
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image5 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image6 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
