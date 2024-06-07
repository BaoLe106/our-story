FROM node:21-bullseye

WORKDIR /app

COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Metro Bundler runs on
EXPOSE 8081

# Start the Metro Bundler
CMD ["npm", "start"]
