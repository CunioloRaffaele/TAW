FROM node:22-alpine AS build

WORKDIR /app

COPY ./flights/package*.json ./
RUN npm install

COPY ./flights ./
RUN npm run build

# Serve with nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from previous stage
COPY --from=build /app/dist/flights/browser /usr/share/nginx/html

# Copy custom nginx config for Angular routing (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]