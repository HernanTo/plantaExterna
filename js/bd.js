
let contadorRegistros = 0;
let bd = []
let materiales = [['001-00019 BLOQUE DE 200 PARES DE ALTA DENCIDAD', 'UND'], ['001-00020 CUBIERTA TERMOC. 600 - 900', 'UND'], ['003-00002 CONECTOR UNITARIO TIPO RELLENO','UND'], ['003-00003 REGLETA MODULAR RELLENA 25 PARES', 'UND'], ['006-00003 - ALAMBRE DE BAJADA NEOPREN - TRENZADO','MTR'] ,['008-00001 ENCAPSULANTE REENTRABLE', 'JGO'], ['009-00017 TENSOR PLASTICO ALAMBRE DE BAJADA', 'UND'], ['009-0036 MINIBLOQUE TERMINAL DE 100 PARES HORIZON', 'UND'], ['009-00252 DUCTO CONDUIT PVC TIPOL LIVIANO DE 1" 3 M', 'UND'], ['009-00324 POSTE TELEF EN FIBRA DE VIDRIO 9M', 'UND'], ['031-00078 M CABLE RELLENO 150x2x0.4', 'MTR'], ['031-00088 M CABLE RELLENO 1800x2x0.4', 'MTR']];
let tempMedida = '';
let story = [];

document.getElementById('agregar-espacio-pla-ex').addEventListener('click', event=>{
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let select = document.createElement('select');
    $(select).attr("id", `material-${contadorRegistros + 1}`);
    addselect(materiales, select);
    td.appendChild(select)
    tr.appendChild(td);
    
    let input = document.createElement('input');
    td = document.createElement('td');
    input.type = `number`;
    $(input).attr("id",`cantidad-${contadorRegistros + 1}`);
    td.appendChild(input)
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode('UND'));
    $(td).attr('id', `medida-${contadorRegistros + 1}`)
    tr.appendChild(td);
    td = document.createElement('td');
    let i = document.createElement('i');
    i.className = "fa-solid fa-xmark";
    $(i).attr("id",`borrar-${contadorRegistros + 1}`);
    td.appendChild(i);
    tr.appendChild(td);
    $(tr).attr("id",`row-${contadorRegistros + 1}`);
    document.getElementById('mate-aña').appendChild(tr);
    let selectMateriales = document.querySelectorAll('.materiales-select')
    // console.log(selectMateriales)
    for(let itera = 0; itera < selectMateriales.length; itera++){
        selectMateriales[itera].addEventListener('change', event=>{
            let mate = selectMateriales[itera].value;
            queryMedida(mate)
            $(`#medida-${contadorRegistros}`).empty();
            document.getElementById(`medida-${contadorRegistros}`).appendChild(document.createTextNode(tempMedida));
        })
    }
    contadorRegistros = contadorRegistros + 1;
    temp = {
        id: contadorRegistros,
    }
    bd.push(temp);
    story.push({
        id: contadorRegistros,
    });
    console.log(story);
    

    document.getElementById(`borrar-${temp.id}`).addEventListener('click', event=>{
        document.getElementById('mate-aña').removeChild(document.getElementById(`row-${temp.id}`));
        bd = bd.filter(item => item.id != (temp.id));
        // console.log(contadorRegistros);
        // bd.splice(contadorRegistros-1, contadorRegistros);
        // bd = bd.filter((element)=> element.id == contadorRegistros);
    })
})
// alert('a');
function addselect(array, select){
    array.forEach(element => {
        let option = document.createElement('option')
        option.value = element[0];
        option.text = element[0];
        select.appendChild(option);
        $(select).attr('class', 'materiales-select');
    });
}
document.getElementById('btn-modal').addEventListener('click', event=>{

    let i = 0;
    bd.forEach(element=>{
        let cantidad = document.getElementById(`cantidad-${element.id}`).value;
        bd[i].material = document.getElementById(`material-${element.id}`).value;
        queryMedida(document.getElementById(`material-${element.id}`).value)
        bd[i].cantidad = cantidad;
        bd[i].medida = tempMedida;
        i = i + 1
    })

    bd.forEach(element=>{
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(element.material))
        tr.appendChild(td);
        td = document.createElement('td');
        // console.log(element.cantidad)
        td.appendChild(document.createTextNode(element.cantidad))
        tr.appendChild(td);
        tr.className = "row-temp-con";
        document.getElementById('confirmar-material').appendChild(tr);
    })
    $( document ).ready(function() {
    $('#modal-confirm-2').modal('toggle')
    });
})
function queryMedida(material){
    materiales.forEach(element=>{
        if(element[0] == material){
            // console.log(element[1]);
            tempMedida = element[1];
        }
    })
}