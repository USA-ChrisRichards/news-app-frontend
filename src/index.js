// DOMContentLoaded? defer?
// display images, scrolling feature
// comment pop up when image clicked, color change, 'visit article site?' button
    // new comment/edit comment
// rating click feature

// global variables
const apiUrl = "http://localhost:3000/articles"

//fetch GET
fetch(apiUrl)
  .then(resp => resp.json())
  .then(articles => console.log(articles));

// function display(data) {

// }