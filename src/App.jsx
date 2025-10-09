import { Outlet } from "react-router-dom";
import Header from "./compoments/layout/header.jsx";
import axios from "./utils/axios.customize";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get('/v1/api');
      console.log(">>> check res:", res);
    };
    fetchHelloWorld();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
