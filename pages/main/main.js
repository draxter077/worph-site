import head from "./head/main.js"
import outdoor from "./outdoor/main.js"
import who from "./who/main.js"
import services from "./services/main.js"
import method from "./method/main.js"
import faq from "./faq/main.js"
import foot from "./foot/main.js"

export default function main(){
    const SD = { // Padrão em todo main de página
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Ph Web Software",
        "alternateName":"Ph",
        "url":"https://www.ph.net.br",
        "logo":"https://www.ph.net.br/assets/logo.jpg",
        "taxID":"62.797.808/0001-41",
        "image":"https://www.ph.net.br/assets/logo.jpg",
        "email":"contato@ph.net.br",
        "telephone":"+55 (41) 99171-8360",
        "slogan":"Transformamos sua ideia em uma realidade no mundo digital",
        "description":"Focados em criação de sites profissionais, que expressem a identidade do seu projeto sem deixar de gerar resultado e conexão com seus clientes. Nossos sites são de alta performance, desenvolvidos segundo as últimas recomendações de SEO (Google) e UX (experiência de usuário) e otimizados para a geração de leads, fortalecendo o crescimento do seu negócio. Criamos sites para advogados, psicólogos, engenheiros, arquitetos, médicos, dentistas, contadores, consultores e qualquer outro negócio que queira fortalecer sua presença digital",
        "areaServed":"BR",
        "address":{
            "@type":"PostalAddress",
            "streetAddress":"Rua Atílio Bório, 80",
            "addressLocality":"Curitiba",
            "addressRegion":"Paraná",
            "addressCountry":"BR",
            "postalCode":"80050-250"
        },
        "sameAs":[
            "https://www.ph.net.br",
            instagram_url,
            whatsapp_url
        ]
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(outdoor())
    main.appendChild(who())
    main.appendChild(services())
    main.appendChild(method())
    main.appendChild(faq())
    main.appendChild(foot())
    return(main)
}