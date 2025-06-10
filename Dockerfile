# Use Node.js Alpine base image
FROM node:alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the entire codebase to the working directory
COPY . /app/

# Build the project
RUN npm run build

# Expose the port your container app uses
EXPOSE 5000

# Define the command to start your application
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]

