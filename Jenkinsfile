pipeline {
    agent any
    stages {
        stage ('Packages'){
            steps {
                sh 'npm install mocha chai@4.3.10'
            }
        }
        stage ('Test'){
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("markbosire/simpleapp:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
