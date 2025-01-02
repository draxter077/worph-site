import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: 150px;
            overflow-y: scroll;
            overflow-x: hidden;
            border-top: 1px solid black;
        }`

    const options = cE("div", style)

    let test = ["abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm"]
    for(let i = 0; i < test.length; i++){
        options.appendChild(option(test[i]))
    }
    return(options)
}