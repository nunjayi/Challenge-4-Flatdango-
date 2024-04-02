
//fetch data from db.json file

async function getMovieData(){
    let res = await fetch("http://localhost:3000/films/1")
    let firstMovie = await res.json()
    return firstMovie
}
//console.log(getMovieData())
//select and edit movie data in the movie card
async function editMovieInfo(){
   
        const firstMovie= await getMovieData()
         //select the movie info in the html page
        const title = document.getElementById("title")
        const runtime = document.getElementById("runtime")
        const filmInfo = document.getElementById("film-info")
        const showtime = document.getElementById("showtime")
        const ticketNum = document.getElementById("ticket-num")
        //edit the movie info
        title.innerText=firstMovie.title
        runtime.innerText=firstMovie.runtime
        filmInfo.innerText=firstMovie.description
        showtime.innerText=firstMovie.showtime
        ticketNum.innerText=firstMovie.capacity - firstMovie.tickets_sold    
}



//question two
//fetch all movie titles from db.json

async function displayMovieTitles(){
    let res = await fetch("http://localhost:3000/films")
    let movies = await res.json()
    //iterate movie array and append a new li tag with the movie title as the innertext
    console.log(movies.length)
    let titles = [] 
    const liItems = []
    for(i=0;i<movies.length;i++){
        titles.push(movies[i].title)
        liItems.push(createListItem(movies[i].title))
    }
    console.log(titles)
    console.log(liItems)
    //select the ul for displaying movie titles
    let filmTitles= document.getElementById('films')
    appendChildren(filmTitles,liItems)
    return
}

//create a li html element <li>[text]<li>
function createListItem(text){
    const li = document.createElement('li')
    li.textContent = text;
    return li
}

//append li to the ul 
function appendChildren(parent,children){
    children.forEach((child)=>{
        parent.appendChild(child)
    })
}

//display everything after the page is loaded
function renderMoviePage(){
    displayMovieTitles()
    editMovieInfo()

}
//display the movie titles when the html page loads
window.addEventListener('load',renderMoviePage())
///select the buy ticket 


////enable buying  a ticket.
//fetching available tickets
async function availableTickets(){
    let res = await fetch("http://localhost:3000/films/1/tickets_sold")
    let firstMovie = await res.json()
    console.log(firstMovie)
     return firstMovie
   

}
availableTickets()
//updating available tickets
 function updateTickets(){
    let button =  document.getElementById('buy-ticket')
    console.log(button)
    
    
}
window.addEventListener('load',updateTickets())
/*
async function updateTickets(ticketsSold){
    let updateData = fetch(`http://localhost:3001/tickets_sold.json`,{
        method:"PUT",
        body: JSON.stringify()

    })
}
*/