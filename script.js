// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
// NOT : ELEMAN TANIMLAMA İŞLEMLERİ BU ŞEKİLDE YUKARDA YAPILMALIDIR.

// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);
    // delete an item
    taskList.addEventListener('click', deleteItem);
    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);

}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }

    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    input.value = '';

    e.preventDefault();

}

// delete an item
function deleteItem(e) {

    

        if (e.target.className === 'fas fa-times') {
            if (confirm('Are You Sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    

    e.preventDefault();
}

//delete all items(2 yolu var biz uzun yolu yapalım.)
function deleteAllItems(e) {
    if (confirm('Are You Sure ?')) {
        taskList.childNodes.forEach(function (item) {

            // NOT : CHILDREN DEĞİL DE NEDEN CHILDNOTES KULLANDIK?
            // ÇÜNKÜ CHILDREN IN KULLANILABİLİR ÖZELLİKLERİNDE FOREACH YOKTUR.
            //BİZ BURADA FOREACH KULLANMAK İSTEDİĞİMİZ İÇİN CHILDNOTES KULLANMAYI
            //TERCİH ETTİK.

            if (item.nodeType === 1) {

                //NODETYPE IN 1 OLMASI DEMEK ONUN ELEMENT OLMASI DEMEKTİR.
                //BU NODETYPE LARIN DİĞER ÇEŞİTLERİ (1,2,3..) İNTERNETTE VAR.
                item.remove();
            }

        });

    }
    e.preventDefault();
    //NOT: a ETİKETİ OLANLARIN HEPSİNE BU PREVENT DEFAULT U YAPIYORUZ.
    //ÇÜNKÜ SAYFANIN YERİNDEN OYNAMASINI BU NOKTADA İSTEMİYORUZ.
    //a ETİKETİ DEĞİL DE BUTTON FALAN OLSAYDI PREVENT E GEREK KALMAZDI.
    //ÇÜNKÜ BUTTON A BASILDIĞI ZAMAN SAYFA REFRESH OLMAZ.

}