export default function input(t,p){
    let style = `
        {
            background:var(--colorWhite);
            font-size:14px;
            padding:5px 10px;
            border-radius:5px;
            resize:none;
        }
        ::placeholder{
            font-style:italic;
        }
        @keyframes inputError{
            0%[background:var(--colorWhite);]
            50%[background:rgb(196,51,31);]
            100%[background:var(--colorWhite);]
        }`

    let input
    if(t.split(" ")[0] == "Objetivos"){
        input = cE("textarea", style)
        input.rows = 4
    }
    else{
        input = cE("input",style)
    }

    input.placeholder = p
    
    if(t.split(" ")[0] == "CNPJ"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll(".","").replaceAll("-","").replaceAll("/","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    nS += c
                    if(i != v.length - 1){
                        if(i == 1 || i == 4){nS += "."}
                        else if(i == 7){nS += "/"}
                        else if(i == 11){nS += "-"}
                    }
                    if(i > 13){break}
                    e.target.value = nS
                }
            }
        )
    }
    else if(t.split(" ")[0] == "WhatsApp"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll(" ","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    if(i == 0){nS += "("}
                    nS += c
                    if(i != v.length - 1){
                        if(i == 1){nS += ") "}
                        else if(i == 6){nS += "-"}
                    }
                    if(i > 10){break}
                    e.target.value = nS
                }
            }
        )
    }
    return(input)
}