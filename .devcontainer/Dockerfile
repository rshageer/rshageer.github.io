FROM ruby:2-alpine

RUN apk update

RUN apk add --no-cache build-base gcc cmake git
RUN gem update bundler
RUN gem install jekyll -v 3.9.2
EXPOSE 4000
EXPOSE 35729