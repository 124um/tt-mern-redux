import * as actionTypes from '../constants/actionType'
import { jsonApi } from '../middleware/api'

export const fetchBooksLoading = () => {
    return {
        type: actionTypes.FETCH_BOOKS_LOADING
    }
}

export const fetchBooksSuccess = (books) => {    
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        books
    }
}

export const fetchBooksFailure = (error) => {
    return {
        type: actionTypes.FETCH_BOOKS_FAILURE,
        error
    }
}

export const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchBooksLoading())
        jsonApi(`books/`)
            .then(res => {
                dispatch(fetchBooksSuccess(res))
            })
            .catch(error => {
                dispatch(fetchBooksFailure(error.message))
            })
    }
}

export const postBooksLoading = () => {
    return {
        type: actionTypes.POST_BOOK_LOADING
    }
}

export const postBooksSuccess = (books) => {    
    return {
        type: actionTypes.POST_BOOK_SUCCESS,
        books
    }
}

export const postBooksFailure = (error) => {
    return {
        type: actionTypes.POST_BOOK_FAILURE,
        error
    }
}

export const postBooks = () => {
    return dispatch => {
        dispatch(postBooksLoading())
        jsonApi(`books/`, "POST", data)
            .then(res => {
                dispatch(postBooksSuccess(res))
            })
            .catch(error => {
                dispatch(postBooksFailure(error.message))
            })
    }
}

export const patchBooksLoading = () => {
    return {
        type: actionTypes.PATCH_BOOK_LOADING
    }
}

export const patchBooksSuccess = (books) => {    
    return {
        type: actionTypes.PATCH_BOOK_SUCCESS,
        books
    }
}

export const patchBooksFailure = (error) => {
    return {
        type: actionTypes.PATCH_BOOK_FAILURE,
        error
    }
}

export const patchBooks = () => {
    return dispatch => {
        dispatch(patchBooksLoading())
        jsonApi(`books/`, "PATCH", data)
            .then(res => {
                dispatch(patchBooksSuccess(res))
            })
            .catch(error => {
                dispatch(patchBooksFailure(error.message))
            })
    }
}

export const deleteBooksLoading = () => {
    return {
        type: actionTypes.DELETE_BOOK_LOADING
    }
}

export const deleteBooksSuccess = (books) => {    
    return {
        type: actionTypes.DELETE_BOOK_SUCCESS,
        books
    }
}

export const deleteBooksFailure = (error) => {
    return {
        type: actionTypes.DELETE_BOOK_FAILURE,
        error
    }
}

export const deleteBooks = () => {
    return dispatch => {
        dispatch(deleteBooksLoading())
        jsonApi(`books/`, "DELETE", id)
            .then(res => {
                dispatch(deleteBooksSuccess(res))
            })
            .catch(error => {
                dispatch(deleteBooksFailure(error.message))
            })
    }
}

export const fetchCoversLoading = () => {
    return {
        type: actionTypes.FETCH_COVERS_LOADING
    }
}

export const fetchCoversSuccess = (covers) => {    
    return {
        type: actionTypes.FETCH_COVERS_SUCCESS,
        covers
    }
}

export const fetchCoversFailure = (error) => {
    return {
        type: actionTypes.FETCH_COVERS_FAILURE,
        error
    }
}

export const fetchCovers = () => {
    return dispatch => {
        dispatch(fetchCoversLoading())
        jsonApi(`covers/`)
            .then(res => {
                dispatch(fetchCoversSuccess(res))
            })
            .catch(error => {
                dispatch(fetchCoversFailure(error.message))
            })
    }
}