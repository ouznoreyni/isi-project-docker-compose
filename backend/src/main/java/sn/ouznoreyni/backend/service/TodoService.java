package sn.ouznoreyni.backend.service;

import sn.ouznoreyni.backend.dto.TodoCreateDto;
import sn.ouznoreyni.backend.dto.TodoDto;

import java.util.List;

public interface TodoService {
    List<TodoDto> getAllTodos();
    TodoDto getTodoById(Long id);
    TodoDto createTodo(TodoCreateDto todoCreateDto);
    TodoDto updateTodo(Long id, TodoCreateDto todoCreateDto);
    void deleteTodo(Long id);
}
