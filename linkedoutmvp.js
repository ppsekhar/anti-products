import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const generateSnarkyComment = (input) => {
  const templates = [
    `Just what the world needed—${input}.`,
    `Wow, ${input}? I'm sure no one's ever thought of that before.`,
    `Hold the front page: ${input}!`,
    `This changes everything: ${input} 🙄`,
    `Can’t wait to pretend to care about ${input}.`,
    `${input}—so brave, so bold, so... whatever.`,
    `How do you come up with this stuff? ${input} is just... wow.`,
    `Finally, someone said it: ${input}. We're saved.`,
    `${input}? Groundbreaking. Revolutionary. Never been done before.`,
    `Synergizing disruption by ${input}—huge if true.`,
    `Lowkey humbled to read ${input}, highkey questioning reality.`
  ];
  const index = Math.floor(Math.random() * templates.length);
  return templates[index];
};

export default function LinkedOutDemo() {
  const [about, setAbout] = useState(
    "Humbled to announce I once debugged a dropdown for 3 days."
  );
  const [editingAbout, setEditingAbout] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Priya Puram",
      content: "Humbled to announce I’m announcing something.",
      reactions: { clap: 0, fire: 0, rocket: 0 },
    },
  ]);
  const [newPost, setNewPost] = useState("");

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

  const handleReact = (postId, emoji) => {
    setPosts(
      posts.map((p) =>
        p.id === postId
          ? {
              ...p,
              reactions: {
                ...p.reactions,
                [emoji]: p.reactions[emoji] + 1,
              },
            }
          : p
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🔗 LinkedOut</h1>

      <Card className="mb-4">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">Priya Puram</h2>
          <p className="text-sm text-gray-500">
            Standup Comedian | Ex-Engineer | VC of Vibes
          </p>
          {editingAbout ? (
            <div className="mt-2">
              <Textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="mb-2"
              />
              <Button size="sm" onClick={() => setEditingAbout(false)}>
                Save
              </Button>
            </div>
          ) : (
            <div className="mt-2">
              <p>{about}</p>
              <Button
                size="sm"
                variant="outline"
                className="mt-2"
                onClick={() => setEditingAbout(true)}
              >
                Edit About
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Start a post</h3>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What performative thing are you humbled to announce?"
            className="mb-2"
          />
          <Button onClick={handleNewPost}>Post (with AI snark)</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <div className="font-semibold">{post.name}</div>
              <p className="mb-2">{post.content}</p>
              <div className="flex space-x-4 text-sm">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleReact(post.id, "clap")}
                >
                  👏 {post.reactions.clap}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleReact(post.id, "fire")}
                >
                  🔥 {post.reactions.fire}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleReact(post.id, "rocket")}
                >
                  🚀 {post.reactions.rocket}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
