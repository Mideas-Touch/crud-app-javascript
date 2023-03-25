let button = document.getElementById('btn');
let posts = document.getElementById('posts-list')
// let edit = document.getElementsByClassName('fa-edit')
let deletePost = document.getElementsByClassName('fa-trash-alt')


// I figure that I'll have to add an event listener to every post when creating them. My initial thought was to add it here but I think I'll do it soon as we fetch existing posts.
// I also figure that I'll have to add the event listener once a new post is created.
// I think doing this will make the prepare and makePostEditable functions redundant.


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
                <i id="editBtn" class="fas fa-edit"></i>
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
                <i id="editBtn" class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
    </div>`

    posts.innerHTML += addedPost
    
    // prepare(addedPost)

    // This is where I'll add the eventlistener to test if my idea will work.
    // Adding the event listener directly to the class name results in a error. I'll assign an id to the edit button to see how it works.
    // Assigning the id was successful, but I'm facing another problem: showModal doesn't show the modal for that specific post we want.
    // I think we have to find the id first.

    let edit = document.getElementById("editBtn")
    console.log(edit)
    edit.addEventListener('click', showModal(findIndex(newPost.id)))
    console.log(findIndex(newPost.id))

}

const findIndex = (id) =>{
    let editablePostIndex = data.findIndex(item => item.id === id);
    return editablePostIndex;
}

// Prepare post for edit

// const prepare = (id, post) =>{
//     // Add an event listener to the edit button
//     // let edit = document.getElementsByClassName('fa-edit')
//     // console.log(edit)
//     // showModal()
// }



// Adding a function to get all the edit buttons

function prepare(){
    const editBtns = document.querySelectorAll("#editBtn");

    // Add an event listener to each button
}

   
// Update a post

function update(id, updatedPost){
    const index = data.findIndex(item => item.id === id);
    data[index] = {...data[index], ...updatedPost};
    // console.log(data[index])

}

// Hide the modal

function hideModal(){
    const modal = document.getElementById("myModal");
    const closeModal = modal.querySelector(".close")
    modal.style.display = "none";
}

function showModal(editablePostIndex){
    console.log('edit clicked')
    const modal = document.getElementById("myModal");
    const closeModal = modal.querySelector(".close")

    if (editablePostIndex){
        const modalContent =
        `
        <div class="modal-content">
            <span class="close">&times;</span>
            <texarea name="editPost" id="editPost" cols="5" rows="7">Modal content herer</texarea>
        </div>
        `
        modal.innerHTML += modalContent
    }

    

    // Show the modal
    modal.style.display = "block";
    console.log('end of the function')

}






