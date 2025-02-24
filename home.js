let scrollContainer = document.querySelector(".gallary");
let rightbtn = document.querySelector("#first_btn");
let leftbtn = document.querySelector("#next_btn");

scrollContainer.addEventListener("wheel" , (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
 });

leftbtn.addEventListener("click" , ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 450;
});

rightbtn.addEventListener("click" , ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 450;
});

let tl = gsap.timeline();
tl.from(".carousel-item h1",{
    x:-100,
    opacity:0,
    stagger:0.2,
})
tl.from(".carousel-item p",{
    x:-100,
    opacity:0,
    stagger:0.2
})
tl.from(".carousel-item button",{
    x:-100,
    opacity:0,
    stagger:0.2
})

