import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // const layout = () => {
  //   return (
  //     <div className="app">
  //       <Navbar/>
  //       <Outlet />
  //       <Outlet />
  //     </div>
  //   );
  // };

  const router = createBrowserRouter({
    path: "/",
    element: <div>hello wrold</div>,
  });

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
