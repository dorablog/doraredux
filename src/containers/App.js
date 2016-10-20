import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { getTagList } from '../actions'

import Header from './Header/header'
import ScrollTop from '../components/ScrollTop/index'
/*
    ES6 class语法创建组件，内部只允许定义方法，而不能定义属性，因此属性要写在class之外
    ES6 class语法创建组件， class中的方法不会自动将this绑定到实例中。必须使用 .bind(this)或者 箭头函数 ＝>来进行手动绑定
    react-redux组件中，通过connect分别把mapStateToProps和mapDispatchToProps挂在到组件的props上
    其中mapStateToProps用来传递state，mapDispatchToProps用来传递function
 */
class App extends Component {
    componentWillReceiveProps(nextProps){
        const { globalVal } = this.props
        if(globalVal.styleMode !== nextProps.globalVal.styleMode){
            document.body.className = nextProps.globalVal.styleMode
        }
    }
    render() {
        const { globalVal,actions,children,auth,location,showmsg } = this.props
        console.log('app props::::', this.props)
        return (
            <div>
                <Header
                    location={location}
                    auth={globalVal.auth}
                    styleMode={globalVal.styleMode}
                    logout={actions.logout}
                    changeStyleMode={actions.changeStyleMode} />
                {children}
                <ScrollTop />
            </div>
        )
    }
}

App.propTypes = {
    globalVal: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    showmsg: PropTypes.object.isRequired,
    children: PropTypes.node,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        globalVal: state.globalVal.toJS(),
        auth: state.auth.toJS(),
        showmsg: state.showmsg.toJS()
    }
}

//将actions挂在到props
const mapDispatchToProps = dispatch =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)