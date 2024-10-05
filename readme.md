
# Proyecto Angular con .NET y MongoDB Atlas

Este proyecto utiliza Angular para el frontend y .NET como backend API REST, conectándose a una base de datos MongoDB Atlas. El proyecto permite gestionar foros, donde los usuarios pueden crear, ver y actualizar posts.

## Descripción del Proyecto

- **Frontend (Angular)**: Interfaz para que los usuarios puedan interactuar con el sistema de foros, permitiendo la creación, visualización y actualización de posts.
- **Backend (.NET)**: API REST desarrollada en .NET que recibe toda la información generada en el frontend y la gestiona mediante una base de datos MongoDB Atlas.
- **Base de datos (MongoDB Atlas)**: Almacena los datos de los foros de manera eficiente, soportando grandes volúmenes de datos.

## Requisitos

```bash
- Node.js (versión 16 o superior)
- Angular CLI (versión 13 o superior)
- .NET 6
- MongoDB Atlas (Base de datos en la nube)
```

Instalación

Clonar el repositorio

```

git clone https://github.com/Angular-.Net.git
cd Angular-.Net

```
Configurar el Backend (.NET)

# Ve a la carpeta del backend
cd backend

# Restaurar los paquetes NuGet
dotnet restore

Configura las variables de entorno para la conexión con MongoDB Atlas

# Crea un archivo `appsettings.json` en la carpeta `backend` y agrega tu cadena de conexión a MongoDB:
```
{
  "ConnectionStrings": {
    "MongoDb": "tu-cadena-de-conexion-de-MongoDB-Atlas"
  }
}
```

# Ejecutar el backend

```
dotnet run
```

# El backend estará disponible en

```
http://localhost:5002
```

## Configurar el Frontend (Angular)

# Ve a la carpeta del frontend
cd frontend

# Instalar las dependencias de Angular
npm install

# Ejecutar el frontend
ng serve

# El frontend estará disponible en
http://localhost:4200

Despliegue del Proyecto

Desplegar el Backend (.NET)

# Para crear un build de producción del backend:
dotnet publish -c Release

Desplegar el Frontend (Angular)

# Para crear un build de producción del frontend:
ng build --prod

# Los archivos generados estarán en la carpeta dist/ y pueden ser desplegados en cualquier servidor web.

Créditos

Proyecto desarrollado por:

- DavidCreat  
  @Eas1  
  david.fonseca12p@gmail.com
