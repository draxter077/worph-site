export default function textarea(){
    let style = `
        {
            font-size:16px;
            width:80%;
            resize:none;
            box-shadow:0px 0px 3px 0px var(--colorDarkerBlue);
            padding:10px 15px;
            border-radius:5px;
        }
        :placeholder{
            font-style:italic;
        }`

    const textarea = cE("textarea",style)
    textarea.rows = 5
    textarea.placeholder = "Escreva seu pedido"
    return(textarea)
}