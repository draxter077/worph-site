import main from "./main/main.js"

export default function content(d){
    let style = `
        {
            width:100%;
            height:80%;
            transition:all 0.5s;
        }`

    const content = cE("div",style)
    content.id = "content"
    content.appendChild(main(d))
    return(content)
}