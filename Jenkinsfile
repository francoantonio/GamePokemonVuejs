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
            sh 'node -v'
            sh 'yarn'
            sh 'yarn build'
          }
        }

      }
    }

  }
  environment {
    test = 'test'
  }
}