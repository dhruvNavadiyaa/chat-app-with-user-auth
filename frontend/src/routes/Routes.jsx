import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import SignIn from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import ChatRoom from '@/pages/ChatRoom';

export default function Routes() {

  let router = createBrowserRouter([
    {
      path: "/",
      Component: ChatRoom,
    },
    {
      path: "/sign-in",
      Component: SignIn,
    },
    {
      path: "/sign-up",
      Component: SignUp,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
