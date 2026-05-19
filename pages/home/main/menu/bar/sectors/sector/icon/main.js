export default function icon(src){
    let style = `
        {
            height:30px;
            filter:invert(1);
            margin:0px 15px 0px 0px;
        }`

    const icon = cE("img",style)
    icon.src = src
    return(icon)
}