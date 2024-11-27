import Footer from "@/components/footer";
import { Bento } from "@/components/grid";
import Landing from "@/components/landing";
import { HeroScrollDemo } from "@/components/scroll";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Dash from "./m";
import Dash2 from "./m2";
export default function Home() {
  return (
    <div className="w-full bg-[#1f1f1f]">
      {/* <Landing/>
      <BackgroundBeams />
      <HeroScrollDemo/>
      <Bento/>
      <Footer></Footer> */}
      <Dash />
      {/* <Dash2 /> */}
    </div>
  );
}
