import { combineReducers } from 'redux'
import * as actionTypes from '../constants/actionType'
import keys from 'lodash/keys'

const defaultState = {
    res: {},
    loading: false,
    postLoading: false,
    patchLoading: false,
    deleteLoading: false,
    error: '',
    postError: '',
    patchError: '',
    deleteError: '',
}

const books = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }          
        case actionTypes.PATCH_BOOK_LOADING:
            return {
                ...state,
                patchLoading: true,
                patchError: ''
            }
        case actionTypes.POST_BOOK_LOADING:
            return {
                ...state,
                postLoading: true,
                postError: ''
            }
        case actionTypes.DELETE_BOOK_LOADING:
            return {
                ...state,
                deleteLoading: true,
                deleteError: ''
            }            
        case actionTypes.FETCH_BOOKS_SUCCESS:
            if (keys(action.books).length === 0) {
                return defaultState
            }
            return {
                ...state,
                res: action.books.results,
                loading: false,
                error: ''
            }
        case actionTypes.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.PATCH_BOOK_FAILURE:
            return {
                ...state,
                patchLoading: false,
                patchError: action.error
            }            
        case actionTypes.POST_BOOK_FAILURE:
            return {
                ...state,
                postLoading: false,
                postError: action.error
            }
        case actionTypes.DELETE_BOOK_FAILURE:
            return {
                ...state,
                deleteLoading: false,
                deleteError: action.error
            }        
        case actionTypes.PATCH_BOOK_SUCCESS:
            return {
                ...state,
                res: action.books.results,
                patchLoading: false,
                patchError: '',
            }
        case actionTypes.POST_BOOK_SUCCESS:
            return {
                ...state,
                res: action.books.results,
                postLoading: false,
                postError: ''
            }
        case actionTypes.DELETE_BOOK_SUCCESS:
            let newallIds = action.books.results.filter(item => item !== action.books)
            return {
                ...state,
                res: newallIds,
                deleteLoading: false,
                deleteError: ''
            }       
        default:
            return state
    }
}

const covers = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COVERS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }          
        case actionTypes.FETCH_COVERS_SUCCESS:
            if (keys(action.covers).length === 0) {
                return defaultState
            }
            return {
                ...state,
                res: action.covers.results,
                loading: false,
                error: ''
            }
        case actionTypes.FETCH_COVERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    books,
    covers
})

export default rootReducer
