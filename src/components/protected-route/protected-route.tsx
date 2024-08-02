// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// interface IProps {
//   token: string | null;
//   children: React.ReactNode;
// }

// export const ProtectedRoute: React.FC<IProps> = ({ token, children }) => {
//   const location = useLocation();

//   if (!token) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   return <>{children}</>;
// };


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
