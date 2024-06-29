"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import experienceAnimation from "@/public/experienceFloating.json";

export default function ExperienceAnimation() {
  return <Player autoplay loop src={experienceAnimation} />;
}
