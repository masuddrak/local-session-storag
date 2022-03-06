// display card
const displayCardLocalStorag=()=>{
    const card=getCard()
    for(const product in card){
    console.log(product)
    addIteams(product)

    }

}
// input event
const addBtn=()=>{
    const input=document.getElementById('inputCard')
    const name=input.value
    if(!name){
        return
    }

    addIteams(name)
    productToCard(name)




    input.value=''  
}
const addIteams=(name)=>{
    const addIteam=document.getElementById('addIteam')
    let li=document.createElement('li')
    li.innerText=name
    addIteam.appendChild(li)
}
// get local api
const getCard=()=>{
    const card=localStorage.getItem('card')
    // console.log(card)
    let newObject
    if(card){
        newObject=JSON.parse(card) 
    }
    else{
        newObject={}
    }
    return newObject
}

// add prpduct ot card
const productToCard=name=>{
    let card=getCard()
    if(card[name]){
        card[name]=card[name]+1
    }
    else{
    card[name]=1
    }
    const cardStrigifid=JSON.stringify(card)
    localStorage.setItem('card',cardStrigifid)
}
const pleceOrdder=()=>{
    document.getElementById('addIteam').textContent=''
    localStorage.removeItem('card')
}
displayCardLocalStorag()
