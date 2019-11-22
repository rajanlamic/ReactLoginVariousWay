import React, { useState, useEffect } from 'react'
import List from "../components/list/List"
import { retrieveList } from '../components/list/list-service'
import { ListData } from '../components/list/types'
import { useDispatch, useSelector } from 'react-redux'
import { setListFullfilled, setListRejected, setListPending } from '../components/list/list-actions'
import { selectList, selectPending, selectRejected } from '../components/list/list-selector'

const ListPage: React.FC = () => {
    // const [list, setList] = useState<ListData[]>([])
    // const [error, setError] = useState<boolean>(false)

    const list = useSelector(selectList)
    const pending = useSelector(selectPending)
    const rejected = useSelector(selectRejected)

    const dispatch = useDispatch()

    const getList = async () => {
        try {
            dispatch(setListPending(true))
            const result = await retrieveList()
            // setList(result.data)
            dispatch(setListFullfilled(result.data))
        } catch (err) {
            // setError(true)
            dispatch(setListRejected(true))
            console.log(err)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    if (pending) {
        return <div>Loading...</div>
    } else if (rejected) {
        return <div>Error Loading</div>
    }

    console.log('list', list)

    return <List list={list!} />
}

export default ListPage
