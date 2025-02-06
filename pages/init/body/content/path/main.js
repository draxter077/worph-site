export default function path(){
    let style = `
        {
            width: 100%;
            margin: 0px 0px 20px 0px;
        }`

    const path = cE("div", style)
    path.id = "path"
    path.name = "1i63543912"
    path.innerHTML = "pasta > pasta > pasta > pasta"
    return(path)
}