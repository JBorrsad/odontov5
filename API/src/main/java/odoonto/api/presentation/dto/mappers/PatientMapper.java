// src/main/java/odoonto/api/presentation/dto/mappers/PatientMapper.java
package odoonto.api.presentation.dto.mappers;

import org.springframework.stereotype.Component;
import odoonto.api.domain.models.Patient;
import odoonto.api.presentation.dto.PatientDto;
import odoonto.api.presentation.dto.CreatePatientDto;
import odoonto.api.domain.core.valueobjects.PhoneNumber;
import odoonto.api.domain.core.valueobjects.EmailAddress;

@Component
public class PatientMapper {

    public PatientDto toDto(Patient patient) {
        if (patient == null) {
            return null;
        }
        return new PatientDto(
                patient.getId(),
                patient.getNombre(),
                patient.getApellido(),
                patient.getFechaNacimiento(),    // getter generado por Lombok
                patient.getSexo(),
                patient.getTelefono().value(),
                patient.getEmail().value(),
                patient.getAge()                 // calculado en el dominio
        );
    }

    public Patient toEntity(CreatePatientDto dto) {
        if (dto == null) {
            return null;
        }
        return new Patient(
                dto.getNombre(),
                dto.getApellido(),
                dto.getFechaNacimiento(),        // Instant desde el DTO
                dto.getSexo(),
                new PhoneNumber(dto.getTelefono()),
                new EmailAddress(dto.getEmail()),
                dto.getEdad()                    // para inicializar Odontogram
        );
    }
}
