function generar(){
    const inputText = document.getElementById('input-text').value;
    const QR = document.getElementById('contenedor');
    document.getElementById('input-text').value=""; //Borra los datos de la label
    QR.innerHTML = ""; // Limpiar el QR anterior

    new QRCode(QR, {
        text: inputText || "No ingresaste nada", // Texto para el QR
        width: 128, 
        height: 128,
        colorDark: "#000000", 
        colorLight: "#ffffff", 
    });
}