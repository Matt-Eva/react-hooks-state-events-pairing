function Video({title, url}){
return(
    <>
    <iframe 
    width="919"
    height="525"
    src={url}
    frameBorder="0"
    allowFullScreen
    title={title}/>
    <h1>{title}</h1>
    </>
)
}

export default Video;