import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("about");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-background via-muted/30 to-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold tracking-tight">John Doe</h1>
          <ul className="flex space-x-4">
            {sections.map((s) => (
              <li key={s.id}>
                <Button
                  variant={active === s.id ? "secondary" : "ghost"}
                  onClick={() => scrollTo(s.id)}
                  className="capitalize"
                >
                  {s.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <main className="mx-auto max-w-5xl space-y-24 px-4 py-12">
        {/* About */}
        <section id="about" className="grid gap-6 md:grid-cols-2">
          <motion.img
            src="/me.jpg"
            alt="Profile"
            className="aspect-square w-full rounded-2xl object-cover shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Hi, I'm John 👋</h2>
            <p>
              I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive web applications with React, TypeScript, and Node.js.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" asChild aria-label="GitHub">
                <a href="https://github.com/johndoe" target="_blank" rel="noreferrer">
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" asChild aria-label="LinkedIn">
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
                  <LinkedInLogoIcon className="h-5 w-5" />
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="outline" aria-label="Email me">
                    <EnvelopeClosedIcon className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Contact me</DialogTitle>
                  </DialogHeader>
                  <p className="text-sm">john@doe.dev</p>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Project One",
                description: "A React app for visualizing climate data.",
                link: "https://github.com/johndoe/project-one",
              },
              {
                title: "Project Two",
                description: "A mobile-first budgeting app built with Next.js.",
                link: "https://github.com/johndoe/project-two",
              },
              {
                title: "Project Three",
                description: "An AI-powered note-taking Chrome extension.",
                link: "https://github.com/johndoe/project-three",
              },
            ].map((p) => (
              <Card key={p.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex grow flex-col justify-between space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.link} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p>
            I'd love to hear about your next project. Send me a message, and let's build something great together.
          </p>
          <form
            name="contact"
            action="https://formspree.io/f/xyz"
            method="POST"
            className="grid gap-4 sm:max-w-md"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="rounded-2xl border bg-background/50 p-3 backdrop-blur transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-2xl border bg-background/50 p-3 backdrop-blur transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <textarea
              required
              name="message"
              placeholder="Message"
              rows={4}
              className="rounded-2xl border bg-background/50 p-3 backdrop-blur transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <Button type="submit" className="w-fit">
              Send
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </div>
  );
}
