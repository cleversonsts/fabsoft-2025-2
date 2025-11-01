package br.vesto.fabsoft_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.vesto.fabsoft_backend.entity.Usuario;

@Repository
public interface UsuarioRepository 
extends JpaRepository<Usuario, Long> {
    List<Usuario> findByEmpresaId(Long empresaId); 
}
