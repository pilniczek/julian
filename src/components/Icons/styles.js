import { StyleSheet } from 'aphrodite/no-important'
import { v } from '../utils/variables.js'

export const styles = StyleSheet.create({
  defSVG: {
    float: 'right',
    marginTop: '1rem'
  },
  defSVGOpened: {
  },
  defItem: {
    fill: 'none',
    strokeWidth: '2px',
    stroke: v.purple,
    strokeDasharray: '160% 280%',
    strokeDashoffset: '0%',
    transition: 'stroke-dashoffset .5s'
  },
  defItemOpened: {
    strokeDashoffset: '-210%'
  },
  toggleSVG: {
    float: 'right',
    transform: 'rotate(45deg)',
    marginTop: '.3rem',
    transition: 'margin-top .5s'
  },
  toggleSVGOpened: {
    marginTop: '1.1rem',
  },
  toggleIcon: {
    fill: 'none',
    strokeWidth: '3px',
    stroke: v.purple,
    strokeDasharray: '200%',
    strokeDashoffset: '-100%',
    transition: 'stroke-dashoffset .5s'
  },
  toggleIconOpened: {
    strokeDashoffset: '100%'
  },
})