import scroll from "./scroll/main.js"

export default function forms(){
    let style = `
        {
            width:100%;
            height:100%;
            overflow:hidden;
        }`

    const forms = cE("div",style)
    forms.id = "forms"
    forms.appendChild(scroll())
    return(forms)
}