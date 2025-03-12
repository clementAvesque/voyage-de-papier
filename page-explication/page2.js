const list_theme = JSON.parse(localStorage.getItem("list_theme"));
console.log(list_theme)
const theme = document.getElementById("theme")


for(let i = 0; i<list_theme.length;i++){
    let img = document.createElement("img")
    img.src = `../${list_theme[i].link_img}`
    img.alt = list_theme[i].NameOfThem
    theme.appendChild(img)
    }