export default{
    a: "AÑADIR AL CARRITO",
    carts: [
        {
            img: "../images/papasmargarita.jpg",
            h3: "Papas",
            p: "2000$"
        },
        {
            img: "../images/Pastel-de-Pollo7.jpg",
            h3: "Pasteles",
            p: "2300$"
        },
        {
            img: "../images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg",
            h3: "Café",
            p: "800$"
        }
    ],
    showInfo(){
        let plantilla = "";
        this.carts.forEach((val,id)=>{
            plantilla += `
            <div class="carts">
                <img src="${val.img}" alt="">
                <h3>${val.h3}</h3>
                <p>${val.p}</p>
                <a href="#">${this.a}</a>
            </div>
            `
        });
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <div class="products">
            ${plantilla}
        </div>
        `)
    }
}