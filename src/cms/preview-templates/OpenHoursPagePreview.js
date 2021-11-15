import React from 'react'
import PropTypes from 'prop-types'
import { OpenHoursPageTemplate } from '../../templates/open-hours-page'

const OpenHoursPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <OpenHoursPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        content={data.body}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OpenHoursPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OpenHoursPagePreview

    {/* If shit goues down
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    */}