import { useQuery } from 'react-query'
import { client } from 'utils/api-client'
import bookPlaceholderSvg from 'assets/book-placeholder.svg'

const loadingBook = {
    title: 'Loading...',
    author: 'loading...',
    coverImageUrl: bookPlaceholderSvg,
    publisher: 'Loading Publishing',
    synopsis: 'Loading...',
    loadingBook: true,
}

const loadingBooks = Array.from({length: 10}, (v, index) => ({
    id: `loading-book-${index}`,
    ...loadingBook,
  }))
  

export const useBook = (bookId, token) => {
    const { data } = useQuery(['book', { bookId }], async () => await client(`books/${bookId}`, { token }))
    return data?.book ?? loadingBook
}
export const useBookSearch = (query, user) => {
    const { data, error, isLoading, isError, isSuccess } = useQuery(
        ['bookSearch', { query }],
        async () => await client(`books?query=${encodeURIComponent(query)}`, {
          token: user.token
        })
      )

    const books = data?.books ?? loadingBooks

    return {error, isLoading, isError, isSuccess, books}
}
