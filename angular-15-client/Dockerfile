FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine

RUN chgrp -R root /var /etc /etc/nginx && \
    chmod -R 777 /var /etc /etc/nginx
    
COPY nginx.conf /etc/nginx/    
COPY --from=build /app/dist/angular-15-crud /usr/share/nginx/html
EXPOSE 8090
