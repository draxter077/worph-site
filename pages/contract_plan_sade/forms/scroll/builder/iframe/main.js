export default function iframe(){
    let style = `
        {
            height:100%;
            width:100%;
            border-radius:5px;
            background:var(--colorWhite);
        }`

    const iframe = cE("iframe",style)
    iframe.id = "builderIframe"
    iframe.srcdoc = `<!DOCTYPE html><html lang="pt-br" role="main"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100svh;font-size:14px;color:rgb(255,255,255);font-family:system-ui;background:rgb(0,0,0);overflow:hidden;}#loading{width:5%;height:5%;margin:0px 0px 20px 0px;background:rgb(255,255,255);border-radius:50px;transform:translateX(-100%);animation:loading 2s linear 0s infinite alternate;}@keyframes loading{0%{transform:translateX(-100%);width:5%}50%{transform:translateX(0%);width:2.5%}100%{transform:translateX(100%);width:5%}}</style></head><body><div id="loading"></div><div>Estamos carregando um rascunho com base em suas informações</div><div>Ele não é definitivo, apenas queremos entender melhor sua ideia</div></body></html>`
    return(iframe)
}