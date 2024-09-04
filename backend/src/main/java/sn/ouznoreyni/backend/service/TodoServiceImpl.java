package sn.ouznoreyni.backend.service;

import sn.ouznoreyni.backend.dto.TodoCreateDto;
import sn.ouznoreyni.backend.dto.TodoDto;
import sn.ouznoreyni.backend.entity.Todo;
import sn.ouznoreyni.backend.exception.TodoNotFoundException;
import sn.ouznoreyni.backend.repository.TodoRepository;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {
    private static final Logger logger = LoggerFactory.getLogger(TodoServiceImpl.class);

    private final TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public List<TodoDto> getAllTodos() {
        logger.info("Récupération de toutes les tâches");
        List<TodoDto> todos = todoRepository.findAll().stream()
                .map(TodoDto::fromEntity)
                .collect(Collectors.toList());
        logger.info("{} tâches trouvées", todos.size());
        return todos;
    }

    @Override
    public TodoDto getTodoById(Long id) {
        logger.info("Récupération de la tâche avec l'id : {}", id);
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> {
                    logger.error("Tâche non trouvée avec l'id : {}", id);
                    return new TodoNotFoundException("Tâche non trouvée avec l'id : " + id);
                });
        logger.info("Tâche trouvée : {}", todo);
        return TodoDto.fromEntity(todo);
    }

    @Override
    public TodoDto createTodo(TodoCreateDto todoCreateDto) {
        logger.info("Création d'une nouvelle tâche : {}", todoCreateDto);
        Todo todo = new Todo();
        updateTodoFromDto(todo, todoCreateDto);
        todo = todoRepository.save(todo);
        logger.info("Nouvelle tâche créée avec l'id : {}", todo.getId());
        return TodoDto.fromEntity(todo);
    }

    @Override
    public TodoDto updateTodo(Long id, TodoCreateDto todoCreateDto) {
        logger.info("Mise à jour de la tâche avec l'id : {}", id);
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> {
                    logger.error("Tâche non trouvée avec l'id : {}", id);
                    return new TodoNotFoundException("Tâche non trouvée avec l'id : " + id);
                });
        updateTodoFromDto(todo, todoCreateDto);
        todo = todoRepository.save(todo);
        logger.info("Tâche mise à jour : {}", todo);
        return TodoDto.fromEntity(todo);
    }

    @Override
    public void deleteTodo(Long id) {
        logger.info("Suppression de la tâche avec l'id : {}", id);
        if (!todoRepository.existsById(id)) {
            logger.error("Tâche non trouvée avec l'id : {}", id);
            throw new TodoNotFoundException("Tâche non trouvée avec l'id : " + id);
        }
        todoRepository.deleteById(id);
        logger.info("Tâche supprimée avec l'id : {}", id);
    }

    private void updateTodoFromDto(Todo todo, TodoCreateDto dto) {
        todo.setTitle(dto.title());
        todo.setCompleted(dto.completed());
    }
}
