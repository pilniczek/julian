import React from 'react'
import { string, node, bool } from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'

const CustomLink = ({ className, to, children, external }) => {
  
  const classes = className.split(' ').map(
    item => styles[item]
  )
  
  if(external){
    return (
      <a href={to} target='_blank' className={css(styles.link, classes, styles.ext)}>{children}</a>
    )
  } else {
    return (
      <Link to={to} className={css(styles.link, classes)}>
        {children}
      </Link>
    )
  }
}

CustomLink.propTypes = {
  to: string,
  className: string,
  children: node,
  external: bool
}

CustomLink.defaultProps = {
  to: '/',
  className: ''
}

export default CustomLink