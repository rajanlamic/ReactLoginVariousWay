import { createSelector } from "reselect"

const usersState = (state: any) => state.usersReducers

const selectUser = createSelector(usersState, ({ usersHooks }) => {
    return usersHooks
})

const selectUserName = createSelector([usersState], ({ usersHooks }) => (name: any) => {
    console.log("usersHooks", usersHooks)
    console.log("name", name)
    const names = usersHooks && usersHooks.data && usersHooks.data.find((user: any) => {
        return user.first_name === name
    })
    return names
})

// const selectUserName = createSelector(usersState, ({ usersHooks }) => (name: any, usersHooks: any) => {
//     console.log("usersHooks", usersHooks)
//     console.log("name", name)
//     return usersHooks.find((user: any) => {
//         return user.first_name == name
//     })
// })

// const selectSelectedDataSourceIsProportional = createSelector([selectCriteria],
//     ({ selectedDataSources = [] }) => (dataSourceId: number) => {
//       const selectedDataSource = selectedDataSources.find(dataSource => {
//         return dataSource.dataSourceId === dataSourceId
//       })
//       return get(selectedDataSource, 'isProportional', false)
//     }
//   )

export { selectUser, selectUserName }
