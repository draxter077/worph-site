export default function link(t, href){
    let style = `
        {
            position:relative;
            font-size:16px;
            color:var(--colorWhite);
            margin:5px 0px;
            width:fit-content;
            padding:5px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            content:"";
            width:0%;
            height:1px;
            background:var(--colorWhite);
            transition:all 0.25s;
        }
        :hover::after{
            width:100%;
        }`

    const link = cE("a",style)
    link.innerHTML = t
    link.href = href
    link.target = "_blank"
    return(link)
}