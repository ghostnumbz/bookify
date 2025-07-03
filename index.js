const express = require('express')
const app = express()
const bodyParser =require('body-parser')
let  books =[ 
    { 
        id: 1,
        name:'game of thrones',
        author:'RR martin',
        pages: '1000',
        price: '900',
        isbn: 123,
    }
]
app.use(bodyParser.json())
app.get('/books', function(req,res){
    return res.json({ books})
})

app.get('/books/:bookId', function (req,res){
    const id =req.params.bookId
    const book = books.find((e) => e.id === Number(id))
    return res.json({book})
})
app.post ('/book', function(req,res){
    const bookFromClient = req.body 
    books.push(bookFromClient)
   res.json({ status: "success"})})

   
app.delete('/book/:bookId', function(req, res) {
    const bookIDToDelete = req.params.bookId;
    books = books.filter((e) => e.id !== Number(bookIDToDelete));
    return res.json({ status: "deleted" });
});


app.listen(8000, ()=>{
    console.log ("server started ")
})