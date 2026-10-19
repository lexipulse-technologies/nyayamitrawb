/**
 * NYAYAMITRA PROPRIETARY INTELLECTUAL PROPERTY & ANTI-REPLICATION SHIELD
 * Owner & Administrator: LEXIPULSE TECHNOLOGIES (https://nyayamitrawb.in)
 * 
 * Enforces:
 * 1. Global text selection lock (except form inputs & textareas)
 * 2. Right-click context menu neutralization
 * 3. Ghost image and text drag-and-drop prevention
 * 4. Keyboard shortcuts blocking (Ctrl+S, Ctrl+U, Ctrl+P, Ctrl+A outside inputs)
 * 5. Production-only DevTools interception (F12, Ctrl+Shift+I/J/C allowed in local dev)
 * 6. Client-side frame-busting against phishing iframes
 */

function isInputOrTextarea(target: EventTarget | null): boolean {
  if (!target || !(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return tagName === 'input' || tagName === 'textarea' || target.isContentEditable;
}

export function initSecurityShield(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // 1. Client-Side Anti-Clickjacking Frame-Busting
  try {
    if (window.top && window.top !== window.self) {
      window.top.location = window.self.location;
    }
  } catch {
    // Sandboxed iframe defense
  }

  // 2. Right-Click Context Menu Interception (Exemption for form inputs)
  document.addEventListener('contextmenu', (e: MouseEvent) => {
    if (!isInputOrTextarea(e.target)) {
      e.preventDefault();
    }
  }, { capture: true });

  // 3. Clipboard Protection: Block Copy & Cut on content (Exemption for form inputs)
  document.addEventListener('copy', (e: ClipboardEvent) => {
    if (!isInputOrTextarea(e.target)) {
      e.preventDefault();
    }
  }, { capture: true });

  document.addEventListener('cut', (e: ClipboardEvent) => {
    if (!isInputOrTextarea(e.target)) {
      e.preventDefault();
    }
  }, { capture: true });

  // 4. Drag & Drop Extraction Block (Exemption for form inputs)
  document.addEventListener('dragstart', (e: DragEvent) => {
    if (!isInputOrTextarea(e.target)) {
      e.preventDefault();
    }
  }, { capture: true });

  // 5. Keyboard Shortcut Interception
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const key = e.key.toLowerCase();

    // A. Block Ctrl+S / Cmd+S (Save Webpage to Disk)
    if (isCtrlOrCmd && key === 's') {
      e.preventDefault();
      return;
    }

    // B. Block Ctrl+U / Cmd+U (View Page Source)
    if (isCtrlOrCmd && key === 'u') {
      e.preventDefault();
      return;
    }

    // C. Block Ctrl+P / Cmd+P (Direct Browser Print - Referral Slip Button remains functional)
    if (isCtrlOrCmd && key === 'p') {
      e.preventDefault();
      return;
    }

    // D. Block Ctrl+A / Cmd+A (Select All) outside of form fields
    if (isCtrlOrCmd && key === 'a') {
      if (!isInputOrTextarea(e.target)) {
        e.preventDefault();
        return;
      }
    }

    // E. Block DevTools Shortcuts strictly in PRODUCTION only (allowed in local dev)
    const isProduction = import.meta.env.PROD;
    if (isProduction) {
      if (
        e.key === 'F12' ||
        (isCtrlOrCmd && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))
      ) {
        e.preventDefault();
        return;
      }
    }
  }, { capture: true });

  // 6. Security Warning Banner in Production Browser Console
  if (import.meta.env.PROD) {
    try {
      setTimeout(() => {
        console.clear();
        console.log(
          '%cSTOP! %cAll 300 civil legal workflows, software engines, and UI designs are proprietary intellectual property of LEXIPULSE TECHNOLOGIES. Unauthorized reproduction, automated scraping, or extraction is strictly prohibited under the Copyright Act, 1957 and Information Technology Act, 2000.',
          'color: #ef4444; font-size: 20px; font-weight: 900;',
          'color: #0f2b48; font-size: 12px; font-weight: 600;'
        );
      }, 500);
    } catch {}
  }
}