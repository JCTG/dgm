#!groovy

pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		def commit = ${GIT_COMMIT}
		sh'docker  build -t jctg1/dgm:commit'
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
		sh'docker push jctg1/dgm:commit' 
			
            }
        }
    }

}	
