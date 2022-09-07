pipeline {
  agent any
  stages {
    stage('install package') {
      steps {
        sh 'node -v'
        sh 'yarn'
        sh 'apt install nodejs'
      }
    }

  }
  environment {
    test = 'test'
  }
}