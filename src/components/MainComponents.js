import React from 'react'
import {useState} from 'react'
import Navbar from "./Navbar"
import Box1 from "./Box1"
import Box2 from "./Box2"
import Box3 from "./Box3"
import Footer from"./Footer"
const MainComponents = () => {
    const [showTextEnglish, setTextEnglish]=useState(true)
    const changeText =()=>
        setTextEnglish(!showTextEnglish);
    return (
    <div>
    <Navbar/>
    <Box1 showTextEnglish={showTextEnglish} changeText={changeText}/>
    <Box2 showTextEnglish={showTextEnglish} />
    <Box3/>
    <Footer/>
    </div>
    )
}

export default MainComponents
