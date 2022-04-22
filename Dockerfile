FROM ubuntu:20.04

ARG DRIVER_VERSION=3.6.2
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y sudo \
    nano \
    gnupg \
    git \
    curl \
    wget \
    build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_14.x -o setup_14.sh && sudo sh ./setup_14.sh && sudo apt update && apt-get install nodejs

RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -

RUN echo "deb [ arch=amd64,arm64,s390x ] http://repo.mongodb.com/apt/ubuntu focal/mongodb-enterprise/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-enterprise.list

RUN apt-get update && apt-get install -y mongodb-enterprise-cryptd=4.4.1

RUN export uid=1000 gid=1000 && \
    mkdir -p /home/ubuntu && \
    echo "ubuntu:x:${uid}:${gid}:Developer,,,:/home/ubuntu:/bin/bash" >> /etc/passwd && \
    echo "ubuntu:x:${uid}:" >> /etc/group && \
    echo "ubuntu ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/ubuntu && \
    chmod 0440 /etc/sudoers.d/ubuntu && \
    chown ${uid}:${gid} -R /home/ubuntu

RUN chmod -R 777 /usr/bin/mongocryptd

ENV HOME /home/ubuntu

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN chmod -R 777 /app/*

COPY ./ ./app

RUN npm install

CMD node index.js --bind 0.0.0.0:$PORT