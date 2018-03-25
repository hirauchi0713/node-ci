FROM ubuntu:16.04
MAINTAINER Hideyuki Hirauchi <hirauchi@ideapump.net>

RUN apt-get update
RUN apt-get install -y nodejs npm git curl aptitude

RUN npm cache clean
RUN npm install n yarn -g
RUN n 8.9.4

RUN yarn
RUN yarn global add node-dev pug-cli

RUN yarn add \
  dotenv \
  node-rest-client

RUN aptitude update
RUN aptitude install -y python-pip
RUN pip install python-swiftclient
RUN pip install python-keystoneclient

ADD ci /ci
ADD package.json /

ENTRYPOINT ["yarn"]
