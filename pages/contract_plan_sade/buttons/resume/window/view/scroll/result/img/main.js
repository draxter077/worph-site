export default function img(){
    let style = `
        {
            width:60px;
            height:60px;
        }`

    const img = cE("img",style)
    img.src = "/assets/icons/check.png"
    img.alt = "Ícone de confirmação"
    return(img)
}