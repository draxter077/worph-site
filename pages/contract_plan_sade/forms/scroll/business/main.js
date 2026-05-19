import title from "./title/main.js"
import description from "./description/main.js"
import forms from "./forms/main.js"

export default function business(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
        }`

    const business = cE("div",style)
    business.appendChild(title())
    business.appendChild(description())
    business.appendChild(forms())
    return(business)
}