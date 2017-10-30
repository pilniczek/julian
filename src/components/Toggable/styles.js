import { StyleSheet } from 'aphrodite/no-important'
import { v } from '../utils/variables.js'

export const styles = StyleSheet.create({
  toggableWrap: {
    marginBottom: '2rem',
    borderRadius: v.tinyRad,
    borderColor: v.purple,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
  },
  toggableTop: {
    padding: '1rem 2rem 1rem 2rem',
    borderRadius: v.tinyRad,
    borderColor: v.purple,
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    ':hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 5px #79589f'
    }
  },
  toggableTopOpened: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
  },
  toggableBottom: {
    transition: 'opacity .5s',
    opacity: '0',
    padding: '2rem 2rem 1rem 2rem',
  },
  toggableBottomOpened: {
    opacity: '1',
    transitionDelay: '.2s',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  menuWrap: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    paddingBottom: '6.2rem',
    width: '6.2rem'
  },
  menuTop: {
    position: 'absolute',
    bottom: '0px'
  }
})