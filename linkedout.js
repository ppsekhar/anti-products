import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const generateSnarkyComment = (input) => {
  const templates = [
    `Oh wow, "${input}". Truly groundbreaking.`,
    `Just what the world needed—${input}.`,
    `Wow, ${input}? I'm sure no one's ever thought of that before.`,
    `Hold the front page: ${input}!`,
    `This changes everything: ${input} 🙄`,
    `Can’t wait to pretend to care about ${input}.`,
    `${input}—so brave, so bold, so... whatever.`,
    `How do you come up with this stuff? ${input} is just... wow.`,
    `Finally, someone said it: ${input}. We're saved.`,
    `Okay but like... ${input}? Groundbreaking. Revolutionary. Never been done before.`,
    `Synergizing disruption by ${input}—huge if true.`,
    `Lowkey humbled to read ${input}, highkey questioning reality.`,
  ];
  const index = Math.floor(Math.random() * templates.length);
  return templates[index];
};

const generateResumeRewrite = (resume) => {
  return resume
    .replace(/Led a team/g, "Was technically present while a team did the work")
    .replace(/Collaborated with/g, "Slightly participated in meetings about")
    .replace(/Managed/g, "Watched from a distance as things happened")
    .replace(/Achieved/g, "Pretended to care about achieving");
};

const buzzwordReplace = (input) => {
  const buzzwords = {
    "synergy": "random group effort that may or may not work",
    "disrupt": "confuse and make everyone anxious",
    "optimize": "make something slightly more complicated",
    "pivot": "do everything else instead of what you should be doing",
    "value-added": "most likely unnecessary addition",
  };
  return input
    .split(" ")
    .map((word) => buzzwords[word.toLowerCase()] || word)
    .join(" ");
};

const generateLinkedInPost = (idea) => {
  return `Just feeling #blessed to be able to ${idea.toUpperCase()}! Excited to see where this journey takes me 🌟 #synergy #disruption #grateful 🙌`;
};

const calculateWorkLifeBalance = (hoursWorked) => {
  if (hoursWorked >= 80) {
    return "You’ve mastered work-life balance! But mostly work. Life is overrated, anyway.";
  } else if (hoursWorked >= 40) {
    return "Great job! You’re a unicorn with mythical work-life balance.";
  } else {
    return "Work-life balance? Sounds like a luxury, not a reality.";
  }
};

const generateCompanyCulture = (companyName) => {
  return `At ${companyName}, we value “innovative thinking” (which means doing what we told you). We also emphasize “work-life balance” (until you hit your quota).`;
};

export default function LinkedOutDemo() {
  const [about, setAbout] = useState(generateSnarkyComment("I once debugged a dropdown for 3 days."));
  const [editingAbout, setEditingAbout] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [resume, setResume] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workHours, setWorkHours] = useState(40);
  const [generatedPost, setGeneratedPost] = useState("");

  const handleNewPost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      name: "Priya Puram",
      content: generateSnarkyComment(newPost.trim()),
      reactions: { clap: 0, fire: 0, rocket: 0 },
    };
    setPosts([...posts, post]);
    setNewPost("");
  };

  const handleGenerateResume = () => {
    const rewrittenResume = generateResumeRewrite(resume);
    alert(rewrittenResume);  // Show the sarcastic resume rewrite in an alert
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🔗 LinkedOut</h1>

      {/* Resume Rewrite Feature */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Upload Resume (Honest Edition)</h3>
          <Textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume here..."
            className="mb-2"
          />
          <Button onClick={handleGenerateResume}>Rewrite My Resume</Button>
        </CardContent>
      </Card>

      {/* Buzzword and Post Features */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Start a Post</h3>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(buzzwordReplace(e.target.value))}
            placeholder="What performative thing are you humbled to announce?"
            className="mb-2"
          />
          <Button onClick={handleNewPost}>Post (with AI snark)</Button>
        </CardContent>
      </Card>

      {/* Work-Life Balance Calculator */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Work-Life Balance Calculator</h3>
          <Input
            type="number"
            value={workHours}
            onChange={(e) => setWorkHours(Number(e.target.value))}
            className="mb-2"
          />
          <p>{calculateWorkLifeBalance(workHours)}</p>
        </CardContent>
      </Card>

      {/* Company Culture Generator */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Generate Company Culture</h3>
          <Input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mb-2"
            placeholder="Enter company name"
          />
          <p>{generateCompanyCulture(companyName)}</p>
        </CardContent>
      </Card>

      {/* Generated LinkedIn Post */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">LinkedIn Post Generator</h3>
          <Textarea
            value={generatedPost}
            onChange={(e) => setGeneratedPost(e.target.value)}
            placeholder="Give me a vague LinkedIn post idea"
            className="mb-2"
          />
          <Button onClick={() => setGeneratedPost(generateLinkedInPost(generatedPost))}>
            Generate LinkedIn Post
          </Button>
          {generatedPost && <p className="mt-2">{generatedPost}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
