import { ListState } from "./types";
import { LIST } from "./list-constants";

const listReducer = (state: ListState = {}, action: { type: string, payload: any }) => {
    const { type, payload } = action
    // console.log('type', type)
    switch (type) {
        case LIST.PENDING:
            return { ...state, isPending: true }
        case LIST.FULFILLED:
            return { ...state, isPending: false, isRejected: false, isFulfilled: true, myList: payload }
        case LIST.REJECTED:
            return { ...state, isRejected: true }
        default:
            return state
    }
}

export default listReducer
