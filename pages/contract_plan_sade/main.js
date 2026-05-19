import head from "./head/main.js"
import progress from "./progress/main.js"
import forms from "./forms/main.js"
import buttons from "./buttons/main.js"
import foot from "./foot/main.js"

export default function main(){
    document.title = "Contratação Plano Completo"
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:100svh;
            background:var(--colorDarkerBlue);
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(progress())
    main.appendChild(forms())
    main.appendChild(buttons())
    main.appendChild(foot())
    return(main)
}