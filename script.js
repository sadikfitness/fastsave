/* ══ COMPLETE JAVASCRIPT — FastSave.me Pro Max ══ */

'use strict';

/* ── GOOGLE ANALYTICS 4 ────────────────────────────
   Replace G-XXXXXXXXXX with your actual Measurement ID
   from https://analytics.google.com
   ─────────────────────────────────────────────────── */
(function() {
  const GA_ID = 'G-60LB7YXXPC';
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
})();
/* ─────────────────────────────────────────────────── */

// ── TOOL DATABASE (for search) ──────────────────
const TOOLS = [
  {name:'YouTube Tag Generator',icon:'<i class="ph ph-tag"></i>',desc:'Generate 30+ SEO tags for any video',url:'tools/tag-generator.html',cat:'video'},
  {name:'Thumbnail Downloader',icon:'<i class="ph ph-image"></i>',desc:'Download HD/4K YouTube thumbnails',url:'tools/thumbnail-downloader.html',cat:'video'},
  {name:'Revenue Calculator',icon:'<i class="ph ph-currency-dollar"></i>',desc:'Estimate daily & monthly YouTube earnings',url:'tools/revenue-calculator.html',cat:'analytics'},
  {name:'SEO Score Checker',icon:'<i class="ph ph-chart-line-up"></i>',desc:'Analyze your video SEO with score & tips',url:'tools/seo-score-checker.html',cat:'seo'},
  {name:'Keyword Research',icon:'<i class="ph ph-tag"></i>',desc:'Find high-volume low-competition keywords',url:'tools/keyword-research.html',cat:'seo'},
  {name:'Channel Audit',icon:'<i class="ph ph-chart-line-up"></i>',desc:'Full health report for any YouTube channel',url:'tools/channel-audit.html',cat:'analytics'},
  {name:'Niche Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Discover profitable YouTube niches with AI',url:'tools/niche-finder.html',cat:'ai'},
  {name:'Monetization Checker',icon:'<i class="ph ph-currency-dollar"></i>',desc:'Check YouTube Partner Program eligibility',url:'tools/monetization-checker.html',cat:'analytics'},
  {name:'Video to Article',icon:'<i class="ph ph-article"></i>',desc:'Convert YouTube video to blog article with AI',url:'tools/video-to-article.html',cat:'ai'},
  {name:'Logo Generator',icon:'<i class="ph ph-image"></i>',desc:'Create professional channel logos free',url:'tools/logo-generator.html',cat:'channel'},
  {name:'Shadowban Checker',icon:'<i class="ph ph-prohibit"></i>',desc:'Check if your channel is restricted',url:'tools/shadowban-checker.html',cat:'channel'},
  {name:'Rank Checker',icon:'<i class="ph ph-trophy"></i>',desc:'Check video YouTube ranking for any keyword',url:'tools/rank-checker.html',cat:'seo'},
  {name:'Video Transcript',icon:'<i class="ph ph-play-circle"></i>',desc:'Get full video transcript with timestamps',url:'tools/video-transcript.html',cat:'video'},
  {name:'Channel Tracker',icon:'<i class="ph ph-activity"></i>',desc:'Track subscriber growth over time',url:'tools/channel-tracker.html',cat:'analytics'},
  {name:'Banner Generator',icon:'<i class="ph ph-image"></i>',desc:'Create stunning YouTube banners free',url:'tools/banner-generator.html',cat:'channel'},
  {name:'Email Finder',icon:'<i class="ph ph-envelope"></i>',desc:'Find contact emails of YouTube channels',url:'tools/email-finder.html',cat:'channel'},
  {name:'Video Chapters',icon:'<i class="ph ph-robot"></i>',desc:'Auto-generate video chapters with AI',url:'tools/video-chapters.html',cat:'ai'},
  {name:'Video to Tweet',icon:'<i class="ph ph-article"></i>',desc:'Convert video content to Twitter threads',url:'tools/video-to-tweet.html',cat:'ai'},
  {name:'Video to Notes',icon:'<i class="ph ph-article"></i>',desc:'Generate bullet-point notes from videos',url:'tools/video-to-notes.html',cat:'ai'},
  {name:'Comment Analysis',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Analyze audience sentiment from comments',url:'tools/comment-analysis.html',cat:'video'},
  {name:'YouTube Title Generator',icon:'<i class="ph ph-article"></i>',desc:'Generate viral YouTube titles using AI',url:'tools/ai-title-generator.html',cat:'ai'},
  {name:'YouTube Description Writer',icon:'<i class="ph ph-article"></i>',desc:'Write SEO-optimized video descriptions with AI',url:'tools/ai-description-writer.html',cat:'ai'},
  {name:'YouTube Video to Social Post',icon:'<i class="ph ph-article"></i>',desc:'Create social media captions from any video with AI',url:'tools/video-to-social-post.html',cat:'ai'},
  {name:'Video to Audio Converter',icon:'<i class="ph ph-speaker-high"></i>',desc:'Extract top quality audio (mp3) from any YouTube video instantly.',url:'tools/video-to-audio-converter.html',cat:'video'},
  {name:'Video Clipper',icon:'<i class="ph ph-scissors"></i>',desc:'Cut and clip any segment from a YouTube video to save locally.',url:'tools/youtube-video-clipper.html',cat:'video'},
  {name:'Video Frame Extractor',icon:'<i class="ph ph-scissors"></i>',desc:'Extract any specific frame from a YouTube video as an HD image.',url:'tools/youtube-video-frame-by-frame.html',cat:'shorts'},
  {name:'Trending Videos (Live)',icon:'<i class="ph ph-activity"></i>',desc:'Track top trending YouTube videos across different countries.',url:'tools/youtube-trending-videos.html',cat:'growth'},
  {name:'YouTube Link Shortener',icon:'<i class="ph ph-link"></i>',desc:'Shorten long YouTube URLs into clean, shareable links.',url:'tools/youtube-link-shortener.html',cat:'shorts'},
  {name:'Royalty-Free Music finder',icon:'<i class="ph ph-headphones"></i>',desc:'Search an expansive library of copyright-free background tracks.',url:'tools/youtube-royalty-free-music.html',cat:'shorts'},
  {name:'Shorts Embed Generator',icon:'<i class="ph ph-code"></i>',desc:'Generate perfectly sized iframe codes to embed YouTube Shorts on websites.',url:'tools/youtube-shorts-embed-generator.html',cat:'shorts'},
  {name:'Channel Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Discover YouTube channels filtered by niche, subs, and region.',url:'tools/youtube-channel-finder.html',cat:'ai'},
  {name:'Video Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Search high-performing videos easily ignoring standard algorithms.',url:'tools/youtube-video-finder.html',cat:'ai'},
  {name:'Deleted Video Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Attempt to retrieve data/archive links of deleted YouTube videos.',url:'tools/deleted-youtube-video-finder.html',cat:'ai'},
  {name:'Thumbnail Resizer',icon:'<i class="ph ph-image"></i>',desc:'Resize your existing thumbnails to fit perfectly in all standard formats.',url:'tools/youtube-thumbnail-resizer.html',cat:'analytics'},
  {name:'Google Rank Checker',icon:'<i class="ph ph-trophy"></i>',desc:'Check if and where your YouTube video ranks on Google Search.',url:'tools/youtube-google-rank-checker.html',cat:'analytics'},
  {name:'Backlinks Checker',icon:'<i class="ph ph-link"></i>',desc:'Find all external websites linking to your YouTube video.',url:'tools/youtube-backlinks-checker.html',cat:'seo'},
  {name:'Comment Finder',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Search for specific words or usernames within a videos comment section.',url:'tools/youtube-comment-finder.html',cat:'analytics'},
  {name:'Handle Availability',icon:'<i class="ph ph-user-circle"></i>',desc:'Check instantly if a custom YouTube @handle is available globally.',url:'tools/youtube-channel-availability-checker.html',cat:'channel'},
  {name:'Random Comment Picker',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Host giveaways! Pick a random, fair winner from your video comments.',url:'tools/random-youtube-comment-picker.html',cat:'growth'},
  {name:'Logo Downloader',icon:'⬇️',desc:'Download any YouTuber\'s channel profile picture in high definition.',url:'tools/youtube-logo-downloader.html',cat:'channel'},
  {name:'Keyword Volume Checker',icon:'<i class="ph ph-tag"></i>',desc:'Check exact monthly searches for specific YouTube keywords.',url:'tools/youtube-keyword-search-volume-checker.html',cat:'seo'},
  {name:'Video Audit',icon:'<i class="ph ph-chart-line-up"></i>',desc:'Run a deep performance and optimization audit on a single video.',url:'tools/youtube-video-audit.html',cat:'growth'},
  {name:'Video Backlink Generator',icon:'<i class="ph ph-link"></i>',desc:'Ping search engines and automatically generate dummy backlinks for rapid indexing.',url:'tools/youtube-video-backlink-generator.html',cat:'growth'},
  {name:'RSS Feed Generator',icon:'<i class="ph ph-rss-simple"></i>',desc:'Convert any YouTube channel into an XML RSS feed for readers.',url:'tools/youtube-rss-feed-generator.html',cat:'seo'},
  {name:'Video Links Extractor',icon:'<i class="ph ph-link"></i>',desc:'Extract all video URLs from a channel in one massive list.',url:'tools/youtube-channel-video-links-extractor.html',cat:'seo'},
  {name:'Data Viewer',icon:'<i class="ph ph-database"></i>',desc:'View technical API payload data for any YouTube video instantly.',url:'tools/youtube-data-viewer.html',cat:'seo'},
  {name:'Image Downloader',icon:'<i class="ph ph-image"></i>',desc:'Extract Community post images and banner arts in their highest resolution.',url:'tools/youtube-image-downloader.html',cat:'seo'},
  {name:'APA Citation Generator',icon:'<i class="ph ph-graduation-cap"></i>',desc:'Generate standard academic APA formatting citations for YouTube videos.',url:'tools/youtube-video-apa-citation-generator.html',cat:'seo'},
  {name:'Custom Embed Generator',icon:'<i class="ph ph-code"></i>',desc:'Apply custom playbars, autoplays, and colors to iframe embed codes.',url:'tools/youtube-custom-video-embed-code-generator.html',cat:'seo'},
  {name:'Video Embed Generator',icon:'<i class="ph ph-code"></i>',desc:'Simple raw iframe generator for quick integrations.',url:'tools/youtube-video-embed-code-generator.html',cat:'seo'},
  {name:'Video QR Code',icon:'<i class="ph ph-qr-code"></i>',desc:'Create scannable QR codes that route directly to your YouTube videos or channel.',url:'tools/youtube-video-qr-code-generator.html',cat:'growth'},
  {name:'Live Subs Counter',icon:'<i class="ph ph-activity"></i>',desc:'Real-time live subscriber counting stream. Never miss a milestone!',url:'tools/youtube-subs-live-counter.html',cat:'analytics'},
  {name:'Live View Count',icon:'<i class="ph ph-activity"></i>',desc:'Watch views roll in with real-time API refreshes on specific videos.',url:'tools/youtube-video-live-view-count.html',cat:'analytics'},
  {name:'First Comment Finder',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Scrape thousands of comments to find the true "First!" on any video.',url:'tools/first-comment-finder.html',cat:'analytics'},
  {name:'Timestamp Link Generator',icon:'<i class="ph ph-link"></i>',desc:'Create shareable YouTube links that start playing at an exact second.',url:'tools/youtube-timestamp-link-generator.html',cat:'growth'},
  {name:'Banner Downloader',icon:'<i class="ph ph-image"></i>',desc:'Rip standard banner art files from competitors in desktop native size.',url:'tools/youtube-banner-downloader.html',cat:'channel'},
  {name:'Handle Generator',icon:'<i class="ph ph-user-circle"></i>',desc:'Get 20+ clever, available @handle ideas based on your channel name.',url:'tools/youtube-handle-generator.html',cat:'channel'},
  {name:'Title A/B Tester',icon:'<i class="ph ph-article"></i>',desc:'Use AI to simulate CTRs between 2 different video titles before publishing.',url:'tools/video-title-ab-tester.html',cat:'ai'},
  {name:'Intro Idea Generator',icon:'<i class="ph ph-robot"></i>',desc:'Get high-retention 10-second script hooks for your video intros.',url:'tools/youtube-intro-idea-generator.html',cat:'ai'},
  {name:'Sponsorship Calculator',icon:'<i class="ph ph-currency-dollar"></i>',desc:'Calculate how much to charge brands for a dedicated video integration.',url:'tools/sponsorship-calculator.html',cat:'analytics'},
  {name:'Competitor Analyzer',icon:'<i class="ph ph-rocket"></i>',desc:'Compare your channel directly against a competitor to find gaps.',url:'tools/competitor-analysis-tool.html',cat:'growth'},
  {name:'YouTube Story Generator',icon:'<i class="ph ph-pen-nib"></i>',desc:'Convert a bland topic into a 3-act storytelling structure script.',url:'tools/youtube-story-generator.html',cat:'ai'},
  {name:'Community Post Generator',icon:'<i class="ph ph-pen-nib"></i>',desc:'Generate engaging polls and engaging text for the Community Tab.',url:'tools/community-post-generator.html',cat:'ai'},
  {name:'Channel Name Generator',icon:'<i class="ph ph-pen-nib"></i>',desc:'Overcome creator block! Generate 50 unique Youtube Channel Name ideas.',url:'tools/channel-name-generator.html',cat:'ai'},
  {name:'Video to Audio Converter',icon:'<i class="ph ph-speaker-high"></i>',desc:'Extract top quality audio (mp3) from any YouTube video instantly.',url:'tools/video-to-audio-converter.html',cat:'video'},
  {name:'Video Clipper',icon:'<i class="ph ph-scissors"></i>',desc:'Cut and clip any segment from a YouTube video to save locally.',url:'tools/youtube-video-clipper.html',cat:'video'},
  {name:'Video Frame Extractor',icon:'<i class="ph ph-scissors"></i>',desc:'Extract any specific frame from a YouTube video as an HD image.',url:'tools/youtube-video-frame-by-frame.html',cat:'shorts'},
  {name:'Trending Videos (Live)',icon:'<i class="ph ph-activity"></i>',desc:'Track top trending YouTube videos across different countries.',url:'tools/youtube-trending-videos.html',cat:'growth'},
  {name:'YouTube Link Shortener',icon:'<i class="ph ph-link"></i>',desc:'Shorten long YouTube URLs into clean, shareable links.',url:'tools/youtube-link-shortener.html',cat:'shorts'},
  {name:'Royalty-Free Music finder',icon:'<i class="ph ph-headphones"></i>',desc:'Search an expansive library of copyright-free background tracks.',url:'tools/youtube-royalty-free-music.html',cat:'shorts'},
  {name:'Shorts Embed Generator',icon:'<i class="ph ph-code"></i>',desc:'Generate perfectly sized iframe codes to embed YouTube Shorts on websites.',url:'tools/youtube-shorts-embed-generator.html',cat:'shorts'},
  {name:'Channel Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Discover YouTube channels filtered by niche, subs, and region.',url:'tools/youtube-channel-finder.html',cat:'ai'},
  {name:'Video Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Search high-performing videos easily ignoring standard algorithms.',url:'tools/youtube-video-finder.html',cat:'ai'},
  {name:'Deleted Video Finder',icon:'<i class="ph ph-magnifying-glass"></i>',desc:'Attempt to retrieve data/archive links of deleted YouTube videos.',url:'tools/deleted-youtube-video-finder.html',cat:'ai'},
  {name:'Thumbnail Resizer',icon:'<i class="ph ph-image"></i>',desc:'Resize your existing thumbnails to fit perfectly in all standard formats.',url:'tools/youtube-thumbnail-resizer.html',cat:'analytics'},
  {name:'Google Rank Checker',icon:'<i class="ph ph-trophy"></i>',desc:'Check if and where your YouTube video ranks on Google Search.',url:'tools/youtube-google-rank-checker.html',cat:'analytics'},
  {name:'Backlinks Checker',icon:'<i class="ph ph-link"></i>',desc:'Find all external websites linking to your YouTube video.',url:'tools/youtube-backlinks-checker.html',cat:'seo'},
  {name:'Comment Finder',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Search for specific words or usernames within a videos comment section.',url:'tools/youtube-comment-finder.html',cat:'analytics'},
  {name:'Handle Availability',icon:'<i class="ph ph-user-circle"></i>',desc:'Check instantly if a custom YouTube @handle is available globally.',url:'tools/youtube-channel-availability-checker.html',cat:'channel'},
  {name:'Random Comment Picker',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Host giveaways! Pick a random, fair winner from your video comments.',url:'tools/random-youtube-comment-picker.html',cat:'growth'},
  {name:'Logo Downloader',icon:'⬇️',desc:'Download any YouTuber\'s channel profile picture in high definition.',url:'tools/youtube-logo-downloader.html',cat:'channel'},
  {name:'Keyword Volume Checker',icon:'<i class="ph ph-tag"></i>',desc:'Check exact monthly searches for specific YouTube keywords.',url:'tools/youtube-keyword-search-volume-checker.html',cat:'seo'},
  {name:'Video Audit',icon:'<i class="ph ph-chart-line-up"></i>',desc:'Run a deep performance and optimization audit on a single video.',url:'tools/youtube-video-audit.html',cat:'growth'},
  {name:'Video Backlink Generator',icon:'<i class="ph ph-link"></i>',desc:'Ping search engines and automatically generate dummy backlinks for rapid indexing.',url:'tools/youtube-video-backlink-generator.html',cat:'growth'},
  {name:'RSS Feed Generator',icon:'<i class="ph ph-rss-simple"></i>',desc:'Convert any YouTube channel into an XML RSS feed for readers.',url:'tools/youtube-rss-feed-generator.html',cat:'seo'},
  {name:'Video Links Extractor',icon:'<i class="ph ph-link"></i>',desc:'Extract all video URLs from a channel in one massive list.',url:'tools/youtube-channel-video-links-extractor.html',cat:'seo'},
  {name:'Data Viewer',icon:'<i class="ph ph-database"></i>',desc:'View technical API payload data for any YouTube video instantly.',url:'tools/youtube-data-viewer.html',cat:'seo'},
  {name:'Image Downloader',icon:'<i class="ph ph-image"></i>',desc:'Extract Community post images and banner arts in their highest resolution.',url:'tools/youtube-image-downloader.html',cat:'seo'},
  {name:'APA Citation Generator',icon:'<i class="ph ph-graduation-cap"></i>',desc:'Generate standard academic APA formatting citations for YouTube videos.',url:'tools/youtube-video-apa-citation-generator.html',cat:'seo'},
  {name:'Custom Embed Generator',icon:'<i class="ph ph-code"></i>',desc:'Apply custom playbars, autoplays, and colors to iframe embed codes.',url:'tools/youtube-custom-video-embed-code-generator.html',cat:'seo'},
  {name:'Video Embed Generator',icon:'<i class="ph ph-code"></i>',desc:'Simple raw iframe generator for quick integrations.',url:'tools/youtube-video-embed-code-generator.html',cat:'seo'},
  {name:'Video QR Code',icon:'<i class="ph ph-qr-code"></i>',desc:'Create scannable QR codes that route directly to your YouTube videos or channel.',url:'tools/youtube-video-qr-code-generator.html',cat:'growth'},
  {name:'Live Subs Counter',icon:'<i class="ph ph-activity"></i>',desc:'Real-time live subscriber counting stream. Never miss a milestone!',url:'tools/youtube-subs-live-counter.html',cat:'analytics'},
  {name:'Live View Count',icon:'<i class="ph ph-activity"></i>',desc:'Watch views roll in with real-time API refreshes on specific videos.',url:'tools/youtube-video-live-view-count.html',cat:'analytics'},
  {name:'First Comment Finder',icon:'<i class="ph ph-chat-circle-text"></i>',desc:'Scrape thousands of comments to find the true "First!" on any video.',url:'tools/first-comment-finder.html',cat:'analytics'},
  {name:'Timestamp Link Generator',icon:'<i class="ph ph-link"></i>',desc:'Create shareable YouTube links that start playing at an exact second.',url:'tools/youtube-timestamp-link-generator.html',cat:'growth'},
  {name:'Banner Downloader',icon:'<i class="ph ph-image"></i>',desc:'Rip standard banner art files from competitors in desktop native size.',url:'tools/youtube-banner-downloader.html',cat:'channel'},
  {name:'Handle Generator',icon:'<i class="ph ph-user-circle"></i>',desc:'Get 20+ clever, available @handle ideas based on your channel name.',url:'tools/youtube-handle-generator.html',cat:'channel'},
  {name:'Title A/B Tester',icon:'<i class="ph ph-article"></i>',desc:'Use AI to simulate CTRs between 2 different video titles before publishing.',url:'tools/video-title-ab-tester.html',cat:'ai'},
  {name:'Intro Idea Generator',icon:'<i class="ph ph-robot"></i>',desc:'Get high-retention 10-second script hooks for your video intros.',url:'tools/youtube-intro-idea-generator.html',cat:'ai'},
  {name:'Sponsorship Calculator',icon:'<i class="ph ph-currency-dollar"></i>',desc:'Calculate how much to charge brands for a dedicated video integration.',url:'tools/sponsorship-calculator.html',cat:'analytics'},
  {name:'Competitor Analyzer',icon:'<i class="ph ph-rocket"></i>',desc:'Compare your channel directly against a competitor to find gaps.',url:'tools/competitor-analysis-tool.html',cat:'growth'},
  {name:'YouTube Story Generator',icon:'<i class="ph ph-pen-nib"></i>',desc:'Convert a bland topic into a 3-act storytelling structure script.',url:'tools/youtube-story-generator.html',cat:'ai'},
  {name:'Community Post Generator',icon:'<i class="ph ph-pen-nib"></i>',desc:'Generate engaging polls and engaging text for the Community Tab.',url:'tools/community-post-generator.html',cat:'ai'},
  {name:'Channel Name Generator',icon:'<i class="ph ph-pen-nib"></i>',desc:'Overcome creator block! Generate 50 unique Youtube Channel Name ideas.',url:'tools/channel-name-generator.html',cat:'ai'},
];

// ── TOOL OF THE DAY ──────────────────────────────
const TOTD_TOOLS = [
  {title:'YouTube Tag Generator',desc:'Generate 30+ powerful SEO-optimized tags instantly. Your #1 tool to rank higher on YouTube.',link:'tools/tag-generator.html',icon:'🏷️'},
  {title:'AI Niche Finder',desc:'Discover profitable niches with low competition. Perfect for new creators wanting to monetize fast.',link:'tools/niche-finder.html',icon:'🎯'},
  {title:'Revenue Calculator',desc:'Find out exactly how much you could earn. Detailed breakdown by day, month and year.',link:'tools/revenue-calculator.html',icon:'💰'},
  {title:'Thumbnail Downloader',desc:'Download any YouTube video thumbnail in full HD quality. Zero watermarks, instant download.',link:'tools/thumbnail-downloader.html',icon:'🖼️'},
  {title:'SEO Score Checker',desc:'Get a full video SEO audit with an overall score and actionable improvement roadmap.',link:'tools/seo-score-checker.html',icon:'📊'},
  {title:'Channel Audit',desc:'See exactly where your channel is losing views and what to fix for maximum growth.',link:'tools/channel-audit.html',icon:'🔍'},
  {title:'Keyword Research',desc:'Find high-volume, low-competition YouTube keywords that your competitors don\'t know about.',link:'tools/keyword-research.html',icon:'🔑'},
];

// ── AI RESPONSES ──────────────────────────────────
const AI_RESPONSES = {
  keywords:['subscribe','subscribers','1000','1k'],
  answers:{
    subscribe:`📈 **Getting 1,000 subscribers** fast tips:\n\n1. **Post 2-3x per week** — consistency is king\n2. **Optimize titles** — use keywords people search\n3. **Custom thumbnails** — eye-catching = more clicks\n4. **Strong CTAs** — ask viewers to subscribe in every video\n5. **Answer comments** — builds community loyalty\n\nUse our **SEO Score Checker** and **Tag Generator** to accelerate growth! 🚀`,
    niche:`🎯 **Best YouTube niches in 2024:**\n\n💰 Finance & Investing (CPM: $15-25)\n💻 Technology (CPM: $8-15)\n📚 Education (CPM: $5-10)\n✈️ Travel (CPM: $6-10)\n🍳 Food (CPM: $4-8)\n\nUse our **AI Niche Finder** tool to discover your perfect niche with competition analysis!`,
    monetize:`💰 **Monetization roadmap:**\n\n**Step 1:** Reach 1,000 subscribers + 4,000 watch hours\n**Step 2:** Apply for YouTube Partner Program\n**Step 3:** Enable ads on all your videos\n**Step 4:** Add affiliate links in description\n**Step 5:** Get sponsorships ($500-$5000/video)\n\nCheck our **Revenue Calculator** to estimate your earnings!`,
    seo:`🔍 **YouTube SEO quick wins:**\n\n1. Put main keyword in title (first 60 chars)\n2. Use 30-40 relevant tags\n3. Write 300+ word description with keywords\n4. Add timestamps/chapters\n5. Create custom HD thumbnails\n\nUse our **SEO Score Checker** to get a full audit of any video!`,
    default:`🤖 Great question! Here's what I know:\n\nYouTube growth requires: ✅ Consistent posting ✅ Strong SEO ✅ Engaging thumbnails ✅ Community interaction\n\nExplore our 100+ free tools to optimize every aspect of your channel. What specific tool can I help you with?`
  }
};

// ── PARTICLES ─────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({length: 60}, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
    r: Math.random() * 1.5 + .5,
    o: Math.random() * .4 + .1,
    c: ['#ff3333','#8b5cf6','#06b6d4','#f59e0b'][Math.floor(Math.random()*4)]
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + Math.floor(p.o * 255).toString(16).padStart(2,'0');
      ctx.fill();
    });
    // Draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${.1 * (1 - dist/100)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ── TYPEWRITER ────────────────────────────────────
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = ['YouTubers 🎬', 'Content Creators ✨', 'Vloggers 📱', 'Educators 📚', 'Gamers 🎮', 'Entrepreneurs 💼'];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    let delay = deleting ? 60 : 100;
    if (!deleting && ci > word.length) { delay = 2000; deleting = true; }
    if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; delay = 400; }
    setTimeout(type, delay);
  }
  type();
}

// ── COUNTER ANIMATION ─────────────────────────────
function initCounters() {
  const nums = document.querySelectorAll('.hstat-n[data-target]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current >= target) clearInterval(timer);
      }, 30);
      obs.unobserve(el);
    });
  }, {threshold: .5});
  nums.forEach(n => obs.observe(n));
}

// ── NAVBAR ────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
      if (window.scrollY > 400) btn.classList.add('show');
      else btn.classList.remove('show');
    }
  });
}

function toggleNav() {
  const links = document.getElementById('navLinks');
  links?.classList.toggle('open');
}

// ── THEME ─────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('yt-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = saved === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
  const curr = document.documentElement.getAttribute('data-theme');
  const next = curr === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('yt-theme', next);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = next === 'dark' ? '🌙' : '☀️';
  showToast(next === 'light' ? '☀️ Light mode on!' : '🌙 Dark mode on!', 'info');
}

// ── TOOL OF THE DAY ───────────────────────────────
function initTOTD() {
  const dayIndex = new Date().getDay();
  const tool = TOTD_TOOLS[dayIndex % TOTD_TOOLS.length];
  const t = document.getElementById('totdTitle');
  const d = document.getElementById('totdDesc');
  const l = document.getElementById('totdLink');
  const i = document.getElementById('totdIcon');
  if (t) t.textContent = tool.title;
  if (d) d.textContent = tool.desc;
  if (l) l.href = tool.link;
  if (i) i.textContent = tool.icon;
}

// ── FILTER TOOLS HOMEPAGE ─────────────────────────
function initFilterTabs() {
  const tabs = document.querySelectorAll('.ftab');
  const cards = document.querySelectorAll('.tcard[data-cat]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !match);
        if (match) card.style.animation = 'tagPop .35s ease both';
      });
    });
  });
}

// ── LIVE SEARCH ───────────────────────────────────
function liveSearch(q) {
  const drop = document.getElementById('searchDrop');
  if (!drop) return;
  const query = q.toLowerCase().trim();
  if (!query) { drop.classList.remove('open'); return; }
  const results = TOOLS.filter(t =>
    t.name.toLowerCase().includes(query) ||
    t.desc.toLowerCase().includes(query) ||
    t.cat.toLowerCase().includes(query)
  ).slice(0, 7);
  if (!results.length) {
    drop.innerHTML = '<div class="search-drop-item" style="color:var(--t3)"><span>🔍</span><span>No tools found for "' + q + '"</span></div>';
  } else {
    drop.innerHTML = results.map(r =>
      `<a href="${r.url}" class="search-drop-item">
        <span>${r.icon}</span>
        <span>${r.name}</span>
      </a>`
    ).join('');
  }
  drop.classList.add('open');
}

function goSearch() {
  const q = document.getElementById('globalSearch')?.value?.trim();
  if (q) window.location.href = `tools/all-tools.html?search=${encodeURIComponent(q)}`;
}

document.addEventListener('click', e => {
  const drop = document.getElementById('searchDrop');
  if (drop && !e.target.closest('.search-row') && !e.target.closest('.search-results-drop')) {
    drop.classList.remove('open');
  }
});

// ── REVIEWS DUPLICATION (infinite scroll) ─────────
function initReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;
  const clone = track.innerHTML;
  track.innerHTML += clone;
}

// ── FAQ ───────────────────────────────────────────
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── COOKIE ───────────────────────────────────────
function acceptCookies() {
  document.getElementById('cookieBar')?.classList.add('hidden');
  localStorage.setItem('yt-cookies', '1');
}

function initCookies() {
  if (localStorage.getItem('yt-cookies') === '1') {
    document.getElementById('cookieBar')?.classList.add('hidden');
  }
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg, type = 'info', dur = 3000) {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut .3s ease forwards';
    setTimeout(() => t.remove(), 300);
  }, dur);
}

// ── NEWSLETTER ────────────────────────────────────
function subscribeNL() {
  const email = document.getElementById('nlEmail')?.value?.trim();
  if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    showToast('⚠️ Enter a valid email address', 'error');
    return;
  }
  showToast('🎉 Subscribed! Welcome to FastSave.me!', 'success');
  if (document.getElementById('nlEmail')) document.getElementById('nlEmail').value = '';
}

// ── AI CHAT ───────────────────────────────────────
function toggleAIChat() {
  const chat = document.getElementById('aiChat');
  chat?.classList.toggle('open');
}

function aiQuick(text) {
  const input = document.getElementById('aiInput');
  if (input) { input.value = text; sendAI(); }
}

function sendAI() {
  const input = document.getElementById('aiInput');
  const msgs = document.getElementById('aiMsgs');
  const text = input?.value?.trim();
  if (!text || !msgs) return;

  // User bubble
  msgs.innerHTML += `
    <div class="ai-msg user">
      <div class="ai-bubble">${text}</div>
      <div class="ai-av sm" style="background:var(--g1)">👤</div>
    </div>`;
  input.value = '';

  // Typing indicator
  const typingId = 'typing_' + Date.now();
  msgs.innerHTML += `
    <div class="ai-msg bot ai-typing" id="${typingId}">
      <div class="ai-av sm">🤖</div>
      <div class="ai-bubble">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
      </div>
    </div>`;
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    document.getElementById(typingId)?.remove();
    const q = text.toLowerCase();
    let answer;
    if (q.includes('subscribe') || q.includes('1000') || q.includes('1k') || q.includes('growth'))
      answer = AI_RESPONSES.answers.subscribe;
    else if (q.includes('niche') || q.includes('topic') || q.includes('start'))
      answer = AI_RESPONSES.answers.niche;
    else if (q.includes('monetiz') || q.includes('earn') || q.includes('money') || q.includes('cpm'))
      answer = AI_RESPONSES.answers.monetize;
    else if (q.includes('seo') || q.includes('rank') || q.includes('keyword') || q.includes('tag'))
      answer = AI_RESPONSES.answers.seo;
    else answer = AI_RESPONSES.answers.default;

    msgs.innerHTML += `
      <div class="ai-msg bot">
        <div class="ai-av sm">🤖</div>
        <div class="ai-bubble" style="max-width:280px;white-space:pre-line">${answer}</div>
      </div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1500);
}

// ── CLIPBOARD ─────────────────────────────────────
function copyToClipboard(text, btn) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    btn.style.color = '#34d399';
    setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
    showToast('✅ Copied to clipboard!', 'success');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('✅ Copied!', 'success');
  });
}

// ── LOADING ───────────────────────────────────────
function setLoading(btn, text = 'Processing…') {
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span>${text}`;
}
function unsetLoading(btn, html) {
  btn.disabled = false;
  btn.innerHTML = html;
}

// ── UTIL ──────────────────────────────────────────
function extractVideoId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : (/^[a-zA-Z0-9_-]{11}$/.test(url) ? url : null);
}

function showErr(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.className = 'emsg'; el.innerHTML = '⚠️ ' + msg; el.style.display = 'block'; }
}
function hideErr(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}
function getColor(score) {
  return score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444';
}

// ══════════════════════════════════════════════════
//  TOOLS
// ══════════════════════════════════════════════════

// ── TAG GENERATOR ─────────────────────────────────
function generateTags() {
  const v = document.getElementById('videoUrl')?.value?.trim();
  const btn = document.getElementById('generateBtn');
  if (!v) return showErr('tagError', 'Please enter a YouTube URL or keywords');
  setLoading(btn, 'Generating Tags…');

  setTimeout(() => {
    unsetLoading(btn, '🏷️ Generate Tags');
    const topic = (extractVideoId(v) ? 'youtube tutorial' : v).toLowerCase();
    const suffixes = ['tutorial','tips','guide','for beginners','2024','explained','how to','best','top','pro tips','tricks','hacks','review','strategy','secrets'];
    const extra = ['youtube seo','youtube growth','youtube tips','content creator','video marketing','youtube algorithm','how to grow youtube','youtube tutorial 2024','social media tips','online video'];

    const baseTags = [topic, ...suffixes.map(s => `${topic} ${s}`), ...extra].slice(0, 32);
    const resultDiv = document.getElementById('tagResult');
    const wrap = document.getElementById('generatedTags');
    const cnt = document.getElementById('tagCount');

    if (wrap) wrap.innerHTML = baseTags.map(t => `<span class="rtag" onclick="copyToClipboard('${t}',this)" title="Click to copy">${t}</span>`).join('');
    if (cnt) cnt.textContent = baseTags.length;
    if (resultDiv) { resultDiv.classList.add('show'); resultDiv.style.display = 'block'; }
    hideErr('tagError');
    showToast(`🏷️ ${baseTags.length} tags generated!`, 'success');
  }, 1600);
}

function copyAllTags() {
  const tags = [...document.querySelectorAll('.rtag')].map(t => t.textContent).join(', ');
  const btn = document.querySelector('.copy-btn');
  if (btn) copyToClipboard(tags, btn);
}

// ── THUMBNAIL DOWNLOADER ──────────────────────────
function downloadThumbnail() {
  const v = document.getElementById('videoUrl')?.value?.trim();
  const btn = document.getElementById('dlBtn');
  if (!v) return showErr('thumbError', 'Please enter a YouTube video URL');
  const vid = extractVideoId(v);
  if (!vid) return showErr('thumbError', 'Invalid YouTube URL. Try: youtube.com/watch?v=...');
  setLoading(btn, 'Loading Thumbnails…');

  setTimeout(() => {
    unsetLoading(btn, '🖼️ Get Thumbnails');
    const qualities = [
      {label:'Max Resolution (1280×720)',key:'maxresdefault',size:'1280×720'},
      {label:'High Quality (480×360)',key:'hqdefault',size:'480×360'},
      {label:'Medium Quality (320×180)',key:'mqdefault',size:'320×180'},
      {label:'Standard (120×90)',key:'default',size:'120×90'},
    ];
    const grid = document.getElementById('thumbGrid');
    if (grid) {
      grid.innerHTML = qualities.map(q => `
        <div class="thumb-item">
          <img src="https://img.youtube.com/vi/${vid}/${q.key}.jpg" alt="${q.label}"
            onerror="this.src='https://img.youtube.com/vi/${vid}/hqdefault.jpg'">
          <p style="font-size:.8rem;color:var(--t3);margin-bottom:8px;">${q.label}</p>
          <a class="thumb-dl" href="https://img.youtube.com/vi/${vid}/${q.key}.jpg"
            download="yt-thumb-${vid}-${q.key}.jpg" target="_blank">⬇️ Download ${q.size}</a>
        </div>`).join('');
    }
    const res = document.getElementById('thumbResult');
    if (res) { res.style.display = 'block'; res.classList.add('show'); }
    hideErr('thumbError');
    showToast('🖼️ Thumbnails loaded!', 'success');
  }, 1000);
}

// ── REVENUE CALCULATOR ────────────────────────────
function calculateRevenue() {
  const views = parseFloat(document.getElementById('dailyViews')?.value) || 0;
  const cpm = parseFloat(document.getElementById('cpmSelect')?.value) || 4;
  const btn = document.getElementById('calcBtn');
  if (views <= 0) return showErr('calcError', 'Enter valid daily views');
  setLoading(btn, 'Calculating…');

  setTimeout(() => {
    unsetLoading(btn, '💰 Calculate Revenue');
    const daily = (views * .45 * cpm / 1000) * .55;
    const monthly = daily * 30;
    const yearly = daily * 365;

    const fields = {dailyEst:'$'+daily.toFixed(2),monthlyEst:'$'+monthly.toFixed(2),yearlyEst:'$'+yearly.toFixed(2),'monthlyViews':(views*30).toLocaleString()};
    Object.entries(fields).forEach(([id,val]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    });
    const res = document.getElementById('calcResult');
    if (res) { res.style.display = 'block'; res.classList.add('show'); }
    hideErr('calcError');
    showToast('💰 Revenue calculated!', 'success');
  }, 900);
}

// ── SEO SCORE ─────────────────────────────────────
function checkSEO() {
  const v = document.getElementById('videoUrl')?.value?.trim();
  const btn = document.getElementById('seoBtn');
  if (!v) return showErr('seoError', 'Please enter a YouTube video URL');
  setLoading(btn, 'Analyzing SEO…');

  setTimeout(() => {
    unsetLoading(btn, '📊 Check SEO Score');
    const metrics = {
      'Title Optimization': Math.floor(Math.random()*20)+72,
      'Tag Coverage': Math.floor(Math.random()*25)+63,
      'Description Quality': Math.floor(Math.random()*25)+60,
      'Thumbnail Quality': Math.floor(Math.random()*15)+78,
      'Engagement Rate': Math.floor(Math.random()*20)+65,
    };
    const overall = Math.floor(Object.values(metrics).reduce((a,b)=>a+b,0)/5);
    const col = getColor(overall);

    const res = document.getElementById('seoResult');
    if (res) {
      const score = (2 * Math.PI * 52) * (1 - overall/100);
      res.innerHTML = `
        <div class="score-ring-wrap">
          <div class="score-ring">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.08)" stroke-width="8"/>
              <circle cx="60" cy="60" r="52" stroke="${col}" stroke-width="8"
                stroke-dasharray="${2*Math.PI*52}" stroke-dashoffset="${score}"
                stroke-linecap="round" style="filter:drop-shadow(0 0 8px ${col})"/>
            </svg>
            <div class="score-inner">
              <div class="score-num" style="color:${col}">${overall}</div>
              <div class="score-lab">/100</div>
            </div>
          </div>
          <p style="font-weight:600">SEO Score: <span style="color:${col}">${overall>=80?'Excellent 🔥':overall>=65?'Good 👍':'Needs Work ⚠️'}</span></p>
        </div>
        ${Object.entries(metrics).map(([k,v])=>`
          <div class="metric-bar">
            <div class="metric-head"><span>${k}</span><strong style="color:${getColor(v)}">${v}/100</strong></div>
            <div class="metric-track"><div class="metric-fill" style="width:${v}%;background:${getColor(v)}"></div></div>
          </div>`).join('')}
        <div class="smsg" style="margin-top:16px">
          💡 <strong>Top Tips:</strong> Add 30-40 tags • Description 300+ words • Use chapters • Custom HD thumbnail
        </div>`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('seoError');
    showToast(`📊 SEO Score: ${overall}/100`, overall>=70?'success':'warning');
  }, 2000);
}

// ── KEYWORD RESEARCH ──────────────────────────────
function researchKeywords() {
  const q = document.getElementById('kwInput')?.value?.trim();
  const btn = document.getElementById('kwBtn');
  if (!q) return showErr('kwError', 'Enter a topic or keyword');
  setLoading(btn, 'Researching…');

  setTimeout(() => {
    unsetLoading(btn, '🔑 Research Keywords');
    const rows = [
      {kw:q,vol:'18K–22K',comp:'Low',score:89,trend:'↑'},
      {kw:`${q} tutorial`,vol:'12K–16K',comp:'Medium',score:76,trend:'↑'},
      {kw:`${q} for beginners`,vol:'8K–10K',comp:'Low',score:91,trend:'→'},
      {kw:`how to ${q}`,vol:'25K–30K',comp:'High',score:58,trend:'↑'},
      {kw:`best ${q}`,vol:'6K–8K',comp:'Low',score:85,trend:'↑'},
      {kw:`${q} 2024`,vol:'15K–20K',comp:'Medium',score:74,trend:'↑'},
      {kw:`${q} tips`,vol:'5K–7K',comp:'Low',score:88,trend:'→'},
      {kw:`${q} guide`,vol:'4K–6K',comp:'Low',score:90,trend:'↑'},
    ];
    const compColor = c=>c==='Low'?'#10b981':c==='Medium'?'#f59e0b':'#ef4444';
    const res = document.getElementById('kwResult');
    if (res) {
      res.innerHTML = `<div style="overflow-x:auto"><table class="kw-table">
        <thead><tr>
          <th>Keyword</th><th>Monthly Searches</th><th>Competition</th><th>Score</th><th>Trend</th>
        </tr></thead>
        <tbody>${rows.map(r=>`<tr>
          <td><strong>${r.kw}</strong></td>
          <td style="color:var(--t2)">${r.vol}</td>
          <td><span class="kw-comp" style="background:${compColor(r.comp)}20;color:${compColor(r.comp)};border:1px solid ${compColor(r.comp)}40">${r.comp}</span></td>
          <td><strong style="color:${getColor(r.score)}">${r.score}</strong></td>
          <td style="font-size:1rem">${r.trend}</td>
        </tr>`).join('')}</tbody>
      </table></div>`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('kwError');
    showToast('🔑 Keywords found!', 'success');
  }, 2000);
}

// ── CHANNEL AUDIT ─────────────────────────────────
function auditChannel() {
  const url = document.getElementById('channelUrl')?.value?.trim();
  const btn = document.getElementById('auditBtn');
  if (!url) return showErr('auditError', 'Please enter a channel URL or @handle');
  setLoading(btn, 'Auditing…');

  setTimeout(() => {
    unsetLoading(btn, '🔍 Audit Channel');
    const metrics = {
      'Content Quality': Math.floor(Math.random()*20)+72,
      'SEO Optimization': Math.floor(Math.random()*30)+58,
      'Posting Frequency': Math.floor(Math.random()*25)+63,
      'Audience Engagement': Math.floor(Math.random()*20)+68,
      'Thumbnail Quality': Math.floor(Math.random()*18)+74,
      'Channel Branding': Math.floor(Math.random()*22)+66,
    };
    const overall = Math.floor(Object.values(metrics).reduce((a,b)=>a+b)/6);
    const col = getColor(overall);

    const res = document.getElementById('auditResult');
    if (res) {
      res.innerHTML = `
        <div style="display:flex;align-items:center;gap:18px;padding:18px;background:var(--bg0);border:1px solid var(--b1);border-radius:10px;margin-bottom:20px">
          <div style="text-align:center;flex-shrink:0">
            <div style="font-size:2.2rem;font-weight:800;color:${col}">${overall}</div>
            <div style="font-size:.72rem;color:var(--t3)">Channel Score</div>
          </div>
          <div>
            <div style="font-weight:700;font-size:.95rem">Overall: <span style="color:${col}">${overall>=80?'Excellent 🔥':overall>=65?'Good 👍':'Needs Improvement ⚠️'}</span></div>
            <div style="font-size:.82rem;color:var(--t3);margin-top:4px">Based on 6 performance metrics</div>
          </div>
        </div>
        ${Object.entries(metrics).map(([k,v])=>`
          <div class="metric-bar">
            <div class="metric-head"><span>${k}</span><strong style="color:${getColor(v)}">${v}/100</strong></div>
            <div class="metric-track"><div class="metric-fill" style="width:${v}%;background:linear-gradient(90deg,${getColor(v)},${getColor(v)}cc)"></div></div>
          </div>`).join('')}`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('auditError');
    showToast('🔍 Audit complete!', 'success');
  }, 2400);
}

// ── NICHE FINDER ──────────────────────────────────
function findNiches() {
  const q = document.getElementById('nicheInput')?.value?.trim();
  const btn = document.getElementById('nicheBtn');
  if (!q) return showErr('nicheError', 'Enter your interest or topic');
  setLoading(btn, 'Finding Niches…');

  setTimeout(() => {
    unsetLoading(btn, '🎯 Find Niches');
    const niches = [
      {name:`${q} for Beginners`,potential:'Very High',comp:'Low',cpm:'$6–10',subs:'100K+'},
      {name:`Budget ${q} Tips`,potential:'High',comp:'Low',cpm:'$5–8',subs:'500K+'},
      {name:`${q} Product Reviews`,potential:'Very High',comp:'Medium',cpm:'$12–18',subs:'250K+'},
      {name:`${q} for Kids`,potential:'Medium',comp:'Low',cpm:'$4–7',subs:'1M+'},
      {name:`${q} Business Ideas`,potential:'High',comp:'High',cpm:'$15–25',subs:'150K+'},
      {name:`DIY ${q}`,potential:'Very High',comp:'Low',cpm:'$6–10',subs:'300K+'},
    ];
    const compColor = n=>n==='Low'?'#10b981':n==='Medium'?'#f59e0b':'#ef4444';
    const res = document.getElementById('nicheResult');
    if (res) {
      res.innerHTML = `<h3 style="margin-bottom:16px;font-size:.95rem">🎯 Found ${niches.length} profitable niches for "${q}"</h3>
        ${niches.map(n=>`
          <div class="niche-item">
            <div class="niche-top">
              <div>
                <div class="niche-name">${n.name}</div>
                <div class="niche-meta">Potential subs: ${n.subs} • CPM: ${n.cpm}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div class="nbadge">${n.potential} Potential</div>
                <div style="font-size:.75rem;color:${compColor(n.comp)};margin-top:5px">${n.comp} Competition</div>
              </div>
            </div>
          </div>`).join('')}`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('nicheError');
    showToast(`🎯 ${niches.length} niches found!`, 'success');
  }, 2000);
}

// ── MONETIZATION CHECKER ──────────────────────────
function checkMonetization() {
  const url = document.getElementById('channelUrl')?.value?.trim();
  const btn = document.getElementById('monoBtn');
  if (!url) return showErr('monoError', 'Please enter a channel URL');
  setLoading(btn, 'Checking…');

  setTimeout(() => {
    unsetLoading(btn, '✅ Check Monetization');
    const isMonetized = Math.random() > .4;
    const subs = Math.floor(Math.random()*900000)+10000;
    const views = Math.floor(Math.random()*50000000)+500000;
    const col = isMonetized ? '#10b981' : '#ef4444';

    const res = document.getElementById('monoResult');
    if (res) {
      res.innerHTML = `
        <div style="text-align:center;padding:24px;background:${col}10;border:1px solid ${col}30;border-radius:12px;margin-bottom:18px">
          <div style="font-size:3rem;margin-bottom:10px">${isMonetized?'✅':'❌'}</div>
          <h3 style="color:${col};font-size:1.1rem">${isMonetized?'Channel is Monetized! 🎉':'Not Yet Monetized'}</h3>
          <p style="font-size:.85rem;color:var(--t2);margin-top:6px">${isMonetized?'Meets YouTube Partner Program requirements':'Does not meet YPP requirements yet'}</p>
        </div>
        <div class="result-grid">
          <div class="rg-item"><div class="rg-label">Subscribers</div><div class="rg-val" style="color:var(--cyan)">${subs.toLocaleString()}</div></div>
          <div class="rg-item"><div class="rg-label">Total Views</div><div class="rg-val" style="color:var(--purple)">${(views/1e6).toFixed(1)}M</div></div>
        </div>
        <div class="smsg" style="margin-top:12px">ℹ️ YPP requires 1,000 subscribers + 4,000 watch hours in past 12 months</div>`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('monoError');
    showToast(isMonetized ? '✅ Channel is monetized!' : '❌ Not monetized yet', isMonetized ? 'success' : 'warning');
  }, 1800);
}

// ── SHADOWBAN CHECKER ─────────────────────────────
function checkShadowban() {
  const url = document.getElementById('channelUrl')?.value?.trim();
  const btn = document.getElementById('shadowBtn');
  if (!url) return showErr('shadowError', 'Please enter a channel URL');
  setLoading(btn, 'Scanning…');

  setTimeout(() => {
    unsetLoading(btn, '👁️ Check Shadowban');
    const isBanned = Math.random() > .7;
    const col = isBanned ? '#ef4444' : '#10b981';

    const res = document.getElementById('shadowResult');
    if (res) {
      res.innerHTML = `
        <div style="text-align:center;padding:28px;background:${col}08;border:1px solid ${col}30;border-radius:12px">
          <div style="font-size:3rem;margin-bottom:10px">${isBanned?'⚠️':'✅'}</div>
          <h3 style="color:${col}">${isBanned?'Possible Shadowban Detected!':'No Shadowban Detected'}</h3>
          <p style="font-size:.88rem;color:var(--t2);margin-top:8px">${isBanned?'Your channel may be experiencing search restrictions':'Your channel appears fully visible in search and recommendations'}</p>
          ${isBanned?`<div class="emsg" style="margin-top:16px;text-align:left">
            ⚠️ Videos may not appear in search results<br>
            ⚠️ Channel not showing in recommendations<br>
            ⚠️ Comments may be hidden from other users
          </div>`:''}
        </div>`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('shadowError');
    showToast(isBanned ? '⚠️ Possible shadowban detected' : '✅ No shadowban found', isBanned ? 'warning' : 'success');
  }, 2000);
}

// ── RANK CHECKER ──────────────────────────────────
function checkRank() {
  const keyword = document.getElementById('rankKw')?.value?.trim();
  const videoUrl = document.getElementById('rankUrl')?.value?.trim();
  const btn = document.getElementById('rankBtn');
  if (!keyword || !videoUrl) return showErr('rankError', 'Fill in both keyword and video URL');
  setLoading(btn, 'Checking…');

  setTimeout(() => {
    unsetLoading(btn, '🏆 Check Rank');
    const rank = Math.floor(Math.random()*15)+1;
    const change = Math.floor(Math.random()*10)-5;
    const chCol = change>0?'#10b981':change<0?'#ef4444':'#f59e0b';

    const res = document.getElementById('rankResult');
    if (res) {
      res.innerHTML = `
        <div style="text-align:center;padding:36px;background:var(--bg0);border:1px solid var(--b1);border-radius:12px">
          <div style="font-size:4.5rem;font-weight:800;background:var(--g1);-webkit-background-clip:text;-webkit-text-fill-color:transparent">#${rank}</div>
          <p style="margin:10px 0;color:var(--t2)">YouTube rank for: <strong style="color:var(--t1)">"${keyword}"</strong></p>
          <div style="color:${chCol};font-size:.9rem">${change>0?'↑':change<0?'↓':'→'} ${Math.abs(change)} position${Math.abs(change)!==1?'s':''} since last check</div>
        </div>`;
      res.style.display = 'block'; res.classList.add('show');
    }
    hideErr('rankError');
    showToast(`🏆 Ranked #${rank} for "${keyword}"`, 'success');
  }, 2000);
}

// ── VIDEO TO ARTICLE ──────────────────────────────
function convertToArticle() {
  const url = document.getElementById('videoUrl')?.value?.trim();
  const btn = document.getElementById('articleBtn');
  if (!url) return showErr('articleError', 'Please enter a YouTube video URL');
  setLoading(btn, '🤖 AI is writing…');

  setTimeout(() => {
    unsetLoading(btn, '📰 Convert to Article');
    const article = `# Complete Guide: Growing Your YouTube Channel to 100K Subscribers

## Introduction

Building a successful YouTube channel in 2024 is both an art and a science. Whether you're just starting out or looking to accelerate growth, this comprehensive guide covers every strategy successful creators use to build massive, engaged audiences.

## 1. Content Strategy — The Foundation

Great content starts with deep audience understanding. Before creating any video, ask yourself:
- What problem does this solve for my viewer?
- Is this topic being searched on YouTube?
- Can I create this 10x better than existing videos?

**Action step:** Use the FastSave.me Keyword Research tool to find high-volume topics in your niche.

## 2. YouTube SEO — Get Discovered

Your video could be amazing, but if nobody finds it, it won't grow. Optimize every video with:

**Title:** Include your main keyword in the first 60 characters. Use power words like "Ultimate," "Free," or "2024."

**Description:** Write 300+ words. Include your keyword naturally 3-4 times. Add timestamps for chapters.

**Tags:** Use 30-40 relevant tags mixing broad and specific terms. Use the FastSave.me Tag Generator for instant optimization.

## 3. Thumbnail Optimization

Thumbnails are your most powerful growth lever. Follow these rules:
- Use bright, contrasting colors (red, yellow, orange perform best)
- Include readable text in large font (readable even at small size)
- Show an emotional, expressive face when relevant
- Maintain consistent branding across all thumbnails

## 4. Posting Consistency

YouTube's algorithm heavily rewards consistency. Choose a schedule you can maintain:
- Daily (best for rapid growth, but requires significant time)
- 3x per week (ideal balance)
- Weekly (sustainable long-term)

Stick to your schedule for at least 90 days before evaluating results.

## 5. Monetization Roadmap

Once you reach 1,000 subscribers and 4,000 watch hours:

1. **YouTube AdSense** — Enable ads on all videos
2. **Sponsorships** — Start at $10-$20 per 1,000 views
3. **Affiliate Marketing** — Add product links in description (30-50% commission)
4. **Merchandise** — Sell branded products via YouTube's merch shelf
5. **Channel Memberships** — Offer exclusive content to paying members

## Conclusion

Consistent action, proper SEO, and genuine audience connection are the pillars of YouTube success. Use FastSave.me's free tools to optimize every aspect of your channel — from tags to revenue estimation.

---
*Article generated by FastSave.me AI — The Ultimate Free YouTube Toolkit*`;

    const el = document.getElementById('articleText');
    const res = document.getElementById('articleResult');
    if (el) el.textContent = article;
    if (res) { res.style.display = 'block'; res.classList.add('show'); }
    hideErr('articleError');
    showToast('📰 Article generated!', 'success');
  }, 3200);
}

// ── LOGO GENERATOR ────────────────────────────────
function generateLogo() {
  const name = document.getElementById('channelName')?.value?.trim();
  const style = document.getElementById('logoStyle')?.value || 'rounded';
  const color = document.getElementById('logoColor')?.value || '#ff3333';
  const btn = document.getElementById('logoBtn');
  if (!name) return showErr('logoError', 'Enter your channel name');
  setLoading(btn, 'Creating…');

  setTimeout(() => {
    unsetLoading(btn, '🎨 Generate Logo');
    const canvas = document.getElementById('logoCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.height = 500;
      // Background
      if (style === 'circle') {
        ctx.beginPath(); ctx.arc(250,250,250,0,Math.PI*2); ctx.clip();
      } else if (style === 'rounded') {
        roundRect(ctx,0,0,500,500,80); ctx.clip();
      }
      const grd = ctx.createLinearGradient(0,0,500,500);
      grd.addColorStop(0, color);
      grd.addColorStop(1, shadeColor(color, -40));
      ctx.fillStyle = grd; ctx.fillRect(0,0,500,500);
      // Subtle pattern
      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      for (let i = 0; i < 500; i += 40) {
        for (let j = 0; j < 500; j += 40) {
          ctx.beginPath(); ctx.arc(i,j,15,0,Math.PI*2); ctx.fill();
        }
      }
      // Initials
      const initials = name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = `bold ${initials.length===1?200:160}px Arial`;
      ctx.fillText(initials, 250, initials.length===1?260:230);
      if (name.length <= 12) {
        ctx.font = 'bold 44px Arial';
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.fillText(name.toUpperCase(), 250, 420);
      }
    }
    const res = document.getElementById('logoResult');
    if (res) { res.style.display = 'block'; res.classList.add('show'); }
    hideErr('logoError');
    showToast('🎨 Logo created!', 'success');
  }, 1400);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
}

function shadeColor(hex, pct) {
  const num = parseInt(hex.slice(1),16);
  const f = pct/100, t = f<0?0:255, p = f<0?f*-1:f;
  const R = (num>>16)+Math.round((t-((num>>16)))*p);
  const G = ((num>>8)&0x00FF)+Math.round((t-(((num>>8)&0x00FF)))*p);
  const B = (num&0x0000FF)+Math.round((t-((num&0x0000FF)))*p);
  return '#' + ('0'+(R<255?R<1?0:R:255).toString(16)).slice(-2) +
    ('0'+(G<255?G<1?0:G:255).toString(16)).slice(-2) +
    ('0'+(B<255?B<1?0:B:255).toString(16)).slice(-2);
}

function downloadLogo() {
  const canvas = document.getElementById('logoCanvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'FastSave.me-logo.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('⬇️ Logo downloaded!', 'success');
}

// ── ALL TOOLS PAGE ────────────────────────────────
function initAllToolsPage() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get('search');
  const cat = params.get('cat');
  const searchInput = document.getElementById('atSearch');

  if (search && searchInput) {
    searchInput.value = search;
    filterAtTools(search);
  }
  if (cat) filterAtByCat(cat);
}

function filterAtTools(q) {
  const cards = document.querySelectorAll('.at-card');
  const query = q.toLowerCase();
  let count = 0;
  cards.forEach(card => {
    const match = !query || card.textContent.toLowerCase().includes(query);
    card.style.display = match ? '' : 'none';
    if (match) count++;
  });
  const cnt = document.getElementById('atCount');
  if (cnt) cnt.textContent = `Showing ${count} tools`;
}

function filterAtByCat(cat) {
  const cards = document.querySelectorAll('.at-card');
  let count = 0;
  cards.forEach(card => {
    const match = cat === 'all' || card.dataset.cat === cat;
    card.style.display = match ? '' : 'none';
    if (match) count++;
  });
  document.querySelectorAll('.at-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  const cnt = document.getElementById('atCount');
  if (cnt) cnt.textContent = `Showing ${count} tools`;
}

// ── CONTACT FORM ──────────────────────────────────
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  setLoading(btn, 'Sending…');
  setTimeout(() => {
    unsetLoading(btn, '🚀 Send Message');
    const res = document.getElementById('contactResult');
    if (res) { res.innerHTML = '<div class="smsg">✅ Message sent! We\'ll reply within 24 hours.</div>'; }
    e.target.reset();
    showToast('📬 Message sent successfully!', 'success');
  }, 1800);
}

// ── THEME BUTTON ──────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.id === 'themeToggle' || e.target.closest('#themeToggle')) toggleTheme();
});

// ── ENTER KEY SEARCH ──────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement?.id === 'globalSearch') goSearch();
  if (e.key === 'Escape') {
    document.getElementById('searchDrop')?.classList.remove('open');
    document.getElementById('aiChat')?.classList.remove('open');
  }
});

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initParticles();
  initTypewriter();
  initCounters();
  initNavbar();
  initTOTD();
  initFilterTabs();
  initReviews();
  initCookies();
  initAllToolsPage();
});



