import React from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { API_URL } from "../constants/API"
import { getCartData } from '../redux/actions/cart';

class Cart extends React.Component {

  deleteCartHandler = (cartId) => {
    Axios.delete(`${API_URL}/carts/${cartId}`)
    .then(() => {
      alert("Berhasil delete item dari cart")
      this.props.getCartData(this.props.userGlobal.id)
    })
    .catch(() => {
      alert("Terjadi kesalahan di server")
    })
  }

  renderCart = () => {
    return this.props.cartGlobal.cartList.map((val) => {
      return (
        <tr>
          <td className="align-middle">
            {val.productName}
          </td>
          <td className="align-middle">
            {val.price}
          </td>
          <td className="align-middle">
            <img src={val.productImage} alt="" style={{ height: "125px" }} />
          </td>
          <td className="align-middle">
            {val.quantity}
          </td>
          <td className="align-middle">
            {val.quantity * val.price}
          </td>
          <td className="align-middle">
            <button onClick={() => this.deleteCartHandler(val.id)} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Cart</h1>
            <table className="table mt-4">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderCart()}
              </tbody>
              <tfoot className="bg-light">
                <tr>
                  <td colSpan="6">
                    <button className="btn btn-success">
                      Checkout
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartGlobal: state.cart,
    userGlobal: state.user,
  }
}

const mapDispatchToProps = {
  getCartData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);