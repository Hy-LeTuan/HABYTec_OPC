# set ubuntu 24.04 as base image 

FROM ubuntu:24.04



WORKDIR /opc 

RUN mkdir -p frontend 
RUN mkdir -p backend 

# copy files for installing dependencies 
COPY /frontend/package*.json ./frontend
COPY /backend/requirements.txt ./backend


# update package manager and install relevant runtime 
RUN apt-get update && \
    apt-get install -y \
        curl \
        wget && \
    apt install -y python3 && \
    apt install -y python3-pip && \
    apt install -y python3-venv && \ 
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# install backend packages 
RUN python3 -m venv ./backend/venv
ENV VIRTUAL_ENV=/opc/backend/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN /opc/backend/venv/bin/pip install -r ./backend/requirements.txt


# install frontend packages 
RUN cd frontend && yarn install && cd .. 

# copy source code 
COPY ./frontend ./frontend 
COPY ./backend ./backend 

# set and expose necessary ports 
ENV YARN_PORT=5173
ENV DJANGO_PORT=8000

EXPOSE 8000
EXPOSE 5173

CMD ["bash"]