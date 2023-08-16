# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM quay.io/jitesoft/nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/. /usr/share/nginx/html

RUN chgrp -R root  /var/run /var/log/nginx && \
    chmod -R 777  /var/run /var/log/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
