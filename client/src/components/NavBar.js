//Imports
import { Button, Segment, Header } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";


function NavBar(){

    const navigate = useNavigate();

    function navHome(){
        navigate('/')
    }
    function navPage(page_name){
        navigate(`/${page_name}`)
    }

    return(
        <Segment>
            <Button onClick={navHome}>
                Home
            </Button>
            <Button onClick={() => navPage("AboutMe")}>
                About Me
            </Button>
            <Button onClick={() => navPage("Projects")}>
                Projects
            </Button>
            <Button onClick={() => navPage("Blogs")}>
                Blogs
            </Button>
        </Segment>
    )

}

export default NavBar