#!groovy

pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		def git_hash = ""
		git_hash = "git rev-parse HEAD"  
 
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
		def git_hash1 = ""
		git_hash1 = "git rev-parse HEAD"  

		sh'docker push jctg1/dgm:git_hash1' 
			
            }
        }
    }

}	
