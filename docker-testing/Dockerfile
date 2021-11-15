# pull official base image from local computer or docker hub
FROM node

# Create context for our application to base all our application files
WORKDIR /app

# cache for node_modules if modules didn`t change
COPY package.json /app

# prepare application in the container, in our situation it is - npm install
# RUN - start working for build our image
RUN npm install

# Copy file from our project to the docker image
# . . - add all files from root directory with application to our context /app
COPY . .

# Set base port in the local computer
ENV PORT 7007

# Set base port to application in the container
EXPOSE $PORT

# Special directory to keep any data
VOLUME ["/app/data"]

# command to start our application
# CMD - start working for run our image
CMD ["node", "app.js"]