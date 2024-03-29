package our.portfolio.devspace.domain.profile.dto;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Pattern.Flag;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.URL;

@Getter
@NoArgsConstructor
public class CreateProfileRequest {

    @NotNull(message = "이름을 입력하세요.")
    @Length(min = 2, max = 12, message = "이름은 2자 이상, 12자 이하로 입력하세요.")
    @Pattern(regexp = "^[A-Z가-힣]+$", flags = Flag.CASE_INSENSITIVE)
    private String name;

    @NotBlank(message = "자기소개를 입력하세요.")
    @Length(max = 255, message = "자기소개는 255자 이하로 입력하세요.")
    private String introduction;

    @NotNull(message = "직군을 선택하세요.")
    private Integer jobId;

    @Length(max = 30, message = "회사명은 30자 이하로 입력하세요.")
    @Pattern(regexp = "^[A-Z가-힣0-9]+$", flags = Flag.CASE_INSENSITIVE)
    private String company;

    @Length(max = 30, message = "경력 기간은 30자 이하로 입력하세요.")
    @Pattern(regexp = "^[A-Z가-힣0-9]+$", flags = Flag.CASE_INSENSITIVE)
    private String career;

    @Valid
    @Size(max = 5, message = "링크는 5개 이하로 입력하세요.")
    private List<ReferenceLinkDto> referenceLinks;

    @Builder
    public CreateProfileRequest(String name, String introduction, Integer jobId, String company, String career, List<ReferenceLinkDto> referenceLinks) {
        this.name = name;
        this.introduction = introduction;
        this.jobId = jobId;
        this.company = company;
        this.career = career;
        this.referenceLinks = referenceLinks;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ReferenceLinkDto {

        @NotNull(message = "링크 이름을 입력하세요.")
        @Length(min = 1, max = 10, message = "링크 이름은 10자 이하로 입력하세요.")
        @Pattern(regexp = "^[A-Z가-힣]+$", flags = Flag.CASE_INSENSITIVE)
        private String title;

        @NotBlank
        @URL(regexp = "^(http|https):\\/\\/.*", message = "URL 형식이 유효하지 않습니다.")
        private String url;
    }
}
