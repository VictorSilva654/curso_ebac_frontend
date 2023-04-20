document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('maxNumber').value;
        numeroMaximo = parseInt(numeroMaximo);

        numeroAleatorio = Math.random() *numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById("valor-resultado").innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})
    