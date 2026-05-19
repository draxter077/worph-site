export default function text(){
    let style = `
        {
            font-size:14px;
            padding:5px 10px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            color:var(--colorWhite);
            border-radius:5px;
            width:33%;
            resize:none;
            opacity:0;
            transition:all 0.5s;
        }
        ::placeholder{
            font-style:italic;
        }
        :responsive{
            width:100%;
        }`
    
    const text = cE("textarea",style)
    text.id = "builderChat"
    text.rows = 10
    text.placeholder = "Escreva aqui o que deseja alterar\nQuando estiver satisfeito, clique em continuar"
    text.tabIndex=-1
    return(text)
}