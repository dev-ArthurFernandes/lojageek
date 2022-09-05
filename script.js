let sectionFigure   = document.getElementById("listActionFigure")

let sectionFrame    = document.getElementById("listPaintings")

console.log(sectionFigure)

let listFigures = []

let listFrame   = []

function separeteItens(listItens){
    
    for(let i = 0;i<listItens.length;i++){
        if(listItens[i].type == "Actions Figure"){
            listFigures.push(listItens[i])
        }else{
            listFrame.push(listItens[i])
        }
    }
}
separeteItens(itens)


function makeTemplate(itemList, referenciaHtml){

    for(let i = 0;i<itemList.length;i++){
        card = creatCards(itemList[i])
        referenciaHtml.appendChild(card)
        
    }
    
}
makeTemplate(listFigures, sectionFigure)
makeTemplate(listFrame, sectionFrame)

function creatCards(Item){
    
    let tagLi       = document.createElement("li")
    let tagDiv      = document.createElement("div")
    let tagImg      = document.createElement("img")
    let tagNome     = document.createElement("p")
    let tagPreco    = document.createElement("p")
    
    let produtoName     = Item.name
    let produtoImage    = Item.image
    let produtoPrice    = Item.price

    tagDiv.classList.add("card")

    tagImg.src          = produtoImage
    tagImg.alt          = produtoName

    tagNome.innerHTML   = `<strong>${produtoName}</strong>`

    tagPreco.innerText  = `R$${produtoPrice}`
    
    tagDiv.appendChild(tagImg)

    tagLi.append(tagDiv, tagNome, tagPreco)

    return tagLi
}
