# FROM ruby:3-alpine
FROM ruby:2.7-buster

RUN apt update
RUN apt install curl
RUN type -p curl >/dev/null || apt install curl -y 
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& apt update

RUN apt install gcc cmake git gh -y
RUN gem update bundler
RUN gem install jekyll -v 3.9.2
EXPOSE 4000
EXPOSE 35729