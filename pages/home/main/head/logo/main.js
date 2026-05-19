export default function logo(){
    let style = `
        {
            height:90px;
            border-radius:0px 0px 5px 5px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/logoname.png"
    logo.alt = "Logotipo da Worph"
    return(logo)
}