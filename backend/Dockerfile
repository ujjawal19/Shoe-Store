FROM node:14-alpine
# installing json-server
RUN npm install -g json-server
# changing the working directory
WORKDIR /data
COPY db.json .
# exposing json server port
EXPOSE 3004