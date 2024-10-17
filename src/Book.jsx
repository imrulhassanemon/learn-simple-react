export default


function Book({books}){
    const {name, price} = books
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>price: {price}</p>
        </div>
        
    )
}