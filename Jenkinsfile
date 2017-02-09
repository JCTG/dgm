#!groovy

pipeline {
    agent any

    stages {
   

        stage('Build') {
            steps {
		def commit = "${git rev-parse HEAD}"
		sh'docker build -t jctg1/dgm:$commit'
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
		sh'docker push jctg1/dgm:latest' 
			
            }
        }
    }

}	
