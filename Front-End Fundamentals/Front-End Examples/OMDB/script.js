//9c714557
//http://www.omdbapi.com/?apikey=[yourkey]&s=titanic

//getOMDB("titanic","short");
/*
console.log(searchBar);
console.log(radioFull);
console.log(radioShort);
console.log(button);
*/

var searchBar = document.querySelector("input")
var radio = document.getElementsByName("plot")[1]
var button = document.querySelector("button")
var container = document.querySelector("section")

function createPost(dataArr) {
    for (const iterator of dataArr) {
        console.log(iterator);
        container.innerHTML +=
            `
            <article>
                <div class="banner">
                    <img src=${iterator.Poster} alt="">
                </div>
                <p>${iterator.Title}</p>
                <a href="https://www.imdb.com/title/${iterator.imdbID}/">IMDB Link</a> 
                <div class="clear"></div>
            </article>
        `
    }
}

button.addEventListener("click", () => {
    axios.get("http://www.omdbapi.com/?apikey=9c714557&s=" + searchBar.value + "&plot=" + (radio.checked ? "full" : "short") + "&")
        .then((response) => {
            container.innerHTML = null;
            createPost(response.data.Search)
        }).catch((err) => {
            console.log("Axios Error: " + err)
        })
})

