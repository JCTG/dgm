#!groovy

pipeline {
    agent any
	
    stages {

        stage('Build') {

           steps {
	     sh "echo ${env.BRANCH_NAME}"
	     sh'docker build -t jctg1/dgm:latest'
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
