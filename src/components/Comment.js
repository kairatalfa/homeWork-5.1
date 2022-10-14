import CommentDate from "./CommentDate";
import CommentInfo from "./CommentInfo";
import "./componentDate.css";
import "./componentInfo.css";

function Comment(props) {
  return (
    <div className="components" >
      <div className="stilInfo">
        <CommentInfo
          name={props.obj.author.name}
          authorUrl={props.obj.author.avatarUrl}
        />
      </div>
      <div className="stilDate">
        <CommentDate date={props.obj.date} text={props.obj.text} />
      </div>
    </div>
  );
}
export default Comment;
