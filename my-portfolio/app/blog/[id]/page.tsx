import Link from "next/link";
import { notFound } from "next/navigation";

const tagColor: Record<string, string> = {
  BACKEND: "#1D9E75",
  FRONTEND: "#378ADD",
  CAREER: "#D85A30",
};

const posts = [
  {
    id: "01",
    title1: "ORIGIN STORY",
    head: "How I Went from Zero to Fullstack in 18 Months",
    date: "Apr 20",
    tag: "Journey",
    readTime: "7 min read",
    fullContent: [
      {
        type: "p",
        text: "I didn’t start with talent, connections, or expensive courses. I started with a slow laptop that overheated every hour, unstable internet, and a mindset that refused to quit.",
      },
      {
        type: "p",
        text: "While other people had mentors and roadmaps, I had confusion, trial and error, and hundreds of moments where quitting felt easier than continuing.",
      },
      {
        type: "p",
        text: "This is the real story of how I went from knowing absolutely nothing about code to building fullstack applications in just 18 months.",
      },
      {
        type: "h2",
        text: "Month One: Everything Felt Impossible",
      },
      {
        type: "p",
        text: "The first time I opened HTML and CSS, it felt simple — until I tried to build something alone. Nothing aligned. Nothing worked. Every bug felt personal.",
      },
      {
        type: "p",
        text: "JavaScript was worse. Functions, loops, promises, async code — it felt like trying to read a language invented to confuse me.",
      },
      {
        type: "h2",
        text: "The Mistake That Slowed Me Down",
      },
      {
        type: "p",
        text: "For months, I consumed tutorials like entertainment. I could follow along perfectly, but the second the video ended, I couldn’t build anything on my own.",
      },
      {
        type: "p",
        text: "That was the trap: watching progress instead of making progress.",
      },
      {
        type: "h2",
        text: "What Actually Changed Everything",
      },
      {
        type: "p",
        text: "I stopped trying to learn everything and started trying to build anything.",
      },
      {
        type: "p",
        text: "Small projects became my teachers. Broken portfolios. Ugly landing pages. To-do apps with bugs everywhere. Every mistake taught me more than ten tutorials ever could.",
      },
      {
        type: "h2",
        text: "From Frontend to Fullstack",
      },
      {
        type: "p",
        text: "Once I got comfortable in the browser, I wanted more control. I wanted databases, authentication, APIs, real systems.",
      },
      {
        type: "p",
        text: "That’s when I learned Node.js, MongoDB, backend architecture, deployment, and what it really means to make an app work beyond the screen.",
      },
      {
        type: "h2",
        text: "The Moment It Felt Real",
      },
      {
        type: "p",
        text: "It wasn’t when I finished a course. It wasn’t when I memorized syntax.",
      },
      {
        type: "p",
        text: "It was when I solved a problem alone, deployed it, and watched someone else use something I built.",
      },
      {
        type: "p",
        text: "That was the moment I stopped feeling like someone learning code — and started feeling like a developer.",
      },
      {
        type: "h2",
        text: "What 18 Months Taught Me",
      },
      {
        type: "p",
        text: "You do not need perfect conditions. You do not need permission. You do not need to be the smartest person in the room.",
      },
      {
        type: "p",
        text: "You need consistency, patience, and the courage to keep going when progress feels invisible.",
      },
      {
        type: "p",
        text: "That’s how zero becomes fullstack.",
      },
    ],
  },
  {
    id: "02",
    title1: "BACKEND",
    head: "Why I Stopped Being Scared of Databases",
    date: "Apr 26",
    tag: "MongoDB",
    readTime: "5 min read",
    fullContent: [
      {
        type: "p",
        text: "I remember staring at my first MongoDB schema like it owed me money.",
      },
      {
        type: "p",
        text: "No tables. No joins. No rules. Just... objects? Nested inside other objects? I'd spent months getting comfortable with SQL — knowing exactly where everything lived — and now I was supposed to just wing it?",
      },
      {
        type: "p",
        text: "So I did what any reasonable developer does: I avoided it for three months.",
      },
      { type: "h2", text: "The moment it clicked" },
      {
        type: "p",
        text: `The shift happened when I stopped thinking "how do I store this?" and started thinking "how will I use this?"`,
      },
      {
        type: "p",
        text: 'SQL thinks in tables. MongoDB thinks in answers. If your app always asks "give me this user and all their posts," MongoDB says — just put the posts inside the user. Done. No join. No second query. No headache.',
      },
      { type: "p", text: "That's not laziness. That's the whole point." },
      { type: "h2", text: "What frontend devs actually get wrong" },
      {
        type: "p",
        text: "Coming from React, I already thought in components — small, self-contained units of data and logic. MongoDB documents are the same idea, just for your database layer.",
      },
      {
        type: "p",
        text: "The mistake most frontend devs make is trying to normalize everything like SQL. Separate collections for everything, references everywhere. Then they wonder why every query needs five lookups.",
      },
      {
        type: "p",
        text: "Rule of thumb: If you always fetch it together, store it together.",
      },
      { type: "h2", text: "The part nobody warns you about" },
      {
        type: "p",
        text: "Schemas. Or the lack of them. MongoDB doesn't enforce structure — which feels like freedom until you have 4,000 documents where half have userName and half have username. Use Mongoose or Zod to validate your data before it hits the database. Trust me on this one.",
      },
      { type: "h2", text: "Where I am now" },
      {
        type: "p",
        text: "Databases aren't scary anymore. They're just opinions about where your data lives. SQL is great. MongoDB is great. The best one is the one that matches how your app thinks.",
      },
      {
        type: "p",
        text: "Start with the question your app needs to answer. Then design backward from there. That's it. That's the whole secret.",
      },
    ],
  },
  {
    id: "03",
    title1: "FRONTEND",
    head: "The React Mental Model Nobody Teaches You",
    date: "Apr 24",
    tag: "React",
    readTime: "6 min read",
    fullContent: [
      { type: "p", text: "Every React tutorial starts the same way." },
      {
        type: "p",
        text: `"A component is just a function that returns JSX." And technically, yes. But that framing will wreck you the moment your app gets real.`,
      },
      {
        type: "p",
        text: "Because components aren't just functions. They're tiny state machines — and once you see them that way, everything changes.",
      },
      { type: "h2", text: "What a state machine actually means" },
      {
        type: "p",
        text: "A state machine has states, and rules about how you move between them. Your Button component? States: idle, hovered, loading, disabled, error. Your Modal? Open or closed. Your Form? Untouched, dirty, submitting, success, failed.",
      },
      {
        type: "p",
        text: "React doesn't make these explicit — that's your job. Most bugs happen when developers pretend the states don't exist, then act surprised when the UI ends up in an impossible one.",
      },
      { type: "h2", text: "The bug that taught me this" },
      {
        type: "p",
        text: "I had a button that triggered an API call. It had three pieces of state: isLoading, isError, data. I managed them separately. I thought I was being organized.",
      },
      {
        type: "p",
        text: "Then a user clicked the button twice fast. Loading was true. Then error was true. But data was also stale from the last call. The UI showed all three states simultaneously and had a complete meltdown.",
      },
      {
        type: "p",
        text: `The fix? I collapsed it into one state: status: 'idle' | 'loading' | 'success' | 'error'. Now impossible states are literally impossible to represent.`,
      },
      { type: "h2", text: "The rule that changed how I write components" },
      {
        type: "p",
        text: "If two pieces of state can contradict each other, they shouldn't be two pieces of state.",
      },
      {
        type: "p",
        text: "Before you add a new useState, ask: can this conflict with what I already have? If yes, restructure.",
      },
      { type: "h2", text: "Why debugging gets easier" },
      {
        type: "p",
        text: `When you think in state machines, you stop asking "why is the UI broken?" and start asking "how did I end up in this state?" Those are very different questions. The second one has an answer.`,
      },
      {
        type: "p",
        text: "You trace the transitions. You find the missing guard. You fix it. Done. Almost enjoyable. I stand by that.",
      },
    ],
  },
  {
    id: "04",
    title1: "CAREER",
    head: "Shipping Your First Side Project Is the Degree",
    date: "Apr 12",
    tag: "Career",
    readTime: "4 min read",
    fullContent: [
      {
        type: "p",
        text: "I applied to 47 jobs with a portfolio I was proud of.",
      },
      {
        type: "p",
        text: "Clean code. Nice UI. A weather app, a todo list, a movie search thing with a fancy filter. Crickets. Three callbacks. Zero offers.",
      },
      {
        type: "p",
        text: "Then I built one ugly, half-broken tool that solved a problem I personally had — and everything changed.",
      },
      { type: "h2", text: "The project" },
      {
        type: "p",
        text: "I was freelancing at the time and kept losing track of client revision requests. They'd come in via WhatsApp, email, Google Docs comments, and the occasional voice note. I was dropping things. Clients were frustrated.",
      },
      {
        type: "p",
        text: "So I built a dead-simple internal tool: a single page where I could paste revision notes, tag them by client and status, and mark them done. No auth. No database. LocalStorage and a JSON file. Deployed it on Vercel in an afternoon.",
      },
      {
        type: "p",
        text: "It was ugly. It had bugs. I used it every single day.",
      },
      { type: "h2", text: "What happened next" },
      {
        type: "p",
        text: "I mentioned it offhandedly in an interview — not even as a portfolio piece, just as context for how I work. The interviewer stopped me mid-sentence.",
      },
      {
        type: "p",
        text: `"Wait, you built that for yourself? And you're still using it?" That one project did more for me than every tutorial project combined. Because it showed something a portfolio never can: that I build things to solve problems, not to impress people.`,
      },
      { type: "h2", text: "Why side projects hit different" },
      {
        type: "p",
        text: "Todo apps prove you know React. Real tools prove you think like a developer. The difference is the problem. One is invented. The other is real. Real problems have edge cases, annoying users (even if that user is you), and pressure to actually work.",
      },
      { type: "p", text: "That pressure is the education." },
      { type: "h2", text: "What I'd tell you to build" },
      {
        type: "p",
        text: "Don't build what looks good on a portfolio. Build what would make your own life 10% less annoying. Automate the thing you do manually every week. Track the thing you always forget.",
      },
      {
        type: "p",
        text: "Ship it even if it's broken. Fix it because you use it. That's the degree. Everything else is homework.",
      },
    ],
  },
];

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postIndex = posts.findIndex((p) => p.id === id);
  if (postIndex === -1) notFound();

  const post = posts[postIndex];
  const nextPost = posts[(postIndex + 1) % posts.length];

  return (
    <main
      style={{
        maxWidth: 680,
        margin: "0 auto",
        padding: "2rem 1.5rem 4rem",
        fontFamily: "Georgia, serif",
      }}
    >
      <Link
        href="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "monospace",
          fontSize: 12,
          letterSpacing: "0.05em",
          color: "#888",
          textDecoration: "none",
          border: "0.5px solid #ddd",
          padding: "6px 14px",
          borderRadius: 999,
          marginBottom: "3rem",
        }}
      >
        ← all posts
      </Link>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: tagColor[post.title1],
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {post.title1}
      </p>

      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 500,
          fontStyle: "italic",
          lineHeight: 1.2,
          margin: "0 0 1.25rem",
        }}
      >
        {post.head}
      </h1>

      <div
        style={{
          fontFamily: "monospace",
          fontSize: 12,
          color: "#888",
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: "2.5rem",
        }}
      >
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.tag}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "0.5px solid #e0e0e0",
          marginBottom: "2.5rem",
        }}
      />

      <article>
        {post.fullContent.map((block, i) =>
          block.type === "h2" ? (
            <h2
              key={i}
              style={{
                fontSize: 22,
                fontWeight: 500,
                fontStyle: "italic",
                margin: "2.5rem 0 1rem",
                borderLeft: "2.5px solid #222",
                paddingLeft: 14,
              }}
            >
              {block.text}
            </h2>
          ) : (
            <p
              key={i}
              style={{ fontSize: 18, lineHeight: 1.85, margin: "0 0 1.5rem" }}
            >
              {block.text}
            </p>
          ),
        )}
      </article>

      <div
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "0.5px solid #e0e0e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>
          Thanks for reading.
        </span>
        <Link
          href={`/blog/${nextPost.id}`}
          style={{
            fontFamily: "monospace",
            fontSize: 12,
            color: "inherit",
            textDecoration: "none",
            border: "0.5px solid #ccc",
            padding: "8px 18px",
            borderRadius: 999,
          }}
        >
          Next: {nextPost.head.slice(0, 28)}… →
        </Link>
      </div>
    </main>
  );
}
