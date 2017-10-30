import { StyleSheet } from 'aphrodite/no-important'
import { v } from '../utils/variables.js'

export const styles = StyleSheet.create({
  tab: {
    background: 'white',
    width: '100%'
  },
  tabButton: {
    background: 'white',
    position: 'absolute',
    top: '0px',
    height: '3.4rem',
    textDecoration: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: v.purple,
    borderRadius: '3px 3px 0 0'
  },
  tabButtonOpen: {
    borderBottomColor: 'white'
  },
  activeTabButton: {
    borderBottomColor: v.purple
  },
  tabContent: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: v.purple,
    padding: '1rem 2rem 1rem 2rem'
  }
})