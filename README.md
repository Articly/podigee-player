# Articly Podigee Player Skin

A premium, highly customized, responsive CSS skin designed explicitly for the Podigee Web Player. This configuration strips away the unstyled native clutter to deliver a modern, rounded card layout tailored for the Articly platform.

---

## 🚀 Key Features

* **True Center-Aligned Controls:** The 5-button playback deck is micro-aligned to counter the asymmetrical footprint of the podcast cover art, achieving optical page centering.
* **Enhanced Playback Icon Font-Scaling:** Forces the inner triangle playback icon font geometry to scale cleanly without relying on fragile SVG scaling engines.
* **Pure CSS Copy Feedback:** Features a green slide-up feedback banner (`Kopiert! ✓`) triggered on button interaction without overhead JavaScript dependencies.
* **Automatic Theme Swapping:** Seamlessly alters background color metrics, borders, and icon contrast parameters between Dark Mode (default) and Light Mode.
* **iOS WebKit Defenses:** Includes specific inline-block constraints targeting Safari mobile layout engines to eliminate compressed or "crumbled" icon fonts.
* **Mobile-First Responsiveness:** Under `480px`, components stack vertically into a modern column array, realigning interactive targets and centering layouts automatically.

---

### 1. Update the Repository
Ensure your latest production code is pushed to your public stylesheet asset file (e.g., `style.css` inside your GitHub repository).

### 2. Configure the Podigee Dashboard
1. Log into your **Podigee Admin Console**.
2. Navigate to your custom player layout settings pane:  
   `Web-Player` ➡️ `Konfiguriere deinen Web-Player für Website und Embedding`.
3. Locate the **External Stylesheet URL** link input field.
4. HTML: https://cdn.jsdelivr.net/gh/Articly/podigee-player@<use hash commit here>/files/index.html
5. CSS: https://cdn.jsdelivr.net/gh/Articly/podigee-player@<use hash commit here>/files/style.css
