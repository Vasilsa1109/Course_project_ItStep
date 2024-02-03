let m = document.querySelector(".menu_icon");
let nav = document.querySelector(".main-menu");
let cont2 =  document.querySelector(".cont2");

if(m){
    m.addEventListener("click", (e) => {
        if(m.classList.contains("pushed")){
            m.classList.remove("pushed");
            nav.classList.remove("opened");
            cont2.classList.remove("hidden");
        }
        else{
            m.classList.add("pushed");
            nav.classList.add("opened");
            cont2.classList.add("hidden");
        }
    });
}