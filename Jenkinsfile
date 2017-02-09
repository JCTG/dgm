#!groovy

pipeline {
    agent any

    stages {
   
        stage('Build') {

           steps {
		sh'docker build -t jctg1/dgm:"${env.BRANCH_NAME}"'
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
