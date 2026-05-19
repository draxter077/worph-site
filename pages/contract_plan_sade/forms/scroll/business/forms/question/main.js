import title from "./title/main.js"
import input from "./input/main.js"

export default function question(q){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:40%;
            margin:5px 0px;
        }
        :responsive{
            width:100%;
        }`

    const question = cE("div",style)
    question.appendChild(title(q.title))
    question.appendChild(input(q.title,q.placeholder))
    return(question)
}