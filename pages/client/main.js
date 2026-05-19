import login from "./login/main.js"
import main from "./main/main.js"

export default function client(data){
    let style = `
        {
            width:100%;
        }`

    const client = cE("div", style)
    document.title = "Cliente Ph"
    if(data){
        axios.defaults.headers.common["userAuth"] = data.user.id
        client.appendChild(main(data))
    }
    else{
        client.appendChild(login())
    }
    return(client)
}