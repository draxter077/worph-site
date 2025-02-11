import path from "../../path/main.js"
import search from "../../search/main.js"

export default function option(t, id){
    let style = `
        {
            margin: 0px 5px;
        }`
    
    const option = cE("button", style)
    option.innerHTML = t
    option.onclick = function a(){
        let content = document.getElementById("content")
        content.innerHTML = ""
        axios.post(apiAddress + "/getLocContent", {locID: id})
            .then(response => {
                content.appendChild(path(response.data.path))
                content.appendChild(search(response.data.search))
            })
            .catch(error => {window.alert(error); console.log(error)})
    }
    return(option)
}