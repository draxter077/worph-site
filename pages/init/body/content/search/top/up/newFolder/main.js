export default function newFolder(){
    let style = `
        {
            padding: 5px 10px;
            border-radius: 5px;
            background: blue;
            transition: background var(--transitionTime);
            color: white;
            font-weight: 900;
            margin: 0px 0px 0px 10px;
        }
        :hover{
            background: black;
        }`

    const newFolder = cE("button", style)
    newFolder.innerHTML = "Nova pasta"
    newFolder.onclick = function a(){
        let content = document.getElementsByName("content")
        content.innerHTMl = ""
        axios.post("http://192.168.0.80:5001/getLocContent", {locID: id}) // FAZER CÓDIGO PARA NOVA PASTA
            .then(response => {
                content.appendChild(path(response.data.path))
                content.appendChild(search(response.data.search))
            })
            .catch(error => {window.alert(error)})
    }  
    return(newFolder)
}