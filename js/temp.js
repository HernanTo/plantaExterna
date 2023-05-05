function desaparecerHablador(e){
    setInterval(() => {
        $('#alert-flotante').removeClass("etb-flotant-active");
    }, 2000);
}

// function habladorText(text){
    // $('#text-msg-hab').removeClass('p-anim');
    // document.getElementById('alert-flotante').style.display = "flex";
    $('#text-msg-hab').empty();
    $('#alert-flotante').addClass("etb-flotant-active");
    setInterval(() => {
        document.getElementById('mensaje-parlante').style.display = "block";
    }, 500);
    document.getElementById('wait-text').style.display = "block";
    document.getElementById('wait-text').style.display = "none";
    document.getElementById('text-msg-hab').appendChild(document.createTextNode('Antes de iniciar la práctica, de click en el siguiente botón '))
    document.getElementById('text-msg-hab').appendChild(document.createElement('br'))    
    document.getElementById('text-msg-hab').appendChild(document.createElement('br'))    
    let a = document.createElement('a');
    $(a).addClass('btn-video');
    a.setAttribute('id', 'btn-video')
    a.appendChild(document.createTextNode("¿Cómo Instalar ETA?"))  
    document.getElementById('text-msg-hab').appendChild(a);
// }

// habladorText(''); 
// alert('a')
document.getElementById('btn-video').addEventListener('click', event =>{
    $( document ).ready(function() {
        $('#modal-video').modal('toggle')
    });
})