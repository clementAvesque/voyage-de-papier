const journal = document.getElementById("journal");
const journal_back = document.getElementsByClassName("journal_back")[0];
let timer = 2000
let first_step = (timer / 100) * 25
let second_step = (timer/100) *37.4

journal.addEventListener('click', () => {
    journal.classList.toggle("anim_journal_open")
    if (document.getElementsByClassName("anim_journal_open")) {

        
        setTimeout(() => {
            journal_back.style.display = "block"
            journal.style.right = "45%"
            journal.style.transform = "skewY(0deg)"
            journal.style.transform = "rotateY(180deg)"
        }, first_step)
            setTimeout(()=>{
            journal.style.backgroundImage = `url("img/illustration_img.jpg")`


        },second_step)
    } else {

        console.log(first_step)
        setTimeout(() => {
            journal_back.style.display = "block"
            journal.style.right = "43%"
            journal.style.transform = "skewY(0deg)"
            journal.style.transform = "rotateY(180deg)"
        }, first_step)


    }

});