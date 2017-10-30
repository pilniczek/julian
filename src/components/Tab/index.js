import { connect } from 'react-redux'
import { tabbed } from '../../store/actions/uiActions'
import  uiSelectors from '../../store/selectors/uiSelectors'
import Tab from './Tab'


const mapStateToProps = (state, locals) => {
    return (
        {
            isOpen: uiSelectors.getTabbed(state).indexOf(locals.id) !== -1
        }
    )
}

const mapDispatchToProps = (dispatch) => ({
    actions: {
        tabbed: (id) => dispatch(tabbed(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)