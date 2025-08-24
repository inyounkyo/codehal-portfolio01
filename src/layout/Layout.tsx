import { useEffect } from "react";
import Header from "./Header";

import { Outlet, useParams } from "react-router-dom";

const Layout = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  });

  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Layout;
