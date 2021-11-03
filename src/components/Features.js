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
                borderRadius: '5px',
                marginBottom: '-3rem'            
              }}
            >
              <a href={item.link}>            
                <PreviewCompatibleImage 
                  imageInfo={item} /> 
              </a>                        
            </div>
              <a href={item.link}>            
                <h1 className="blurb-title">
                  {item.title}
                </h1>
              </a>             
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
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
