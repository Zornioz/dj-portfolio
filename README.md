# ZORNIOZ — Website

Statische Website (HTML/CSS/JS, keine Build-Tools nötig) für Producer/DJ ZORNIOZ.

## Struktur
```
index.html          Seiteninhalt
style.css            Design (Farben, Typo, Layout, Animationen)
script.js             Kleine Interaktionen (Jahr im Footer, Scroll-Reveal)
assets/profile/       Profilfoto
assets/covers/        Song-Cover
```

## Lokal ansehen
Einfach `index.html` per Doppelklick im Browser öffnen, oder mit einem simplen lokalen Server:
```
python3 -m http.server 8000
```
und dann `http://localhost:8000` öffnen.

## Auf GitHub Pages veröffentlichen
1. Neues Repository auf GitHub erstellen, z. B. `zornioz-website`.
2. Diesen kompletten Ordnerinhalt (index.html, style.css, script.js, assets/) ins Repo pushen:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/zornioz-website.git
   git push -u origin main
   ```
3. Im Repo unter **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main`, Ordner: `/ (root)`
   - Speichern.
4. Nach 1–2 Minuten ist die Seite unter `https://DEIN-USERNAME.github.io/zornioz-website/` live.

Falls du die Seite unter einer eigenen Domain (z. B. `zornioz.com`) betreiben willst: eine Datei `CNAME` mit dem Domainnamen als einzigem Inhalt ins Root-Verzeichnis legen und bei deinem Domain-Provider einen CNAME-Eintrag auf `DEIN-USERNAME.github.io` setzen.

## Was du später noch anpassen solltest

- **YouTube-Sets**: Aktuell verlinkt der Set-Bereich auf deinen Kanal (`youtube.com/@Zornioz`), da noch keine Set-Videos online sind. Sobald ein Set hochgeladen ist, in `index.html` im Abschnitt `<!-- ============ BOOKING ============ -->` den `href` der `.set-card` auf den konkreten Video-Link ändern und ggf. weitere `.set-card`-Blöcke für zusätzliche Sets ergänzen (Struktur einfach kopieren).
- **Kontakt**: Booking-Anfragen laufen aktuell über SoundCloud-Nachrichten. Wenn du eine Booking-Mail oder Instagram nutzen willst, im Footer (`<!-- ============ CONTACT / FOOTER ============ -->`) den Link/Text entsprechend anpassen, z. B. `href="mailto:booking@deinedomain.de"`.
- **Neue Tracks**: Cover-Bild in `assets/covers/` ablegen, dann in `index.html` im Abschnitt `<!-- ============ TRACKS ============ -->` einen weiteren `.track-card`-Block nach demselben Muster ergänzen.

## Design-Notizen
- Farben: Cyan-Blau (`#2fd8ff`) für "Slow Uptempo"/Primäraktionen, Violett (`#9b5cff`) für "Uptempo"/Sekundäres, dunkler fast-schwarzer Hintergrund.
- Typografie: „Rajdhani“ (Headlines, technisch/kantig), „Space Grotesk“ (Fließtext), „JetBrains Mono“ (Labels, Eyebrows) — über Google Fonts eingebunden.
- Signature-Element: Glitch-Effekt auf dem Namen im Hero + dezente Scanlines/Grain über der ganzen Seite, passend zur düsteren Cyberpunk-Bildsprache der Cover.
- Barrierefreiheit: sichtbarer Fokus-Ring, `prefers-reduced-motion` wird respektiert, Alt-Texte auf allen Bildern.
