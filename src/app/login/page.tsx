import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--td-bg)] text-[var(--td-fg)]">
      <div className="grid-mask">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
          <div className="panel max-w-lg p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--td-muted)]">
              Secure Access
            </p>
            <h1 className="mt-4 text-3xl">Login to toodlersdata</h1>
            <p className="mt-3 text-sm text-[var(--td-muted)]">
              Google-only sign in. No passwords stored. Farmers stay in control
              of every device, farm, and field.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                className="border border-[var(--td-accent)] bg-[var(--td-accent)] px-5 py-3 text-center text-xs uppercase tracking-[0.3em] text-black transition hover:translate-y-[-2px]"
                href="/api/auth/signin/google"
              >
                Continue with Google
              </a>
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </div>
            <div className="mt-6 text-xs text-[var(--td-muted)]">
              By continuing, you agree to toodlersdata usage and data policies.
            </div>
            <Link
              href="/dashboard"
              className="mt-6 inline-block text-xs uppercase tracking-[0.3em] text-[var(--td-accent)]"
            >
              Skip to Demo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
