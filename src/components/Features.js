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
                border: '3px #A2B29F solid',
                borderRadius: '5px',
                marginBottom: '-3rem',
                boxShadow: '4px 6px 9px 2px lightgrey'            
              }}
            >
              <a href={item.link}>            
                <PreviewCompatibleImage 
                  imageInfo={item} /> 
              </a>                        
            </div>
              <a href={item.link}>            
                <h1 
                  className="blurb-title"
                  
                  style={{ 
                    textShadow: '2px 2px rgb(152 152 152 / 50%)',
                  }}>
                  {item.title}
                </h1>
              </a>             
          </div>
          <p 
            style={{ 
              margin: '1rem 0'
            }}
            >
            {/*{item.text}*/}
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
