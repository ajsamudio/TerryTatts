"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network");
      toast.success("Message sent. I'll get back to you within 48 hours.");
      setData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Couldn't send. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <Label htmlFor="c-name" className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Name
        </Label>
        <Input
          id="c-name"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="mt-2"
        />
      </div>
      <div>
        <Label htmlFor="c-email" className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Email
        </Label>
        <Input
          id="c-email"
          type="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="mt-2"
        />
      </div>
      <div>
        <Label htmlFor="c-msg" className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Message
        </Label>
        <Textarea
          id="c-msg"
          required
          rows={5}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="mt-2"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
      >
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
