# set ubuntu 24.04 as base image 

FROM ubuntu:24.04

# update package manager 
RUN apt-get update && \
    apt-get install -y \
        curl \
        wget \
        python3.11 && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install yarn && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY ./frontend /frontend 
COPY ./backend /backend 

RUN pip install -r requirements.txt && \
    yarn install

CMD ["bash"]