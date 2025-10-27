package br.vesto.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.vesto.fabsoft_backend.entity.Empresa;
import br.vesto.fabsoft_backend.repository.EmpresaRepository;
import br.vesto.fabsoft_backend.service.EmpresaService;

@Service
public class EmpresaServiceImpl 
    implements EmpresaService{

    @Autowired    
    private EmpresaRepository repository;

    @Override
    public List<Empresa> getAll() {
       return repository.findAll(); 
    }

    @Override
    public Empresa save(Empresa empresa) {
       return repository.save(empresa);
    }

    @Override
    public Empresa update(long id, Empresa empresa) throws Exception{
      
      var empresaAntigo = repository.getById(id);
      if (empresaAntigo == null) {
         throw new Exception("Empresa inexistente");
      }

      empresaAntigo.setNome(empresa.getNome());
      empresaAntigo.setCnpj(empresa.getCnpj());
      empresaAntigo.setTelefone(empresa.getTelefone());

      repository.save(empresaAntigo);

      return empresaAntigo;
    }

    @Override
    public Empresa delete(long id) throws Exception {

      var empresaAntigo = repository.getById(id);
      if (empresaAntigo == null) {
         throw new Exception("Empresa inexistente");
      }

      repository.delete(empresaAntigo);
      return empresaAntigo;
    }

    @Override
    public Empresa getById(long id) {
         var retorno =  repository.findById(id);
         if (retorno.isPresent())
            return retorno.get();
           
         return null;
    }

}
