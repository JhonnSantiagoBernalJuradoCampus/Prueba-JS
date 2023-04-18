export default{
    parrafos: [
        {
            p: "¿Que servicios ofrece campus?"
        },
        {
            p: "¿Estos servicios y zonas manejan algun tipo de horario?, y si es así ¿Cómo se distribuye?"
        },
        {
            p: "¿Puedo usar o solicitar estos servicios en cualquier momento?"
        }
    ],
    showInfo(){
        let plantilla = "";
        this.parrafos.forEach((val,id)=>{
            plantilla += `
            <div class="accordion">
                <div class="panel">
                    <p>${val.p}</p>
                </div>
            </div>
            `
        });
        console.log(plantilla);
        document.querySelector("#footer").insertAdjacentHTML("beforeend", plantilla)
    }
}