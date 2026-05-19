export default function hr(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:yellow;
        }`

    const hr = cE("div",style)
    hr.innerHTML = 'Human Resources'
    return(hr)
}