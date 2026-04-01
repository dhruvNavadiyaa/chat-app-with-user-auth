import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import SignIn from '@/pages/SignIn';

export default function Routes() {

  let router = createBrowserRouter([
    {
      path: "/",
      Component: SignIn,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
