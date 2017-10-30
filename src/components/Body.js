import React, { Component } from 'react'
import '../App.css'
import iterator from './../components/IteratorWrapper/iterator'
import CustomRoute from "./../components/CustomRoute"
import structureData from './../data/structureData'

class Body extends Component {
    render() {
        return (
            <main>
                {iterator(structureData.pages, CustomRoute)}
            </main>
        )
    }
}

export default Body
