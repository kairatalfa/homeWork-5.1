function CommentInfo(props) {
  return (
    <div>
      <img src={props.authorUrl} alt="" />
      <div> {props.name}</div>
    </div>
  );
}
export default CommentInfo;
