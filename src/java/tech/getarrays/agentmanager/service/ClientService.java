package tech.getarrays.agentmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.agentmanager.exception.UserNotFoundException;
import tech.getarrays.agentmanager.model.Client;
import tech.getarrays.agentmanager.repo.ClientRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
@Transactional
public class ClientService {
    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    public Client addClient(Client client) {
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
        return clientRepo.save(client);
    }

    public List<Client> findAllClients() {
        return clientRepo.findAll();
    }

    public Client updateClient(Client client) {
        return clientRepo.save(client);
    }
    public Client findClientById(Long id) {
        return clientRepo.findClientById(id).orElseThrow(() -> new UserNotFoundException("Client by id "+id+"was not found"));
    }

    public void deleteClient(Long id) {
        clientRepo.deleteClientById(id);
    }
}
