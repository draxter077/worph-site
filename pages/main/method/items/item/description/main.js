export default function description(d){
    let style = `
        {
            font-size:14px;
            color:var(--colorBlue);
            padding:1% 0px 0px 38px;
        }
        :responsive{
            padding:0px 0px 0px 10%;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}