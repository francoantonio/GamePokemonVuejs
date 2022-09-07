pipeline {
  agent {
    node {
      label 'config'
    }

  }
  stages {
    stage('test') {
      steps {
        sh 'echo "test"'
      }
    }

  }
  environment {
    test = 'test'
  }
}