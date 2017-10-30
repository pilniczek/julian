import React from 'react'
import AnimateHeight from 'react-animate-height'
import { string, shape, object, bool, number, oneOfType } from 'prop-types'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'
import Icons from '../../components/Icons'

const Toggable = ({ id, isOpen, actions:{ toggle }, iconProps, myClass, children, visible, duration, ...rest }) => {
    const handleClick = () => toggle(id)
    const animateHeight = (isOpen ? 'auto' : 0)
    return(
        <div className={ css(styles[myClass+'Wrap']) }>
            <div onClick={handleClick}
                className={ css( styles[myClass+'Top'],
                    isOpen && styles[myClass+'TopOpened']
                )}
            >
                {!!iconProps && 
                    <Icons
                    {...iconProps}
                    isActive={isOpen}
                    />
                }
                { visible }
            </div>            
            <AnimateHeight duration={ duration } height={ animateHeight }>
                <div className={ css( styles[myClass+'Bottom'],
                    isOpen && styles[myClass+'BottomOpened']
                )}>
                    { children }
                </div>
            </AnimateHeight>
        </div>
    )
}

Toggable.propTypes = {
    id: oneOfType([
        string,
        number
    ]).isRequired,
    myClass: string,
    isOpen: bool,
    duration: number,
    action: shape({
        toggle: object.isRequired
    })
}

Toggable.defaultProps = {
    duration: 500,
    myClass: ''
}

export default Toggable
