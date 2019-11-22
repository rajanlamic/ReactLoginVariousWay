import React, { useState, useEffect } from 'react'
import List from "../components/list/List"
import { retrieveList } from '../components/list/list-service'
import { ListData } from '../components/list/types'

const ListPage: React.FC = () => {
    const [list, setList] = useState<ListData[]>([])
    const [error, setError] = useState<boolean>(false)

    const getList = async () => {
        try {
            const result = await retrieveList()
            setList(result.data)
        } catch (err) {
            setError(true)
            console.log(err)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    if (!list) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Error Loading</div>
    }

    console.log('list', list)

    return <List list={list} />
}

export default ListPage
