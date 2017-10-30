import React from 'react'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'

const Box = ({ children, myClass, style, ...rest }) => (
  <div className={css(
    styles[myClass],
    (rest.index % 4 === 2 || rest.index % 4 === 1)
      ? styles.odd
      : styles.even
    )}
    style={style}
  >
    { children }
  </div>
)

Box.propTypes = {
  
}

Box.defaultProps = {

}

export default Box