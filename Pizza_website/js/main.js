

// Scrollbar navbar

let nav = document.querySelector(".navigation-wrap");


window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")
    }
}

// or simply use arrow funtion 
//// window.onscroll = () => { return document.documentElement.scrollTop > 20 ? nav.classList.add("scroll-on") :  nav.classList.remove("scroll-on")}
//  window.onscroll = () => document.documentElement.scrollTop > 20 ? nav.classList.add("scroll-on") :  nav.classList.remove("scroll-on")


// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach((a)=>{
    return(
        a.addEventListener('click', ()=>{
            navCollapse.classList.remove('show');
        })
    )
})

/*  navBar.forEach(function (a){
    a.addEventListener('click',function (){
            navCollapse.classList.remove('show');
        })
})
*/