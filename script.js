"use strict";

fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {

    let redditPosts = data.data.children; // all of the reddit posts

    for (let post of redditPosts) {
        // console.log(post.data);
        let {title, thumbnail, url} = post.data; // deconstructing the array
        // console.log(title);
        // console.log(thumbnail);
        // console.log(url);

        function addTitle(title){
            let titles = document.createElement("h2");
            titles.appendChild(document.createTextNode(title));
            document.body.appendChild(titles);
        }
        addTitle(title);

        function addThumbNail(thumbnail){
            let image = document.createElement("img");
            image.src = thumbnail;
            // document.getElementById('body').appendChild(image);
            // image.appendChild(document.createElement(thumbnail));
            document.body.appendChild(image);
        }
        addThumbNail(thumbnail);


        function addLink(url){
            let link = document.createElement("a");
            var linkText = document.createTextNode("link");
            link.appendChild(linkText);
            // link.title = "my link text";
            link.href = url;
            document.body.appendChild(link);
        }
        addLink(url);
    }
})

.catch(function(error) {
    console.log("oh no!!");
});