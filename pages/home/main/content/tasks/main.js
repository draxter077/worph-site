export default function tasks(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:green;
        }`

    const tasks = cE("div",style)
    tasks.innerHTML = 'Tasks'
    return(tasks)
}