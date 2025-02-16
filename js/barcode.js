window.onload = function () {
  document.getElementById("userInput").addEventListener("keyup", function () {
    BarcodeGeneration();
  });
};

function BarcodeGeneration() {
  const value = document.getElementById("userInput").value.split(/\s+/);
  const container = document.getElementById("container");
  container.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const img = document.createElement("img");
    img.id = `barcode${i}`;
    container.appendChild(img);
    JsBarcode("#barcode" + [i], value[i], {
      format: "CODE128",
      width: 2,
      height: 80,
      Margin: 10,
      displayValue: true,
    });
  }
}
