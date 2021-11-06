import video from "../data/video.js";
import Video from "./Video";
import Input from "./Input";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video.embedUrl);
  const {comments} = video

  return (
    <div className="App">
      <Video title={video.title} url={video.embedUrl}/>
      <Input views={video.views} date={video.createdAt} likes={video.upvotes} dislikes={video.downvotes}/>
      <Comments num={comments.length} comments={comments}/>
    </div>
  );
}

export default App;
