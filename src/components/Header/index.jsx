import React from 'react'
import "./header.scss"
import { Carousel } from 'react-carousel-minimal';

function Header() {
    const data = [
        {
            caption: "<div><div ><div ></div><h4>COMMITTED TO SUCCESS</h4></div><h1>We help to grow your business </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at aliquid optio, natus ea a. Recusandae, quam nobis.</p><button>OUR SERVICES</button></div>"
        },
        {
            caption: "<div ><div ><div ></div><h4>COMMITTED TO SUCCESS</h4></div><h1>We help to grow your business </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at aliquid optio, natus ea a. Recusandae, quam nobis.</p><button>OUR SERVICES</button></div>"
        },
        {
            caption: "<div><div '><div ></div><h4>COMMITTED TO SUCCESS</h4></div><h1>We help to grow your business </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at aliquid optio, natus ea a. Recusandae, quam nobis.</p><button>OUR SERVICES</button></div>"
        }
    ];
    return (
        <div id='header'>
            <div className="container">
                <div className="carusel">
                    <Carousel
                        data={data}
                        width="700px"
                        height="500px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header