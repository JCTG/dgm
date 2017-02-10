#!groovy

pipeline {
    agent any
	
    stages {

        stage('Build') {

           steps {
	     sh "echo branch =  ${env.BRANCH_NAME}"
	     sh "${git ls-remote https://github.com/JCTG/dgm HEAD}"
	     sh'docker build -t jctg1/dgm:latest .'
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

