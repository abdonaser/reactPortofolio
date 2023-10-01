import React, { Component } from 'react'
import './Portofolio.css'
import PortofolioChild from '../PortofolioChild/PortofolioChild'
import port1 from './imgs/port1.png'
import port2 from './imgs/port2.png'
import port3 from './imgs/port3.png'

export default class Portofolio extends Component {
  state = {
    allProducts: [
      { img: port1, id: "img1" },
      { img: port2, id: "img2" },
      { img: port3, id: "img3" },
      { img: port1, id: "img4" },
      { img: port2, id: "img5" },
      { img: port3, id: "img6" },
    ]
  }
  render() {
    return <>
      <section className='portofolio'>

        <h1 className='mt-4 text-center fw-bolder'>PORTFOLIO COMPONENT</h1>

        <div className='my-3  fw-bold   my-2 d-flex justify-content-center align-items-center'>
          <div className='divs bg-black  line'></div>
          <div className='divs mx-4 '><i className='fa-solid fa-star'></i></div>
          <div className='divs  bg-black line'></div>
        </div>
        <div className="container my-4">
          <div className="row g-4">
            {this.state.allProducts.map((pro, indx) => { return <PortofolioChild key={indx} pro={pro} /> })}



          </div>



        </div>
      </section>

    </>
  }
}
