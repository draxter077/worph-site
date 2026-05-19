export default function text(t){   
    let style = `
        {
            color:var(--colorWhite);
        }` 
    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}