echo "#!groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh'docker  build -t jctg1/dgm:$1'
		
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
		sh'docker push jctg1/dgm:$1' 
			
            }
        }
    }

}" > fileGit.txt
