import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import InsideProjects1 from "../Pages/Projects/InsideProjects1";
import InsideProjects2 from "../Pages/Projects/InsideProjects2";
import InsideProjects3 from "../Pages/Projects/InsideProjects3";
import Projects from "../Pages/Projects/Projects";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/p1',
                element:<InsideProjects1></InsideProjects1>
            },
            {
                path:'/p2',
                element:<InsideProjects2></InsideProjects2>
            },
            {
                path:'/p3',
                element:<InsideProjects3></InsideProjects3>
            }
        ]
    },
    

])

export default router;