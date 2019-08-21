// global variables
const apiUrl = "http://localhost:3000/articles"
const commentsUrl = "http://localhost:3000/comments"

let container = document.getElementById('article-container')

container.addEventListener("submit", postComment)
container.addEventListener('click', () => deleteComment())
container.addEventListener('click', () => likeUnlike())


function getComments(theArticle) {
    
    return theArticle.comments.map(getComment).join(' ')
    
}

function getComment(com){
    return `<li id = "${com.id}"> ${com.content}</li>`
}

function postComment() {
    let ev = event
    event.preventDefault()
    configurationObject = {
        method: "POST",
        headers: {"Content-Type": "application/json",  
        "Accept": "application/json"},
        body: JSON.stringify({'content': event.target.querySelector('input').value, 'user_id': 1, 'article_id': event.target.id})
          }
        
   fetch("http://localhost:3000/comments", configurationObject)
   .then(resp => resp.json())
   .then(el =>  {
       let ul = ev.target.parentNode.querySelector('ul')
       let newComment = getComment(el)
       ul.innerHTML += newComment
   })
   

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
            <a href=${article.link}>${article.title}</a>
        <div class="article-image">
            <img src=${article.url}>
        </div>
        <div id="likeBtn" data-id=${getRating(article)}>
        <button data-id="${article.id}" type="button" >Like</button>
        </div>
    </div>
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

  function getRating(item) {
      if (item.ratings[0] !== undefined) {
      return  item.ratings[0].id
  } else {
      return 0
     }

  }

  function deleteComment () {
      let ev = event
       if (ev.target.parentNode.id == "comments-list"){
       fetch(`http://localhost:3000/comments/${event.target.id}`, {
           method: "DELETE"
       })
       .then(resp => ev.target.remove())
    } 
  }


  function likeUnlike() {
      if (event.target.parentNode.id == "likeBtn")
      console.log(event.target.parentNode.dataset.id)
  }

    


    //    if (item.ratings[0] !== null) {
        //    console.log(item.ratings[0])
    //        fetch("http://localhost:3000/ratings", {
    //            method: "POST",
    //            headers: {"Content-Type": "application/json",  
    //            "Accept": "application/json"},
    //            body: JSON.stringify({'user_id': 1, 'article_id': item.id}) 
    //        })
    //        .then(resp => resp.json())
    //    } else {
    //        console.log(item.ratings[0])
        //    fetch(`http://localhost:3000/ratings/${item.ratings[0].id}`, {
        //        method: "DELETE"
        //    })
           
    //    }
  



