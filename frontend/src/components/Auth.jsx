import axiosInstance from "@/apis/axiosInstance";
import useApi from "@/hooks/useApi";
import { AUTHENTICATE_USER } from "@/utils/apiConstants";
import { routePaths } from "@/utils/constants";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function Auth() {
  const navigate = useNavigate();
  const { api } = useApi();

  const authenticateUser = async () => {
    try {
      const resonse = await api({
        method: "POST",
        url: AUTHENTICATE_USER,
      });
    } catch (error) {
      navigate(routePaths.SIGN_IN);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return <Outlet />;
}
