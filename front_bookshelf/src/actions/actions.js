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