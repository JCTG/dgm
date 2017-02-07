#!groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh'docker  build -t jctg1/dgm:v1.0 .'

            } 

        }
        stage('Test'){
            steps {
                echo 'Testing..'
            }
        }
        stage('push') {
            steps {
                echo 'Deploying....'
		sh'docker push jctg1/dgm:1.0'

            }
        }
    }

}	
