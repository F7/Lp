FROM node:6.9.1
MAINTAINER Dongri Jin <dongrify@gmail.com>
RUN npm install -g lr-http-server@^0.1.5
RUN mkdir -p /app
WORKDIR /app
RUN rm -rf node_modules
RUN npm cache clean
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "server", "&", "npm", "run", "watch"]
