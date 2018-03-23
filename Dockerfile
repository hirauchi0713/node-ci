FROM node:8.10.0-alpine
MAINTAINER Hideyuki Hirauchi <hirauchi@ideapump.net>

RUN apk add --update git

ADD ci /ci
ADD package.json /

RUN yarn

ENTRYPOINT ["yarn"]
