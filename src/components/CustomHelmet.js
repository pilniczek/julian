import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import structureData from './../data/structureData'

function CustomHelmet ({ title }) {
    return (
        <Helmet>
            <title>{ title }</title>
            { /* <link rel="canonical" href="http://mysite.com/example" /> */ }
        </Helmet>
    )
}

CustomHelmet.propTypes = {
    title: PropTypes.string
}

CustomHelmet.defaultProps = {
    title: structureData.default.title
}

export default CustomHelmet