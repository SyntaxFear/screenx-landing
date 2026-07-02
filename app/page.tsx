import Image from "next/image";
import Link from "next/link";
import {
  Archive,
  Check,
  ChevronRight,
  Command,
  Download,
  ExternalLink,
  Grid3X3,
  Keyboard,
  Monitor,
  MousePointer2,
  ShieldCheck,
} from "lucide-react";
import { formatBytes, latestRelease, releaseId, releases } from "@/src/lib/releases";

const featureCards = [
  {
    title: "Drag placement",
    description: "Hold Command, drag a window, preview the target area, and release to place it.",
    icon: MousePointer2,
  },
  {
    title: "Quick layouts",
    description: "Use hotkeys for halves, thirds, quarters, center, maximize, and two-thirds layouts.",
    icon: Keyboard,
  },
  {
    title: "Per-screen grids",
    description: "Give every connected display its own rows, columns, spacing, and canvas behavior.",
    icon: Grid3X3,
  },
  {
    title: "Saved workspaces",
    description: "Capture familiar arrangements and restore windows back into place later.",
    icon: Archive,
  },
];

const workflow = [
  "Download the notarized DMG.",
  "Drag ScreenX into Applications.",
  "Allow Accessibility access.",
  "Arrange the active window with drag, canvas, or hotkeys.",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/screenx-hero-workspace.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <header className="site-header">
          <Link className="brand-link" href="/" aria-label="ScreenX home">
            <Image src="/images/screenx-icon.png" alt="" width={36} height={36} priority />
            <span>ScreenX</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#install">Install</a>
            <Link href="/releases">Releases</Link>
          </nav>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Native macOS window manager</p>
          <h1 id="hero-title">ScreenX</h1>
          <p className="hero-copy">
            Design your desktop canvas with quick layouts, per-screen grids, live drag previews,
            and saved workspaces across one monitor or many.
          </p>
          <div className="hero-actions" aria-label="Download actions">
            <Link className="button button-primary" href="/download">
              <Download size={18} aria-hidden="true" />
              Download for macOS
            </Link>
            <a className="button button-secondary" href="#how-it-works">
              See how it works
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
          <dl className="release-strip" aria-label="Latest release details">
            <div>
              <dt>Latest</dt>
              <dd>{latestRelease.version}</dd>
            </div>
            <div>
              <dt>macOS</dt>
              <dd>{latestRelease.minMacOS}+</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>{formatBytes(latestRelease.fileSizeBytes)} MB</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="features" className="section section-light">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Main features</p>
            <h2>Everything stays fast, visible, and under your control.</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.title}>
                  <div className="icon-surface">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section section-canvas">
        <div className="section-inner split-layout">
          <div className="copy-column">
            <p className="eyebrow">Workspace canvas</p>
            <h2>Shape each display around the way you actually work.</h2>
            <p>
              ScreenX reads the active window and the visible area of the display, then places the
              app into the exact layout you choose. It supports simple splits, custom grids, and
              saved arrangements without needing Screen Recording permission.
            </p>
            <div className="capability-list">
              <span>
                <Monitor size={18} aria-hidden="true" />
                Multi-display profiles
              </span>
              <span>
                <Command size={18} aria-hidden="true" />
                Custom hotkeys
              </span>
              <span>
                <ShieldCheck size={18} aria-hidden="true" />
                Local window control
              </span>
            </div>
          </div>
          <div className="workspace-visual" aria-label="ScreenX grid placement preview">
            <div className="visual-toolbar">
              <span />
              <span />
              <span />
              <strong>Display Layouts</strong>
            </div>
            <div className="visual-grid">
              <div className="visual-cell visual-cell-active">Left</div>
              <div className="visual-cell">Center</div>
              <div className="visual-cell">Right</div>
              <div className="visual-cell wide">Saved workspace</div>
              <div className="visual-cell">Guide</div>
            </div>
          </div>
        </div>
      </section>

      <section id="install" className="section section-install">
        <div className="section-inner install-layout">
          <div>
            <p className="eyebrow">Install</p>
            <h2>Download, drag to Applications, then start arranging.</h2>
            <ol className="install-steps">
              {workflow.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="installer-preview">
            <Image
              src="/images/dmg-installer-background.png"
              alt="ScreenX drag-to-Applications installer background"
              width={760}
              height={480}
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="section section-release">
        <div className="section-inner release-layout">
          <div>
            <p className="eyebrow">Latest release</p>
            <h2>{latestRelease.title}</h2>
            <p>{latestRelease.summary}</p>
            <div className="release-checks">
              <span>
                <Check size={16} aria-hidden="true" />
                Developer ID notarized
              </span>
              <span>
                <Check size={16} aria-hidden="true" />
                Stapled for Gatekeeper
              </span>
              <span>
                <Check size={16} aria-hidden="true" />
                SHA256 published
              </span>
            </div>
          </div>
          <div className="release-panel" id={releaseId(latestRelease.version)}>
            <div className="release-panel-header">
              <Image src="/images/screenx-icon.png" alt="" width={48} height={48} />
              <div>
                <strong>{latestRelease.fileName}</strong>
                <span>{formatBytes(latestRelease.fileSizeBytes)} MB</span>
              </div>
            </div>
            <code>{latestRelease.sha256}</code>
            <div className="release-panel-actions">
              <Link className="button button-primary" href={latestRelease.downloadPath}>
                <Download size={18} aria-hidden="true" />
                Download {latestRelease.version}
              </Link>
              <Link className="button button-secondary" href="/releases">
                Older versions
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Image src="/images/screenx-icon.png" alt="" width={40} height={40} />
          <span>ScreenX</span>
        </div>
        <nav aria-label="Creator links">
          <a href="https://github.com/SyntaxFear" rel="noreferrer" target="_blank">
            GitHub
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/levani-parastashvili/" rel="noreferrer" target="_blank">
            LinkedIn
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          <a href="https://x.com/Parastashvilii" rel="noreferrer" target="_blank">
            X
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </nav>
      </footer>
    </main>
  );
}
