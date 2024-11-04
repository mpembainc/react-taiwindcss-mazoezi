import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className='bg-blue-400 py-2 px-5 rounded text-white hover:bg-blue-600 transition duration-300'
    >
      {children}
    </button>
  );
};

export default Button;
