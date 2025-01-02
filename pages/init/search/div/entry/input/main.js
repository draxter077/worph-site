export default function input(){
    let style = `
        {
            width: 100%;
            margin: 0px 0px 10px 0px;
            border: 1px solid black;
            padding: 5px 10px;
        }`

    const input = cE("input", style)
    input.oninput = function a(e){
        const value = e.target.value
        const options = e.target.parentElement.parentElement.children[1].children
        for(let i = 0; i < options.length; i++){
            for(let j = 0; j < options[i].innerHTML.length - value.length + 1; j++){
                let optionsText = ""
                for(let k = j; k < value.length + j; k++){
                    optionsText += options[i].innerHTML[k]
                }
                if(value == ""){
                    options[i].style.maxHeight = "100%"
                    options[i].style.translate = "0%"
                    break
                }
                else if(value.toLowerCase() != optionsText.toLowerCase()){
                    options[i].style.maxHeight = "0%"
                    options[i].style.translate = "50%"
                }
                else if(value.toLowerCase() == optionsText.toLowerCase()){
                    options[i].style.maxHeight = "100%"
                    options[i].style.translate = "0%"
                    break
                }
            }
        }
    }
    return(input)
}