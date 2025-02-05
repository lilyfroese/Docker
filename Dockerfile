
FROM node:latest

WORKDIR /app

RUN npm install -g create-vite

EXPOSE 5173

CMD ["sh"]
