package odoonto.api.domain.repositories;

import com.google.cloud.spring.data.firestore.FirestoreReactiveRepository;
import odoonto.api.domain.models.Appointment;
import reactor.core.publisher.Flux;

import java.time.Instant;

public interface AppointmentRepository
        extends FirestoreReactiveRepository<Appointment> {
    Flux<Appointment> findByDoctorIdAndStartGreaterThanEqualAndStartLessThanEqual(
            String doctorId,
            Instant from,
            Instant to);
}