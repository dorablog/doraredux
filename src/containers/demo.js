/*
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

class Demo extends Component {
    render() {
        const { products } = this.props
        return (
            <ProductsList title="Products">
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={() => this.props.addToCart(product.id)} />
                )}
            </ProductsList>
        )
    }
}

Demo.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}
//connect的第一个对象必须是function,第二个参数可以是function也可以是对象，所以可以有下面两种写法
//1
function mapStateToProps(state) {
    return {
        products: getVisibleProducts(state.products)
    }
}

export default connect(
    mapStateToProps,
    { addToCart }
)(Demo)
//2
function mapStateToProps(state) {
    return {
        articleList: state.articleList.toJS(),
        globalVal: state.globalVal.toJS(),
        auth: state.auth.toJS(),
        showmsg: state.showmsg.toJS()
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo)
*/