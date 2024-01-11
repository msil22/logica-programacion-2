let gradosCelcius = parseFloat(prompt("¿Cuantos grados celsius hay hoy?"))

let gradosKelvin = gradosCelcius + 273.15

let gradosFarenheit = (gradosCelcius * 9/5) + 32

document.write(`Hay ${gradosCelcius} Grados Celcius 
${gradosKelvin} Grados Kelvin 
${gradosFarenheit} Grados Farenheit`)