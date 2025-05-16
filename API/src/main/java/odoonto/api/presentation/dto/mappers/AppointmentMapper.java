package odoonto.api.presentation.dto.mappers;

import org.springframework.stereotype.Component;
import odoonto.api.domain.models.Appointment;
import odoonto.api.presentation.dto.AppointmentDto;
import odoonto.api.presentation.dto.CreateAppointmentDto;
import odoonto.api.domain.core.valueobjects.AppointmentStatus;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.UUID;

@Component
public class AppointmentMapper {

    public AppointmentDto toDto(Appointment a) {
        return new AppointmentDto(
                a.getId(),
                a.getPatientId(),
                a.getDoctorId(),
                LocalDateTime.ofInstant(a.getStart(), ZoneId.systemDefault()),
                // el campo se llama durationSlots en la entidad
                a.getDurationSlots(),
                // convertir el Instant a LocalDateTime
                LocalDateTime.ofInstant(a.end(), ZoneId.systemDefault())
        );
    }

    public Appointment toEntity(CreateAppointmentDto dto) {
        return Appointment.builder()
                .id(UUID.randomUUID().toString())
                .patientId(dto.getPatientId())
                .doctorId(dto.getDoctorId())
                .start(dto.getStart().atZone(ZoneId.systemDefault()).toInstant())
                .durationSlots(dto.getSlots())
                .status(AppointmentStatus.PENDING)
                .build();
    }
}
