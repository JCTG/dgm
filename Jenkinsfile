#!groovy

pipeline {
    agent any

    stages {
   

        stage('Build') {
            steps {
                h 'git rev-parse HEAD > commit'
		def commit = readFile('commit').trim()
		sh'docker build -t jctg1/dgm:commit'
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
