import React from "react";
import ProductCard from "../components/ProductCard";
import Axios from 'axios'
import { API_URL } from '../constants/API'

class Home extends React.Component {
  state = {
    productList: [],
  }

  fetchProducts = () => {
    Axios.get(`${API_URL}/products`)
    .then((result) => {
      this.setState({ productList: result.data })
    })
    .catch(() => {
      alert("Terjadi kesalahan di server")
    })
  }

  renderProducts = () => {
    return this.state.productList.map((val) => {
      return <ProductCard productData={val} />
    })
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <strong>Filter Products</strong>
              </div>
              <div className="card-body">
                <label htmlFor="searchProductName">Product Name</label>
                <input
                  name="searchProductName"
                  type="text"
                  className="form-control mb-3"
                />
                <label htmlFor="searchCategory">Product Category</label>
                <select name="searchCategory" className="form-control">
                  <option value="">All Items</option>
                  <option value="">Kaos</option>
                  <option value="">Celana</option>
                  <option value="">Aksesoris</option>
                </select>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                <strong>Sort Products</strong>
              </div>
              <div className="card-body">
                <label htmlFor="searchCategory">Sort by</label>
                <select name="searchCategory" className="form-control">
                  <option value="">Default</option>
                  <option value="">Lowest Price</option>
                  <option value="">Highest Price</option>
                  <option value="">A-Z</option>
                  <option value="">Z-A</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button className="btn btn-dark">
                  {"<"}
                </button>
                <div className="text-center">Page {this.state.page} of {this.state.maxPage}</div>
                <button className="btn btn-dark">
                  {">"}
                </button>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="d-flex flex-wrap flex-row">
              {/* Render products here */}
              {this.renderProducts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
