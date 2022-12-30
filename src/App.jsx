import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import ErrorPage from './pages/Error';

import PostDetailPage, { loader as blogPostLoader } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    childern: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/blog',
        element: <BlogLayout />,
        childern: [
          {
            path: ':id',
            element: <PostDetailPage />,
            loader: blogPostLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>Testing</RouterProvider>;
}

export default App;
