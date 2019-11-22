const usersReducers = (state: any = {}, action: any) => {
    const { type, payload } = action
    switch (type) {
        case "GET_USERS_SUCCESS":
            return { ...state, users: payload }
        case "GET_USERS_SUCCESS_HOOKS":
            return { ...state, usersHooks: payload }

        default:
            return state
    }
}

export default usersReducers
