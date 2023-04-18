export default{
    button: "Ver datos",
    tarjetas: [
        {
            p: "Hunters",
            img: "../images/hunters.png",
        },
        {
            p: "Cafeteria hunters",
            img: "../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg"
        },
        {
            p: "Octavo piso",
            img: "../images/cafeteria 8vo.jpg"
        },
        {
            p: "Baños",
            img: "../images/aseo.png"
        }
    ],
    showInfo(){
        let plantilla = "";
        this.tarjetas.forEach((val,id)=>{
            plantilla += `
            <div class="tarjetas">
                <p>${val.p}</p>
                <img src="${val.img}" alt="">
                <button>${this.button}</button>
            </div>
            `;
        });
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <div class="contenedor-tarjetas">
        ${plantilla}
        </div>
        `)
    }
}