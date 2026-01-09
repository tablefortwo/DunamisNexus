# Dunamis Nexus - Main Site Rebuild

This is the rebuilt version of dunamisnexus.net matching the theme and style of lan.dunamisnexus.net.

## ✅ What's Included

All files needed to replace your current dunamisnexus.net:

- `index.html` - Main page with all sections
- `styles.css` - Styling matching LAN site theme
- `script.js` - Interactive features and animations

## 🎨 Theme Features

**Visual Design (Matching LAN Site):**
- Same color scheme (Blue #4a90e2, Purple #7b68ee, Cyan #00d4ff)
- Dark theme with gradients
- Card-based layouts
- Smooth animations and fade-in effects
- Responsive design (mobile, tablet, desktop)

**Sections Included:**
1. **Navigation Bar** - Fixed header with logo and menu
2. **Hero Section** - Welcome message with Bible verse
3. **About Section** - Mission statement with 3 feature cards
4. **Community Links** - 6 styled cards (Forum, Discord, Mastodon, LAN Events, Ko-fi, Merch)
5. **Calendar** - Google Calendar embed (preserved from original)
6. **Footer** - Links and copyright

## 🔗 Cross-Linking

**Main Site → LAN Site:**
- "LAN Events" button in navigation (orange highlight)
- "LAN Events" card in Community section

**LAN Site → Main Site:**
- Already has "Main Site" link in navigation

## 📁 File Structure

Your repository should look like this:

```
DunamisNexus/
├── index.html          (REPLACE with new file)
├── styles.css          (NEW FILE - add this)
├── script.js           (NEW FILE - add this)
└── media/
    ├── logo1.png       (KEEP - already using this)
    └── favicon.png     (KEEP - already using this)
```

## 🚀 Installation Steps

### Option 1: Direct Replacement (Recommended)

1. **Backup your current files** (just in case)
2. **Replace** `index.html` with the new one
3. **Add** `styles.css` to your repository root
4. **Add** `script.js` to your repository root
5. **Commit and push** to GitHub
6. Wait for GitHub Pages to rebuild (usually 1-2 minutes)
7. Visit https://dunamisnexus.net to see the changes

### Option 2: Test Locally First

1. Download all three files
2. Put them in a local folder with your `media/` folder
3. Open `index.html` in your browser
4. Once satisfied, upload to GitHub

## ⚙️ Customization Guide

### Change Colors

Edit `styles.css` (lines 5-15):

```css
:root {
    --primary-color: #4a90e2;      /* Main blue */
    --secondary-color: #7b68ee;     /* Purple accent */
    --accent-color: #00d4ff;        /* Cyan highlight */
    /* etc. */
}
```

### Update Content

**Hero Section** (`index.html` line ~44-50):
- Change tagline
- Update Bible verse

**About Section** (`index.html` line ~56-80):
- Modify mission statement
- Edit the 3 feature cards

**Community Links** (`index.html` line ~88-120):
- Add/remove links
- Update URLs

**Calendar** (`index.html` line ~130):
- Already configured with your Google Calendar
- No changes needed

### Add New Sections

Copy the section structure from the HTML and add your own:

```html
<section id="your-section" class="section">
    <div class="container">
        <h2>Your Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

## 📱 Mobile Responsive

The site automatically adapts to:
- **Desktop** (1200px+) - Full layout with multi-column grids
- **Tablet** (768px-1200px) - Adjusted layouts
- **Mobile** (< 768px) - Single column, hamburger menu

## 🎯 Key Improvements Over Original

| Feature | Old Site | New Site |
|---------|----------|----------|
| Navigation | None | Fixed navbar with menu |
| Design | Basic CSS | Polished theme with gradients |
| Layout | Simple centered | Multi-section with cards |
| Mobile | Basic responsive | Full mobile menu + optimized |
| Animations | None | Fade-ins, hover effects, smooth scroll |
| Cross-linking | Manual | Integrated nav + highlighted LAN link |
| Calendar | Basic iframe | Styled container with responsive height |

## ✨ Features Matching LAN Site

- ✅ Same color variables
- ✅ Same card hover effects
- ✅ Same navigation style
- ✅ Same button styles
- ✅ Same footer layout
- ✅ Same mobile menu
- ✅ Same smooth scroll behavior
- ✅ Same fade-in animations

## 🔧 Troubleshooting

**Images not showing?**
- Make sure `media/logo1.png` and `media/favicon.png` exist in your repo
- Check file paths are correct

**Styles not loading?**
- Ensure `styles.css` is in the same folder as `index.html`
- Clear browser cache (Ctrl+F5)

**Mobile menu not working?**
- Ensure `script.js` is in the same folder as `index.html`
- Check browser console for errors

**Calendar too small on mobile?**
- JavaScript automatically adjusts this
- If not working, check script.js is loaded

## 📝 Notes

- All links from your original site are preserved
- Google Calendar is still embedded exactly as before
- Logo and favicon references are unchanged
- The new design is fully backwards compatible with your current assets

## 🎮 Next Steps

After deploying, you might want to:
1. Add more content to the About section
2. Create blog posts or news section
3. Add member spotlight section
4. Create separate pages for different content areas
5. Add image galleries or testimonials

## 💡 Future Enhancements

Consider adding:
- Blog/news feed
- Member directory
- Game server status
- Upcoming events list (parsed from calendar)
- Newsletter signup
- Testimonials section

---

**Need help?** Ask in the Discord or Forum!

Built with ❤️ for the Dunamis Nexus community.
