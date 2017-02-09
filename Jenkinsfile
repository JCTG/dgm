#!groovy

pipeline {
    agent any
	
    stages {

        stage('Build') {

           steps {
	     sh "echo branch =  ${env.BRANCH_NAME}"
	     sh "echo git_commit = ${env.GIT_COMMIT}"
	     sh" echo COMMIT:    ${env.GIT_COMMIT} "
	     sh 'echo ahuevo'
	     sh'docker build -t jctg1/dgm:latest .'
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
