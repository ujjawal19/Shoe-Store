# pull the official base image
FROM node:14-alpine
# set the working dir
WORKDIR /app
COPY code/ .
RUN npm i
EXPOSE 3000
# start app
CMD ["npm", "start"]