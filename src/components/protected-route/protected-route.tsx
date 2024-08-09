import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './../../utils/auth-context';

interface IProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: IProps) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
