import React from 'react';
import ReactDOM from 'react-dom'

var style = {
    backgroundColor:"orange",
    fontFamily: "arial",
    fontWeight:"bold",
    color:"white"
}

const title = React.createElement(
    "h1",
    {
        id:"title",
        className:"title",
        style:style
    },

    "Hello World"
);

ReactDOM.render(title, document.getElementById('root'));