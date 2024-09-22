import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ completed, redirectTo, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={completed ? children : <Navigate to={redirectTo} />}
    ></Route>
  );
}


