import React from 'react'
import { string } from 'prop-types'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'
import ImageSVG from '../ImageSVG'

const Image = ({ src, alt, myClass, style, isCropped, pathName, width, height }) => {
    if(isCropped){
        return (
            <ImageSVG
                myClass={css(styles[myClass])} style={style}
                src={src} alt={alt}
                width={width} height={height}
                pathName={pathName}
            />
        )
    }else{
        return (
            <img className={css(styles[myClass])} style={style} src={src} alt={alt} />
        )
    }
}

Image.propTypes = {
    src: string,
    alt: string
}

Image.defaultProps = {
    src: '',
    alt: ''
}

export default Image
