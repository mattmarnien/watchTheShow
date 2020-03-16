const apiKey = "ce3fefc1";

// changes a show from not watched to watched
$(function () {
    $(".changeWatched").on("click", function (event) {
        let id = $(this).data("id");
        $.ajax("api/shows/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        )

    });


})

// stops page from reloading on submit
$("#addForm").on("submit", function(event){
    event.preventDefault();

})
// adds a new show on form submit
$("#addButton").on("click", function(event){
    if($("#addInput").val().trim() !== ''){
    let newShow = {
        name: $("#addInput").val().trim()}
    $.post("/api/shows", newShow).then(
        function(){
            location.reload();
        }
    )
}
})

// moves a show from watched to the archives
$(".archive").on("click", function(event){
        let id = $(this).data("id");
        $.ajax("api/shows/archive/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
    )
})
//brings a show back from the archive to the watch-list for a rewatch
$(".backToWatchList").on("click", function(event){
    let id = $(this).data("id");
    $.ajax("api/shows/unArchive/" + id, {
        type: "PUT"
    }).then(
        function () {
            location.reload();
        }
)
})

// clicking a show name queries OMDB and displays show info and removes previous show info
$('.showDiv').on("click", function(event){
    let target =$(this);
    let name = $(this).data("name");
    console.log(name);
    $('.removable').remove();
    queryURL = "http://www.omdbapi.com/?t=" + name + "&apikey=" + apiKey
    $.ajax(queryURL, {
        type: "GET",
        url: queryURL
    }).then(data => {
        console.log(data, target);
        genShowInfo(data, target);
    


    })
})


// compiles show info, puts it into elements and posts to the page
function genShowInfo(data, target){
    let newDiv= $("<div class='removable'>");
    let title = $("<h1>");
    title.text(data.Title);
    let poster = $(`<img src='${data.Poster}' style='width:100px;height:200px;'>`)
    let rating = $("<h5>");
    rating.text(data.Rated);
    let genre = $("<h5>");
    genre.text(data.Genre);
    let plot = $("<p>");
    plot.text(data.Plot);
    target.append(newDiv);
    newDiv.append(title, poster, rating, genre, plot);
}
