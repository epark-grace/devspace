package our.portfolio.devspace.common;

import static com.epages.restdocs.apispec.ResourceDocumentation.headerWithName;

import com.epages.restdocs.apispec.HeaderDescriptorWithType;

public class ControllerTestUtils {

    public static HeaderDescriptorWithType authorizationHeader() {
        return headerWithName("Authorization").description("Access Token");
    }

    public static String authorizationToken() {
        return "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    }
}