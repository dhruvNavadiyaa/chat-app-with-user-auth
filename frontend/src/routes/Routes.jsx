import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import SignIn from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import ChatRoom from '@/pages/ChatRoom';
import Auth from '@/components/auth';

export default function Routes() {

  let router = createBrowserRouter([
    {
      path: "/sign-in",
      Component: SignIn,
    },
    {
      path: "/sign-up",
      Component: SignUp,
    },
    {
      path: "/",
      Component: Auth,
      children: [
        {
          path: "/",
          Component: ChatRoom,
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
