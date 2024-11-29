# API de Gestión de Medicamentos

Este proyecto es una API diseñada para la gestión de medicamentos en una aplicación de salud. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre medicamentos.

## Endpoints Disponibles

- **GET /medications**: Obtiene todos los medicamentos registrados.
- **GET /:id**: Obtiene un medicamento por su ID.
- **POST /medication**: Crea un nuevo medicamento.
- **PUT /:id**: Actualiza un medicamento existente por su ID.
- **DELETE /:id**: Elimina un medicamento por su ID.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para la creación de servidores.
- **Prisma**: ORM para interactuar con la base de datos.
- **TypeScript**: Lenguaje tipado para mayor robustez del código.
- **JWT**: Utilizado para la autenticación.
- **PostgreSQL**: Sistema de gestión de bases de datos.

## Instalación y Configuración

1. Clonar este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno:

   Crear un archivo `.env` basado en el archivo `.env.example` y completar los valores requeridos (base de datos, JWT, etc.).

4. Ejecutar las migraciones de Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Iniciar el servidor:

   ```bash
   npm run dev
   ```

## Uso

Con el servidor en funcionamiento, puedes interactuar con la API utilizando herramientas como Postman o cURL. Asegúrate de incluir un token de autenticación JWT válido en las rutas protegidas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un _issue_ o envía un _pull request_ si deseas colaborar.

## Licencia

Este proyecto está bajo la [MIT License](LICENSE).
