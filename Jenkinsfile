#!groovy

pipeline {
    agent any

    stages {
   

        stage('Build') {
            steps {
                echo 'Building..'
		gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
		echo gitCommit
		sh'docker  build -t jctg1/dgm:gitCommit'
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
		def commit = ${GIT_COMMIT}
		sh'docker push jctg1/dgm:latest' 
			
            }
        }
    }

}	
