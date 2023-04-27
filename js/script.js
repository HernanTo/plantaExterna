const paso_4 = document.getElementById('paso-4');
const paso_3 = document.getElementById('paso-3');
const paso_4_after = document.getElementById('paso-4-after');
const paso_5 = document.getElementById('paso-5');
const paso_6 = document.getElementById('paso-6');
const paso_7 = document.getElementById('paso-7');
const paso_8 = document.getElementById('paso-8');
const btn_visita = document.getElementById('btn-visita');
const modal_visit = document.getElementById('modal-visit');
const modal_confirm = document.getElementById('modal-confirm');
const modal_punto_activar = document.getElementById('modal-punto-activar');


document.getElementById('btn-paso-2').addEventListener('click', ()=>{
    //Mostrar la sección 2 y ocultar la sección 1
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-1').style.display = 'none';
            document.getElementById('paso-2').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'block';
            document.getElementById('pasoli-1').classList.remove("active");
            document.getElementById('pasoli-1').className = "done";
            document.getElementById('pasoli-2').className = "active";
            $('#modal-ont-ptwo').modal('toggle')
        });
      }, "4000");
    
});
document.getElementById('btn-paso-3').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 2
    document.getElementById('flujo-btn').style.display = "none";
    ontValue = document.getElementById('ont-select-p2').value
    document.getElementById('ont-ps3').innerHTML = ontValue;
    document.getElementById('ont-ps3').innerHTML = ontValue;
    document.getElementById('serialps3-ont').innerHTML = `Serial equipo: ${ontValue}`;
    document.getElementById('serialps3-ont-2').innerHTML = `Serial equipo: ${ontValue}`;
    document.getElementById('nombretdontps6').innerHTML = `Serial equipo: ${ontValue}`;
    document.getElementById('serialtdontps6').innerHTML = `Serial equipo: ${ontValue}`;
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-2').style.display = 'none';
            document.getElementById('paso-3').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'none';
            document.getElementById('pasoli-2').classList.remove("active");
            document.getElementById('pasoli-2').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});

document.getElementById('btn-paso-v-1').addEventListener('click', ()=>{
    //Mostrar la sección 2 y ocultar la sección 1
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-2').style.display = 'none';
            document.getElementById('paso-1').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'none';
            document.getElementById('pasoli-2').classList.remove("active");
            // document.getElementById('pasoli-1').className = "done";
            document.getElementById('pasoli-1').className = "active";
        });
      }, "3000");
    
});

document.getElementById('btn-paso-4').addEventListener('click', ()=>{
    //Mostrar la sección 4 y ocultar la sección 3
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-3').style.display = 'none';
            document.getElementById('paso-4').style.display = 'grid';
            // document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-3').classList.remove("active");
            document.getElementById('pasoli-3').className = "done";
            document.getElementById('pasoli-4').className = "active";
            document.getElementById('paso-4-after').style.display = 'none';
        });
      }, "3000");
    
});
document.getElementById('btn-paso-v-2').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 2
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-3').style.display = 'none';
            document.getElementById('paso-1').style.display = 'none !important';
            document.getElementById('paso-2').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-3').classList.remove("active");
            document.getElementById('pasoli-2').className = "done";
            document.getElementById('pasoli-2').className = "active";
        });
      }, "3000");
    
});
document.getElementById('btn-paso-v-3').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 4
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-4').style.display = 'none';
            // document.getElementById('paso-1').style.display = 'none !important';
            document.getElementById('paso-3').style.display = 'grid';
            // document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-4').classList.remove("active");
            document.getElementById('pasoli-3').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});
document.getElementById('btn-paso-v-3-b').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 4
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-4').style.display = 'none';
            // document.getElementById('paso-1').style.display = 'none !important';
            document.getElementById('paso-3').style.display = 'grid';
            // document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-4').classList.remove("active");
            document.getElementById('pasoli-3').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});


// boton paso 6
document.getElementById('btn-paso-prev-7').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $( document ).ready(function() {
                $('#modal-punto-no-r-6').modal('toggle')
            });
        });
      }, "3000");
})

document.getElementById('btn-paso-7').addEventListener('click', ()=>{
    //Mostrar la sección 7 y ocultar la sección 6
    $( document ).ready(function() {
        $('#modal-punto-no-r-6').modal('hide')
    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-6').style.display = 'none';
            document.getElementById('paso-7').style.display = 'grid';
            document.getElementById('pasoli-6').classList.remove("active");
            document.getElementById('pasoli-6').className = "done";
            document.getElementById('pasoli-7').className = "active";
        });
      }, "3000");
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////
const activar = document.querySelectorAll('.activar');
let btn_activar = 0;
activar.forEach(btn =>{
    btn.addEventListener('click', event =>{
        btn.style.backgroundColor = '#dd694c';
        btn.textContent = 'Inactivar';
        document.getElementById(`${btn.value}`).innerHTML = "50 - Activación Completa";
        btn_estado();
        
        btn_activar += 1;

        return btn_activar;
    });
});

function btn_estado() {
    let btn_estado3 = document.getElementById('btn-estado3');
    btn_estado3.disabled = false;
}


btn_visita.addEventListener('click', () =>{
    if(btn_activar >= 2){
        modal_visit.style.display = 'block';
        paso_4.style.display = 'none';
    }else{
        // modal_punto_activar.style.display = 'block';
        $('#modal-punto-activar').modal('toggle')
    }
    
});

// Enviar SMS

let codigo = document.getElementById('codigo');
let btn_confirm = document.getElementById('btn-confirm');
let btn_sms = document.getElementById('btn-sms');
let nombre_contact = 0;
let apellido_contact = 0;
let celular_contact = 0;

btn_sms.addEventListener("click", (event)=>{
    nombre_contact = document.getElementById('nombre-contact').value;
    apellido_contact = document.getElementById('apellido-contact').value;
    celular_contact = document.getElementById('celular-contact').value;
    document.getElementById('cliente').value = `${nombre_contact} ${apellido_contact}`;

    if(celular_contact.length == 10){
        let array = celular_contact[0];
        if (array == 3){
            let timerInterval;
            Swal.fire({
                title: 'INFORMACIÓN',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()  
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then(() => {
                btn_sms.disabled = true;
                codigo.style.display = 'block';
                btn_confirm.style.display = 'block';
                btn_confirm.addEventListener("click", ()=>{
                    let btn_actualizar = document.getElementById('btn-actualizar');
                    Swal.fire({
                        title: 'INFORMACIÓN',
                        text: 'El código es correcto',
                    }).then(() =>{
                        btn_sms.style.display = 'none';
                        btn_confirm.style.display = 'none';
                        btn_actualizar.style.display = 'block'
        
                        btn_actualizar.addEventListener("click", ()=>{
                            btn_paso_5 = document.getElementById('btn-paso-5');
                            Swal.fire({
                                title: 'INFORMACIÓN',
                                text: 'Proceso ejecutado exitosamente',
                            }).then(() =>{
                                paso_4_after.style.display = 'block';
                                modal_visit.style.display = 'none';
                                btn_paso_5.addEventListener("click", ()=>{
        
                                    $( document ).ready(function() {
                                        $('#modal-loading').modal('toggle')
                                    });
                                    setTimeout(() => {
                                        $( document ).ready(function() {
                                            $('#modal-loading').modal('hide')
                                            paso_5.style.display = 'block';
                                            paso_4_after.style.display = 'none';
                                            
                                            document.getElementById('pasoli-4').classList.remove("active");
                                            document.getElementById('pasoli-4').className = "done";
                                            document.getElementById('pasoli-5').className = "active";
                                        });
                                      }, "3000");
        
                                })
                            })
                        })
                    })
                });
            });
        }else{
            event.preventDefault();

            Swal.fire({
                title: 'No se identifica como número de celular',
                icon: 'warning',
                Text: 'Por favor ingrese un número celular que comience por 3'
            });
        }

    }else{
        event.preventDefault();

        Swal.fire({
            title: 'Número de celular muy corto',
            icon: 'warning',
            Text: 'Por favor ingrese un número celular de 10 dígitos'
        });
    }

    
    
});

function validarNumero (){
    let array = celular_contact[0];

    if (array != 3){
        Swal.fire({
            title: 'MAl',
            icon: 'warning'

        });
    }else{
        Swal.fire({
            title: 'Si',
            icon: 'success'

        });
    }
}; 

document.getElementById('btn-con-acep').addEventListener('click', ()=>{
    //Mostrar la sección 6 y ocultar la sección 5
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    document.getElementById('modal-confirm-after').style.display = "none";
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-5').style.display = 'none';
            document.getElementById('paso-6').style.display = 'grid';
            document.getElementById('pasoli-5').classList.remove("active");
            document.getElementById('pasoli-5').className = "done";
            document.getElementById('pasoli-6').className = "active";
        });
      }, "3000");
    
});
let btn_paso_6 = document.getElementById('btn-paso-6');
btn_paso_6.addEventListener('click', () =>{
    paso_5.style.display = 'none';
    modal_confirm.style.display = 'block';
})

document.getElementById('btn-paso-7').addEventListener('click', ()=>{
    //Mostrar la sección 7 y ocultar la sección 6
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-6').style.display = 'none';
            document.getElementById('paso-7').style.display = 'grid';
            document.getElementById('pasoli-6').classList.remove("active");
            document.getElementById('pasoli-6').className = "done";
            document.getElementById('pasoli-7').className = "active";
        });
      }, "3000");
    
});

// No retorno
let btn_con_s = document.getElementById('btn-con-s');
btn_con_s.addEventListener("click", ()=>{
    modal_confirm_after = document.getElementById('modal-confirm-after');
    let timerInterval;
    Swal.fire({
        title: 'INFORMACIÓN',
        color:'#1285B6',
        html: 
            '<p>Se encuentra realizando una validación del servicio con el cliente, por favor espere 1 minuto. La encuesta se envió al Correo: nicogo@etb.com.co.</p><br>' +
            '0 Dia, 0 hora, 0 minuto, <strong></strong> segundos<br>',
        timer: 5000,
        didOpen: () =>{
            const content = Swal.getHtmlContainer()
            const $ = content.querySelector.bind(content)

            Swal.showLoading()

            timerInterval = setInterval(() => {
                Swal.getHtmlContainer().querySelector('strong')
                  .textContent = (Swal.getTimerLeft() / 1000)
                    .toFixed(0)
            }, 100)
        },willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        modal_confirm_after.style.display = 'block';
        modal_confirm.style.display = 'none';
    })
});

const boleta = document.querySelectorAll('.boleta');

// Paso 7

let btn_anterior;

boleta.forEach(btn => {
    btn.addEventListener('click', event =>{
        if (btn_anterior){
            btn_anterior.style.backgroundColor = '';
            formato_boleta.style.display = 'none';
        }
        
        const id = event.target;
        id.style.backgroundColor = '#009DC3';   
        btn.style.backgroundColor = '#009DC3';
    
        btn_anterior = btn;
    })
});

let cliente = document.getElementById('cliente');
const formato_boleta = document.getElementById('formato-boleta');
cliente.addEventListener('click', () =>{
    formato_boleta.style.display = 'block';
    console.log('si')
})

let btn_check = document.getElementById('btn-check');
 
btn_check.addEventListener('click', () =>{
    const punto_cableado = document.getElementById('confirm-punto-cableado');
    if(btn_check.checked == true){
        punto_cableado.style.display = 'block';
    }else{
        punto_cableado.style.display = 'none';
    }
})

function modalRed(){
    $( document ).ready(function() {
        $('#modal-red').modal('toggle')
    });
}

let tipo_contacto = document.getElementById('tipo-contacto');
tipo_contacto.addEventListener('change', () =>{

    let nombre_contact = document.getElementById('nombre-contact');
    let apellido_contact = document.getElementById('apellido-contact');
    let celular_contact = document.getElementById('celular-contact');

    if(tipo_contacto.value == 'otro'){
        nombre_contact.disabled = false;
        apellido_contact.disabled = false;
        celular_contact.disabled = false;
    }else{
        nombre_contact.disabled = true;
        apellido_contact.disabled = true;
        celular_contact.disabled = true;
        
        nombre_contact.value = 'NICOL';
        apellido_contact.value = 'PINEDA MUÑOZ';
    }
    
    
    
})