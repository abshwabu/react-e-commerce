import React from 'react'
import css from './Product.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function Product() {
  const [MenuProducts, setMenuProducts] = useState(ProductsData)
  const filter = (type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
  }
  const [parent] = useAutoAnimate()
  return (
    <div className={css.container}>
        <img src={Plane} alt="Plane" />
        <h1>Featured Products</h1>

        <div className={css.products}>
          <ul className={css.menu}>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
          </ul>
          <div className={css.list} ref={parent}>
            {
              MenuProducts.map((product,i)=>(
                <div className={css.product}>
                  <div className="left-s">
                    <div className="name">
                      <span>{product.name}</span><span>{product.detail}</span>
                    </div>
                    <span>{product.price}$ </span>
                    <div>Shop Now</div>
                  </div>
                  <img src={product.img} alt={product.name} className='img-p' />
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Product