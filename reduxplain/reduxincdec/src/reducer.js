

const count = 0
export default function reducer(state = count, action) {
    const { type, payload } = action;
    switch (type) {
        case 'INCREAMENT':
            return state + 1;
        case 'DECREAMENT':
            return state - 1;
        case 'RESET':
            return count
        default:
            return state;
    }
}