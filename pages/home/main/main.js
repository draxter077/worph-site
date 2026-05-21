import head from "./head/main.js"
import content from "./content/main.js"
import foot from "./foot/main.js"
import menu from "./menu/main.js"

export default function main(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100svh;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(content(d))
    main.appendChild(foot())
    //main.appendChild(menu())
    return(main)
}