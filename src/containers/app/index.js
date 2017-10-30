import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from '../../components/Body';
import '../../App.css';
import CustomHelmet from "../../components/CustomHelmet";

const App = () => (
    <div className="App">
        <CustomHelmet/>
        <Header/>
        <Body/>
        <Footer/>
    </div>
)

export default App