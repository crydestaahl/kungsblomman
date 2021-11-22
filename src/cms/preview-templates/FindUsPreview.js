import React from 'react'
import PropTypes from 'prop-types'
import { FindUsPageTemplate } from '../../templates/find-us-page'

const FindUsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FindUsPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        content={data.body}    
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FindUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FindUsPagePreview

    {/* If shit goues down
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    */}