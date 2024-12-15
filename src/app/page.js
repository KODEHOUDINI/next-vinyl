import VinylPlayerAnimation from "@/Components/VinylPlayerAnimation/VinylPlayerAnimation";
import SampleCoverImage from "/public/sample-cover.png";

export default function Home() {
  return (
    <>
      <VinylPlayerAnimation
        textsPrimary={["Fly To the moon now", "Fly To the moon now", "Fly To the moon now"]}
        textSecondary={"THROWBACK MUSIC VOL"}
        coverImg={SampleCoverImage}
      />
    </>
  );
}
