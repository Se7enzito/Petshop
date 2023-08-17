function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
        newsletter: document.getElementById("newsletter").value,
    };

    const serviceID = "service_vsit3qc";
    const templateID = "template_s2x40j5";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("newsletter").value = "";
            console.log(res);
            alert("Seu contato foi enviado com sucesso!")

        })
        .catch(err => console.log(err));

}