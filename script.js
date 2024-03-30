const rotateBtn = document.querySelector('.rotate-btn');
const sildes = document.querySelectorAll('.bg-slide');
const totaSlides =sildes.length;
let index = 0;

rotateBtn.addEventListener('click', () =>{
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    },2100)

    sildes.forEach(sildes => {
        if(sildes.classList.contains('active')){
            sildes.classList.add('after-active');
        }
        else{
            sildes.classList.remove('after-active');
        }
    })

    sildes[index].classList.remove('active');

    index++;

    if(index==totaSlides){
        index=0;
    }

    sildes[index].classList.add('active');
})