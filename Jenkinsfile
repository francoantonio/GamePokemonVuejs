pipeline {
  agent any
  stages {
    stage('install package') {
      steps {
        sh 'apt install nodejs'
        sh 'node -v'
        sh 'yarn'
      }
    }

  }
  environment {
    test = 'test'
  }
}