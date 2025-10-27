package br.vesto.fabsoft_backend.service;

import java.util.List;

import br.vesto.fabsoft_backend.entity.Empresa;

public interface EmpresaService {
    List<Empresa> getAll();
    Empresa save(Empresa empresa);
    Empresa update(long id, Empresa empresa) throws Exception;
    Empresa delete(long id) throws Exception;
    Empresa getById(long id);

}
