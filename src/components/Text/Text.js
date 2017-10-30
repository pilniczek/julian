import React from 'react'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'

export const T = ({ children }) => {
    return (
        <span className={css(styles.text)} >{children}</span>
    )
}

export const P = ({ children }) => {
    return (
        <p className={css(styles.text)}>{children}</p>
    )
}

export const H1 = ({ children }) => {
    return (
        <h1 className={css(styles.h1)}>{children}</h1>
    )
}

export const H2 = ({ children, breaking }) => {
    return (
        <h2 className={
            css( styles.h2, breaking && styles.breaking )
        }>
            {children}
        </h2>
    )
}