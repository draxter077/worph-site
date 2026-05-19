export default function date(){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            width:30%;
            text-align:right;
        }
        :responsive{
            display:none;
        }`

    const date = cE("div",style)
    date.innerHTML = "Seja bem-vindo"

    window.addEventListener(
        "load",
        async () => {
            while(true){
                let d = new Date()
                let day = d.getDate()
                if(day < 10){day = "0" + day}
                let month = d.getMonth() + 1
                if(month < 10){month = "0" + month}
                let year = d.getFullYear()

                let weekDay = d.getDay()
                let weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

                let hour = d.getHours()
                if(hour < 10){hour = "0" + hour}
                let minutes = d.getMinutes()
                if(minutes < 10){minutes = "0" + minutes}
                let seconds = d.getSeconds()
                if(seconds < 10){seconds = "0" + seconds}

                date.innerHTML = `${weekDays[weekDay]}, ${hour}:${minutes}<br>${day}/${month}/${year}`
                await new Promise(r => setTimeout(r,1000))
            }
        }
    )
    return(date)
}