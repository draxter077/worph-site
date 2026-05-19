export default function forgot(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:40px;
            width:50%;
            font-size:14px;
            font-weight:900;
            text-align:center;
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
        }
        :responsive{
            height:30px;
            width:80%;
            margin:2% 0px 0px 0px;
        }
        >div{
            width:40px;
            height:50%;
            border-radius:10px;
            background:var(--colorWhite);
            animation:loading2 2s linear 0s infinite alternate;
        }`

    const forgot = cE("div",style)
    forgot.innerHTML = "Esqueci a senha"

    forgot.addEventListener(
        "click",
        async function a(){
            forgot.removeEventListener("click",a)
            forgot.innerHTML = `<div></div>`
            await new Promise(r => setTimeout(r,2000))
            const is = document.getElementById("formsInputs").children
            if(is[0].value){
                // axios.post(`${api_url}/client/login`, {domain:is[0].value,password:is[1].value})
                //     .then(async r => {
                //         forgot.innerHTML = `Enviada para ${r.datat.email}`
                //         await new Promise(r => setTimeout(r,4000))
                //         forgot.innerHTML = "Esqueci a senha"
                //     })
                //     .catch(async r => {
                //         if(r.response.status == 404){
                //             is[0].style = "box-shadow:0px 0px 3px 0px red"
                //             await new Promise(r => setTimeout(r,600))
                //             is[0].style = "box-shadow:0px 0px 3px 0px var(--colorBlue)"
                //         }
                //         else{
                //             forgot.innerHTML = "Tente mais tarde"
                //         }
                //     })

                forgot.innerHTML = `Enviada para ${"pipipopo@gmail.com"}`
                await new Promise(r => setTimeout(r,4000))
                forgot.innerHTML = "Esqueci a senha"
            }
            else{
                is[0].style = "box-shadow:0px 0px 3px 0px red"
                await new Promise(r => setTimeout(r,600))
                is[0].style = "box-shadow:0px 0px 3px 0px var(--colorBlue)"
            }
            forgot.innerHTML = "Esqueci a senha"
            forgot.addEventListener("click",a)
        }
    )
    return(forgot)
}