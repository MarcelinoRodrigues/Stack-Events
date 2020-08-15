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
$('amanha').addEventListener('click',()=>{})
$('proximaSemana').addEventListener('click',()=>{})
$('todosOsEventos').addEventListener('click',()=>{})