import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact, ContactData } from "./Pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";

import './index.css'
import { ErrorPage } from "./Pages/ErrorPage";
import { NotFound } from "./Pages/NotFound";
import { getMovieData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { GetMovieDetails } from "./api/GetMovieDetails";
const App = () => {

    const router = createBrowserRouter([
      {
        path:"/",
        element:<AppLayout />,
        errorElement : <ErrorPage />,
        children: [
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/about",
            element:<About />
          },
          {
            path:"/movie",
            element:<Movie />,
            loader:getMovieData,
          },
          {
            path:"/movie/:movieID",
            element:<MovieDetails />,
            loader:GetMovieDetails,
          
          },
          {
            path:"/contact",
            element:<Contact />,
            action: ContactData,
          },

          // {
          //   path:"*",
          //   // element :<ErrorPage /> // global page
          //   element : <NotFound />
          // }
        ]
      },
     
    ]);

    

    // const router = createBrowserRouter(
    //   createRoutesFromChildren(
    //     <Route>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />}/>
    //       <Route path="/movie" element={<Movie />} />
    //       <Route path="/contact" element={<Contact/>}/>
    //     </Route>
    //   )
    // );

    //old one

  return <RouterProvider router={router} />;
}

export default App;