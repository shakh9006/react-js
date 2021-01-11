import React from 'react'
import BookList from './components/BookList/BookList'

export default function App() {

    const [books, setBooks] = React.useState([
        {id: 1, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 2, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 3, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 4, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 5, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 6, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 7, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
        {id: 8, title: 'Keep Sharp: Build a Better Brain at Any Age', author: 'Glennon Doyle', price: 20, reviews: '35000', market: 'HardCover', src: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg'},
    ])

    const [title, ] = React.useState('Best Sellers in Books')
    return (
        <BookList books={books} title={title} />
    )
}