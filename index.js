const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "/images/avatar-vangogh.jpg",
    post: "/images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "/images/avatar-courbet.jpg",
    post: "/images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "/images/avatar-ducreux.jpg",
    post: "/images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainElement = document.getElementById("main");

let html = "";

for (let i = 0; i < posts.length; i++) {
  html += `<div class="section"> 
            <div class="user">
                <div>
                  <img
                    class="avatar"
                    id="avatar"
                    src="${posts[i].avatar}"
                    alt=""
                  />
                </div>
                <div class="user-info">
                  <p class="username" id="name">${posts[i].name}</p>
                  <p id="user-location" id="user-location">${posts[i].location}</p>
                </div>
              </div>
              <img
                class="post-photo"
                id="post"
                src=${posts[i].post}
                alt="van gogh portrait"
              />
              <div class="container">
                <div class="icons">
                  <img src="/images/icon-heart.png" alt="icon heart" />
                  <img src="/images/icon-comment.png" alt="icon comment" />
                  <img src="/images/icon-dm.png" alt="icon dm" />
                </div>
                <div class="comment">
                  <p class="like" id="like">${posts[i].likes} likes</p>
                  <p id="comment">
                    <span class="username" id="username">${posts[i].username} </span> ${posts[i].comment} 
                  </p>
                </div>
              </div>
            </div>
   
    `;
}

mainElement.innerHTML = html;
