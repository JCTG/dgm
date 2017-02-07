#!groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
	        sh 'docker login -u="${jctg1}" -p="${abcd1234}"'
		sh 'docker build -t ${jctg1/dgm} .'

            } 

        }
        stage('Test'){
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

}	
