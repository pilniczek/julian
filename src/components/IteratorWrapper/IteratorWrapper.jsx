import React from 'react'
import { string, array, func } from 'prop-types'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'
import iterator from './iterator'

const IteratorWrapper = ({ Component, items, myClass }) => (
    <div className={css(styles[myClass])}>
        { iterator(items, props => <Component {...props}/>) }
    </div>
)

IteratorWrapper.propTypes = {
    Component: func.isRequired,
    items: array.isRequired,
    myClass: string
}

IteratorWrapper.defaultProps = {
    myClass: ''
}

export default IteratorWrapper
