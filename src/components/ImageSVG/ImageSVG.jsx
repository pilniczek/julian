import React from 'react'
import { string } from 'prop-types'
import Paths from '../Paths'

const ImageSVG = ({ src, alt, myClass, style, width, height, pathName }) => (
    <svg viewBox={'0 0 ' + width + ' ' + height}
        width={'100%'} style={style}
        className={myClass}
    >
        <clipPath id="clip-path">
            <Paths name={pathName} width={width} height={height} />
        </clipPath>
        <image
            xlinkHref={src}
            src={src}
            alt={alt}
            clipPath={'url(#clip-path)'}
            width={'100%'} height={height}
        />
    </svg>
)

ImageSVG.propTypes = {
    src: string,
    alt: string
}

ImageSVG.defaultProps = {
    src: '',
    alt: ''
}

export default ImageSVG
