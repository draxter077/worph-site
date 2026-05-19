export default function logo(){
    let style = `
        {
            height:75px;
        }
        :responsive{
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/logoname.png"
    logo.alt = "Logotipo da Worph"
    return(logo)
}