import React from 'react'
import { string, number, bool } from 'prop-types'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'

const Icons = ({ name, width, height, isActive }) => {

  const config = {
    squareArrow:
      <rect x="0" y="0"
        width={width} height={height}
        className={
          isActive
          ? css( styles[name + 'Item'], styles[name + 'ItemOpened'] )
          : css( styles[name + 'Item'] )
        }
      />,
    def:
      <path d={ 'M 1,1 ' +
        width/2 + ',' + (height-1) + ' ' +
        (width-1) + ',1 ' +
        (width-1) + ',' + (height-1) + ' ' +
        width/2 + ',1 ' +
        '1,' + (height-1) + ' ' +
        '1,1'
        }
        className={
          isActive
          ? css( styles[name + 'Item'], styles[name + 'ItemOpened'] )
          : css( styles[name + 'Item'] )
        }
      />

  }

  const item = config[name] || null

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={'0 0 ' + width + ' ' + height}
      width={width} height={height}
      className={
        isActive
        ? css( styles[name + 'SVG'], styles[name + 'SVGOpened'] )
        : css( styles[name + 'SVG'] )
      }
    >
      { item }
    </svg>
  )
}

Icons.propTypes = {
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  isActive: bool
}

Icons.defaultProps = {
  name: '',
  width: 0,
  height: 0, 
  isActive: false
}

export default Icons