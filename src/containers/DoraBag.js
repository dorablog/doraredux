// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { checkout, addToDoraBag } from '../actions'
// import { getVisibleDoraBagClothes } from '../reducers/dorabag'
// import ClothItem from '../components/ClothItem'
// import DoraBagList from '../components/DoraBagList'

// class DoraBag extends Component {
//     render() {
//         const { clothes } = this.props
//         return (
//             <DoraBagList title="Products">
//                 {clothes.map(cloth =>
//                     <ClothItem
//                         key={cloth.id}
//                         cloth={cloth}
//                         onAddToDoraBagClicked={() => this.props.addToDoraBag(cloth.id)} />
//                 )}
//             </DoraBagList>
//         )
//     }
// }
// //React.propTypes.arrayOf(React.PropTypes.string)   某种类型的阵列
// //React.proptTypes.shape({...}) 符合指定格式的物件
// //将下列物品clothes和actions merge到props中，供组件调用
// DoraBag.propTypes = {
//     clothes: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         img: PropTypes.string.isRequired,
//         inventory: PropTypes.number.isRequired,
//         size: PropTypes.string.isRequired
//     })).isRequired,
//     addToDoraBag: PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//     return {
//         clothes: getVisibleDoraBagClothes(state.dorabag)
//     }
// }

// ///////////////////////////////////////////////////////////////////
// /// connect返回一个函数，该函数接受一个React组件的构造函数作为        ///
// /// 连接对象，最终返回连接好的组件构造函数，可以理解为，connect        ///
// /// 把redux和react连接起来了                                      ///
// /// Connect(ProductsContainer)()                                ///
// /// connect将store中的必要数据作为props传递给React组件来render      ///
// /// 并包装action creator用于在响应用户操作时dispatch一个action。    ///
// /// 本例中，connect的两个参数分别是  需要merge进props的state 和     ///
// /// 需要merage进props的state                                     ///
// ///////////////////////////////////////////////////////////////////
// export default connect(
//     mapStateToProps,
//     { checkout, addToDoraBag }
// )(DoraBag)