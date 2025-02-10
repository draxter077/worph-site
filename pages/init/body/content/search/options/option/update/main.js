export default function update(){
    let style = `
        {
            width: 30px;
            height: 20px;
            cursor: pointer;
            margin: 0px 5px;
        }`
    const update = cE("img", style)
    update.src = "./change.jpg"
    update.onclick = async function a(Event){
        await axios.post('http://192.168.0.80:5001/postFile', formData, {headers: {'Content-Type': 'multipart/form-data', locID: document.getElementById("content").children[0].id, fileID: Event.target.parentElement.id}})
                .then(response => {window.alert("O arquivo foi atualizado com sucesso")})
                .catch(error => {window.alert(error); console.log(error)})
    }
    return(update)
}