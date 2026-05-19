export default function bar(){
    let style = `
        {
            width:5%;
            height:5%;
            background:var(--colorBlue);
            border-radius:50px;
            transform:translateX(-100%);
            animation:loading 2s linear 0s infinite alternate;
        }`

    const bar = cE("div",style)
    return(bar)
}