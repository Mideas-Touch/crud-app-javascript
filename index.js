let button = document.getElementById('btn');
let posts = document.getElementById('posts-list')
// let edit = document.getElementsByClassName('fa-edit')
let deletePost = document.getElementsByClassName('fa-trash-alt')


// Create an array with post objects
let data = [{id: 1, content: 'First post'}, {id: 2, content: 'Second post'}]

// Display existing posts on DomContentLoaded

document.addEventListener('DOMContentLoaded', function(){
    data.map(post =>{
        console.log('Dom has been loaded')
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
})


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
        displayAddedPost(newPost)
        textArea.value = ''
    }
}

// Create a newpost

function create(newPost){
    data.push(newPost)
    console.log(data)
}


// Display added post on submitting a post

const displayAddedPost = (newPost) =>{
    const addedPost = 
    `<div id="post">
            <p>${newPost.content}</p>
            <span class="options">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
    </div>`

    posts.innerHTML += addedPost
    
    prepare(addedPost)

}

// Prepare post for edit

const prepare = (addedPost) =>{
    // Add an event listener to the edit button
    let edit = document.getElementsByClassName('fa-edit')
    // console.log(edit)
    edit.addEventListener('click', showModal())
}
   

// Update a post

function update(id, updatedPost){
    const index = data.findIndex(item => item.id === id);
    data[index] = {...data[index], ...updatedPost};
    // console.log(data[index])
    // console.log(edit)
    // edit.addEventListener('click', showModal())

}

// Hide the modal

function hideModal(){
    const modal = document.getElementById("myModal");
    const closeModal = modal.querySelector(".close")
    modal.style.display = "none";
}

function showModal(addedPost){
    console.log('edit clicked')
    const modal =
    `<div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Modal content goes here.</p>
        </div>
    </div>`

    // Show the modal
    // modal.style.display = "block";
    // console.log('end of the function')

    addedPost.innerHTML += modal
}






