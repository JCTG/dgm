#!groovy

pipeline {
    agent any
	
    stages {

        stage('Build') {

           steps {
	     sh "echo branch =  ${env.BRANCH_NAME}"
	     print "BRANCH: ${env.BRANCH_NAME}, COMMIT: ${env.GIT_COMMIT}"
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
