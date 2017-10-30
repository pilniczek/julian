import React from 'react'
import { string, func, bool, shape, object} from 'prop-types'
import { css } from 'aphrodite/no-important'
import { styles } from './styles'
import { T } from '../../components/Text/Text'

const Tab = ({ url, id, label, children: Content, isOpen, actions:{ tabbed }, ...rest }) => {
    const handleClick = () => tabbed(id)
    return(
        <div className={css(styles.tab)}>
            <button onClick={handleClick}
                style={{
                    width: 100/rest.totalCount + '%',
                    left: (100/rest.totalCount)*rest.index + '%'
                }}
                className={ css(styles.tabButton, isOpen ? styles.tabButtonOpen : '') }
            >
                <T>{ label }</T>
            </button>
            { isOpen &&
                <div className={css(styles.tabContent)}>
                    <Content />
                </div>
            }
        </div>
    )
}

Tab.propTypes = {
    url: string.isRequired,
    id: string.isRequired,
    label: string.isRequired,
    children: func.isRequired,
    isOpen: bool,
    action: shape({
        toggle: object.isRequired
    })
}

Tab.defaultProps = {

}

export default Tab
