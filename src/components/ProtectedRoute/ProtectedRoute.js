// import React from 'react';
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element: Component, ...props  }) => {
//   return (
//     props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
// )}

// export default ProtectedRoute; 
import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ loggedIn, children }) => {
  return loggedIn ? children : <Navigate to="/signin" />
}

export default ProtectedRoute; 