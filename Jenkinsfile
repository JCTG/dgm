#!groovy

pipeline {
    agent any
	
    stages {

        stage('Build') {

           steps {
	     sh "echo branch =  ${env.BRANCH_NAME}"
	     sh'docker build -t jctg1/dgm:latest .'
	     print "BRANCH: ${env.BRANCH_NAME}, COMMIT: ${env.GIT_COMMIT}"
	     print "BRANCH:  ${git log -1 dgm-pipeline}"
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

