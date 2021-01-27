import { combineReducers } from 'redux'
import * as actionTypes from '../constants/actionType'
import keys from 'lodash/keys'

const defaultState = {
    res: {},
    loading: false,
    error: ''
}


const books = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
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
