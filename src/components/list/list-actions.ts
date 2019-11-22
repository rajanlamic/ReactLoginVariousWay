import { createAction } from "redux-actions";
import { LIST } from './list-constants'
import { ListData } from './types'

const setListPending = createAction<boolean>(LIST.PENDING)
const setListFullfilled = createAction<ListData>(LIST.FULFILLED)
const setListRejected = createAction<boolean>(LIST.REJECTED)

export { setListPending, setListFullfilled, setListRejected }
