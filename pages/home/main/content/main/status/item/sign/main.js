export default function sign(){
    let style = `
        {
            width:16px;
            height:16px;
            border-radius:50px;
            border:1px solid var(--colorWhite);
            animation:blink 1s linear 0s infinite alternate;
        }
        @keyframes blink{
            0%[background:var(--colorDarkerBlue);]
            100%[background:rgb(0,255,0);]
        }`

    const sign = cE("div",style)
    return(sign)
}