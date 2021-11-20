import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContactPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        content={data.body}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview

    {/* If shit goes down
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    */}