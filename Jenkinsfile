pipeline {
    agent any
    stages {
        stage ('Packages'){
            steps {
                sh 'npm install -D mocha chai@4.3.10 eslint eslint-formatter-checkstyle'
            }
        }
	    stage('Lint') {
            steps {
                sh 'npx eslint . --format checkstyle --output-file eslint-report.xml'
            }
            post {
                always {
                    recordIssues enabledForFailure: true, tools: [esLint(pattern: 'eslint-report.xml')]
                }
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
