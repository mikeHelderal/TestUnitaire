pipeline {
    agent any
    
    tools{
        nodejs "NodeJS"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git 'https://github.com/mikeHelderal/TestUnitaire.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage("Run Tests") {
            steps {
                bat 'npm test'
            }
        }
    }
}
