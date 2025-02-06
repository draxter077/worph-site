export default function newFolder(){
    let style = `
        {
            width: 30%;
        }`

    const newFolder = cE("button", style)
    newFolder.innerHTML = "Nova pasta"
    return(newFolder)
}