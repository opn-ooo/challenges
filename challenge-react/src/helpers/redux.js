export function isPendingAction(module) {
    return (action) => action.type.endsWith('/pending') && action.type.startsWith(module)
}

export function isFulFilledAction(module) {
    return (action) => action.type.endsWith('/fulfilled') && action.type.startsWith(module)
}

export function isRejectedAction(module) {
    return (action) => action.type.endsWith('/rejected') && action.type.startsWith(module)
}
