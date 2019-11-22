const getUserListAction = (payload: any) => {
    return {
        type: 'GET_USERS_SUCCESS_HOOKS',
        payload
    }
}

export { getUserListAction }
