$(document).ready(function() {   
    $("header").mouseenter(function(){
        $('#upside-bar').slideDown();
    });
    $(".out-header").mouseenter(function(){
        $("#upside-bar").slideUp();
    });

    $("#btn-equipamentos").click(function(){
        $("#equipamentos").slideDown();
    });

    $("#btn-close-equip").click(function(){
        $("#equipamentos").slideUp();
    });


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler:function(form){
            alert('Mensagem enviada com sucesso!')
            nome.value=" ";
            email.value=" ";
            telefone.value=" ";
            mensagem.value=" ";
            btn-close.trigger("click");
        },
        invalidHandler:function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos){
                alert(`Por favor, preencha todos os campos!`)
            }
        }
    })


    $('#telefone').mask('(00) 00000-0000',{
        placeholder:''
    })
})