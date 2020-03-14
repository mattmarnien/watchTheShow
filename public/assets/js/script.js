$(function () {
    $(".changeWatched").on("click", function (event) {
        let id = $(this).data("id");
        let show = $(this).data("name");
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
