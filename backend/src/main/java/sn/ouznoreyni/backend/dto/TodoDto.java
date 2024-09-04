package sn.ouznoreyni.backend.dto;

import sn.ouznoreyni.backend.entity.Todo;

import java.time.LocalDateTime;

public record TodoDto(Long id, String title, boolean completed, LocalDateTime createdAt, LocalDateTime updatedAt) {
    // Constructeur statique pour créer un TodoDto à partir d'une entité Todo comme un mapper
    public static TodoDto fromEntity(Todo todo) {
        return new TodoDto(
                todo.getId(),
                todo.getTitle(),
                todo.isCompleted(),
                todo.getCreatedAt(),
                todo.getUpdatedAt()
        );
    }
}
