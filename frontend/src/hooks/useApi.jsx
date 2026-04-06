import axiosInstance from "@/apis/axiosInstance";
import { useState } from "react";

export default function useApi() {
  const [loader, setLoader] = useState(false);

  const api = async ({ method, url, payload }) => {
    try {
      setLoader(true);
      const response = await axiosInstance({
        method: method,
        url: url,
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setLoader(false);
    }
  };

  return { api, loader };
}
