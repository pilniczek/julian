import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './Home'

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (url) => push(url)
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)