export default function new_() {
    let style = `
        {
            height:30px;
            filter:invert(1);
            cursor:pointer;
            margin:0px 5px;
        }`

    const new_ = cE("img", style)
    new_.src = "/assets/icons/add.png"
    new_.alt = "Ícone de adicionar"
    return (new_)
}