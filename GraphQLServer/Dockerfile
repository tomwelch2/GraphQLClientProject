FROM node:latest

WORKDIR /src

COPY ./ /src/

RUN npm i dotenv express express-graphql graphql pg

EXPOSE 5050

ENTRYPOINT [ "node" ]

CMD [ "main.js" ]