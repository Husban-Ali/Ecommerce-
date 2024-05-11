import React,{useState,useEffect} from 'react'
import { getAllProducts } from '../Form/Productservice'
import Card from '../components/Card'

function Home() {
  const [products, setProducts] = useState(null);
    useEffect(()=>{
      (async()=>{
      const productsResponse = await getAllProducts()
      setProducts(productsResponse)
      console.log(products)
     })()
    },[])

if (!products) return console.log(null) 
  return (
    <>
   <div className='m-4 flex px-4 justify-between flex-wrap' style={{ gap: '16px' }}>

{
  products.map((product, idx) => {
    return (
      <React.Fragment key={idx}>
        <Card {...product} productId={product.id} />
        {(idx + 1) % 4 === 0 && <div className="w-full" style={{ marginBottom: '16px' }} />} {/* Add a new line after every 4th item */}
      </React.Fragment>
    );
  })
}
</div>


</>
  )
}

export default Home