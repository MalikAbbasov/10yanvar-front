import React, { useEffect, useState } from 'react'
import "./fetch.scss"

function Fetchsection() {
    const [product, setProduct] = useState([])

useEffect(() => {
  fetch("http://localhost:4400/")
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
}, [])

    return (
        <div>
          <section id='fecth'>
            <div className="container">
              <div className="lineh4">
                <div className="line"></div>
                <h4>OUR TOP SERVICES</h4>
              </div>
              <h2>Our Best Services</h2>
      
              <div className="fetch_products">
                {
                  product.map((x) => (
                    <div className="card">
                      <ul>
                        <i className={x.image}></i>
                        <li>{x.name}</li>
                        <p>{x.about}</p>
                      </ul>
                      <div className="card_hover"></div>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      )
}

export default Fetchsection



