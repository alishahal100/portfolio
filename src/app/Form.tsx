"use client";
import React from "react";
import { Label } from "@/component/ui/label";
import { Input } from "@/component/ui/input";
import { cn } from "@/utils/cn";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
    

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Retrieve the email and message values from the form
  const email: string = (event.target as HTMLFormElement).email.value;
  const message: string = (event.target as HTMLFormElement).message.value;

  // TODO: Perform any necessary validations or sanitization of the data

  // Initialize EmailJS with your user ID
  emailjs.init('ZYzT4par2ZFpEBLo6');

  // Prepare the email parameters
  const templateParams = {
    from_name: email,
    to_name: 'Ali Shahal', // Specify the recipient's name or email
    message: message,
  };

  // Send the email
  emailjs
    .send('service_scdhhra', 'template_c9oj3dh', templateParams)
    .then(
      function (response: EmailJSResponseStatus) {
        console.log('Email sent successfully:', response);
        // TODO: Show a success message to the user
        alert('We Have Recieved Your Email . We will get back to you soon!');
      },
      function (error: any) {
        console.error('Failed to send the email:', error);
        alert('Sorry, email not delivered');
      }
    );

  const userEmail: string = email;
  console.log(userEmail);
  const autoReplyParams = {
    to_email: userEmail,
    to_name: email,
    subject: 'Thank you for reaching out to us!',
    message: `Thank you for contacting us. We have received your message and appreciate your interest in our services. Our team is currently reviewing your inquiry and will get back to you as soon as possible.

        In the meantime, please feel free to explore our website for more information about our products and services. If you have any urgent questions, you can reach us at 7356323421 during our business hours.
        
        We value your time and patience and look forward to assisting you further.
        
        Best regards,
        Your Name`,
  };

  emailjs
    .send('service_scdhhra', 'template_c9oj3dh', autoReplyParams)
    .then(function (response: EmailJSResponseStatus) {
      console.log('Auto-reply email sent successfully:', response);
    })
    .catch(function (error: any) {
      console.error('Failed to send the auto-reply email:', error);
    });

  // Reset the form fields
  (event.target as HTMLFormElement).reset();
};



  return (
    <div id="contact" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black  dark:bg-black">
     <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Get In Touch
        </h1>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Message">Message</Label>
          <Input id="Message" name="message" placeholder="Hello , Let's Collab..." type="textarea" />
        </LabelInputContainer>
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer> */}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
         Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
