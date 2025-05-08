FROM node:18
RUN node -v && npm -v
RUN apt update && \
    apt install -y wget unzip && \
    wget https://www.bok.net/Bento4/binaries/Bento4-SDK-1-6-0-641.x86_64-unknown-linux.zip && \
    unzip Bento4-SDK-1-6-0-641.x86_64-unknown-linux.zip && \
    mv Bento4-SDK-1-6-0-641.x86_64-unknown-linux /opt/bento4

ENV PATH="/opt/bento4/bin:${PATH}"

WORKDIR /app
COPY /app .
RUN npm install

# Porta da API
EXPOSE 3000

# Inicia a app
CMD ["node", "src/index.js"]
