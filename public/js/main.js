const newPost = document.querySelector("#newpost");


newPost.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/newpost"
})
