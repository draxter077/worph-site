export default function init(){
    let style = `
        {
            height: 100dvh;
            width: 100%;
        }`

    const init = cE("div", style)

    const input = cE("input", undefined)
    input.type = "file"
    input.name = "imageFile"
    init.appendChild(input)

    const button = cE("button", undefined)
    button.innerHTML = "Upload"
    button.onclick = function a(Event){
        //const formData = new FormData();
        //const file = Event.target.parentElement.children[0].files[0]
        //formData.append('imageFile', file);
        //axios.post('//localhost:5001/postFile', formData, {headers: {'Content-Type': 'multipart/form-data'}})
        //    .then(response => {console.log(response)})
        //    .catch(error => {console.log(error)})

        axios.get("//localhost:5001/getFile")
            .then(response => {
                var blob = new Blob([response.data], {type: 'application/pdf'});
                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'imageFile.pdf';
                link.click();
            })
            .catch(error => {console.log(error)})
    }
    init.appendChild(button)

    return(init)
}