const paso_1 = document.getElementById('paso-1');
const paso_2 = document.getElementById('paso-2');
const modal_confirm2 = document.getElementById('modal-confirm-2');
// window.onload = () => {
//     paso_2.style.display = 'block'
// };
// ==========================================================================================================
let observ1 = document.getElementById('observ1');
let observ2 = document.getElementById('observ2');
let btn_paso_2 = document.getElementById('btn-paso2');
btn_paso_2.addEventListener('click', () =>{
    if(observ1.value.length >= 1){
        paso_2.style.display = 'block';
        paso_1.style.display = 'none';
        $('#pasoli-1').addClass('done')
        $('#pasoli-1').removeClass('active')
        $('#pasoli-2').addClass('active')
        document.getElementById('suspender').style.display = "block"
    }else{
        $( document ).ready(function() {
            $('#modal-verif').modal('toggle')
        });
    }
})
document.getElementById('cerrar-verif').addEventListener('click', ()=>{
    $( document ).ready(function() {
        $('#modal-verif').modal('hide')
    });
})


let btn_paso_v_1 = document.getElementById('btn-paso-v-1');
btn_paso_v_1.addEventListener('click', () =>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            paso_1.style.display = 'block';
            paso_2.style.display = 'none';
            $('#pasoli-2').removeClass('active')
            $('#pasoli-1').addClass('active')
            $('#pasoli-1').removeClass('done')
        });

    }, "4000");
});
let btn_paso_v_2 = document.getElementById('btn-paso-v-2');
btn_paso_v_2.addEventListener('click', () =>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            paso_2.style.display = 'block';
            paso_3.style.display = 'none';
            $('#pasoli-3').removeClass('active')
            $('#pasoli-2').removeClass('done')
            $('#pasoli-2').addClass('active')
        });

    }, "4000");
});
let btn_paso_v_3 = document.getElementById('btn-paso-v-3');
btn_paso_v_3.addEventListener('click', () =>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            paso_3.style.display = 'block';
            paso_4.style.display = 'none';
            $('#pasoli-3').addClass('active')
            $('#pasoli-3').removeClass('done')
            $('#pasoli-4').removeClass('active')
        });

    }, "4000");
});
let btn_paso_v_4 = document.getElementById('btn-paso-v-4');
btn_paso_v_4.addEventListener('click', () =>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            paso_4.style.display = 'block';
            paso_5.style.display = 'none';
            $('#pasoli-5').removeClass('active')
            $('#pasoli-4').removeClass('done')
            $('#pasoli-4').addClass('active')
        });

    }, "4000");
});

let btn_paso_3 = document.getElementById('btn-paso3');
btn_paso_3.addEventListener('click', (event) =>{
    paso_3.style.display = 'block';
    paso_2.style.display = 'none';
    $( document ).ready(function() {
        $('#modal-punto-fail-bole').modal('hide')
    });
    $('#pasoli-2').addClass('done')
    $('#pasoli-2').removeClass('active')
    $('#pasoli-3').addClass('active')

    bd.forEach(element=>{
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(element.material))
        tr.appendChild(td);
        td = document.createElement('td');
        // console.log(element.cantidad)
        td.appendChild(document.createTextNode(element.cantidad))
        tr.appendChild(td);
        document.getElementById('recep-materials').appendChild(tr);
        console.log(materiales[element.idMaterial][2]);
        console.log(element.cantidad);
        if(materiales[element.idMaterial][2] < element.cantidad){
            disponibilidad = false;
            error.push(element);
        }
    })
    if(!disponibilidad){
        let msg = 'No existe materiales suficientes para cubrir la solicitud, en los siguientes materiales:';
        let conMsg = document.getElementById('mensaje-dispo');
        $(conMsg).empty();
        conMsg.appendChild(document.createTextNode(msg));
        conMsg.appendChild(document.createElement("br"));
        error.forEach(element=>{
            let msg = `${materiales[element.idMaterial][4]}, Cantidad Disponible: ${materiales[element.idMaterial][2]}, Cantidad Solicitada: ${element.cantidad}`
            conMsg.appendChild(document.createTextNode(msg));
            conMsg.appendChild(document.createElement("br"));
        })

        $( document ).ready(function() {
            $('#modal-dispo').modal('toggle')
        });
    }

    // bd.forEach(element=>{
    //     let tr = document.createElement('tr');
    //     let td = document.createElement('td');
    //     let input = (document.createElement('input'));
    //     input.type = 'checkbox';
    //     input.className = 'checkbox';
    //     $(input).attr('id', `checkbox-${element.id}`)
    //     td.appendChild(document.createTextNode(element.material))
    //     tr.appendChild(td);
    //     td = document.createElement('td');
    //     // console.log(element.cantidad)
    //     td.appendChild(document.createTextNode(element.cantidad))
    //     tr.appendChild(td);
    //     td = document.createElement('td');
    //     td.appendChild(document.createTextNode(element.medida))
    //     tr.appendChild(td);
    //     td = document.createElement('td');
    //     td.appendChild(input)
    //     tr.appendChild(td);
    //     document.getElementById('reuti-materials').appendChild(tr);
    // })

    bd.forEach(element=>{

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let input_n = document.createElement('input');
        input_n.type = 'number';
        $(input_n).attr('id', `inputCant-${element.id}`);
        td.appendChild(document.createTextNode(element.material))
        tr.appendChild(td);
        td = document.createElement('td');
        // console.log(element.cantidad)
        td.appendChild(document.createTextNode(element.cantidad))
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(input_n)
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(element.cantidad))
        $(td).attr('id', `sobrante-${element.id}`);
        tr.appendChild(td);
        document.getElementById('total-materials').appendChild(tr);

        // bd.forEach(element=>{
        //     document.getElementById(`inputCant-${element.id}`).addEventListener('change', event=>{
        //         alert(element.id);
        //     })
        // })
        // for(let i = 0; i < bd.length; i++){
        //     console.log(bd[i]);
        //     document.getElementById(`inputCant-${bd[i].id}`).addEventListener('change', event=>{
        //         alert(element.id);
        //     })
        // }
        // input_n.addEventListener('change', (event)=>{
        //     let total_materials = 0;
        //     total_materials = parseInt(bd[0].cantidad) - parseInt(input_n.value);
        //     console.log(total_materials)
        //     $('# sobrante').empty();
        //     document.getElementById('sobrante').appendChild(document.createTextNode(total_materials));


           


        // })
    })
    // checkboxBodega()
});



document.getElementById('cerrarModalConfiMate').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-confirm-2').modal('hide')
    });
    bd = story;
    let tempMaterilesDrop = document.querySelectorAll('.row-temp-con');
    for(let i = 0; i < tempMaterilesDrop.length; i++){
        document.getElementById('confirmar-material').removeChild(tempMaterilesDrop[i]);
    }
})

let btn_paso_4 = document.getElementById('btn-paso4');
btn_paso_4.addEventListener('click', ()=>{
    paso_4.style.display = 'block';
    paso_3.style.display = 'none';
    $('#pasoli-3').addClass('done')
    $('#pasoli-3').removeClass('active')
    $('#pasoli-4').addClass('active')
    document.getElementById('suspender').style.display = "none"
})

let btn_paso_5 = document.getElementById('btn-paso5');
btn_paso_5.addEventListener('click', ()=>{
    paso_5.style.display = 'block';
    paso_4.style.display = 'none';
    $('#pasoli-4').addClass('done')
    $('#pasoli-4').removeClass('active')
    $('#pasoli-5').addClass('active')

    bd.forEach(element=>{
            document.getElementById(`inputCant-${element.id}`).addEventListener('change', event=>{
                $(`#sobrante-${element.id}`).empty();
                let input_n = document.getElementById(`inputCant-${element.id}`).value;
                let total = parseInt(element.cantidad) - parseInt(input_n);
                document.getElementById(`sobrante-${element.id}`).appendChild(document.createTextNode(total));
            })
    })
})

let btn_fin = document.getElementById('btn-fin');
btn_fin.addEventListener('click', ()=>{
    if(observ2.value.length >= 1){
            $( document ).ready(function() {
                $('#modal-loading').modal('toggle')
            });
            setTimeout(() => {
                $( document ).ready(function() {
                    $('#modal-loading').modal('hide')
                    window.location.href = "./dashboard.html";
                });
              }, "4000");
    }else{
        $( document ).ready(function() {
            $('#modal-verif').modal('toggle')
        });

        document.getElementById('cerrar-verif').addEventListener('click', ()=>{
            $( document ).ready(function() {
                $('#modal-verif').modal('hide')
            });
        })
    }
})
let estadoCheck = false;
// ===========================================================================================================================================
function checkboxBodega(){
    let check = document.querySelectorAll('.checkbox');
    bd.forEach(element=>{    
        document.getElementById(`checkbox-${element.id}`).addEventListener('change', event=>{
            if(event.srcElement.checked == true){
                estadoCheck = true;
            }
            let count = 0;
            for(let iter = 0; iter <check.length; iter++){
                if(check[iter].checked){
                    estadoCheck = true;
                    bodega(estadoCheck)
                    // console.log(check[iter].checked);
                    count = count + 1;
                }
            }
            if(count == 0){
                estadoCheck = false;
                bodega(estadoCheck)
            }
            console.log(count);
        })
    })
}
    function bodega(estadoCheck){
        if(estadoCheck){
            // document.getElementById('bod-san-j').visible;
            document.getElementById('bodega').selectedIndex = 2;
            document.getElementById('bodega').disabled = true;
        }else{
            document.getElementById('bodega').selectedIndex = 0;
            document.getElementById('bodega').disabled = false;

        }
    }
    document.getElementById('suspender').addEventListener('click', ()=>{
        $( document ).ready(function() {
            $('#modal-suspender').modal('toggle')
        });
    })
    document.getElementById('btn-suspender').addEventListener('click', ()=>{
        if(document.getElementById('motiv-sus').value.length >= 1){
            $( document ).ready(function() {
                $('#modal-loading').modal('toggle')
            });
            setTimeout(() => {
                $( document ).ready(function() {
                    $('#modal-loading').modal('hide')
                    window.location.href = "./dashboard.html";
                });
              }, "3000");
        }else{
            $( document ).ready(function() {
                $('#modal-verif').modal('toggle')
            });
        }

    })