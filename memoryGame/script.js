let colorArray= [
    {
        name: 'red',
        value: 'red'
    },
    {
        name: 'green',
        value: 'green'
    },
    {
        name: 'pink',
        value: 'pink'
    },
    {
        name: 'blue',
        value: 'blue'
    },
    {
        name: 'orange',
        value: 'orange'
    },
    {
        name: 'cyan',
        value: 'cyan'
    },{
        name: 'red',
        value: 'red'
    },
    {
        name: 'green',
        value: 'green'
    },
    {
        name: 'pink',
        value: 'pink'
    },
    {
        name: 'blue',
        value: 'blue'
    },
    {
        name: 'orange',
        value: 'orange'
    },
    {
        name: 'cyan',
        value: 'cyan'
    }
    
];
const grid = document.getElementById('grid');
let colorChosen = [];
let colorChosenIds = [];
let score =0;
const scoreSpan = document.querySelector('#score');
let cardsWon = 0;
scoreSpan.textContent = score;

colorArray.sort(() => 0.5 - Math.random());

function createGrid(){
    for(let i=0; i<colorArray.length; i++){
        const carre = document.createElement('div');
        carre.setAttribute('class', 'carre');
        carre.setAttribute('id', i);
        //carre.style.backgroundColor = colorArray[i]['value'];
        carre.addEventListener('click', action);
        grid.appendChild(carre);
    }
}
createGrid();

function action(){
    //console.log('color:', this.getAttribute("id"));
    const cardColor = this.getAttribute("id");
    colorChosen.push(colorArray[cardColor].value);
    colorChosenIds.push(cardColor);
    this.setAttribute('style', 'background-color:'+ colorArray[cardColor].value);
    if(colorChosen.length == 2){
        setTimeout(CompareColors,500);
    }
}
function CompareColors(){
    const optionOne = document.getElementById(colorChosenIds[0]);
    const optionTwo = document.getElementById(colorChosenIds[1]);
    if(colorChosenIds[0] == colorChosenIds[1]){
        alert("You choosed the same color!");
        optionOne.removeAttribute('style');
        optionTwo.removeAttribute('style');
    }else{
        if(colorChosen[0]== colorChosen[1]){
            score ++;
            scoreSpan.textContent = score;
            optionOne.setAttribute('style', 'background-color: white');
            optionTwo.setAttribute('style', 'background-color: white');
            optionOne.removeEventListener('click', action);
            optionTwo.removeEventListener('click', action);
            cardsWon ++;
    
        }else{
            optionOne.removeAttribute('style');
            optionTwo.removeAttribute('style');
        }
    }
    
    colorChosen = [];
    colorChosenIds = [];
    if(cardsWon == 6){
        alert('Congratulations!!!! \n Party over!! ');
        if(confirm("New game? ")){
            location.reload();
        }
    }
} 