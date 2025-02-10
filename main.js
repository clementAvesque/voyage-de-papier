document.getElementById("slider").addEventListener("click", () => {
    let slide = document.querySelector('input[name="slide"]:checked');
    console.log(slide.value);
    switch (slide.value) {
        case '0':
            document.getElementById("caroussel").style.marginLeft = "0"
            break
        case '1':
            document.getElementById("caroussel").style.marginLeft = "-100%"
            break
            case '2':
            document.getElementById("caroussel").style.marginLeft = "-200%"
            break
            case '3':
            document.getElementById("caroussel").style.marginLeft = "-300%"
            break
    }
});

window.addEventListener('mousemove', (e)=>{
    console.log(e)
})