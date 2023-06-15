
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// 按下按鈕後的變化
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// 回到上層按鈕

window.onscroll = () => {

    if (window.scrollY > 60) {
        document.querySelector('#scroll-up').classList.add('active');

    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }

}

// 音樂
setTimeout(function(){
    document.getElementById("my_audio").play();
    console.log('your audio is started just now');
},3000)


//顧客評論(review區)
const stars2 = document.querySelectorAll(".stars2 i");
//LOOP through the stars nodelist
stars2.forEach((star,index1)=>{
    star.addEventListener("click",() =>{
        stars2.forEach((star,index2)=>{
            index1 >= index2 ? star.classList.add("active"):star.classList.remove("active");
        })
    });
})
