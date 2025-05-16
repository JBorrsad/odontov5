package odoonto.api.presentation.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class CreateAppointmentDto {
    private String patientId;
    private String doctorId;
    private LocalDateTime start;
    private int slots;
}