export default
// function Todo({task}){
//     return (

        
//         <p>Task: {task} </p>
//     )
// }

// conditional rendaring 

// function Todo ({task, isDone}){
//     if(isDone === true){
//         return <li>Well done you Have finished the task of : {task}</li>
//     }else{
//         return <li>ok don't panic Just work of : {task}</li>
//     }
// }

// conditional rendering option 2 


// function Todo ({task, isDone}){
//     if(isDone === true){
//         return <li>go ahead : {task}</li>
//     }

//     return <li>Man just practice : {task}</li>

// }
// conditional rendering option 3 : ternary operator


// function Todo ({task, isDone}){
//     return (
//         <li>{isDone? "good Luck go ahead": 'Man never givup just do it and practice more'}</li>
//     )
// }


// function rendering option 4: (and &&)
function Todo({task, isDone}){
    return (
        <li>{task} {isDone && ': Done'}</li>
    )
}
