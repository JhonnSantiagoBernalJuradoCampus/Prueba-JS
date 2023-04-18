export default{
    h1: "Bienvenid@ Camper",
    p: "Campus programmers Land",
    h3: "Acerca de la pagina",
    p2: "Esta es una pagina informativa acerca de nuestros servicios ofrecidos a nuestros queridos campers",
    showInfo(){
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <div class="first-message">
            <h1>${this.h1}</h1>
            <p>${this.p}</p>
            <h3>${this.h3}</h3>
            <div class="homepage">
                <p>${this.p2}</p>
            </div>
        </div>
        `)
    }
}