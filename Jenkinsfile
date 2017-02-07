#!groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh 'docker login -u="jctg1" -p="abcd1234"'
		sh'docker  build -t jctg1/dgm:latest .'

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
		sh'docker push jctg1/dgm:latest'


            }
        }
    }

}	
