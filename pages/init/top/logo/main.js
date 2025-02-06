export default function logo(){
    let style = `
        {
            font-size: 25px;
            font-weight: 900;
            color: white;
        }`

    const logo = cE("div", style)
    logo.innerHTML = "worph"
    return(logo)
}