#!groovy

pipeline {
    agent any

    stages {
   

        stage('Build') {
	    sh "echo ${env.BRANCH_NAME}"
           steps {
		sh "git rev-parse --short HEAD > .git/commit-id"                        
		sh'docker build -t jctg1/dgm:$1.0'
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
