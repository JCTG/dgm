#!groovy

pipeline {
    agent any
	
    stages {

        stage('Build') {

           steps {
	     sh'docker build -t jctg1/dgm:latest .'
	     sh "echo branch =  ${env.BRANCH_NAME}"
	     sh" echo HASH =    ${git log -1 dgm-pipeline}"
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

