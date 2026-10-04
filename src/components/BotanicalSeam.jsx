import hangingVines from "../assets/botanical/hanging-vines.png";
import orangeFloweringVine from "../assets/botanical/orange-flowering-vine.png";
import "../styles/botanical-seams.css";

// Decorative seams between existing sections. No clicks, focus stops, or
// changes to the desk photo, hotspot positions, or navigation.
export default function BotanicalSeam({ kind = "orange" }) {
  const isHanging = kind === "hanging";
  return (
    <div className={`niah-floral-seam niah-floral-seam--${isHanging ? "hanging" : "orange"}`} aria-hidden="true">
      <img
        className="niah-floral-seam__art"
        src={isHanging ? hangingVines : orangeFloweringVine}
        alt=""
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    </div>
  );
}
