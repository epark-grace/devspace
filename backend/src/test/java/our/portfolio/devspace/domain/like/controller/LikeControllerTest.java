package our.portfolio.devspace.domain.like.controller;

import com.epages.restdocs.apispec.FieldDescriptors;
import com.epages.restdocs.apispec.ResourceSnippetParameters;
import com.epages.restdocs.apispec.SimpleType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import our.portfolio.devspace.common.dto.HttpResponseBody;
import our.portfolio.devspace.domain.like.dto.GetLikeResponse;
import our.portfolio.devspace.domain.like.service.LikeService;
import our.portfolio.devspace.utils.CommonTestUtils;
import our.portfolio.devspace.utils.ControllerTestUtils;
import our.portfolio.devspace.utils.factory.LikeFactory;

import java.util.List;

import static com.epages.restdocs.apispec.MockMvcRestDocumentationWrapper.document;
import static com.epages.restdocs.apispec.ResourceDocumentation.parameterWithName;
import static com.epages.restdocs.apispec.ResourceDocumentation.resource;
import static com.epages.restdocs.apispec.Schema.schema;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureRestDocs
@WebMvcTest(LikeController.class) //컨트롤러 테스트 설정
@Import(ControllerTestUtils.WebSecurityTestConfiguration.class) //API 권한 설정
class LikeControllerTest {

    @Autowired
    MockMvc mockMvc; //API 요청 객체

    @MockBean
    LikeService likeService;

    @Test
    void listLikes() throws Exception {

        // ** Given **
        Pageable pageable = PageRequest.of(0, 4);

        List<GetLikeResponse> responseDto = LikeFactory.GetLikeResponses(pageable);
        given(likeService.listLikes(2L, pageable)).willReturn(responseDto);

        // ** When **
        LinkedMultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
        requestParams.add("page", "0");
        requestParams.add("size", "4");

        ResultActions resultActions = mockMvc.perform(
                get("/api/like/{id}", 2).params(requestParams)
                        .contentType(MediaType.APPLICATION_JSON)
        );


        // ** Then **
        HttpResponseBody<List<GetLikeResponse>> body = new HttpResponseBody<>("좋아요 회원 목록이 조회되었습니다.", responseDto);
        resultActions.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().json(CommonTestUtils.valueToString(body))
        );

        // ** API Docs **
        resultActions.andDo(
                document("좋아요 회원 목록을 성공적으로 조회한다.", resource(ResourceSnippetParameters.builder()
                        .summary("좋아요 회원 목록")
                        .tag("Like")
                        .pathParameters(parameterWithName("id").type(SimpleType.NUMBER).description("게시판 id ex) 0, 1, 2, ..."))
                        .requestParameters(
                                parameterWithName("page").type(SimpleType.NUMBER).description("페이지 순서 ex) 0, 1, 2, ..."),
                                parameterWithName("size").type(SimpleType.NUMBER).description("페이지 당 목록 개수 ex) 0, 1, 2, ..")
                        )
                        .responseSchema(schema("GetLikeResponses"))
                        .responseFields(ControllerTestUtils.fieldDescriptorsWithMessage(responseFieldDescriptors()))
                        .build())));
    }

    private FieldDescriptors responseFieldDescriptors() {
        return new FieldDescriptors(
                fieldWithPath("[]").type(JsonFieldType.ARRAY).description("좋아요 회원 목록"),
                fieldWithPath("[].id").type(JsonFieldType.NUMBER).description("좋아요 회원 ID"),
                fieldWithPath("[].name").type(JsonFieldType.STRING).description("좋아요 회원 NAME"),
                fieldWithPath("[].image").type(JsonFieldType.STRING).description("좋아요 회원 IMAGE"),
                fieldWithPath("[].job").type(JsonFieldType.STRING).description("좋아요 회원 JOB"),
                fieldWithPath("[].company").type(JsonFieldType.STRING).description("좋아요 회원 COMPANY"));
    }

}