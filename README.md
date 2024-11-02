# Proyecto de Favoritos de Rick y Morty

Este proyecto permite explorar personajes de la serie "Rick y Morty", agregar personajes a favoritos, y guardar los favoritos en una base de datos MongoDB. 
Utiliza **React** para el frontend y **Node.js/Express** para el backend, junto con **MongoDB** como base de datos.

## Tabla de Contenidos
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Comentarios sobre el Enfoque](#comentarios-sobre-el-enfoque)

## Tecnologías Utilizadas
- **Frontend**: React, Redux, Axios, SweetAlert2
- **Backend**: Node.js, Express, Mongoose
- **Base de Datos**: MongoDB
- **Estilos**: CSS personalizado

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (v14 o superior)
- **npm** o **yarn**
- **MongoDB** (local o acceso a MongoDB Atlas)

## Instalación

### 1. Clonar el Repositorio
git clone https://github.com/fernandoMorillo/rickandmorty.git
cd proyecto-favoritos-rick-morty

### 2. Configurar el Backend
cd back-rickandmorty

### 3. Instala las dependencias
npm install

### 4. Configura la conexión a MongoDB en config/db.js
mongodb://localhost:27017/rickandmorty

### 5. Ejecutar el backend
npm run start

### 6. Configurar el Frontend
cd rickandmorty

### 6. Instala las dependencias
npm install

### 7. Ejecutar el frontend
npm run dev

## Comentarios sobre el Enfoque
Este proyecto se construyó siguiendo un enfoque modular y estructurado para mantener la escalabilidad y la facilidad de mantenimiento:

### Frontend:
 Se utilizaron componentes reutilizables para la vista de personajes y la funcionalidad de favoritos. La biblioteca SweetAlert2 se empleó para mejorar la experiencia de usuario con alertas amigables.
### Backend:
Se usó Express para crear un servidor robusto con rutas bien definidas y Mongoose para interactuar con MongoDB de forma eficiente.
### Manejo de Estado:
Redux se utilizó para gestionar el estado de los personajes y los favoritos, asegurando una gestión clara y predecible de los datos en la aplicación.

### Funcionalidades Clave:
1. Visualización de personajes y detalles.
2. Agregar y quitar personajes de la lista de favoritos.
3. Guardar los favoritos en una base de datos MongoDB.
4. Alertas de confirmación y error usando SweetAlert2.

### Nota Adicional:
Para cambiar la URI de conexión a la base de datos o las configuraciones del servidor, edita el archivo config/db.js y otros archivos de configuración necesarios.
