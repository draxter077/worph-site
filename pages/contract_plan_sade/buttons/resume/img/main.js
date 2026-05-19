export default function img(){
    let style = `
        {
            height:35px;
            width:35px;
            margin:0px 0px 0px 10px;
            border-radius:30px;
            background:var(--colorWhite);
            padding:5px;
            transform:rotate(270deg);
        }
        :responsive{
            height:25px;
            width:25px;
        }`

    const img = cE("img",style)
    img.src = "/assets/icons/arrow.png"
    img.alt = "Ícone de continuar"
    return(img)
}