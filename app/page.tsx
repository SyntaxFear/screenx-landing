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
  Sparkles,
} from "lucide-react";
import { HeroReveal, Reveal, Stagger, StaggerItem } from "@/components/MotionPrimitives";
import { formatBytes, latestRelease, releaseId } from "@/src/lib/releases";

const featureCards = [
  {
    title: "Drag placement",
    description: "Hold Command, drag a window, preview the target area, and release to place it.",
    icon: MousePointer2,
    accent: "mint",
  },
  {
    title: "Quick layouts",
    description: "Use hotkeys for halves, thirds, quarters, center, maximize, and two-thirds layouts.",
    icon: Keyboard,
    accent: "blue",
  },
  {
    title: "Per-screen grids",
    description: "Give every connected display its own rows, columns, spacing, and canvas behavior.",
    icon: Grid3X3,
    accent: "sage",
  },
  {
    title: "Saved workspaces",
    description: "Capture familiar arrangements and restore windows back into place later.",
    icon: Archive,
    accent: "blush",
  },
];

const heroBadges = [
  {
    label: "Command-drag preview",
    icon: MousePointer2,
  },
  {
    label: "Per-screen profiles",
    icon: Monitor,
  },
  {
    label: "No Screen Recording",
    icon: ShieldCheck,
  },
];

const productSignals = [
  ["Live preview", "See the target before release"],
  ["Custom canvas", "Rows, columns, gaps per display"],
  ["Fast restore", "Saved layouts for repeated work"],
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

        <HeroReveal className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            Native macOS window manager
          </p>
          <h1 id="hero-title">ScreenX</h1>
          <p className="hero-copy">
            Design your desktop canvas with quick layouts, per-screen grids, live drag previews,
            and saved workspaces across one monitor or many.
          </p>
          <div className="hero-badges" aria-label="ScreenX highlights">
            {heroBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span key={badge.label}>
                  <Icon size={16} aria-hidden="true" />
                  {badge.label}
                </span>
              );
            })}
          </div>
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
        </HeroReveal>

        <HeroReveal className="hero-stage" delay={0.18} aria-hidden="true">
          <div className="stage-window">
            <div className="stage-toolbar">
              <span />
              <span />
              <span />
              <strong>ScreenX Canvas</strong>
            </div>
            <div className="stage-grid">
              <div className="stage-cell stage-cell-muted" />
              <div className="stage-cell stage-cell-active">
                <span>Preview</span>
              </div>
              <div className="stage-cell stage-cell-blue" />
              <div className="stage-cell stage-cell-wide">
                <span>Saved workspace</span>
              </div>
              <div className="stage-cell stage-cell-sage" />
            </div>
            <div className="stage-cursor">
              <MousePointer2 size={18} />
            </div>
          </div>
          <div className="stage-pill stage-pill-hotkey">
            <Command size={17} />
            Hold Command
          </div>
          <div className="stage-pill stage-pill-grid">
            <Grid3X3 size={17} />
            3 x 1 canvas
          </div>
          <div className="stage-measure">
            <span>Placement</span>
            <strong>Left 33%</strong>
          </div>
        </HeroReveal>
      </section>

      <section id="features" className="section section-light">
        <div className="section-inner">
          <Reveal className="section-heading">
            <p className="eyebrow">Main features</p>
            <h2>Everything stays fast, visible, and under your control.</h2>
          </Reveal>
          <Reveal className="signal-row">
            {productSignals.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </Reveal>
          <Stagger className="feature-grid" delay={0.08}>
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem className={`feature-card feature-card-${feature.accent}`} key={feature.title}>
                  <div className="icon-surface">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section id="how-it-works" className="section section-canvas">
        <div className="section-inner split-layout">
          <Reveal className="copy-column">
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
          </Reveal>
          <Reveal className="workspace-visual" aria-label="ScreenX grid placement preview">
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
            <div className="visual-cursor">
              <MousePointer2 size={17} aria-hidden="true" />
              Drop preview
            </div>
          </Reveal>
        </div>
      </section>

      <section id="install" className="section section-install">
        <div className="section-inner install-layout">
          <Reveal>
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
          </Reveal>
          <Reveal className="installer-preview">
            <Image
              src="/images/dmg-installer-background.png"
              alt="ScreenX drag-to-Applications installer background"
              width={760}
              height={480}
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-release">
        <div className="section-inner release-layout">
          <Reveal>
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
          </Reveal>
          <Reveal className="release-panel" id={releaseId(latestRelease.version)}>
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
          </Reveal>
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
