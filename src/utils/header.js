
const header = () =>{

    window.addEventListener('scroll',function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 200);
    })
}

export default header