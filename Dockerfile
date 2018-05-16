
# Use official Node's alpine image as base
FROM node:9.11-alpine AS base

# Set the path where the files will be stored in the container
ENV REACT_PATH=/usr/src/react-project

# Environment variables for the container network
ENV PORT=8080 \
	HOST=0.0.0.0

# Expose default port to connect with the service
EXPOSE $PORT

# Create the directory defined by $API_PATH (if doesn't exist) and cd into it
WORKDIR $REACT_PATH

################################################################################
#                           DEVELOPMENT IMAGE                                  #
################################################################################

# Expanding base image as development image
FROM base AS development

# Set the environment for nodejs
ENV NODE_ENV=development

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the application code to the build path
COPY . .

# Define the the default command to execute when container is run
CMD ["yarn", "start"]

