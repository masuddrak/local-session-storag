const addBtn=()=>{
    const input=document.getElementById('inputCard')
    const name=input.value
    console.log(name)
    addIteams(name)

    input.value=''
    
}
const addIteams=(name)=>{
    const addIteam=document.getElementById('addIteam')
    let li=document.createElement('li')
    li.innerText=name
    addIteam.appendChild(li)
}