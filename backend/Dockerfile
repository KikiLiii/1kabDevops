FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY backend/ ./backend/

EXPOSE 3000

CMD ["node", "backend/app.js"]