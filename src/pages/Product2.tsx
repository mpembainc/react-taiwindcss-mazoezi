import axios, { AxiosResponse } from 'axios';
import Button from '../components/Button';
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

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

const getProducts = () => axios.get('https://fakestoreapi.com/products');

const Product2 = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery<AxiosResponse<Product[]>>({
    queryKey: ['products'],
    queryFn: getProducts,
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });

  return (
    <div>
      <Button
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ['products'] })
        }
      >
        Invalidate
      </Button>
      <div className='grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className='bg-white relative p-3 border hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'
          >
            <img className='object-contain h-48 w-96' src={item.image} />

            <p className='line-clamp-2 mb-14 mt-4'>{item.title}</p>

            <div className='absolute bottom-4 text-center left-0 right-0'>
              <Button>Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product2;
