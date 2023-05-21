const container = document.getElementById('container')
const init = document.getElementById('init')

init.addEventListener('click', ()=>{
    let n1 = prompt();
    let n2 = prompt();

    if (n1 < 101 && n2 < 101) {
        while (container.firstChild){
            container.firstChild.remove();
        }
        createGraph(n1,n2);
    }
    else {
        return;
    } 
})

function createGraph(p1,p2) {
    for (let a = 0; a < p1;a++){
        let row = document.createElement('div')
        row.classList.add('row')
        for (let i = 0;i < p2; i++){
            let div = document.createElement('div')
            div.classList.add('field')
            div.addEventListener('mouseenter',()=>{
                div.style.backgroundColor = 'red';
            })
            row.append(div);
        }
        container.append(row);
    }
}

    