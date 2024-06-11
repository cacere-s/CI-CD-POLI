# Usa una imagen base oficial de Node.js
FROM node:lts-alpine3.19

# Establece el directorio de trabajo en el contenedor
WORKDIR /home/ci-cd

# Copia el contenido de la aplicación al contenedor
COPY . /home/ci-cd

EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["node", "/home/ci-cd/src/index.js"]
