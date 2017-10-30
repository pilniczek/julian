import {get} from 'lodash'

const getToggle = state => get(state, 'ui.toggle', [])

const getTabbed = state => get(state, 'ui.tabbed', [])

export default {
	getToggle,
	getTabbed
}
