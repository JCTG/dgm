#!groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh'docker  build -t jctg1/dgm .'
		sh'docker  build -t --build-arg GIT_COMMIT="$GIT_COMMIT'


            } 
	
        }
        stage('Test'){
            steps {
                echo 'Testing..'
            }
        }
        stage('push') {
            steps {
                echo 'push....'
		sh'docker push jctg1/dgm:$GIT_COMMIT'
            }
        }
    }

}	
