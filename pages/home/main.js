import login from "./login/main.js"
import main from "./main/main.js"

export default function home(data){
    let style = `
        {
            width:100%;
        }`

    const home = cE("div", style)
    document.title = "Worph Home"
    if(data){
        axios.defaults.headers.common["userAuth"] = data.user.id
        home.appendChild(main(data))
    }
    else{
        home.appendChild(login())
    }
    return(home)
}