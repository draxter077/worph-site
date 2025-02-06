import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 450px;
            overflow-y: scroll;
            overflow-x: hidden;
        }`

    const options = cE("div", style)

    let test = ["abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm"]
    for(let i = 0; i < test.length; i++){
        options.appendChild(option(test[i]))
    }
    return(options)
}