const journal = document.getElementById("journal");
const journal_back = document.getElementsByClassName("journal_back")[0];
const textuel = document.getElementById("textuel")
const theme = document.getElementById("theme")
let timer = 2000
let scroller_avis = document.getElementById("comm")
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



function card(pdp, avis, note) {
  console.log("test")
  //création de la card-------//
  let card = document.createElement("div")
  card.classList.add("cards")
  scroller_avis.appendChild(card)
  //création de la photo de profil//
  let image = document.createElement("img")
  image.classList.add("pdp")
  image.src = pdp
  card.appendChild(image)
  //création de l'espace de note//
  let ratio = document.createElement("div")
  ratio.classList.add("note")
  card.appendChild(ratio)
  //espace commentaire//
  let comm = document.createElement("p")
  comm.classList.add("avis_client")
  comm.innerText = avis
  card.appendChild(comm)


}

const list_avis = [
  {
    "like": 5,
    "pdp": "img/personnage/perso1.png",
    "texte": "Le service client a été exceptionnel du début à la fin. Le produit est de très haute qualité, le papier est épais et durable. Je recommande vivement !"
  },
  {
    "like": 4,
    "pdp": "img/personnage/perso2.png",
    "texte": "Très satisfait de mon achat. Le service client a répondu rapidement à mes questions et le produit est arrivé bien emballé. Le papier est vraiment de qualité supérieure."
  },
  {
    "like": 3,
    "pdp": "img/personnage/perso3.png",
    "texte": "Je suis impressionné par la qualité du service client et la rapidité de la livraison. Le papier est luxueux et parfait pour mes besoins. Je n'hésiterai pas à recommander cette marque."
  },
  {
    "like": 5,
    "pdp": "img/personnage/perso4.png",
    "texte": "Excellent service client, toujours disponible et à l'écoute. Le produit est de très bonne qualité, le papier est robuste et agréable au toucher. Je suis très content de mon achat."
  },
  {
    "like": 4,
    "pdp": "img/personnage/perso5.png",
    "texte": "Le service client a été d'une grande aide et très professionnel. Le produit est arrivé rapidement et le papier est d'une qualité exceptionnelle. Je recommande sans hésitation."
  }
]




localStorage.setItem("list_theme", JSON.stringify(list_theme));

for (let i = 0; i < list_theme.length; i++) {
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
    setTimeout(() => {

      textuel.classList.remove("text_in")
    }, timer)
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


for (let i= 0; i < list_avis.length; i++) {
  card(list_avis[i].pdp, list_avis[i].texte, list_avis[i].texte)
}