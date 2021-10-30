import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                display: 'inline-block',    
                border: '3px #9AC88B solid',
                borderRadius: '5px'            
              }}
            >
            <a href="#">
              <PreviewCompatibleImage 
                imageInfo={item} />
            </a>
            </div>
          </div>
          <p 
            style={{ 
              margin: '1rem 0'
            }}
            >
              {item.text}
            </p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
