// Array Like Button

// Option 2 Array
var array_likes = [9,12,9]

function likeClicked(indexNum, id) {
        // READ
        // Get the element
        var arrayValue = array_likes[indexNum]
        var element = document.querySelector("#"+id)

        // UPDATE
        // Increment the click count by 1        
        ++arrayValue

        // WRITE
        // Write the value back into the element we got in the Read section
        array_likes[indexNum] = arrayValue
        element.innerHTML = arrayValue
    }
    





// Option1 - no array, use variable a to pull id, info(state) gets saved back to html (each id is listed in the onclick function in html)
// function likeClicked(numLikes) {
//     // READ
//     // Get the element
//     var numLikesElement = document.querySelector("#"+numLikes)
//     // Get the text inside the element
//     var numLikesInnerText = numLikesElement.innerText;
//     // Turn the text into a number
//     var clickCount = parseInt(numLikesInnerText)

//     // UPDATE
//     // Increment the click count by 1
//     clickCount++

//     // WRITE
//     // Write the value back into the element we got in the Read section
//     numLikesElement.innerHTML = clickCount
// }



// Single Like Button

// Try -1
// function likeClicked(clicked) {
//     var numLikes = document.querySelector('#numLikes')
//     console.log(numLikes.innerText)

//     clicked = parseInt(numLikes.innerText)
//     console.log(clicked)
//     ++clicked
//     numLikes.innerHTML = clicked
// }


// // Try-2 Improved
// function likeClicked2() {
//     // READ
//     // Get the element
//     var numLikesElement = document.querySelector('#numLikes')
//     // Get the text inside the element
//     var numLikesInnerText = numLikesElement.innerText;
//     // Turn the text into a number
//     var clickCount = parseInt(numLikesInnerText)

//     // UPDATE
//     // Increment the click count by 1
//     clickCount++

//     // WRITE
//     // Write the value back into the element we got in the Read section
//     numLikesElement.innerHTML = clickCount
// }