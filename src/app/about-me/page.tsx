import Introduction from "../components/aboutme/Introduction";
import Work from "../components/aboutme/Focus";
import Story from "../components/aboutme/Story";

export default function AboutMe() {
  return (
    <div className="px-5">
      <Introduction />
      <Work />
      <Story />
    </div>
  );
}
