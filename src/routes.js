/*  react-router常用用法
    IndexRoute为了解决子组件的问题
    <IndexRoute component={Home}/>显式指定Home是根路由的子组件(即默认情况下加载的子组件)
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Article from './containers/Article'
import Login from './containers/Login/login'

export default () => (
	<Route path="/" component={App}>
        <IndexRoute component={Home} />
		<Route path="/login" component={Login} />
		<Route path="/article/:id" component={Article} />
	</Route>
)