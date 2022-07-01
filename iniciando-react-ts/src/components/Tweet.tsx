type TweetProps = {
  text: string;
}

export function Tweet(props) {
  return (
    <p>{props.text}</p>
  );
}