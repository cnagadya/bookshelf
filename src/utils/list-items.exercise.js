import { queryCache, useQuery, useMutation } from 'react-query'
import { client } from 'utils/api-client'

export const useListItem = (token, bookId) => {
    const { listItems } = useListItems(token)
    return listItems.find(item => item.bookId === bookId)
}

export const useListItems = token => {
    const { data } = useQuery('list-items',
        async () => await client('list-items', { token })
    )
    return { listItems: data?.listItems ?? [] }
}

const mutationOptions = { onSettled: ()=> queryCache.invalidateQueries('list-items') }

export const useUpdateListItem = token => useMutation(
    async data => await client(`list-items/${data.id}`, { token, method: "PUT", data }),
    mutationOptions
)

export const useRemoveListItem = token => useMutation(
    async id => await client(`list-items/${id}`, { token, method: "DELETE" }),
    mutationOptions
)
export const useCreateListItem = token => useMutation(
    async data => await client('list-items', { token, method: "POST", data }),
    mutationOptions
)