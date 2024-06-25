# Build
docker build -t gabrielogregorio/fullcycle --no-cache -f dockerfile . --progress=plain 

# Run
docker run gabrielogregorio/fullcycle 

# view images
docker images | grep fullcycle

# result
gabrielogregorio/fullcycle       latest    e03df0519089   About a minute ago   1.89MB