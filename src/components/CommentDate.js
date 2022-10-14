function CommentDate(props) {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.date.toLocaleDateString()}</div>
    </div>
  );
}

export default CommentDate;
