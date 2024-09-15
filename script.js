const imgs= document.querySelectorAll('.picture');
const btn1= document.querySelector('.prev-icon');
const btn2= document.querySelector('.next-icon');


let n=0;

function changeSlider(){
for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display='none';

}
    imgs[n].style.display='block';

}

changeSlider();

btn1.addEventListener('click',(e)=>{
    if (n > 0) {
        n--;
    }
    else{
    n= imgs.length-1;
    }
    changeSlider();
})

btn2.addEventListener('click',(e)=>{
    if(n < imgs.length-1){
        n++;}
        else{
            n=0;
        }
        changeSlider();
})


const scrollContainer= document.querySelectorAll('.product');
for (const item of scrollContainer) {
    item.addEventListener(WheelEvent,(Event )=> {
        Event.preventDefault();
        item.scrollLeft+= Evt.DeltaY;
    });
    
}
