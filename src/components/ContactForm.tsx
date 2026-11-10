"use client";
import React from "react";
import { Loader2, ChevronRight } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<{ kind: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);
    const form = event.currentTarget;
    const values = new FormData(form);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(values.entries())),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Email delivery failed.");
      form.reset();
      setStatus({ kind: "success", message: "Thanks for reaching out. Your message was sent." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Could not send your message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mx-auto mt-4 w-full space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" name="fullName" placeholder="Your name" autoComplete="name" minLength={2} maxLength={100} required />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="you@example.com" type="email" autoComplete="email" maxLength={254} required />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="How can I help?" minLength={3} maxLength={160} required />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Write your message..." minLength={10} maxLength={5000} required />
      </div>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status && <p role="status" aria-live="polite" className={status.kind === "success" ? "text-sm text-green-600" : "text-sm text-destructive"}>{status.message}</p>}
      <Button disabled={loading} className="relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white dark:from-zinc-900 dark:to-zinc-900" type="submit">
        {loading ? <span className="flex items-center justify-center"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</span> : <span className="flex items-center justify-center">Send Message <ChevronRight className="ml-4 h-4 w-4" /></span>}
      </Button>
    </form>
  );
};

export default ContactForm;
