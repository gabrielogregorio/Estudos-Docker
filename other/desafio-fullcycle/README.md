DOCKERHUB: https://hub.docker.com/layers/gabrielogregorio/fullcycle/latest/images/sha256-cd34d105901d89deeb0788bcec95217e8b14f4a7e4ec8a8e847bbed1661072d9?context=repo

# Build
docker build -t gabrielogregorio/fullcycle --no-cache -f dockerfile . --progress=plain 

# Run
docker run gabrielogregorio/fullcycle 

# view images
docker images | grep fullcycle

# result
gabrielogregorio/fullcycle       latest    e03df0519089   About a minute ago   1.89MB