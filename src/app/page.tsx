import Image from "next/image";
import { MacbookScrollDemo } from "./mac";
import { ThreeDCardDemo } from "./card";
import { NavbarDemo } from "./Navbar";
import Skills from "@/component/ui/skills";
import { BackgroundBeamsDemo } from "./Contact";
import { SignupFormDemo } from "./Form";
import { IconBrandGmail, IconBrandLinkedin } from "@tabler/icons-react";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export default function Home() {
  return (
    <main className="flex top-10 min-h-screen flex-col items-center justify-between p-24 ">
      <NavbarDemo />
      <MacbookScrollDemo />
      <div className="w-screen lg:h-[60vh] flex flex-col" id="about">
        <section className="flex flex-col items-center lg:items-start px-5 lg:px-20 py-10 justify-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-md lg:text-lg lg:text-start">
            I am a professional MERN stack developer with expertise in Next.js
            and React Native. I have a passion for creating efficient and
            scalable web applications. With several years of experience in the
            industry, I have successfully delivered projects that meet client
            requirements and exceed expectations. I am constantly learning and
            staying up-to-date with the latest technologies to enhance my skills
            and deliver high-quality solutions. Feel free to download my resume
            to learn more about my qualifications and experience.
          </p>
        </section>
        <section className="flex justify-center mt-8">
          <a href="resumeali.pdf" download="resume.pdf">
            <button
              className="bg-gradient-to-br relative group/btn px-5 from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              get my Resume
              <BottomGradient />
            </button>
          </a>
        </section>
      </div>
      <Skills />
      <SignupFormDemo />

      <footer className="w-screen h-[20vh] gap-5 bg-black text-center bottom-0 flex flex-col justify-center items-center">
        <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/ali-shahal-a8a593234/"
            className="hover:scale-110 duration-300 transform-gpu"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="mailto:alishahal9656@gmail.com?subject=Hi Ali"
            className="hover:scale-110 duration-300 transform-gpu"
          >
            <IconBrandGmail />
          </a>
        </div>
      </footer>
    </main>
  );
}
