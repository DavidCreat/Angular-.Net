
# 🚀 Proyecto Angular con .NET y MongoDB Atlas

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

Una aplicación de foros moderna y escalable construida con tecnologías de vanguardia.

[Explorar la Demo](https://eas1.com.es) | [Reportar Bug](https://github.com/DavidCreat/Angular-.Net/issues) | [Solicitar Función](https://github.com/DavidCreat/Angular-.Net/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Tecnologías](#-tecnologías)
- [Comenzando](#-comenzando)
- [Uso](#-uso)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

## 🌟 Sobre el Proyecto

Este proyecto es una plataforma de foros de última generación que combina la potencia de Angular para una experiencia de usuario fluida, .NET para un backend robusto, y MongoDB Atlas para un almacenamiento de datos escalable y eficiente.

### ✨ Características

- 🖥️ Interfaz de usuario moderna y responsiva con Angular
- 🔐 Autenticación segura y gestión de usuarios
- 📝 Creación, edición y eliminación de posts en tiempo real
- 🔍 Búsqueda avanzada y filtrado de contenido
- 📊 Panel de administración con análisis y estadísticas

## 🛠 Tecnologías

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

## 🚀 Comenzando

Para poner en marcha una copia local, sigue estos sencillos pasos.

### 📋 Prerrequisitos

- Node.js (v16+)
- .NET 6 SDK
- Docker (opcional)

### 🔧 Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/DavidCreat/Angular-.Net.git
   cd Angular-.Net
   ```

2. Configura el backend
   ```sh
   cd MyDotNetApi
   dotnet restore
   # Configura cadena de conexión en appsettings.json
   ```

3. Configura el frontend
   ```sh
   cd taller/angular-forum-app
   npm install
   ```

4. Inicia los servicios
   ```sh
   # Backend
   dotnet run

   # Frontend
   ng serve
   ```

🌐 El frontend estará disponible en \`http://localhost:4200\` y el backend en \`http://localhost:5002\`.

## 💻 Uso
### Ejemplo de un post
```csharp
{
    "Id": "",
    "title": "Torre",
    "content": "nadie va a francia",
    "image": "https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg",
    "categories": ["viajes", "turismo"]
}
```

## 🗺 Roadmap

- [x] Implementación básica de CRUD para posts
- [ ] Sistema de comentarios anidados
- [ ] Integración con autenticación OAuth
- [ ] Implementación de websockets para actualizaciones en tiempo real

Consulta los [issues abiertos](https://github.com/DavidCreat/Angular-.Net/issues) para una lista completa de características propuestas y problemas conocidos.

## 🤝 Contribuir

Las contribuciones son lo que hacen a la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

1. Haz un Fork del proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 📬 Contacto

David Fonseca - [@eas1music](https://www.youtube.com/@eas1music) - david.fonseca12p@gmail.com

Enlace del Proyecto: [https://github.com/DavidCreat/Angular-.Net](https://github.com/DavidCreat/Angular-.Net)

---

<div align="center">

Hecho con ❤️ por [DavidCreat](https://github.com/DavidCreat)

</div>
