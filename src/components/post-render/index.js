import { serialize } from "@wordpress/blocks";
import { RawHTML } from "@wordpress/element";
import { Logo } from "../logo";
import "./style.css";

export function PostRender({ post }) {
  return (
    <div className="post-render">
      <div className="post-render__header">
        <Logo />
      </div>
      <div className="post-render__main">
        <h1>{post.title}</h1>
        <div>
          <RawHTML>{serialize(post.blocks)}</RawHTML>
        </div>
      </div>
    </div>
  );
}
