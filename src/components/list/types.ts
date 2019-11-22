export interface ListData {
    email: string,
    first_name: string,
    last_name: string
    title: string,
    user_name: string
    _id: string,
}

export interface ListState {
    isPening?: boolean,
    isFulfilled?: boolean,
    isRejected?: boolean,
    myList?: ListData[]
}
