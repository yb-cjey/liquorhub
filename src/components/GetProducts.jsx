import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const GetProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState("")

  const navigate = useNavigate()
  const img_url = "https://cornellius.alwaysdata.net/static/images/"

  const getProducts = async () => {
    setError("")
    setLoading("wait as we load products...⏳")
    try {
      const response = await axios.get("https://cornellius.alwaysdata.net/api/get_product_details")
      setLoading("")
      setProducts(response.data)
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (

    <div className="container mt-4">
      <h2 className="text-warning text-center">Available Products</h2>
      <h5 className="text-info">{loading}</h5>
      <h5 className="text-danger">{error}</h5>


      {/* Carousel ABOVE the product grid */}
      {products.length > 0 && (
        <div id="productCarousel" className="carousel slide mb-2 " data-bs-ride="carousel">
          <div className="carousel-inner bg-dark">
            <div className="col-md-12">
              <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/images/slidesquare2.jpg" alt="carousel" class="img-fluid w-75 d-block slide-img" />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/slidesquare3.jpg" alt="carousel" class="img-fluid w-75 d-block slide-img" />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/slidesquare4.jpg" alt="carousel" class="img-fluid w-75 d-block slide-img" />
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-danger"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-danger"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      )}

      {/* Product Grid BELOW the carousel */}
      <div className="row mt-4">
        {products.map((product, index) => (
          <div key={index} className="justify-content-center col-md-3 mb-4">
            <div className="card shadow p-4 text-center card-margin bg-dark">
              <img src={img_url + product.product_photo} alt="" className="product_img mt-2" />
              <div className="card-body ">
                <h5 className="mt-2 text-info">{product.product_name}</h5> <hr />
                <h5 className="text-muted">{product.product_description}</h5>
                <h5 className="text-warning mb-3">ksh {product.product_cost}</h5>
                <button
                  className="btn btn-dark text-warning "
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>


  )

}

export default GetProducts
