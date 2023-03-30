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
    console.log('Dom has been loaded')
    console.log("Mapping existing posts..")

    data.map(post =>{
        const singlePost = document.createElement("div")
        const postId = post.id
        const setAtr = singlePost.setAttribute("data-id", postId);

        const display =
        `<div id="post">
            <p>${post.content}</p>
            <span class="options">
                <i id="editBtn" class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
        </div>`

        singlePost.innerHTML = display

        posts.append(singlePost)

        console.log(data.length + " posts found")

        // prepare(post)

        // Log all existing posts to the console

        console.log(postId)
        console.log(singlePost.getAttribute("data-id"))

        console.log("Logging all existing posts")


        prepare(singlePost)


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

// Also need to prepare newPost
    prepare(newPost)
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

    // let edit = document.getElementById("editBtn")
    // console.log(edit)
    // edit.addEventListener('click', showModal(findIndex(newPost.id)))
    // console.log(findIndex(newPost.id))

    prepare(addedPost)

}




// Adding a function to get all the edit buttons

const prepare = (singlePost) =>{
    console.log("Inside the prepare function")

    function logPost(){
        singlePost.forEach(post => console.log(post.getAttribute("data-id")))
        // console.log(singlePost.getAttribute("data-id"))
    }


    logPost(singlePost)

    
    // existingPost.forEach(item => console.log(item))
    

    // This looks for the first and last id to be passed on here
    // existingPost.forEach(console.log(existingPost.id))
    
    const editBtns = document.querySelectorAll("#editBtn");
    console.log(editBtns)


    // Add an event listener to each button
    editBtns.forEach(function(btn){
        // btn.addEventListener("click", showModal(btn));
        btn.addEventListener("click", function getReady(){
            // wuuhh
            console.log("Ready")
            
        });
    })

}


// Hide the modal

function hideModal(){
    // Get the post ID from the button's data-id attribute
    const postId = this.getAttribute("data-id");

    // Get the corresponding modal element
    const modal = document.getElementById("myModal" + postId);

    const closeModal = modal.querySelector(".close")
    modal.style.display = "none";
}

function showModal(postId){
    // console.log('edit clicked')
    console.log('Inside the showModal function')
    // const modal = document.getElementById("myModal");

    // console.log("Existing posts :", existingPost)
    console.log("The id inside the showModal function:", postId)

    // Function to replace all this bs inside here

    // post.forEach(function(editablePost){
        const modal = document.createElement("div");
        const modalContent = document.createElement("div")
        modalContent.innerHTML =
        `
        <div class="modal-content">
            <span class="close">&times;</span>
            <texarea name="editPost" id="editPost" cols="5" rows="7">Modal content heree</texarea>
        </div>
        `
        
        modal.append(modalContent)

        console.log(modal)
 

        // Show the modal
        modal.style.display = "block";


}



// Might use these later

// const findIndex = (id) =>{
//     let editablePostIndex = data.findIndex(item => item.id === id);
//     return editablePostIndex;
// }


// // Update a post

// function update(id, updatedPost){
//     const index = data.findIndex(item => item.id === id);
//     data[index] = {...data[index], ...updatedPost};
//     // console.log(data[index])

// }