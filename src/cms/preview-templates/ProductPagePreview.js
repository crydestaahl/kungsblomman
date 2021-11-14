import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ProductPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        heading2: entry.getIn(['data', 'main', 'heading2']),
        description2: entry.getIn(['data', 'main', 'description2']),
        heading3: entry.getIn(['data', 'main', 'heading3']),
        description3: entry.getIn(['data', 'main', 'description3']),
        heading4: entry.getIn(['data', 'main', 'heading4']),
        description4: entry.getIn(['data', 'main', 'description4']),
        heading5: entry.getIn(['data', 'main', 'heading5']),
        description5: entry.getIn(['data', 'main', 'description5']),
        heading6: entry.getIn(['data', 'main', 'heading6']),
        description6: entry.getIn(['data', 'main', 'description6']),
        heading7: entry.getIn(['data', 'main', 'heading7']),
        description7: entry.getIn(['data', 'main', 'description7']),
        heading8: entry.getIn(['data', 'main', 'heading8']),
        description8: entry.getIn(['data', 'main', 'description8']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
        image4: {
          image: getAsset(entry.getIn(['data', 'main', 'image4', 'image'])),
          alt: entry.getIn(['data', 'main', 'image4', 'alt']),
        },
        image5: {
          image: getAsset(entry.getIn(['data', 'main', 'image5', 'image'])),
          alt: entry.getIn(['data', 'main', 'image5', 'alt']),
        },
        image6: {
          image: getAsset(entry.getIn(['data', 'main', 'image6', 'image'])),
          alt: entry.getIn(['data', 'main', 'image6', 'alt']),
        },
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
