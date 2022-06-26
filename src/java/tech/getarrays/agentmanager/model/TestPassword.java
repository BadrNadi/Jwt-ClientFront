package tech.getarrays.agentmanager.model;

import java.util.Random;

public class TestPassword {
    public void passGenerator(Client client){
        String upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
        String numbers="0123456789";
        String specialCharacters ="!£$%^&*()#[]@?";
        String combinaison =upperCaseLetters+lowerCaseLetters+numbers+specialCharacters;
        int passwordLength= 10;
        String password = new String();
        Random rd=new Random();
        for(int i=0;i<passwordLength;i++){
            password +=combinaison.charAt(rd.nextInt(combinaison.length()));
        }
        client.setPassword(password);
    }
    public static void main(String [] args){
            Client client =new Client();
            TestPassword p = new TestPassword();
            p.passGenerator(client);
            System.out.println(client.getPassword());
    }
}
