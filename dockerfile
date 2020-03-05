FROM node:10-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm config set registry https://registry.npm.taobao.org/ && \ 
    npm install 
CMD ["npm", "run", "build"]