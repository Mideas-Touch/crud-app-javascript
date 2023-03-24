let button = document.getElementById('btn');
let posts = document.getElementById('posts-list')
let edit = document.getElementsByClassName('fa-edit')
let deletePost = document.getElementsByClassName('fa-trash-alt')


// Create an array with post objects
let data = [{id: 1, content: ''}]

 

// A function to handle submitting the Form

function handleFormSubmit(){
    event.preventDefault()
    const form = document.querySelector('#form')
    const textArea = form.querySelector('#post')
    const msg = textArea.value
    
    if (msg){
        let newId;
        newId = data.length +1
        let newPost = {id: newId, content: msg}
        create(newPost)
    }
}



function create(newPost){
    data.push(newPost)
    console.log(data)
}







