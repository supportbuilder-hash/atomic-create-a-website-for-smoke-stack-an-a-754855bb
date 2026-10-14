// KIT PAGE — FIXED FILE, do not edit. Server wrapper: <title>/description from the
// "contact.hero" catalog copy; the page itself is ./view.tsx.
import { pageMetadata } from "@/lib/kit-meta";
import View from "./view";

export const metadata = pageMetadata("contact");

export default function Page() {
  return <View />;
}
