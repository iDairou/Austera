// $(function () {
//     let $title = $("#exampleModal .modal-title"),
//         $body = $("#exampleModal .modal-body");

//     $("#btnPerson1").click(function () {
//         let titleContent1 = $("#about .first h5").html();
//         $title.html(titleContent1);
//         let bodyContent1 = $("#person1").html();
//         $body.html(bodyContent1);
//     })
//     $("#btnPerson2").click(function () {
//         let titleContent2 = $("#about .second h5").html();
//         $title.html(titleContent2);
//         let bodyContent2 = $("#person2").html();
//         $body.html(bodyContent2);
//     })
//     $("#btnPerson3").click(function () {
//         let titleContent3 = $("#about third h5").html();
//         $title.html(titleContent3);
//         let bodyContent3 = $("#person3").html();
//         $body.html(bodyContent3);
//     })
//     $("#btnPerson4").click(function () {
//         let titleContent4 = $("#about fourth h5").html();
//         $title.html(titleContent4);
//         let bodyContent4 = $("#person4").html();
//         $body.html(bodyContent4);
//     })
// })


$('#about .btn').on('click', function(e) {

    const parent = $(this).parent();
    const description = parent.find('div').html();
    const title = parent.find('h5').html();

    
});


