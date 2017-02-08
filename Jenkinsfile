#!groovy

pipeline {
    agent any

   def git_hash = sh 'git rev-parse HEAD'

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh'docker  build -t jctg1/dgm:git_hash'
		
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
		sh'docker push jctg1/dgm:git_hash' 
			
            }
        }
    }

}	
