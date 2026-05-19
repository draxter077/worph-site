export default function percentage(){
    let style = `
        {
            width:0%;
            height:100%;
            background:var(--colorBlue);
            transition:all 0.5s;
        }`

    const percentage = cE("div",style)
    return(percentage)
}