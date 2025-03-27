function Header() {
  return (
    <header>
      <video
        src={`${process.env.PUBLIC_URL}/video.mp4`}
        loop
        autoPlay
        muted
      ></video>
      <h1>National Enterprises</h1>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
