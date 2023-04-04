import { FC, useContext } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { AppContext } from '../../context/Context';

const RequireAuth: FC<RouteProps> = ({ children }) => {
  const context = useContext(AppContext);
  return context.authenticated ? <>{children}</> : <Navigate to="/login" />;
};
export default RequireAuth;
