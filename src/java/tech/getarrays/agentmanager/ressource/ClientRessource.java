package tech.getarrays.agentmanager.ressource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.agentmanager.model.Client;
import tech.getarrays.agentmanager.service.ClientService;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientRessource {
    private final ClientService clientService;

    public ClientRessource(ClientService clientService){
        this.clientService=clientService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Client>> getAllClients(){
        List<Client> clients=clientService.findAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable("id") Long id){
        Client client=clientService.findClientById(id);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Client> addClient(@RequestBody Client client){
        Client nouvclient=clientService.addClient(client);
        return new ResponseEntity<>(nouvclient, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Client> updateClient(@RequestBody Client client){
        Client updateclient=clientService.updateClient(client);
        return new ResponseEntity<>(updateclient, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") Long id){
        clientService.deleteClient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
