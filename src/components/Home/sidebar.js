import React, { PropTypes, Component } from 'react'

class Sidebar extends Component{
    render(){
        const {indexImg} = this.props
        let styles = { backgroundImage: 'url(' + indexImg + ')'}
        return (
            <div className="col-sm-3 sidebar-box">
                <div className="cover-img" style={styles}></div>
                <div className="bottom-block">
                    <h1>FE、zero</h1>
                    <h3>有朋自远方来</h3>
                    <h3>不亦乐乎</h3>
                </div>
            </div>
        )
    }
}
Sidebar.propTypes = {
    indexImg: PropTypes.any.isRequired
}
export default Sidebar