export default{
    h1: "Servicios",
    link: {
        href: "../tiendaComida/index.html",
        a: "Cafeteria virtual"
    },
    showInfo(){
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <div class="first-message">
            <h1>${this.h1}</h1>
            <a href="${this.link.href}">${this.link.a}</a>
        </div>
        `)
    }
}