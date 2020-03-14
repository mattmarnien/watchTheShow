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

$("#addForm").on("submit", function(event){
    event.preventDefault();

})

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
