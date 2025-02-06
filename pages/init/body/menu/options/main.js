export default function options(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 10px;
            color: grey;
        }`

    const options = cE("div", style)
    options.innerHTML = "Cloud"
    return(options)
}