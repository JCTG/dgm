#!groovy

pipeline {
    agent any

    stages {
   

        stage('Build') {
            steps {
		sh "git rev-parse --short HEAD > .git/commit-id"                        
		commit = readFile('.git/commit-id')
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
