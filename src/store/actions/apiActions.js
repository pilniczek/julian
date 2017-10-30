export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAILURE: 'LOAD_FAILURE',
}

const loadSuccess = (id, payload, meta = {}) => ({
  type: types.LOAD_SUCCESS,
  id,
  payload,
  meta: { ...meta, timestamp: window.performance.now() },
})

const loadFailure = (id, payload, meta = {}) => ({
  type: types.LOAD_FAILURE,
  id,
  payload,
  meta: { ...meta, timestamp: window.performance.now() },
})

const loadRequest = (id, payload, meta = {}) => ({
  type: types.LOAD_REQUEST,
  id,
  payload,
  meta: { ...meta, timestamp: window.performance.now() },
})

const getPeople = () => dispatch => {
  dispatch(loadRequest('people'))
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(( records ) => dispatch(loadSuccess('people', records)))
    .catch(err => dispatch(loadFailure('people', err.message)))
}

const getPosts = () => dispatch => {
  dispatch(loadRequest('posts'))
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(( records ) => dispatch(loadSuccess('posts', records)))
    .catch(err => dispatch(loadFailure('posts', err.message)))
}

const getPhotos = () => dispatch => {
  dispatch(loadRequest('posts'))
  return fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(res => res.json())
    .then(( records ) => dispatch(loadSuccess('photos', records)))
    .catch(err => dispatch(loadFailure('photos', err.message)))
}

export default {
	getPeople,
  getPosts,
  getPhotos
}
