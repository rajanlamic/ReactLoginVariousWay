import { ListState } from "./types";
import { State } from "../../combined-reducers";
import { createSelector } from "reselect";

const listState = (state: State) => state.listReducer

const selectList = createSelector(listState, list => (list.myList))
const selectPending = createSelector(listState, list => (list.isPening))
const selectRejected = createSelector(listState, list => (list.isRejected))

export { selectPending, selectList, selectRejected }
