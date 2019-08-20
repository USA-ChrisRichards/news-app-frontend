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
  .then(articles => displayArticles(articles));

function displayArticles(articles) {
    const articleContainer = document.getElementById('article-container')

    articles.forEach(article => {
        let h4 = document.createElement('h4')
        h4.innerText = article.title
        let img = document.createElement('img')
        img.src = article.url
        let articleHtml = document.createElement('span')
        articleHtml.appendChild(h4)
        h4.appendChild(img)
        article.comments.forEach(comment => {
            let ul = document.getElementById('comments-list')
            let li = document.createElement('li')
            li.innerText = comment.content
            ul.appendChild(li)
        })
        articleContainer.appendChild(articleHtml)
    })

}
//first displaying all articles
//next need to have scrolling feature
//also filter feature
// need click function on article.link