//promise处理中间件
export default function promiseMiddleware() {
  return next => action => {
    const { promise, type } = action
    const rest = {
    	itemsPerPage: action.itemsPerPage,
    	isAdd: action.isAdd
    }
    if (!promise) return next(action)

    const SUCCESS = type + '_SUCCESS'
    const REQUEST = type + '_REQUEST'
    const FAILURE = type + '_FAILURE'
    next({ rest, type: REQUEST })
    return promise
      	.then(response => ({json: response.data, status: response.statusText}))
      	.then(({json,status}) => {
        	next({ rest, json, type: SUCCESS })
        	return true
      	})
      	.then(undefined, error => {
        	next({ rest, error, type: FAILURE })
        	return false
      	})
  	}
}
