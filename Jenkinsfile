#!groovy

node {

	echo "$USER"
	pwd
	docker
	docker build -t jctg1/dgm:$GIT_COMMIT .
	docker login -u="jctg1" -p="abcd1234"
	docker push     jctg1/dgm:$GIT_COMMIT

      }
