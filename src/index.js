import React from 'react';
import ReactDOM from 'react-dom'

class Message extends React.Component{
    render(){
        return(
            <h1>Hello Everyone!</h1>
        )
    }
}



ReactDOM.render(
    <Message />,
    document.getElementById('root'));