
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/Assinante",
        dataType: "json",
        success: function (response) {
            response.forEach(element => {
              const selec = document.getElementById('select_1')
                const option = document.createElement('option');
                option.value = element.id;
                option.text = element.nome +"->"+ element.tipo;
                selec.appendChild(option)                
            });
        }
    });
});



$("form").submit(function (e) {
    var idAssinante = $("#select_1 option:selected").val();


   $.ajax({
       type: "GET",
       url: "http://localhost:3000/Assinante/"+idAssinante,
       success: function (response) {
            window.location.replace("./assinantes/assinanteFree.html");
       }
   });
   
    e.preventDefault();
});