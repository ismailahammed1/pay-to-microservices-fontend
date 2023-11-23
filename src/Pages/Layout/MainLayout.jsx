import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Foter";
import Navbar from "../../components/navbar/Navbar";

const queryClient = new QueryClient();
const MainLayout = () => {
  return (
    <div className="mainLayout">
     <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
