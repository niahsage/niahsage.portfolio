import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Only real route changes reset scroll. Clicking desk shortcuts within the
// homepage does not change pathname, so its smooth section jumps still work.
export default function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [pathname]);
  return null;
}
