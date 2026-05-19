export default function detail(){
    let style = `
        {
            font-size:16px;
            margin:10px 0px 0px 0px;
            text-align:justify;
            color:var(--colorWhite);
        }`

    const detail = cE("div",style)
    detail.innerHTML = `Nesse plano, sua empresa terá site profissional, e-mail corporativo e domínio, que expressem a identidade do seu projeto sem deixar de gerar resultado e conexão com seus clientes. Nossos sites são de alta performance, desenvolvidos segundo as últimas recomendações de SEO (Google) e UX (experiência de usuário) e otimizados para a geração de leads, fortalecendo o crescimento do seu negócio. Criamos sites para advogados, psicólogos, engenheiros, arquitetos, médicos, dentistas, contadores, consultores e qualquer outro negócio que queira fortalecer sua presença digital.`
    return(detail)
}