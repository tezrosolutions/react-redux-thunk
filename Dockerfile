FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# Bundle app source
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]