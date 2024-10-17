import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify'; 


// Create root element and render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <ToastContainer /> 
      <RouterProvider router={routes} /> 
   
  </StrictMode>
);
