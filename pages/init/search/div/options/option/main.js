export default function option(t){
    let style = `
        {
            width: 200%;
            height: 20px;
            max-height: 100%;
            transition: translate var(--transitionTime), max-height var(--transitionTime);
            overflow: hidden;
            cursor: pointer;
        }
        :hover{
            background: red;
        }`

    const option = cE("div", style)
    option.innerHTML = t
    option.onclick = function a(){
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
    return(option)
}