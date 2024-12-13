const auto = {
    marca: 'Fiat',
    modelo: 'Punto',
    anio: 2010,
    color: 'blue',
};

// for (propiedad in auto) {
//     console.log(`el key ${propiedad} tiene el valor ${auto[propiedad]}`)
// }

function autoNuevo(mar, mod, ani, col) {
    this.marca = mar;
    this.modelo = mod;
    this.anio = ani;
    this.color = col;
}

autoNuevo2 = new autoNuevo('Toyota', 'Yaris', 2023, 'negro')




