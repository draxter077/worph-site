import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            padding:5%;
        }`

    const links = cE("div",style)
    links.appendChild(link("Conheça mais sobre o Worph","https://wor.ph.net.br"))
    links.appendChild(link("Conheça mais sobre a Ph Web Software","https://www.ph.net.br"))
    return(links)
}