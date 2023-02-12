$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaNova = $("#tarefas").val();
        const novoItem = $(`<li>${tarefaNova}</li>`);
        $(novoItem).appendTo('ul');
        $('li').click(function(e){
            $(this).addClass('riscado');
        }); 
        $('#tarefas').val("");
    })
})