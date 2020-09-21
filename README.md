# ReactNodeExpressVehiculos

This is a full-stack project to register cars, using React, Redux, CSS3 and Boostrap for the frontend, and Node, Express, SQLServer for the backend.

Este es un proyecto full-stack de registro de automoviles, utilizando React, Redux, CSS3 y Bootstrap en el frontend, y para el backend, Node, Express y SQLServer.

![screenshot](./screenshot.png)


### Prerequisitos
- npm 6.14.7
- node 14.8.0

### Configuración

#### Backend

- Run $npm install   in the root directory to install all the dependencies from the package.json 
- Run the backend with: $npm start
- The backend will start on the port 5000,  you can see it on the console.

Spanish:

- Correr $npm install    en el directorio raiz  para instalar todas las dependencias de el package.json 
- Corra en backend en la: $npm start
- El backend iniciará en el puerto 5000, podrá ser visto en el terminal.

Create the database called carros in SQLServer and then create the table running the following query on Azure Data studio:

Crear la base de datos llamada carros SQLServer y luego crear la tabla ejecutando en Azure Data studio:

![screenshot](./creartabla.png)

create table vehiculos (
    id int PRIMARY KEY IDENTITY(1,1),
    linea VARCHAR (50) NOT NULL,
    marca VARCHAR (50) NOT NULL,
    modelo VARCHAR (50),
    color VARCHAR (50),
    foto text
);

- In the backend/server.js file, change credentials en const config.

- En el archivo backend/server.js, cambiar las credenciales de usuario en const config.

#### Frontend

- On the cosole got o the folder /frontened using cd frontend
- Once in the folder run $npm install
- And then run: $npm start
- The app will open on the browser in the port 3000

Spanish
- Entre al folder frontend en el terminal por medio de cd frontend
- Una vez dentro del folder corra $npm install
- Seguido de $npm start
- La apliación abrirá en el navegador en el puerto 3000

### Registrar nuevo vehiculo

- En la parte final de la pantalla pueden agregarse nuevos vehiculos.

![screenshot](./registrar.png)


## Built with  - Construido con

- React 16.13.1
- Redux 4.0.5
- React-Bootstrap 1.0.1
- Visual Code


## Autor:
👤 **Gonza Javier Mancilla**

- Github: [@gonjavi](https://github.com/gonjavi)
- Linkedin: [@g-javier-mancilla](https://www.linkedin.com/in/g-mancillla)

## 🤝 Contribución

Contribuciones, problemas y solicitud de caracteristicas son bienvenidas!


## Muestra tu apoyo

Da una ⭐️ si te gusta el proyecto!


## 📝 Licencia

Este proyecto tiene licencia [MIT](lic.url).




