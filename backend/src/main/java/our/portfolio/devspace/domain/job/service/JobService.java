package our.portfolio.devspace.domain.job.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import our.portfolio.devspace.domain.job.dto.ListJobsResponse;
import our.portfolio.devspace.domain.job.entity.Job;
import our.portfolio.devspace.domain.job.repository.JobRepository;
import our.portfolio.devspace.exception.CustomException;
import our.portfolio.devspace.exception.ErrorDetail;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    @Transactional(readOnly = true)
    public ListJobsResponse listJobs() {
        return ListJobsResponse.from(jobRepository.findAll());
    }

    public Job getJobById(Integer id) {
        return jobRepository.findById(id).orElseThrow(() -> new CustomException("Job Id " + id + "에 해당하는 직군이 없습니다.", ErrorDetail.JOB_NOT_FOUND));
    }
}
