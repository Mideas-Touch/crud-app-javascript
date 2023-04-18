let button = document.getElementById('btn');
let posts = document.getElementById('posts-list')
// let edit = document.getElementsByClassName('fa-edit')
let deletePost = document.getElementsByClassName('fa-trash-alt')



// Create an array with post objects
let data = [{id: 1, content: 'First post'}, {id: 2, content: 'Second post'}]

let array = []

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


        // prepare(post)

        // Log all existing posts to the console

        console.log(postId)
        console.log(singlePost.getAttribute("data-id"))


        // prepare(singlePost)

        // let postId;
        // let array = []
        // const getAtr = singlePost.getAttribute("data-id");
        // postId = getAtr
        // singlePost.id = postId

        console.log(singlePost.id)

        array.push(singlePost)

        console.log("array", array)

        prepare(array)


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
    

}




// Adding a function to get all the edit buttons

const prepare = (posts) =>{
    console.log("Inside the prepare function")
    console.log(posts)

    // console.log("array", array)
    const findidx = (posts) => {
        console.log("posts", posts)
        const index = posts.findIndex(item => item.id === id)
        return index
    }


    
    const editBtns = document.querySelectorAll("#editBtn");


    // Add an event listener to each button
    editBtns.forEach(function(btn){
        // btn.addEventListener("click", showModal(btn));
        btn.addEventListener("click", function(){
    

        findidx()
        
        // const index = posts.findIndex(item => item.id === id);


        const modal = document.createElement("div");
        const modalContent = document.createElement("div")
        modalContent.innerHTML =
        `
        <div class="modal-content">
            <span class="close">&times;</span>
            <textarea name="editPost" id="editPost" cols="25" rows="2"></textarea>
        </div>
        `
        
        modal.append(modalContent)

        // function update(id, updatedPost){
        //     const index = data.findIndex(item => item.id === id);
        //     data[index] = {...data[index], ...updatedPost};
        //     // console.log(data[index])
        
        // }

        // array.forEach(post =>{
        //     post.append(modal)
        //     console.log(post)
        // })
    


        // Show the modal
        // modal.remove()
        modal.style.display = "block";
        console.log(this)
        });
    })

    function showPost(post){
        console.log(post)
        
    }

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

// function showModal(post){
//     // console.log('edit clicked')
//     console.log('Inside the showModal function')


//     let postId;
//     const getAtr = post.getAttribute("data-id");
//     postId = getAtr

    
//     // const modal = document.getElementById("myModal");

//     // console.log("Existing posts :", existingPost)
//     console.log(post)


//         const modal = document.createElement("div");
//         const modalContent = document.createElement("div")
//         modalContent.innerHTML =
//         `
//         <div class="modal-content">
//             <span class="close">&times;</span>
//             <textarea name="editPost" id="editPost" cols="25" rows="2"></textarea>
//         </div>
//         `
        
//         modal.append(modalContent)
    

//         post.append(modal)

//         console.log(post)
 

//         // Show the modal
//         modal.style.display = "block";


// }




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


// SUMMARY

//* 04/15/23

// So I've been struggling with "...forEach is not a function" error.
// Found a workaround to this by passing another function inside the main function.
// Next up: Finding a way to integrate all this with the modal functions.

// * 04/16/23

// Still on the modals.
// Planned to work on correctly displaying when toggled but instead worked on displaying it perfectly -hence the css stuff.
// Having being relatively satisfied with the css, I'll remove all the code I don't really need here and we'll see how that goes.

// * 04/18/23

// Still trying to find the id when post is clicked.
// I've defined a function findidx that will be invoked every time a specific post is clicked.
// I also added an array, array to store processed posts. I plan to use this array together with the said function to find a specific post.
// I'm currently getting a Uncaught TypeError: Cannot read properties of undefined (reading 'findIndex').
