import axiosInstance from '@/apis/axiosInstance';
import { AUTHENTICATE_USER } from '@/utils/apiConstants';
import paths from '@/utils/constants';
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';

export default function Auth() {
    const navigate = useNavigate();
    const authenticateUser = async () => {
        try {
            const resonse = await axiosInstance.post(AUTHENTICATE_USER);
            // if (resonse.status) {

            // }
        } catch (error) {
            navigate(paths.signIn);
        }
    }

    useEffect(() => {
        authenticateUser();
    }, []);

    return <Outlet />
}
