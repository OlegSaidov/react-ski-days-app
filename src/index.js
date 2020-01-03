import React from 'react';
import ReactDOM from 'react-dom'

var style = {
    backgroundColor:"orange",
    fontFamily: "arial",
    fontWeight:"bold",
    color:"white"
}



ReactDOM.render(
    <div style={style}>
        <h1 id ="heading-element">Hello World</h1>
        <p>Glad you're here</p>
    </div>,
    document.getElementById('root'));