import NavBar from "@/components/NavBar";
import StageAudio from "@/components/StageAudio";

export default function Home() {
  return (
    <div className="background">
      <StageAudio src="/audio/fondo.mp3" muted={!enabled} autoPlay loop />
      <NavBar />
    </div>
  );
}