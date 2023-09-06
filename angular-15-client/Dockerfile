FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine

RUN chgrp -R root /var /etc /etc/nginx /var/run/  && \
    chmod -R 777 /var /etc /etc/nginx /var/run/ 
    
COPY nginx.conf /etc/nginx/    
COPY --from=build /app/dist/angular-15-crud /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

EXPOSE 8090
