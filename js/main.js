let estadoMenu = false;
let estadoC = true;
let estadoACc = false;
let estadoP = true;
let estadoBundle = false;
let estadoAlertM =  false;
let idAudioRepro = 0;
var listSVAShop = [];
let listCheckAndSelects = [];
let listSelects = ['can-VC', 'can-vD', 'can-PC', 'canWp', 'canMTW', 'canMth', 'canMa'];
let iterable = 0;
let conSva = document.getElementById('serv-paso-2');
let canElim = 0;
let posicion = 0;

let audioR = false;
function alertAudio(idAudio, idimg){
    console.log('alert-info')
    if(idAudio == 'au-login-inicio'){
        document.getElementById('alert-info').style.display = 'flex';
    }
    idAudio = document.getElementById(idAudio);
    console.log(idAudio)
    if(!audioR){
        // alert('repro audio');
        idAudio.play();
        idAudio.currentTime = 0;
        idAudioRepro = idAudio;
        audioR = !audioR;
        cambioParlanteE(idimg)
    }else{
        // alert('pausar audio')
        idAudioRepro.pause();
        idAudioRepro.currentTime = 0;
        idAudioRepro = idAudio;
        idAudio.play()
        cambioParlanteE(idimg)
    }
}
function cambioParlanteE(idimg){
    document.getElementById(idimg).src = "./assets/img/Group 11.svg";
    document.getElementById(idimg).style.animation = 'none';
}

function drownAct(parametro){
    if(parametro == 1){
        if(estadoC == false){
            document.getElementById('drown-c').style.display = 'grid';
            estadoC = !estadoC;
        }else{
            
            document.getElementById('drown-c').style.display = 'none';
            estadoC = !estadoC;
        }
    }else{
        if(estadoP == false){
            document.getElementById('drown-p').style.display = 'grid';
            estadoP = !estadoP;
        }else{
            document.getElementById('drown-p').style.display = 'none';
            estadoP = !estadoP;
        }
    }
}
// function alertAu(idElement, idAudio){
//     if(!audioR){
//         audioR = !audioR;
//         document.getElementById(idElement).style.display = 'block';
//         var audio = document.getElementById(idAudio);
//         audio.play();
//     }else{
//         audioR = !audioR;
//         document.getElementById(idElement).style.display = 'block';
//     }
// }

// function alertMenu(idElement, idAudio){
//     if(!estadoAlertM && !audioR){
//         document.getElementById(idElement).style.display = 'block';
//         let audio = document.getElementById(idAudio);
//         audio.currentTime = 0;
//         audio.play();
//         estadoAlertM = !estadoAlertM;
//     }else{
//         document.getElementById(idElement).style.display = 'none';
//         let audio = document.getElementById(idAudio);
//         audio.pause();
//         estadoAlertM = !estadoAlertM;
//     }
// }
function bundlle(){
    if(!estadoBundle){
        document.querySelector('.service-in').classList.add('service-two');
        estadoBundle = !estadoBundle;
    }else{
        
        document.querySelector('.service-in').classList.remove('service-two');
        estadoBundle = !estadoBundle;

    }
}
// btnAccesos.addEventListener('click', event =>{
//     if(!estadoACc){
//         btnAccesos.style.width = "100%";
//         document.getElementById('con-info-access').style.top = "calc(100vh - 360px)";
//         document.getElementById('con-info-access').style.height = "320px";
//         estadoACc = !estadoACc;
//     }else{
//         btnAccesos.style.width = "140px";
//         document.getElementById('con-info-access').style.top = "calc(100vh - 40px)";
//         document.getElementById('con-info-access').style.height = "auto";
//         estadoACc = !estadoACc; 
        
//     }
// }
// btnAccesos.addEventListener('click', event=>{
//     if(!estadoACc){
//                 btnAccesos.style.width = "100%";
//                 document.getElementById('con-info-access').style.top = "calc(100vh - 360px)";
//                 document.getElementById('con-info-access').style.height = "320px";
//                 estadoACc = !estadoACc;
//             }else{
//                 btnAccesos.style.width = "140px";
//                 document.getElementById('con-info-access').style.top = "calc(100vh - 40px)";
//                 document.getElementById('con-info-access').style.height = "auto";
//                 estadoACc = !estadoACc; 
                
//             }
// })
//////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('agregar-espacio').addEventListener('click', event =>{
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let select = document.createElement('select');
    let option = document.createElement('option');
    option.value = 'Nothing';
    option.text = 'Seleccione espacio';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'SALA';
    option.value = 'SALA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'COCINA';
    option.value = 'COCINA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HABPRINCIPAL';
    option.value = 'HABPRINCIPAL';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB2';
    option.value = 'HAB2';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB3';
    option.value = 'HAB3';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB4';
    option.value = 'HAB4';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB5';
    option.value = 'HAB5';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'COMEDOR';
    option.value = 'COMEDOR';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'ESTUDIO';
    option.value = 'ESTUDIO';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'TERRAZA';
    option.value = 'TERRAZA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'SALA AUXILIAR';
    option.value = 'SALA AUXILIAR';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'OFICINA';
    option.value = 'OFICINA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'OTRO';
    option.value = 'OTRO';
    select.appendChild(option);

    td.appendChild(select);
    tr.appendChild(td);                                   

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'text';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    let btnRemoveEs = document.createElement('button');
    btnRemoveEs.className = 'btnRemoveEs';
    // btnRemoveEs.className('btnRemoveEs');
    i = document.createElement('i');
    i.classList = 'fa-solid fa-xmark';
    btnRemoveEs.appendChild(i)
    td.appendChild(btnRemoveEs);
    tr.appendChild(td);

    document.getElementById('espacio-con').appendChild(tr);
})

document.getElementById('agregar-diapo').addEventListener('click', event =>{
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let select = document.createElement('select');
    let option = document.createElement('option');
    option.value = '';
    option.text = 'Seleccione espacio';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'RAC de comunicaciones';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Consola de video juegos';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'AP del cliente';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Smart TV';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Impresora';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Router';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Switch';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Nevera';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Lavadora';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Teatro en casa';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Apple TV';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'TV Box';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Celulares';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Asistente de voz';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'Chapa inteligente';
    select.appendChild(option);

    td.appendChild(select);
    tr.appendChild(td);               
    
    td = document.createElement('td');
    select = document.createElement('select');
    option = document.createElement('option');
    option.value = '';
    option.text = 'Selecione una opción';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'PATCH CORD';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'WIFI';
    select.appendChild(option);
    

    td.appendChild(select);
    tr.appendChild(td);  


    td = document.createElement('td');
    select = document.createElement('select');
    option = document.createElement('option');
    option.value = '';
    option.text = 'Seleccione una opción...';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = '2.5Ghz';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = '5.0Ghz';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = '2.5Ghz y 5.0Ghz';
    select.appendChild(option);
    

    td.appendChild(select);
    tr.appendChild(td);  

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'checkbox';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    select = document.createElement('select');
    option = document.createElement('option');
    option.value = 'Nothing';
    option.text = 'Seleccione espacio';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'SALA';
    option.value = 'SALA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'COCINA';
    option.value = 'COCINA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HABPRINCIPAL';
    option.value = 'HABPRINCIPAL';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB2';
    option.value = 'HAB2';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB3';
    option.value = 'HAB3';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB4';
    option.value = 'HAB4';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB5';
    option.value = 'HAB5';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'COMEDOR';
    option.value = 'COMEDOR';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'ESTUDIO';
    option.value = 'ESTUDIO';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'TERRAZA';
    option.value = 'TERRAZA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'SALA AUXILIAR';
    option.value = 'SALA AUXILIAR';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'OFICINA';
    option.value = 'OFICINA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'OTRO';
    option.value = 'OTRO';
    select.appendChild(option);

    td.appendChild(select);
    tr.appendChild(td);   

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);



    td = document.createElement('td');
    let btnRemoveEs = document.createElement('button');
    btnRemoveEs.className = 'btnRemoveEs';
    // btnRemoveEs.className('btnRemoveEs');
    i = document.createElement('i');
    i.classList = 'fa-solid fa-xmark';
    btnRemoveEs.appendChild(i)
    td.appendChild(btnRemoveEs);
    tr.appendChild(td);

    document.getElementById('diapo-con').appendChild(tr);
})
let estadoBoleta = false;
document.getElementById('btn-guardar-boleta').addEventListener('click', event=>{

    $( document ).ready(function() {
        $('#modal-punto-exito-bole').modal('toggle')
    });
    estadoBoleta = true;
})

document.getElementById('btn-paso-8').addEventListener('click', ()=>{
    if(estadoBoleta){
        //Mostrar la sección 8 y ocultar la sección 7
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout(() => {
            $( document ).ready(function() {
                $('#modal-loading').modal('hide')
                document.getElementById('paso-7').style.display = 'none';
                document.getElementById('paso-8').style.display = 'grid';
                document.getElementById('pasoli-7').classList.remove("active");
                document.getElementById('pasoli-7').className = "done";
                document.getElementById('pasoli-8').className = "active";
            });
          }, "3000");
    }else{
        $( document ).ready(function() {
            $('#modal-punto-fail-bole').modal('toggle')
        });
    }
    
});
document.getElementById('btn-modal-ps4error').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-punto-activar').modal('hide')
    });
})
// ___________________________________________________________________________________
// let estadoflujo = false;
// document.getElementById('btn-flujo').addEventListener('click', event =>{
//     $( document ).ready(function() {
//         $('#modal-flujo').modal('toggle')
//     });
// })
// document.getElementById('btn-close-flujo').addEventListener('click', event=>{
//     $( document ).ready(function() {
//         $('#modal-flujo').modal('hide')
//     });
// })
