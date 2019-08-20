// global variables
const apiUrl = "http://localhost:3000/articles"
const commentsUrl = "http://localhost:3000/comments"
let container = document.getElementById('article-container')
container.addEventListener("submit", postComment)

function getComments(theArticle) {
    let a = ""
    theArticle.comments.forEach(element => {
         a += `<li>${element.content}</li>`
    });
    return a;
}

function postComment() {
    event.preventDefault()
    configurationObject = {
        method: "POST",
        headers: {"Content-Type": "application/json",  
        "Accept": "application/json"},
        body: JSON.stringify({'content': event.target.querySelector('input').value, 'user_id': 1, 'article_id': event.target.id})
          }
        
   fetch("http://localhost:3000/comments", configurationObject)
   

}

//fetch GET
fetch(apiUrl)
  .then(resp => resp.json())
  .then(articles => {
    const articleContainer = document.getElementById("article-container")
    articleContainer.innerHTML = renderAllArticles(articles)
})


function renderAllArticles(articleArray) {
    return articleArray.map(renderSingleArticle).join('')
  }
  
  function renderSingleArticle(article) {
    return (`
<div class="article-card">
    <div class="article-frame">
        <h1 class="center-text">${article.title}</h1>
    <div class="article-image">
          <img src=${article.url}>
    <div id="comments-container">
        <form id=${article.id}>
            <p>Create Comment:</p>
            <input id="content-input" type="text" placeholder="Add Comment"></input>
            <input id="submit" class="comment-box" type="submit">
        </form>
    <h3>Comments:</h3>
    <ul id="comments-list">
         ${getComments(article)} 
    </ul>
    </div>
</div>
    `)
  }




//   function displayArticles(articles) {
    //     const articleContainer = document.getElementById('article-container')
    
    //     articles.forEach(article => {
    //         let h4 = document.createElement('h4')
    //         h4.innerText = article.title
    //         let img = document.createElement('img')
    //         img.src = article.url
    //         let articleHtml = document.createElement('span')
    //         articleHtml.appendChild(h4)
    //         h4.appendChild(img)
    
    //         article.comments.forEach(comment => {
    //             let ul = document.getElementById('comments-list')
    //             let li = document.createElement('li')
    //             li.innerText = comment.content
    //             ul.appendChild(li)
    //         })
    //         articleContainer.appendChild(articleHtml)
    //     })
    
    // }



    // const addComment = () => {
        //     let form = document.getElementById('comment-post-form')
        //     let ul = document.getElementById('comments-list') //find ul
        //     let input = document.getElementById('content-input')
        //     //when submit, add the input value to a newly created li and append to ul
        //     form.addEventListener('submit', (event) => {
        //       event.preventDefault() // keep page from refreshing
        //       let li = document.createElement('li')      //create li
        //       li.innerText = input.value
        //       ul.appendChild(li)
              
        
        //     //   below: persist comment data using fetch post
        //       configurationObject = {
        //         method: "POST",
        //         headers: {"Content-Type": "application/json",  
        //         "Accept": "application/json"},
        //         body: {content: input.value, article_id: event.target.id, user_id: 1}
        //       }
        //       fetch(commentsURL, configurationObject)
        //       input.value = ""
        
        //     })
        // }