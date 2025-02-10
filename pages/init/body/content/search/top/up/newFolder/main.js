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
        axios.post("http://192.168.0.80:5001/postFolder", {folderName: window.prompt("Digite o nome da pasta"), locID: document.getElementById("content").children[0].id})
            .then(response => {window.alert("A pasta foi criada com sucesso na atual"); document.getElementById("content").children[0].children[0].click()})
            .catch(error => {window.alert(error); console.log(error)})
    }  
    return(newFolder)
}