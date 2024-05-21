FROM node:alpine
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install
COPY index.js resume.json .
EXPOSE 3000
CMD ["node", "index.js"]
