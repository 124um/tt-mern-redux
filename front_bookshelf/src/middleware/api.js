
import config from "../config/dev.env.json"
import keys from 'lodash/keys'

const { API_ROOT } = config

const fullUrl = (url) => `${API_ROOT}/${url}`

export const jsonApi = (url, method = "GET", params = {}) => {    
    let requestParams = {
        method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }
    if (keys(params).length > 0) {
        requestParams.body = JSON.stringify(params)
    }
    return fetch(fullUrl(url), requestParams).then(
        (response) =>
            response.json().then((json) => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
                return json
            })
    )
}

