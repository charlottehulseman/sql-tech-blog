const newPostForm = document.querySelector("#newpost-form");

newPost.classList.toggle("hide");

newPostForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const postObj = {
        title: document.querySelector("#post-title").value,
        body: document.querySelector("#post-body").value,
    }
    fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify(postObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.href = "/dashboard"
        } else {
            alert("missing fields")
        }
    })
})