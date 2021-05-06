window.addEventListener("DOMContentLoaded", () => {
//     // GETTING
//     // example get element by id    
//     let myDiv = document.getElementById("hello")
//     // console.log(myDiv)

//     // example get element by class name
//     let theSquares = document.getElementsByClassName("square")
//     // console.log(theSquares)

//     // example get element by tag name
//     let theDivs = document.getElementsByTagName("div")
//     // console.log(theDivs)

//     // example querySelector
//     let myDiv2 = document.querySelector("#goodbye")
//     // console.log(myDiv2)

//     // example querySelectorAll
//     let mySquares2 = document.querySelectorAll(".square")
//     // console.log(mySquares2)

//     // SETTING
//     myDiv.style.backgroundColor = "chartreuse"
//     myDiv2.style.height = "300px"

//     myDiv.innerText = "I love SEI"
//     myDiv2.innerHTML = "<h2>I love GA</h2>"

//     for (let i = 0; i < theSquares.length; i++) {
//         theSquares[i].style.border = "solid 2px black"
//     }

//     // GETTING AND SETTING CONDITIONAL IMG SRC
//     let photo = document.querySelector("img")
//     let photoSrc = photo.src
        // this is where you will copy whatever photoSrc is returning
//     if (photoSrc === "") {
//         photo.setAttribute("src", "http://www.placekitten.com/85/85")
//     }

//     // CLASS NAMING
//     let theDivs2 = document.querySelectorAll("div")
//     for (let y = 0; y < theDivs2.length; y++) {
//         let divsClassList = theDivs2[y].classList
//         console.log(divsClassList)
//     }

//     // EVENT LISTENERS + DOM MANIPULATION
//     let theDivs3 = document.getElementsByTagName("div")
//     for (let z = 0; z < theDivs3.length; z++) {
//         theDivs3[z].addEventListener("click", () => {
//             // get current div's class list
//             let currentClassList = theDivs3[z].classList
//             // add hide to class list
//             currentClassList.add("hide")
//         })
//     }

    // ADD A BUTTON EVENT LISTENER
    let buttonElem = document.querySelector("button")
    buttonElem.addEventListener("click", () => {
        let bodyTag = document.querySelector("body")
        bodyTag.innerHTML = "<h2>You clicked the button! 🎉</h2>"
    })


})


    