package sn.ouznoreyni.backend.controller;


import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import sn.ouznoreyni.backend.dto.TodoCreateDto;
import sn.ouznoreyni.backend.dto.TodoDto;
import sn.ouznoreyni.backend.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@AllArgsConstructor
public class TodoController {
    private static final Logger logger = LoggerFactory.getLogger(TodoController.class);

    private final TodoService todoService;

    @GetMapping
    public List<TodoDto> getAllTodos() {
        logger.info("Requête REST reçue pour obtenir toutes les tâches");
        List<TodoDto> todos = todoService.getAllTodos();
        logger.info("{} tâches renvoyées", todos.size());
        return todos;
    }

    @GetMapping("/{id}")
    public TodoDto getTodoById(@PathVariable Long id) {
        logger.info("Requête REST reçue pour obtenir la tâche avec l'id : {}", id);
        TodoDto todo = todoService.getTodoById(id);
        logger.info("Tâche renvoyée : {}", todo);
        return todo;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoDto createTodo(@RequestBody TodoCreateDto todoCreateDto) {
        logger.info("Requête REST reçue pour créer une nouvelle tâche : {}", todoCreateDto);
        TodoDto createdTodo = todoService.createTodo(todoCreateDto);
        logger.info("Nouvelle tâche créée : {}", createdTodo);
        return createdTodo;
    }

    @PutMapping("/{id}")
    public TodoDto updateTodo(@PathVariable Long id, @RequestBody TodoCreateDto todoCreateDto) {
        logger.info("Requête REST reçue pour mettre à jour la tâche avec l'id : {}", id);
        TodoDto updatedTodo = todoService.updateTodo(id, todoCreateDto);
        logger.info("Tâche mise à jour : {}", updatedTodo);
        return updatedTodo;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTodo(@PathVariable Long id) {
        logger.info("Requête REST reçue pour supprimer la tâche avec l'id : {}", id);
        todoService.deleteTodo(id);
        logger.info("Tâche supprimée avec succès");
    }
}