import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../components/Button';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products?.map((item) => (
        <div className='bg-white relative p-3 border hover:shadow-md transition duration-300 ease-in-out'>
          <img className='object-contain h-48 w-96' src={item.image} />

          <p className='line-clamp-2 mb-14 mt-4'>{item.title}</p>

          <div className='absolute bottom-4 text-center left-0 right-0'>
            <Button>Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
