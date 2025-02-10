export default function uploadFile(){
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
        
    const uploadFile = cE("button", style)
    uploadFile.innerHTML = "Upload"
    uploadFile.onclick = function a(){
        const input = document.createElement("input")
        input.type = "file"
        input.name = "file"
        input.click()
        input.addEventListener("change", async function a(){
            const formData = new FormData();
            const file = input.files[0]
            if(file != undefined){
                formData.append("file", file);
                await axios.post('http://192.168.0.80:5001/postFile', formData, {headers: {'Content-Type': 'multipart/form-data', locID: document.getElementById("content").children[0].id, fileID: undefined}})
                    .then(response => {window.alert("O arquivo " + file.name + " foi adicionado com sucesso a esta pasta"); document.getElementById("content").children[0].children[0].click()})
                    .catch(error => {window.alert(error); console.log(error)})
            }
            else{window.alert("Nenhum arquivo selecionado!")}
        })
    }
    return(uploadFile)
}