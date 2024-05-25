import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';

const DetailProductPage = () => {

  const {productId} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axiosInstance.get(`/products/${productId}?type=single`);
        setProduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [productId])

  if (!product) return null;    //이 조건이 붙어야지



  return (
    <section>
      <div className='text-center'>
        <h1 className='p-4 text-2xl'>{product.title}</h1>
      </div>

      <div className='flex gap-4'>
        <div className='w-1/2'>
        {/* ProductImage */}
          <ProductImage product={product}/>
        </div>

        <div className='w-1/2'>
        {/* ProductInfo */}
          <ProductInfo product={product}/>
        </div>  
      </div>
    </section>
  )
}

export default DetailProductPage