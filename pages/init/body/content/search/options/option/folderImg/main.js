import path from "../../../../path/main.js"
import search from "../../../../search/main.js"

export default function folderImg(id){
    let style = `
        {
            height: 17px;
            width: 17px;
            margin: 0px 10px 0px 0px;
            cursor: pointer;
        }`

    const folderImg = cE("img", style)
    folderImg.src = "./folder.png"
    folderImg.onclick = function a(){
        let content = document.getElementById("content")
        content.innerHTML = ""
        axios.post("http://192.168.0.80:5001/getLocContent", {locID: id})
            .then(response => {
                content.appendChild(path(response.data.path))
                content.appendChild(search(response.data.search))
            })
            .catch(error => {window.alert(error); console.log(error)})
    }
    return(folderImg)
}