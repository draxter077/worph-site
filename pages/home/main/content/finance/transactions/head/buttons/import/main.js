export default function import_() {
    let style = `
        {
            height:30px;
            filter:invert(1);
            cursor:pointer;
            margin:0px 5px;
        }`

    const import_ = cE("img", style)
    import_.src = "/assets/icons/import.png"
    import_.alt = "Ícone de importar"
    return (import_)
}