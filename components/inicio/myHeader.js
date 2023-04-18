export default{
    img: "images/logoWhite.png",
    links: [
        {
            href: "#",
            a: "Inicio"
        },
        {
            href: "servicios/index.html",
            a: "Servicios"
        },
        {
            href: "soporte/index.html",
            a: "Soporte"
        }
    ],
    showInfo(){
        let plantilla = "";
        this.links.forEach((val,id)=>{
            plantilla += `
            <a href="${val.href}" class="alink">${val.a}</a>
            `;
        });
        document.querySelector("#header").insertAdjacentHTML("beforeend", `
        <nav>
            <section class="container1">
                <img id="logo" src="${this.img}" alt="">
                ${plantilla}
            </section>
        </nav>
        `)
    }
}