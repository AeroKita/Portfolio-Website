"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([{
    id: "welcome",
    role: "assistant",
    content: "Hi this is AI-Damand, how can I help you today :)",
  }]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isSending) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with ${res.status}`);
      }
      const data: { answer?: string; question?: string } = await res.json();
      const answer = data?.answer ?? "Sorry, I couldn't get a response.";
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: "There was an error contacting the assistant. Please try again." },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg border border-white/10 bg-white/5 p-4 text-white">
      <div ref={containerRef} className="mb-3 max-h-[50vh] overflow-y-auto pr-1 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={m.role === "assistant" ? "flex items-start gap-2" : "flex items-start gap-2 justify-end"}>
            <div className={m.role === "assistant" ? "rounded-md bg-white/10 px-3 py-2" : "rounded-md bg-blue-600/70 px-3 py-2"}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex items-center gap-2">
        <input
          className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 outline-none focus:ring-2 focus:ring-blue-400/50"
          placeholder="Ask me anything about Damand…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSending}
        />
        <Button type="submit" disabled={isSending || !input.trim()}>
          {isSending ? "Sending…" : "Send"}
        </Button>
      </form>
    </div>
  );
}


