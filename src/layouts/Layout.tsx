import { Link, Outlet } from 'react-router-dom';

const permissions = ['can view dashboard', 'can view about'];

const hasPermission = (perm: string) => {
  return permissions.includes(perm);
};

const Layout = () => {
  return (
    <div className='p-3'>
      <p>Layout</p>
      <nav className='space-x-5 my-5'>
        {hasPermission('can view dashboard') && (
          <Link to='/' className='btn'>
            Dashboard
          </Link>
        )}
        {hasPermission('can view about') && (
          <Link to='/about' className='btn'>
            About
          </Link>
        )}
        <Link to='/products' className='btn'>
          Products (useEffect)
        </Link>
        <Link to='/products-query' className='btn'>
          Products (React Query)
        </Link>
      </nav>

      <div className='p-3'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
