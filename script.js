document.getElementById("calculate").addEventListener("click", function() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    
  
    if (!isNaN(base) && !isNaN(height)) {
      const area = 0.5 * base * height;
      document.getElementById("result").innerHTML = `Luas Segitiga: ${area}`;
    } else {
      document.getElementById("result").innerHTML = "Masukkan angka valid untuk alas dan tinggi.";
    }
  });
  