import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


//reducer将action中的数据传递并merge到现有的state上，返回一个新的state
import rootReducer from './reducers'
import { closetInitial } from './actions'
import routes from './routes'

//container
import App from './containers/App'
import * as Actions from './actions'

const middleware = process.env.NODE_ENV === 'production' ?
  	[ thunk ] :
  	[ thunk, logger() ]

///////////////////////////////////////////////////////////////////
/// 	store 													///
/// 		dispatch   											///
///			getState											///
///			replaceReducer										///
///			subscribe											///
///////////////////////////////////////////////////////////////////


const store = createStore(
  	rootReducer,
  	applyMiddleware(...middleware)
)
//进入页面首次获取所有的商品
//dispatch的作用就是把action丢给reducer
store.dispatch(Actions.getArticleDetail())
console.log("index Actions:", Actions)
/*

结合前面的分析，可以得出以下流程
dispatch(action) -> reducer -> reducer(action) －> reducer将当前action中的数据
merge到state上并返回一个新的state
其中，在reducer中，将所有的type和传入的action做对比，并执行相应的操作
在action调用相应的api获取数据

*/


/**********************************      dispatch源码      **********************************

	可以看到dispatch做了两件事
		1.reducer执行了相应的监听事件
		2.返回了一个action，供下一次的dispatch

function dispatch(action) {
    if (!isPlainObject(action)) {
      	throw new Error(
	        'Actions must be plain objects. ' +
	        'Use custom middleware for async actions.'
      	)
    }

    if (typeof action.type === 'undefined') {
      	throw new Error(
	        'Actions may not have an undefined "type" property. ' +
	        'Have you misspelled a constant?'
      	)
    }

    if (isDispatching) {
      	throw new Error('Reducers may not dispatch actions.')
    }

    try {
      	isDispatching = true
      	currentState = currentReducer(currentState, action)
    } finally {
      	isDispatching = false
    }

    var listeners = currentListeners = nextListeners
    for (var i = 0; i < listeners.length; i++) {
      	listeners[i]()
    }
    return action
 }
*/
//当store获取到了当前state并且包含closet的时候，我们就知道我们的数据已经成功挂载到app上了
console.log('store state:', store.getState());
//将store作为props传递给Provider组件
/**
 *
 *  阅读redux源码后，我们看到，createStore接收两个参数reducer和action
 *      createStore完成了两件事
 *          1.调用执行器currentReducer(currentState, action)执行action并返回相应的状态与数据
 *          2.
 *             To specify how different parts of the state tree respond to actions, you may combine several reducers
 *             into a single reducer function by using `combineReducers`.
 *      dispatch将一个action对象发送给reducer
 */
render(
  	<Provider store={store}>
    	<Router>
            {routes()}
        </Router> 
  	</Provider>,
 	document.getElementById('app')
)