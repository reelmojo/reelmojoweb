export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 py-10 text-center border-t border-muted">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ReelMojo. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 justify-center">
          <a
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:underline"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:underline"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-sm text-muted-foreground hover:underline"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a
            href="/about"
            className="text-sm text-muted-foreground hover:underline"
            rel="noopener noreferrer"
          >
            About
          </a>
        </nav>
      </div>
      <div className="mt-4 text-xs text-muted-foreground/70">
        ReelMojo is an independent digital content platform. All trademarks and copyrights belong to their respective owners.
      </div>
    </footer>
  );
}
