export default function stats(){
    let style = `
        {
            width:90%;
            height:30%;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:10px;
            margin:5% 0px;
        }
        :responsive{
            height:30svh;
            width:95%;
        }`

    const stats = cE("div",style)
    stats.innerHTML = "Stats"
    return(stats)
}