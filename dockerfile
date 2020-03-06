FROM node:10-alpine AS builder
WORKDIR /home/node/app/
ADD package.json /home/node/app/
ADD package-lock.json /home/node/app/
RUN npm install
ADD . /home/node/app/
RUN npm run build
FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
EXPOSE 8083
