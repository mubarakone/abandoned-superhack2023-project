import React from 'react'
import ShopNavigation from './shopNavigation'
import ProductFilters from './productList/productFilters'

export default function ShopLayout({children}) {
  return (
    <>
    <ShopNavigation />
    <ProductFilters>
    {children}
    </ProductFilters>
    </>
  )
}
