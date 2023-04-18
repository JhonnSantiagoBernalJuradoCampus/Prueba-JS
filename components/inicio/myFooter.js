export default{
    img: "images/Space astronaut cartoon.png",
    contactos: [
        {
            img: "images/whatsapp.svg",
            btn: {
                href: "#",
                info: "+57 3118807659"}
        },
        {
            img: "images/twitter.svg",
            btn: {
                href: "#",
                info: "@CampusLatam"}
        },
        {
            img: "images/facebookF.svg",
            btn: {
                href: "#",
                info: "@CampusLand"}
        },
        {
            img: "images/instagram.svg",
            btn: {
                href: "#",
                info: "@campusdevelopers"}
        },
    ],
    showInfo(){
        let plantilla = ""
        this.contactos.forEach((val,id)=>{
            plantilla+= `
            <div class="contact-info-container team-container">
                <img src="${val.img}" alt="">
                <a href="${val.btn.href}">${val.btn.info}</a>
            </div>`
        })
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <img src="${this.img}" alt="">
        <div class="social">
            <div class="contact-info">
            <p>¡Contactanos!</p>
            ${plantilla}
            </div>
        </div>
        `)
    }
    
}