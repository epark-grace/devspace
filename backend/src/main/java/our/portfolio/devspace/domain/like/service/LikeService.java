package our.portfolio.devspace.domain.like.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import our.portfolio.devspace.domain.like.dto.GetLikeResponse;
import our.portfolio.devspace.domain.like.repository.LikeRepository;
import our.portfolio.devspace.exception.CustomException;

import java.util.List;

import static our.portfolio.devspace.exception.ErrorDetail.INVALID_PARAMETER_VALUE;

@Service
@RequiredArgsConstructor
public class LikeService {

    private final LikeRepository likeRepository;

    public List<GetLikeResponse> listLikes(Long id, Pageable pageable) {

        if (pageable.getPageSize() > 8) {
            throw new CustomException(INVALID_PARAMETER_VALUE);
        }
        return likeRepository.findLikeUserByPostId(id, pageable);
    }
}