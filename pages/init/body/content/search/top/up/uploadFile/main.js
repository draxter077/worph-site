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
        input.addEventListener("change", function a(){
            const formData = new FormData();
            const file = input.files[0]
            if(file != undefined){
                formData.append("file", file);
                axios.post('//localhost:5001/postFile', formData, {headers: {'Content-Type': 'multipart/form-data', locID: document.getElementByName("path").id, fileID: undefined}})
                    .then(response => {console.log(response)})
                    .catch(error => {console.log(error)})
            }
            else{window.alert("Nenhum arquivo selecionado!")}
        })
    }
    return(uploadFile)
}