for run proyect in docker please use following commands

Before you must have docker installed

Imagen compilation
docker build -t "$IMAGE_NAME":"$IMAGE_TAG" .

example:   docker build -t test_datatables:v1 .

for run proyect in a terminal

docker run -it --name datatable \
  -p 80:4200 \
  -v "${PWD}/app:/opt/app" \
  test_datatables:v1


delete imagen
docker rm -f datatable