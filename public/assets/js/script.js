$(function () {
    $(".changeWatched").on("click", function (event) {
        let id = $(this).data("id");
        let show = $(this).data("name");
        console.log(id);

        $.ajax("api/shows/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log(show + " has been set to Watched");
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
            console.log(newShow + " has been added to the watch list.");
            location.reload();
        }
    )
}
})
