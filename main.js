const journal = document.getElementById("journal");
const journal_back = document.getElementsByClassName("journal_back")[0];
const textuel = document.getElementById("textuel")
const theme = document.getElementById("theme")
let timer = 2000
let first_step = (timer / 100) * 25
let second_step = (timer / 100) * 37.4
const list_theme = [
    { NameOfThem: "art", link_img: "img/theme/art.svg" },
    { NameOfThem: "automobile", link_img: "img/theme/automobile.svg" },
    { NameOfThem: "celebrite", link_img: "img/theme/celebrite.svg" },
    { NameOfThem: "cinema", link_img: "img/theme/cinema.svg" },
    { NameOfThem: "fait divers", link_img: "img/theme/fait_divers.svg" },
    { NameOfThem: "gastronomie", link_img: "img/theme/gastronomie.svg" },
    { NameOfThem: "mode", link_img: "img/theme/mode.svg" },
    { NameOfThem: "monde entreprenariat", link_img: "img/theme/monde-entreprenariat.svg" },
    { NameOfThem: "nouveauté numerique", link_img: "img/theme/nouveauté_numerique.svg" },
    { NameOfThem: "voyage", link_img: "img/theme/voyage.svg" }
];

localStorage.setItem("list_theme", JSON.stringify(list_theme));

for(let i = 0; i<list_theme.length;i++){
let img = document.createElement("img")
img.src = list_theme[i].link_img
img.alt = list_theme[i].NameOfThem
theme.appendChild(img)
}

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
            textuel.style.position = "absolute"
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


