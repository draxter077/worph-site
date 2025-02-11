import mimeType from "./mimeType.js"

export default function download(){
    let style = `
        {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }`
    const download = cE("img", style)
    download.src = "./download.webp"
    download.onclick = function a(Event){
        const fileID = Event.target.parentElement.id
        const fileName = Event.target.parentElement.children[2].innerHTML
        const fileExt = fileName.split(".")[1]
        axios.post(apiAddress + "/getFile", {fileID: fileID}, {responseType: "blob"})
            .then(response => {
                const file = new File([response.data], fileName, {type: mimeType[fileExt]})
                var link = document.createElement('a');
                link.href = window.webkitURL.createObjectURL(file);
                link.download = fileName;
                link.click();
            })
            .catch(error => {window.alert(error)})
    }
    return(download)
}