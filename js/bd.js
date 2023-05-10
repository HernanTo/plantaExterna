let contadorRegistros = 0;
let bd = []
let error = [];
let disponibilidad = true;
let materiales = [['001-00019 BLOQUE DE 200 PARES DE ALTA DENCIDAD', 'UND', 10, 0, '001-00019'],
 ['001-00020 CUBIERTA TERMOC. 600 - 900', 'UND', 100, 1, '001-00020'],
  ['003-00002 CONECTOR UNITARIO TIPO RELLENO','UND', 24, 2, '003-00002'],
   ['003-00003 REGLETA MODULAR RELLENA 25 PARES', 'UND',13, 3, '003-00003'],
    ['006-00003 - ALAMBRE DE BAJADA NEOPREN - TRENZADO','MTR', 800, 4, '006-00003'] ,
    ['008-00001 ENCAPSULANTE REENTRABLE', 'JGO', 150,5, '008-00001'],
     ['009-00017 TENSOR PLASTICO ALAMBRE DE BAJADA', 'UND', 15,6, '009-00017'],
      ['009-0036 MINIBLOQUE TERMINAL DE 100 PARES HORIZON', 'UND', 20,7, '009-0036'],
       ['009-00252 DUCTO CONDUIT PVC TIPOL LIVIANO DE 1" 3 M', 'UND', 800,8, '009-00252'],
        ['009-00324 POSTE TELEF EN FIBRA DE VIDRIO 9M', 'UND', 100,9, '009-00324'],
         ['031-00078 M CABLE RELLENO 150x2x0.4', 'MTR', 2500,10, '031-00078'],
          ['031-00088 M CABLE RELLENO 1800x2x0.4', 'MTR', 400,11, '031-00088']];
let tempMedida = '';
let story = [];

document.getElementById('agregar-espacio-material-reu').addEventListener('click', event=>{
    // alert('a')
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let select = document.createElement('select');
    // $(select).attr("id", `material-${contadorRegistros + 1}`);
    addselect(materiales, select);
    td.appendChild(select)
    tr.appendChild(td);
    
    let input = document.createElement('input');
    td = document.createElement('td');
    input.type = `number`;
    input.value = 1;
    // $(input).attr("id",`cantidad-${contadorRegistros + 1}`);
    td.appendChild(input)
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode('UND'));
    // $(td).attr('id', `medidareuti-${contadorRegistros + 1}`)
    tr.appendChild(td);
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.type = "checkbox"
    // let i = document.createElement('i');
    // i.className = "fa-solid fa-xmark";
    // $(i).attr("id",`borrar-${contadorRegistros + 1}`);
    td.appendChild(checkbox);
    tr.appendChild(td);
    // $(tr).attr("id",`row-${contadorRegistros + 1}`);
    document.getElementById('reuti-materials').appendChild(tr);
})

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
    input.value = 1;
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
    let iterable = 0;
    array.forEach(element => {
        let option = document.createElement('option')
        option.value = iterable;
        option.text = element[0];
        select.appendChild(option);
        $(select).attr('class', 'materiales-select');
        iterable = iterable + 1;
    });
}
document.getElementById('btn-modal').addEventListener('click', event=>{

    let i = 0;
    bd.forEach(element=>{
        let cantidad = document.getElementById(`cantidad-${element.id}`).value;
        bd[i].idMaterial = document.getElementById(`material-${element.id}`).value;
        bd[i].material = materiales[document.getElementById(`material-${element.id}`).value][0];
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
    console.log(material);
    materiales.forEach(element=>{
        console.log(element[0]);
        if(element[3] == material){
            console.log(element[1]);
            tempMedida = element[1];
        }
    })
}