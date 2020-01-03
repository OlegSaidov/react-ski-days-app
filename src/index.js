import React from 'react';
import ReactDOM from 'react-dom'

let bookList = [
 {title:"Utgan Kunlar", author: "Abdulla Qodiriy", page:350},
 {title:"Mehrobdan Chayon", author: "Abdulla Qodiriy", page:350},
 {title:"Ikki Eshik Orasi", author: "Abdulla Qodiriy", page:350},
 {title:"Daftar Chetidagi Bitiklar", author: "Abdulla Qodiriy", page:350},
 {title:"Songgi O'q", author: "Abdulla Qodiriy", page:350},

];

const Book = ({ title, author, page }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>by: {author}</p>
            <p>Pages: {page} pages</p>
        </div>
    )
}

const Library = ({books}) => {
    return (
             <div>
           {books.map(book=><Book title = {book.title} author = {book.author} page= {book.page} />
           )}
             </div>
    )
}


ReactDOM.render(
    <Library books = {bookList}/>,
    document.getElementById('root'));