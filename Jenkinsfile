pipeline{
    agent any
    stages{
        stage("Build"){
            step{
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy"){
            steps{
                sh "sudo rm -rf /var/www/meeting-room"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/meeting-room/"
            }
        }
    }
}