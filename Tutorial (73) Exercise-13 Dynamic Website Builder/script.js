function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    //Finish this function
    // document.querySelector(".container").innerHTML += `
    let html =`
    <div class="card">
        <div class="thumb">
            <img src="${thumbnail}">
            <span class= "duration">${duration}</span>
        </div>
        <div class ="content">
            <h3>${title}</h3>
            <p>${cName} • ${views} views • ${monthsOld} months ago </p>
        </div>
    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html + html + html + html + html + html + html  
}

createCard("Introductionn to Backend ! Sigma Web Dev video #2", "CodeWithHarry",500,10,"30:31", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBN31a8sOnPAnEuvlpME-PMXo_01w")