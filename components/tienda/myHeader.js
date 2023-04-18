export default{
    img: "../images/logoWhite.png",
    links: [
        {
            href: "../index.html",
            a: "Inicio"
        },
        {
            href: "../servicios/index.html",
            a: "Servicios"
        },
        {
            href: "../soporte/index.html",
            a: "Soporte"
        }
    ],
    carrito: "../images/cart-regular-24.png",
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
                <div>
                    <img src="${this.carrito}" alt="">
                </div>
            </section>
        </nav>
        `)
    }
}