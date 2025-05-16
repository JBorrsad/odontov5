// src/main/java/odoonto/api/presentation/exception/ApiError.java
package odoonto.api.presentation.exception;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiError {
    private LocalDateTime timestamp;
    private String message;
    private String details;
}
