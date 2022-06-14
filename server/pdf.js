const pdfKit = require('pdfkit');
const fs = require('fs');

function createPdf() {
  try {
    let fontNormal = 'Helvetica';
    let fontBold = 'Helvetica-Bold'
    let pdfDoc = new pdfKit({size: 'A4'});
    let fileName = 'C:/Users/hp/Desktop/Geekit/Geekit/server/files/comprobante-pago.pdf';
    let header = 'C:/Users/hp/Desktop/Geekit/Geekit/server/files/EncabezadoDet.png';
    let footer = 'C:/Users/hp/Desktop/Geekit/Geekit/server/files/pie.png';
    let inicio = "A quien corresponda: ";
    let desarrollo = "En el presente documento se anexan los artículos adquiridos, así como sus precios correspondientes al número de piezas adquiridas, por otro lado, se anexan los precios de envío y los impuestos aplicados a los artículos en el total de su compra, como se detalla a continuación.";
    let producto1="1. Attack on Titan The Final Season - LEVI/ Precio: $839.00";
    let producto2="2. Funko Pop! Leonard Hofstadter/ Precio: $339.00";
    let producto3="3. Juego de llaveros Marvel/ Precio: $650.00";
    let cierre= "Le recordamos que el tiempo total de entrega del paquete depende de la distancia y se ve afectada por la actual pandemia del COVID-19.";
    let despedida = "Lo esperamos, será un placer atenderlo.";
    let att = "Atentamente,";
    let sign = 'C:/Users/hp/Desktop/Geekit/Geekit/server/files/Geekit.png';
    let stream = fs.createWriteStream(fileName);
    pdfDoc.pipe(stream);
    pdfDoc.image(header, 135, 20, { width: 350, height: 120, align: "center" });
    //pdfDoc.rect(20, 145, 550, 20).stroke("#ff0000");
    pdfDoc.text(inicio, 50, 160,{ align: "justify"});
    pdfDoc.text(desarrollo, 50, 180,{ align: "justify"});
    pdfDoc.text(producto1, 50, 250,{ align: "justify"});
    pdfDoc.text(producto2, 50, 280,{ align: "justify"});
    pdfDoc.text(producto3, 50, 310,{ align: "justify"});
    pdfDoc.text(cierre, 50, 500,{ align: "justify"}); 
    pdfDoc.text(despedida, 50, 550,{ align: "justify"}); 
    pdfDoc.text(att, 50, 600,{ align: "justify"}); 
    pdfDoc.image(sign, 50, 610, { width: 150, height: 80, align: "center" });
    pdfDoc.image(footer, 50, 700, { width: 500, height: 120, align: "center" });
    pdfDoc.end();
    console.log("pdf generate successfully");
  } catch (error) {
    console.log("Error occurred", error);
  }
}
createPdf();