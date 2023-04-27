function modalUbi(){
    $( document ).ready(function() {
        $('#modal-ubi').modal('toggle')
    });
}
document.getElementById('acceso-btn').addEventListener('click', event=>{
        $( document ).ready(function() {
        $('#modal-acceso').modal('toggle')
    });
})
document.getElementById('flujo-btn').addEventListener('click', event=>{
        $( document ).ready(function() {
        $('#modal-flujo').modal('toggle')
    });
})
document.getElementById('btn-close-acceso').addEventListener('click', event=>{
    $( document ).ready(function() {
    $('#modal-acceso').modal('hide')
    });
    
})
document.getElementById('btn-close-flujo').addEventListener('click', event=>{
    $( document ).ready(function() {
    $('#modal-flujo').modal('hide')
    });
    
})