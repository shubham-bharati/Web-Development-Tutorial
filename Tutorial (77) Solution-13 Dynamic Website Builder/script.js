function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let ViewStr
    if (views < 1000) {
        viewStr = views ;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }



    let html =
     `<div class="card">
        <div class="thumb">
            <img src="${thumbnail}" 
            alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="content">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monthsOld} ago </p>
        </div>
     </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Fronted | Sigma Web Dev video #1", "CodeWithHarry", 500, "10 months", "31:22", "image.avif")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 7600, "11 months", "20:42", "image.avif")
createCard("Introduction to Webpages | Sigma Web Dev video #3", "CodeWithHarry", 86000, "12 months", "01:22", "image.avif")
createCard("Introduction to Webpages | Sigma Web Dev video #4", "CodeWithHarry", 860000, "12 months", "01:22", "image.avif")
createCard("Introduction to Webpages | Sigma Web Dev video #5", "CodeWithHarry", 860000, "12 months", "01:22", "image.avif")
createCard("Introduction to Webpages | Sigma Web Dev video #6", "CodeWithHarry", 8060000, "12 months", "01:22", "image.avif")
createCard("Introduction to Webpages | Sigma Web Dev video #7", "CodeWithHarry", 8600000, "12 months", "01:22", "image.avif")
createCard("Introduction to Webpages | Sigma Web Dev video #8", "CodeWithHarry", 8608000, "12 months", "01:22", "image.avif")