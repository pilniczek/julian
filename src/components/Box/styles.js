import { StyleSheet } from 'aphrodite/no-important'

export const styles = StyleSheet.create({
  box: {
    display: 'flex',
    marginBottom: '2rem',
    justifyContent: 'space-between'
  },
  responsiveBox: {
    display: 'flex',
    margin: 'auto',
    width: '100%',
    marginBottom: '2rem',
    '@media (min-width: 800px) and (max-width: 1500px)': {
      marginBottom: '1.5rem',
      width: '48%',
      ':nth-child(4n)': {
        width: '56%',
      },
      ':nth-child(4n+1)': {
        width: '56%',
      },
      ':nth-child(4n+2)': {
        width: '40%',
      },
      ':nth-child(4n+3)': {
        width: '40%',
      },
    },
    '@media (min-width: 1500px)': {
      width: '32%',
      marginBottom: '1rem',
    }
  },
  responsiveBoxLeft: {
    width: '63.3%',
    borderLeft: '1px solid black',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    padding: '2rem 2rem 0 3rem',
    marginRight: '-1px',
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 800px) and (max-width: 1500px)': {
      padding: '1rem 1rem 0 1.5rem',
    },
    '@media (min-width: 1500px)': {
      padding: '.666rem .666rem 0 1rem',
    }
  },
  responsiveBoxRight: {
    width: '35.7%',
  },
  odd: {
    '@media (min-width: 800px) and (max-width: 1500px)': {
      width: '50%'
    }
  },
  even: {
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column'
  }
})