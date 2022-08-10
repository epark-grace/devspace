package our.portfolio.devspace.domain.post.entity;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import our.portfolio.devspace.domain.BaseTimeEntity;
import our.portfolio.devspace.domain.profile.entity.Profile;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "posts")
@Entity
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id", nullable = false)
    private Profile profile;

    @Column(nullable = false)
    private Boolean secret;

    @OneToMany(mappedBy = "post", cascade = CascadeType.PERSIST)
    private final List<PostHashtag> hashtagsOfPost = new ArrayList<>();

    @Builder
    public Post(String title, String content, Profile profile, Boolean secret, List<PostHashtag> hashtagsOfPost) {
        this.title = title;
        this.content = content;
        this.profile = profile;
        this.secret = secret;
        addHashtags(hashtagsOfPost);
    }

    private void addHashtags(List<PostHashtag> hashtagsOfPost) {
        this.hashtagsOfPost.addAll(hashtagsOfPost);
        this.hashtagsOfPost.forEach(hashtag -> hashtag.setPost(this));
    }
}