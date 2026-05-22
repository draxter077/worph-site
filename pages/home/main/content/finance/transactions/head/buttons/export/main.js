export default function export_() {
    let style = `
        {
            height:30px;
            filter:invert(1);
            cursor:pointer;
            margin:0px 5px;
        }`

    const export_ = cE("img", style)
    export_.src = "/assets/icons/export.png"
    export_.alt = "Ícone de exportar"
    return (export_)
}