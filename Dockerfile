# base image to use
FROM node:12-alpine
# directives to run on the image:
# set container work directory
WORKDIR /app
# copy all files from cwd to container cwd (WORKDIR)
COPY . .
# install required deps
RUN yarn install --production
# runs once a container is created, starts the server
CMD ["node", "/app/src/index.js"]