let button = document.getElementById('btn');
let posts = document.getElementById('posts-list')
let edit = document.getElementsByClassName('fa-edit')
let deletePost = document.getElementsByClassName('fa-trash-alt')
const text = document.getElementById('msg')
let form = document.getElementById('form')

// Create an array with post objects
let data = [{id: 1, content: ''}]

 

// Add eventListeneer to the buttn
button.addEventListener('click', function(e){
     create()
})

// A function to handle submitting post

let newPost;

// Increment id

function increment(){
    let newId = data.length +1
    return newId
}

function create(e, newPost, newId){
    e.preventDefault()
    increment()
    newPost = {id: newId, content: 'This is my third post'}
    data.push(newPost)
    console.log(data)
    console.log(data.length)
    console.log(text.value)
}

// create()






