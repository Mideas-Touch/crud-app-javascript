let button = document.getElementById('btn');
let posts = document.getElementById('posts-list')
let edit = document.getElementsByClassName('fa-edit')
let deletePost = document.getElementsByClassName('fa-trash-alt')


// Create an array with post objects
let data = [{id: 1, content: 'First post'}, {id: 2, content: 'Second post'}]

 

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

// Display mapped posts on the document

const displayPosts = () =>{
    // console.log(data)
    data.map(post => {
        // console.log(post)
        const display =
        `<div id="post">
            <p>${post.content}</p>
            <span class="options">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
        </div>`

        posts.innerHTML += display
    })


}
   








