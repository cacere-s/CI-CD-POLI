# Usa una imagen base oficial de Node.js
FROM node:22.2.0-alpine3.20

# Actualiza e instala dependencias necesarias
RUN apk update && apk upgrade

# Crea un usuario y grupo no root
RUN addgroup -S poli && adduser -S ci-cd -G poli

# Establece el directorio de trabajo en el contenedor
WORKDIR /opt/CI-CD

# Copia el contenido de la aplicación al contenedor
COPY --chown=ci-cd:poli . /opt/CI-CD

# Cambia al usuario no root
USER ci-cd

# Instala las dependencias del proyecto
RUN npm install

# Exponer el puerto que la aplicación usa (ajusta según sea necesario)
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
