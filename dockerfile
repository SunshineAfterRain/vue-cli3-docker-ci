FROM node:10-alpine
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install 
CMD ["npm", "run", "build"]