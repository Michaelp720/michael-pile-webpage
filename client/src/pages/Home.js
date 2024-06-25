import React, { useEffect, useState, useContext } from "react";
import { Button, Segment, Header } from 'semantic-ui-react'
import NavBar from "../components/NavBar";

function Home(){

    return(
        <>
        <NavBar/>
        <Button>Welcome</Button>
        </>
    )
}

export default Home