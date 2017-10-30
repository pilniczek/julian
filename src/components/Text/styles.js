import { StyleSheet } from 'aphrodite/no-important'

export const styles = StyleSheet.create({
  text: {
    fontSize: '1.7rem',
    lineHeight: '3.4rem'
  },
  p: {
    fontSize: '1.7rem',
    lineHeight: '3.4rem'
  },
  h1: {
    fontSize: '5.1rem',
    lineHeight: '6.8rem',
    marginTop: '0px'
  },
  h2: {
    fontSize: '3.4rem',
    lineHeight: '5.1rem',
    marginTop: '0px'
  },
  breaking: {
    '@media (min-width: 800px) and (max-width: 1500px)': {
      fontSize: '1.7rem',
      lineHeight: '2.55rem',
    },
    '@media (min-width: 1500px)': {
      fontSize: '1.02rem',
      lineHeight: '1.53rem',
    }
  }
})