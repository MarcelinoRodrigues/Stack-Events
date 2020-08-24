$('hoje').addEventListener('click',()=>{
    let today=new Date()
    let day = today.getDay()
    let month = today.getMonth()
    let year = today.getFullYear()

    let hoje = () => {
        day,month,year
    }
   data = document.querySelectorAll('.data')
   if(data.lenght === new Date()){
       console.log("deu")
   }else{
       console.log("n deu")
   }
})
$('amanha').addEventListener('click',()=>{
    return null
})
$('proximaSemana').addEventListener('click',()=>{
    return null
})
$('todosOsEventos').addEventListener('click',()=>{
    return null
})