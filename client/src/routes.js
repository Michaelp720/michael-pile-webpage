//imports
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Blogs from "./pages/Blogs"

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/aboutme",
        element: <AboutMe />,
    },
    {
        path: "/Projects",
        element: <Projects />,
    },
    {
        path: "/Blogs",
        element: <Blogs />,
    }

]

export default routes