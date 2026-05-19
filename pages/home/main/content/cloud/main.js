export default function cloud(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:red;
        }`

    const cloud = cE("div",style)
    cloud.innerHTML = 'Cloud'
    return(cloud)
}