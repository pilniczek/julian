import { StyleSheet } from 'aphrodite/no-important'
import { v } from '../utils/variables.js'

export const styles = StyleSheet.create({
  link: {
    display: 'inline-block',
    color: v.purple,
    fontSize: '1.7rem',
  },
  btn: {
    padding: v.semiPad,
    textDecoration: 'none',
    borderRadius: v.fullRad,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: v.purple,
    marginBottom: '1.7rem'
  },
  inv: {
    color: v.blue,
    borderColor: v.blue
  },
  ext: {
    ':before': {
      content: v.extSign,
      display: 'inline-block',
      paddingRight: '.3rem'
    },
  },
  menuItem: {
    textAlign: 'center',
    display: 'block',
    borderRadius: v.fullRad,
    textDecoration: 'none',
    color: v.purple,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: v.purple,
    margin: '1rem .5rem',
    width: '5.1rem',
    height: '5.1rem',
    lineHeight: '5.1rem',
    overflow: 'hidden',
    verticalAlign: 'middle',
    backgroundColor: 'white',
    ':hover': {
      boxShadow: '0 0 .5rem #79589f',
      textShadow: '0 0 .5rem #79589f',
    }
  }
})