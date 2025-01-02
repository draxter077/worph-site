export default function button(){
    let style = `
        {
            padding: 5px 10px;
            border: 1px solid black;
            border-radius: 10px;
        }
        :hover{
            box-shadow: 0px 0px 5px 0px black;
        }`
    const button = cE("button", style)
    button.innerHTML = "Upload"
    button.onclick = function a(Event){
        const formData = new FormData();
        const file = Event.target.parentElement.children[0].files[0]
        if(file != undefined){
            formData.append('imageFile', file);
            axios.post('//localhost:5001/postFile', formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then(response => {console.log(response)})
                .catch(error => {console.log(error)})
        }
        else{window.alert("Nenhum arquivo selecionado!")}
    }
    return(button)
}