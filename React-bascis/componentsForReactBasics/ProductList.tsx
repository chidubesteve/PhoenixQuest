import React, { useEffect, useState } from 'react'

const ProductList = ({category}: {category:string}) => {
    const [products, setProducts] = useState<string[]>([])

        useEffect(() => {
            console.log("Fetching products in ", category, ' category...');
            setProducts(['Clothing', 'Household'])
        }, [category]) //used to tell the useEffect to run once, since no value is passed. since no value is passed it is not dependent on anything so loads once on runtime that is no category is updated when clicked
  return (
    <div>ProductList</div>
  )
}

export default ProductList