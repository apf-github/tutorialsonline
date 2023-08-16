FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine

RUN chgrp -R root /var  && \
    chmod -R 777 /var 
    
COPY --from=build /app/dist/angular-15-crud /usr/share/nginx/html
EXPOSE 8080
