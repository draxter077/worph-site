export default function value(v){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
        }`

    const value = cE("div",style)
    value.innerHTML = `+0`
    value.id = randomName([])

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(value.id)
            if(window.scrollY > e.offsetTop - window.innerHeight*1){
                window.removeEventListener("scroll",a)
                for(let i = 0; i <= v; i++){
                    value.innerHTML = `+${i}`
                    await new Promise(r => setTimeout(r, 2000/v));
                }
            }
        }
    )
    return(value)
}