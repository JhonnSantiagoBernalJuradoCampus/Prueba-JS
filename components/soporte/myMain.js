export default{
    h1: "Preguntas más frecuentes",
    showInfo(){
        document.querySelector("#main").insertAdjacentHTML("beforeend", `
        <div class="FAQ">
            <h1>${this.h1}</h1>
        </div>
        `)
    }
}