export default function cloud(d){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:red;
            opacity:0;
            transition:all 0.5s;
        }`

    const cloud = cE("div",style)
    cloud.id = "cloud"
    cloud.innerHTML = 'Cloud'
    return(cloud)
}