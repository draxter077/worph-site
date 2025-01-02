export default function download(){
    let style = `
        {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }`
    const download = cE("img", style)
    download.src = "./download.webp"
    download.onclick = function a(){
        axios.get("//localhost:5001/getFile")
            .then(response => {
                var blob = new Blob([response.data], {type: 'application/pdf'});
                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'imageFile.pdf';
                link.click();
            })
            .catch(error => {window.alert(error)})
    }
    return(download)
}