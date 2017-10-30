import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import structureData from './../data/structureData'

function CustomRoute ({ path, component}) {
    return (
        <Route exact path={path} component={component} />
    )
}

CustomRoute.propTypes = {
    path: PropTypes.string
}

CustomRoute.defaultProps = {
    path: structureData.default.path
}

export default CustomRoute

