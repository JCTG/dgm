#!groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh'docker  build -t jctg1/dgm:2ebaf869c16a802128302de15b54b08f18b83215'
		
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
		sh'docker push jctg1/dgm:2ebaf869c16a802128302de15b54b08f18b83215' 
		
	
            }
        }
    }
}

