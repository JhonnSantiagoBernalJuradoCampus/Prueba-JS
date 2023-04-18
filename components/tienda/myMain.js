export default{
    h1: "Cafeteria Virtual",
    p: "Sección compra",
    h3: "Catalogo",
    showInfo(){
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <div class="first-message">
            <h1>${this.h1}</h1>
            <p>${this.p}</p>
            <h3>${this.h3}</h3>
        </div>
        `)
    }
}