#!groovy

pipeline {
    agent any
	
    stages {

	checkout scm
   
        stage('Build') {

           steps {
	     checkout scm
	     sh'docker build -t jctg1/dgm:1.0'
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
		sh'docker push jctg1/dgm:1.0' 
			
            }
        }
    }

}	
