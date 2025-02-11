import path from "./path/main.js"
import search from "./search/main.js"

export default function content(){
    let style = `
        {
            width: 100%;
            height: 100%;
            padding: 20px;
            transition: width var(--transitionTime);
        }`

    const content = cE("div", style)
    content.id = "content"
    axios.post(apiAddress + "/getLocContent", {locID: "main"})
        .then(response => {
            content.appendChild(path(response.data.path))
            content.appendChild(search(response.data.search))
        })
        .catch(error => {window.alert(error)})
    return(content)
}