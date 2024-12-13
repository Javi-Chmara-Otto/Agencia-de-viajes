// SERVER NODE CON EXPRESS
const express = require(`express`)
const app = express()
const port = 3000 || 8080 || process.env.PORT

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/public/index.html`)
})

app.get('/rutaDinamica', (req, res) => {
    res.sendFile(__dirname + `/src/views/dinamico1.html`)
})

app.get('/rutaDinamica2', (req, res) => {
    res.sendFile(__dirname + `/src/views/dinamico2.html`)
})

app.post('/rutaDinamica', (req, res) => {
    res.send(`<h2>Se hizo algo con ${req.body.create}</h2>
        <a href='/rutaDinamica'>Regresar a página anterior</a>`)
})

app.listen(port, () => console.log(`Servidor funcionando en puerto: ${port}`))


// SERVER NODE NATIVO CON HTTP
// const http = require(`http`)
// const fs = require(`fs`)

// const server = http.createServer((req, res) => {
//     const archivo = fs.readFileSync(`index.html`)
//     res.writeHead(200, {
//         'Content-Type': 'text/html; charset=UTF-8'
//     });
//     res.end(archivo)
//     res.end(`Che! Te dije hola. Hola desde un server de HTTP Nativo (en Node.js)`);
// })

// server.listen(8080, () => console.log(`Estoy arriba en el puerto 8080`))







// const nombre = 'Javi';
// const si = true;
// if (si) {
//     console.log(`Hola ${nombre}, ahora estoy ejecutando JS en Node.js!`);
// } else {
//     console.log(`error`)
// }