pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            sh 'echo "test"'
          }
        }

        stage('install package') {
          steps {
            sh 'yarn'
            sh 'yarn build'
            sh 'node -v'
          }
        }

      }
    }

  }
  environment {
    test = 'test'
  }
}