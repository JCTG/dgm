#!groovy

pipeline {
    agent any

	git_hash = 'git rev-parse HEAD'  
	assert git_hash instanceof String

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
