const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app= express();
const path = require('path');

//configuracion para el uso peticiones post
app.use( bodyParser.urlencoded({extended:false}));

// configurar estilos
app.use('/styles', express.static(path.join(__dirname, 'styles')));

//platillas que sean dinamicas
app.set('view engine','ejs');

//crear la conexion
const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',//usuario de la DB
    password: '',//contraseña
    database: 'inventario',//nombre de la base de datos
    port: 3306//puerto
});

//comprobacion de la conexion de la base de datos
db.connect(err=>{
    if(err){
        console.log(`Error en la conexion de base de datos DB ${err}`);
    }else {
        console.log(`La base de datos funciona y esta conectada`)    
    }
});

//iniciamos el server

const port = 3009;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

//index

app.get('/', (req, res) => {
    const query = 'SELECT * FROM productos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al buscar los productos:', err);
            res.send('Error');
        } else {
            res.render('index', { productos: results });
        }
    });
});

app.get('/add', (req, res) => {
    res.render('add'); // Renderiza el formulario
});


//agregar usuarios

app.post('/add', (req, res) => {
    const { nombre, tipo, cantidad, espacio, valor, precio, caducidad_dias } = req.body;
    const query = 'INSERT INTO `productos` (`nombre`, `tipo`, `cantidad`, `espacio`, `valor`, `precio`, `caducidad_dias`) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, tipo, cantidad, espacio, valor, precio, caducidad_dias], (err) => {
        if (err) {
            console.error('Error al agregar los productos:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Mostrar el formulario de edición de un usuario
app.get('/edit/:id', (req, res) => {
    const { id } = req.params; // Obtén el ID del parámetro de la URL
    const query = 'SELECT * FROM productos WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error mostrar el producto:', err);
            res.send('Error');
        } else {
            if (results.length > 0) {
                res.render('edit', { producto: results[0] }); // Pasa el producto seleccionado a la vista 'edit'
            } else {
                res.send('Producto no encontrado');
            }
        }
    });
});

// Modulo para actualizar productos
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const {  nombre, tipo, cantidad, espacio, valor, precio, caducidad_dias } = req.body;
    const query = 'UPDATE productos SET nombre = ?, tipo = ?, cantidad = ?, espacio = ?, valor = ?, precio = ?, caducidad_dias = ? WHERE id = ?';
    db.query(query, [nombre, tipo, cantidad, espacio, valor, precio, caducidad_dias, id], (err) => {
        if (err) {
            console.error('Error actualizando:', err);
            res.send('Error');
        } else {
            res.redirect('/'); // Redirige al listado de productos en inventario
        }
    });
});


//eliminar producto

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM productos WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error al eliminar el producto:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});