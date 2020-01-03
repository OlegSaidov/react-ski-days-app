import React from 'react';
import ReactDOM from 'react-dom'

const Book = ({ title, author, page }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>by: {author}</p>
            <p>Pages: {page} pages</p>
        </div>
    )
}

const Library = () => {
    return (
        <div>
            <Book title="Utgan Kunlar" author="Abudlla Qodiriy" page={350} />
            <Book title="Mehrobdan Chayon" author="Kim Biladi" page={530} />
            <Book title="Ikk Eshik Orasi" author="Utkir Xoshimov" page={120} />
        </div>
    )
}


ReactDOM.render(
    <Library />,
    document.getElementById('root'));