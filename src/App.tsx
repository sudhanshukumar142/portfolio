import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Mail, ArrowDown, MapPin, Calendar, Award, GraduationCap } from 'lucide-react'

/* ─── Icons (brand icons not in lucide-react) ───────────── */

function GithubIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

/* ─── Data ──────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const PROJECTS = [
  {
    title: 'AI-Powered Attendance System',
    date: 'Apr 2026',
    description:
      'An AI-powered attendance system that uses facial recognition and artificial intelligence to automatically identify individuals and record their attendance. It provides a fast, accurate, secure, and contactless way to manage attendance while reducing manual work and preventing proxy attendance.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'AI/ML'],
    github: 'https://github.com/Sudhanshukumar142',
  },
  {
    title: 'AI Resume ATS System',
    date: 'Jun 2026',
    description:
      'A smart recruitment tool that uses artificial intelligence to analyze, screen, and rank resumes based on job requirements. It helps recruiters quickly identify the most suitable candidates, improves hiring efficiency, and reduces manual effort by automatically matching skills, experience, and qualifications with job descriptions.',
    tech: ['Python', 'AI/ML', 'NLP', 'HTML', 'CSS'],
    github: 'https://github.com/Sudhanshukumar142',
  },
]

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['Python'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['HTML', 'CSS'],
  },
  {
    category: 'Domain Skills',
    items: ['Problem-Solving', 'Responsive Web Design', 'Exploratory Data Analysis'],
  },
]

const CERTIFICATIONS = [
  {
    title: 'Effective Communication Skills',
    issuer: 'Lovely Professional University',
    date: 'Dec 2025',
  },
  {
    title: 'Hackathon Participation Certificate',
    issuer: 'Lovely Professional University',
    date: 'Feb 2026',
  },
  {
    title: 'Data Science Workshop',
    issuer: '07 Solution',
    date: 'Mar 2026',
  },
  {
    title: 'Prime: AI/ML Batch',
    issuer: 'Apna College',
    date: 'May 2026',
  },
  {
    title: 'be10x AI Tools & ChatGPT Workshop',
    issuer: 'be10x',
    date: 'Jul 2026',
  },
]

const EDUCATION = [
  {
    institution: 'Lovely Professional University',
    degree: 'Diploma in Computer Science & Engineering',
    status: 'Pursuing',
    year: '2024 – Present',
    location: 'Phagwara, Punjab',
  },
  {
    institution: 'Jnan Jyoti School',
    degree: 'Matriculation',
    status: '67.4%',
    year: '2023 – 2024',
    location: 'East Champaran, Bihar',
  },
]

/* ─── Navbar ────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
          sudhanshu.
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

/* ─── Hero ──────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center px-6">
      <div className="max-w-[1100px] w-full text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-border ring-4 ring-secondary sm:h-44 sm:w-44">
              <img
                src="/sudhanshu.jpg"
                alt="Sudhanshu Kumar"
                className="h-full w-full object-cover" style={{ objectPosition: 'center 35%' }}
              />
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          CSE Diploma Student · Aspiring Developer
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Sudhanshu Kumar
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          Final-year Diploma student in Computer Science & Engineering, passionate about AI, web development, and building real-world solutions.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ─── Projects ──────────────────────────────────────────── */

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
          Things I've built to solve real-world problems.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col transition-colors duration-200 hover:border-[#3f3f46]"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="outline" className="font-mono text-xs font-normal shrink-0">
                    {project.date}
                  </Badge>
                </div>
                <CardDescription className="mt-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-mono text-xs font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Skills ────────────────────────────────────────────── */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-2xl font-bold tracking-tight">Skills</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
          Technologies and competencies I'm building proficiency in.
        </p>

        <div className="mx-auto mt-12 grid max-w-[800px] gap-6 sm:grid-cols-3">
          {SKILLS.map((group) => (
            <Card key={group.category} className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="font-mono text-xs font-normal"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Education ─────────────────────────────────────────── */

function Education() {
  return (
    <section id="education" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-2xl font-bold tracking-tight">Education</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
          My academic background and qualifications.
        </p>

        <div className="mx-auto mt-12 grid max-w-[700px] gap-5">
          {EDUCATION.map((edu) => (
            <Card
              key={edu.institution}
              className="transition-colors duration-200 hover:border-[#3f3f46]"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{edu.institution}</CardTitle>
                      <CardDescription className="mt-1">{edu.degree}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs font-normal shrink-0">
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {edu.year}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Certifications ────────────────────────────────────── */

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-2xl font-bold tracking-tight">Certifications</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
          Courses and workshops I've completed.
        </p>

        <div className="mx-auto mt-12 grid max-w-[700px] gap-4">
          {CERTIFICATIONS.map((cert) => (
            <Card
              key={cert.title}
              className="transition-colors duration-200 hover:border-[#3f3f46]"
            >
              <CardHeader className="py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary">
                      <Award className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-medium">{cert.title}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">{cert.issuer}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs font-normal shrink-0">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About ─────────────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-2xl font-bold tracking-tight">About</h2>

        <div className="mx-auto mt-10 flex max-w-[650px] flex-col items-center text-center">
          <Avatar className="mb-6 h-20 w-20">
            <AvatarImage src="/sudhanshu.jpg" alt="Sudhanshu Kumar" className="object-cover" style={{ objectPosition: 'center 35%' }} />
            <AvatarFallback className="bg-secondary text-lg font-semibold">SK</AvatarFallback>
          </Avatar>

          <p className="leading-relaxed text-muted-foreground">
            I'm Sudhanshu Kumar, a final-year Diploma student in Computer Science & Engineering at
            Lovely Professional University, Phagwara. Originally from Sitamarhi, Bihar, I'm
            passionate about using technology to solve real-world problems — from AI-powered
            attendance systems to smart resume screening tools.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            I enjoy exploring AI/ML, data science, and web development, and I'm actively building
            projects that sharpen my skills and make a tangible impact. Always eager to learn,
            collaborate, and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ───────────────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Have a project in mind, want to collaborate, or just want to say hi? Reach out.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:sudhanshuyadav914243@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              sudhanshuyadav914243@gmail.com
            </a>
          </Button>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Sudhanshukumar142"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/sudhanshu-kumar8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4">
      <Separator className="mx-auto max-w-[1100px]" />
      <div className="mx-auto mt-6 flex max-w-[1100px] items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sudhanshu Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <a
              href="https://github.com/Sudhanshukumar142"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <a
              href="https://linkedin.com/in/sudhanshu-kumar8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ───────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Separator className="mx-auto max-w-[1100px]" />
        <Projects />
        <Separator className="mx-auto max-w-[1100px]" />
        <Skills />
        <Separator className="mx-auto max-w-[1100px]" />
        <Education />
        <Separator className="mx-auto max-w-[1100px]" />
        <Certifications />
        <Separator className="mx-auto max-w-[1100px]" />
        <About />
        <Separator className="mx-auto max-w-[1100px]" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
