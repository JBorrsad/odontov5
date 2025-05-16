package odoonto.api.presentation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class AppointmentDto {
    private String id;
    private String patientId;
    private String doctorId;
    private LocalDateTime start;
    private int slots;
    private LocalDateTime end;
}
