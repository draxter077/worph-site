export default function logo(){
    let style = `
        {
            height:100px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
        }
        :responsive{
            width:20%;
            height:fit-content;
        }`
        
    const logo = cE("img",style)
    logo.src = "/assets/logoname.png"
    logo.alt = "Logotipo da Worph"
    return(logo)
}