FROM node:19-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]