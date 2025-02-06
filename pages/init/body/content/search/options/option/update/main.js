export default function update(){
    let style = `
        {
            width: 30px;
            height: 20px;
            cursor: pointer;
            margin: 0px 5px;
        }`
    const update = cE("img", style)
    update.src = "./change.jpg"
    return(update)
}