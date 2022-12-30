import { Outlet } from 'react-router-dom';

import BlogActions from '../components/BlogActions';

function BlogLayout(params) {
  return (
    <>
      <BlogActions />
      <Outlet />
    </>
  );
}

export default BlogLayout;
