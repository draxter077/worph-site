import div from "./div/main.js"

export default function search(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
        }`

    const search = cE("div", style)
    search.appendChild(div())
    return(search)
}