import React from 'react'
import ShopNavigation from './shopNavigation'
import ProductList from './productList'

export default function Shop() {
  return (
    <>
        <ShopNavigation>
            <ProductList />
        </ShopNavigation>
    </>
  )
}
