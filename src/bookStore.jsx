import Book from "./Book"
export default
function Books({books}){
    return (
        <div>
            <h2>Books: {books.length}</h2>
            {
                books.map(book =><Book books ={book}></Book>)
            }
        </div>
    )
}<Books></Books>