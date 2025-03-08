const journal = document.getElementById("journal");
const journal_back = document.getElementsByClassName("journal_back")[0];
const textuel = document.getElementById("textuel")
let timer = 2000
let first_step = (timer / 100) * 25
let second_step = (timer / 100) * 37.4

journal.addEventListener('click', () => {
    let status_journal = journal.classList.toggle("anim_journal_open")
    
    if (status_journal === true) {
        textuel.classList.add("text_out")
        console.log("test")
        setTimeout(() => {
            
            journal_back.style.display = "block"
            journal.style.right = "45%"
            journal.style.transform = "skewY(0deg)"
            journal.style.transform = "rotateY(180deg)"
        }, first_step)
        setTimeout(() => {
            journal.style.backgroundImage = `url("img/illustration_img.jpg")`
            textuel.style.display = "none"
            textuel.classList.remove("text_out")


        }, second_step)
    }

    if (status_journal === false) {
        journal.classList.add("anim_journal_close")
        textuel.classList.add("text_in")
        textuel.style.display = "flex"
        setTimeout(()=>{
            
            textuel.classList.remove("text_in")
        },timer)
        setTimeout(() => {
            journal_back.style.display = "none"
            journal.style.right = "0"
            journal.style.transform = "skewY(-30deg)"
        }, second_step)
        setTimeout(() => {
            journal.style.backgroundImage = `url("img/image4.png")`
            

        }, first_step)




    }

});