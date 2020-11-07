pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy"){
            steps{
                sh "sudo rm -rf /var/www/meeting-room"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/meeting-room/"
<<<<<<< HEAD
                sh "sudo cp ${WORKSPACE}/db.json /var/www/meeting-room/"
=======
                
                
>>>>>>> bd48a17cf1f0b7a8f304f6d6e4cdfd3aff2651aa
            }
        }
    }
}
