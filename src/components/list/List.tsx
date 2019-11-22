import React from 'react'
import { ListData } from './types'

export interface ListProps {
    list: ListData[]
}

export const Lists: React.FC<ListProps> = ({ list = [] }) => {
    return <ul>
        {
            list.map(item => {
                return <li key={item.first_name}>{item.first_name}</li>
            })
        }
    </ul>
}

// export default Lists
