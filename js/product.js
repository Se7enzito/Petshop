function sendProduct() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        product: document.getElementById("product").value,
    };

    const serviceID = "service_vsit3qc";
    const templateID = "template_wz3pflb";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("product").value = "";
            console.log(res);
            alert("Seu pedido foi enviado com sucesso!")

        })
        .catch(err => console.log(err));

}