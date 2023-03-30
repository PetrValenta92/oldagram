import { postsData } from './data.js';

function getFeedHtml(){
    let feedHtml = ''

    postsData.forEach(function(post){
        feedHtml += `
        <div class="container post">
            <div class="post__profile">
                <img class="avatar post__avatar" src="./${post.avatar}" alt="Portraite of ${post.name}">
                <div class="post__info">
                    <h1 class="post__name">${post.name}</h1>
                    <h2 class="post__location">${post.location}</h2>  
                </div>
            </div>
            <img class="post__img" src="./${post.post}" alt="The post with a portraite of ${post.name}">
            <div class="post__body">
                <div class="post__icons">
                    <img class="icon" src="./images/icons/icon-heart.png" alt="icon of like">
                    <img class="icon" src="./images/icons/icon-comment.png" alt="icon of comment">
                    <img class="icon" src="./images/icons/icon-dm.png" alt="icon of direct message">
                </div>
                <p class="post__like-count">${post.likes} likes</p> 
                <p class="post__caption"><span class="post__username">${post.username}</span> ${post.comment}</p>
            </div>
        </div>
        `
    });

    return feedHtml;
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml();
}

render();