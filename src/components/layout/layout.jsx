import React from 'react';
import Header from "./../header/header";
import Routers from "../../router/Routers";
import Footer from "./../footer/footer";

const layout = () => {
  return <>
    <Header/>
    <Routers/>
    <Footer/>
  </>
}

export default layout
