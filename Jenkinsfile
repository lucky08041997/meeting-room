pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                sh "npm install"
                sh "npm install json-server"
                sh "json-server -p 3003 --watch db.json"
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