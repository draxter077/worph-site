export default function submit(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:30px;
            width:50%;
            font-size:14px;
            font-weight:900;
            text-align:center;
            background:var(--colorBlue) !important;
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
        }
        >div{
            width:40px;
            height:50%;
            border-radius:10px;
            background:var(--colorWhite);
            animation:loading2 2s linear 0s infinite alternate;
        }`

    const submit = cE("div",style)
    submit.innerHTML = "Enviar"

    submit.addEventListener(
        "click",
        async function a(e){
            submit.removeEventListener("click",a)
            submit.innerHTML = `<div></div>`
            await new Promise(r => setTimeout(r,2000))

            // axios.post(`${api_url}/client/sendOrder`, {content:e.target.parentElement.parentElement.children[1].value})
            //     .then(r => {
            //         // document.getElementById("contentOrders")
            //         e.target.parentElement.children[0].click()
            //     })
            //     .catch(r => {submit.innerHTML = "Tente mais tarde"})

            e.target.parentElement.children[0].click()
        }
    )
    return(submit)
}