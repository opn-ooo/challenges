export const extractBody = res => res.data

export function wait(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms, value))
}
