import {get} from 'lodash'

const getPeople = state => get(state, 'api.data.people', [])

const getPosts = state => get(state, 'api.data.posts', [])

const getPhotos = state => get(state, 'api.data.photos', [])

export default {
	getPeople,
	getPosts,
	getPhotos
}
