# Imagen base oficial de Node.js
FROM node:22.2.0-alpine3.20

# Actualiza e instala dependencias necesarias
RUN apk update && apk upgrade

# Establece el directorio de trabajo en el contenedor
WORKDIR /opt/CI-CD

# Copia el contenido de la aplicación al contenedor
COPY . /opt/CI-CD

# Instala las dependencias del proyecto
RUN npm install

# Exponer el puerto que la aplicación usa (ajusta según sea necesario)
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
