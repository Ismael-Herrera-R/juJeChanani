const imagenes1 = [
    'img-0', 'img-1', 'img-2', 'img-3', 'img-4',
    'img-5', 'img-6', 'img-7', 'img-8'
];

const imagenes2 = [
    'imagen-0', 'imagen-1', 'imagen-2', 'imagen-3', 'imagen-4',
    'imagen-5', 'imagen-6', 'imagen-7', 'imagen-8'
]

const puzzle1 = document.querySelector("#puzzle1");
const puzzle2 = document.querySelector("#puzzle2");
const piezas = document.querySelector("#piezas");
const mensaje = document.querySelector("#mensaje");

let terminado1 = imagenes1.length;
let terminado2 = imagenes2.length;

while (imagenes1.length > 0){
    const index = Math.floor(Math.random() * imagenes1.length);
    const div = document.createElement('div');
    div.className = 'pieza';
    div.id = imagenes1[index];
    div.draggable = true;
    div.style.backgroundImage = `url("recursos/${imagenes1[index]}.png")`;

    piezas.appendChild(div);

    imagenes1.splice(index, 1);
}

for(let i = 0; i < terminado1; i++){
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i;
    puzzle1.appendChild(div);
}

while (imagenes2.length > 0){
    const index = Math.floor(Math.random() * imagenes2.length);
    const div = document.createElement('div');
    div.className = 'pieza';
    div.id = imagenes2[index];
    div.draggable = true;
    div.style.backgroundImage = `url("recursos2/${imagenes2[index]}.png")`;

    piezas.appendChild(div);

    imagenes2.splice(index, 1);
}

for(let i = 0; i < terminado2; i++){
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i;
    puzzle2.appendChild(div);
}

piezas.addEventListener('dragstart', e =>{
    e.dataTransfer.setData('id', e.target.id);
});

puzzle1.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle1.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle1.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    const id = e.dataTransfer.getData('id');
    const numero1 = id.split('-')[1];

    if(e.target.dataset.id === numero1){
        e.target.appendChild(document.getElementById(id));
    }
});

puzzle2.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle2.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle2.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    const id = e.dataTransfer.getData('id');
    const numero2 = id.split('-')[1];

    if(e.target.dataset.id === numero2){
        e.target.appendChild(document.getElementById(id));
        terminado1--;
        terminado2--;

        if(terminado1 === 0 && terminado2 === 0){
            document.body.classList.add('ganaste');
        }
    }
});