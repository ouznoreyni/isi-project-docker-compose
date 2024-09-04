package sn.ouznoreyni.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.ouznoreyni.backend.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}