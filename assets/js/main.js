document.addEventListener("DOMContentLoaded", (evento)=>{
    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.27042420284!2d88.18253565744779!3d22.535660583743923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1699990899956!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    },500)
});