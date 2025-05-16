// src/main/java/odoonto/api/presentation/dto/CreatePatientDto.java
package odoonto.api.presentation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import odoonto.api.domain.core.valueobjects.Sexo;
import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreatePatientDto {
    private String nombre;
    private String apellido;
    private Instant fechaNacimiento;
    private Sexo sexo;
    private String telefono;
    private String email;
    private int edad;
}
