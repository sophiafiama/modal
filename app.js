const button = document.querySelector('button');
const popup = document.querySelector(".popup-wrapper")

// const closebutton = document.querySelector('.popup-close')
// popup.addEventListener('click', ()=>{
//     popup.style.display = 'none'
// });


button.addEventListener('click', ()=>{
    popup.style.display = 'block'
});

popup.addEventListener('click', event =>{

const classNameofClickedElement = event.target.classList[0]
const classNames = ['popup-close','link', 'popup-wrapper' ]
const shoudClosePopup = classNames.some(className=>
    className ===classNameofClickedElement);

if (shoudClosePopup){
    popup.style.display = 'none'
}


});

