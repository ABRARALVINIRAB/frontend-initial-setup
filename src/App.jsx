// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// function App({ children }) {
//   return (
//     <>
//       <div className="container mt-5 b-3 bg-red">
//         <h1 className="bg-danger text-white">hey</h1>
//         {children}
//       </div>
//     </>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoadingSpinner from "./components/LoadingSpinner";
import MainLayout from "./layout/MainLayout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Replace with actual loading logic
  }, []);

  return <>{isLoading ? <LoadingSpinner /> : <MainLayout />}</>;
}

export default App;
