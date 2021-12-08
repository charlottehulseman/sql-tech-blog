const revealCommentForm = document.querySelector("#newcomment");
const commentCard = document.querySelector("#commentcard");
const commentForm = document.querySelector("#comment-form");
const deleteButton = document.querySelector(".delete");
const updateButton = document.querySelector(".update");
const updateForm = document.querySelector("#updatepost-form");

// Gets blog id from url

const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

// Hides new post button

newPost.classList.toggle("hide");

// If new comment button is rendered by handlebars then listen for button

if (revealCommentForm) {
    revealCommentForm.addEventListener('click', event => { commentCard.classList.toggle("hide") });
}

// Gather info from comment form and send it o comment controller

commentForm.addEventListener('submit', event => {
    event.preventDefault();

    const postObj = {
        body: document.querySelector("#comment").value,
    }
    fetch(`/api/comments/${id}`, {
        method: "POST",
        body: JSON.stringify(postObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload(true);
        } else {
            alert("uh oh, this isn't very descriptive")
        }
    })
})

// If delete button is rendered listen for it then send the info to the blog controller

if (deleteButton) {
    deleteButton.addEventListener('click', event => {
        let result = confirm("Are you sure you want to delete?");
        if (result) {
            fetch(`/api/blogs/${id}`, {
                method: "DELETE"
            }).then(res => {
                if (res.ok) {
                    location.href = "/dashboard";
                } else {
                    alert("uh oh, delete didn't go go")
                }
            })
        }
    })
}