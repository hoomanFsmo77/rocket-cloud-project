class Menu {
    render(){
        let nav=document.querySelector('.navbar')
        window.addEventListener('scroll',e=>{
            if(window.scrollY>150){
                nav.classList.add('bg-light')
                nav.classList.add('shadow')
            }else{
                nav.classList.remove('bg-light')
                nav.classList.remove('shadow')
            }
        })
    }
}

export default Menu