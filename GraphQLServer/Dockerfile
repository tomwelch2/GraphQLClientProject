FROM node:latest

WORKDIR /src

COPY GraphQL Models main.js routes.js .env /src/

RUN npm i dotenv express express-graphql graphql

EXPOSE 5050

ENTRYPOINT [ "node" ]

CMD [ "main.js" ]