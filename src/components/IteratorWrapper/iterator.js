import React from 'react'
import nanoid from 'nanoid'

function iterator(items, Component) {
    let totalCount = 0
    if ( items && items.length ) {
        totalCount = items.length
        return (
            items.map( (item, index) =>
                <Component
                    key={nanoid()}
                    {...item}
                    index={index}
                    totalCount={totalCount}
                    first={
                        (index === 0) ? true : false
                    }
                    last={
                        (index === totalCount - 1 ) ? true : false
                    }
                />
            )
        )
    }
}

export default iterator

