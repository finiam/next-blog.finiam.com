import Link from "next/link";
import Image from "next/image";

import PostHeaderInfo from "../post-header-info/post-header-info";

import styles from "./post-preview.module.scss";

type PostPreviewProps = {
  post: PostPreview;
  isFirst: boolean;
};

export default function PostPreview({ post, isFirst }: PostPreviewProps) {
  const postHeaderInfo = {
    authorImage: post.author.image.asset.url,
    authorName: post.author.name,
    publishedAt: post.publishedAt,
    postCategory: post.category,
    keywords: post.keywords,
  };

  return (
    <div className={`${isFirst ? styles["top-post"] : ""}`}>
      <div className={styles["post-preview"]}>
        <div className={styles["image-container"]}>
          <Link href={`/blog/${post.slug.current}`}>
            <a>
              <Image
                src={post.featuredImage.asset.url}
                alt={post.featuredImageAlt}
                width={post.featuredImage.asset.metadata.dimensions.width}
                height={post.featuredImage.asset.metadata.dimensions.height}
                blurDataURL={post.featuredImage.asset.metadata.lqip}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
              />
            </a>
          </Link>
        </div>
        <div className={styles["post-text"]}>
          <div>
            <Link href={`/blog/${post.slug.current}`}>
              <a>
                <h3 className={styles["post-title"]}>{post.title}</h3>
                <p className={styles["post-description"]}>
                  {post.longDescription}
                </p>
              </a>
            </Link>
          </div>
          <PostHeaderInfo postInfo={postHeaderInfo} className="post-preview" />
        </div>
      </div>
    </div>
  );
}
