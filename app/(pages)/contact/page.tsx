import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex h-screen max-h-[1000px] w-screen flex-col place-content-center gap-8 text-center">
      <div className="text-5xl lg:text-7xl">
        This page is still under construction!
      </div>
      <div className="lg:text-xl">
        But in the meantime, you can contact me here...
      </div>
      <div className="flex flex-col gap-4">
        <Link href={"mailto:hello@cameronsherry.com"} target={"_blank"}>
          hello@cameronsherry.com
        </Link>
        <Link href={"https://www.linkedin.com/in/crsherry/"} target={"_blank"}>
          linkedin.com/in/crsherry
        </Link>
        <Link href={"https://github.com/Radicitus"} target={"_blank"}>
          github.com/radicitus
        </Link>
      </div>
    </div>
  );
}
