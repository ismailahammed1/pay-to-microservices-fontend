import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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
        <ReactQueryDevtools /> {/* Include ReactQueryDevtools here */}
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
