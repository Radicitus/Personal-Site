"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import projectsAnimation from "@/public/projectsBlue.json";

export default function ProjectsAnimation() {
  return <Player autoplay loop src={projectsAnimation} />;
}
