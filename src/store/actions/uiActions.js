export const types = {
    TOGGLE: 'TOGGLE',
    TABBED: 'TABBED'
}

export const toggle = (id) => ({
    type: types.TOGGLE,
    id
})

export const tabbed = (id) => ({
    type: types.TABBED,
    id
})
