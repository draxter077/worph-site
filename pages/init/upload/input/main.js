export default function input(){
    let style = `
        {
            border: 1px solid black;
            padding: 10px;
            border-radius: 10px;
            margin: 0px 10px 0px 0px;
        }`
    const input = cE("input", style)
    input.type = "file"
    input.name = "imageFile"
    return(input)
}