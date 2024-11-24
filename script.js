document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const clickEffect = document.querySelector('.click-effect');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    document.addEventListener('click', (e) => {
        const effect = document.createElement('span');
        effect.style.left = e.clientX + 'px';
        effect.style.top = e.clientY + 'px';
        clickEffect.appendChild(effect);

        effect.addEventListener('animationend', () => {
            effect.remove();
        });
    });

    // Initialize dark mode from localStorage
    document.body.classList.toggle('dark', localStorage.getItem('darkMode') === 'true');

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkMode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
            document.body.classList.toggle('dark', e.target.checked);
            localStorage.setItem('darkMode', e.target.checked);
        });
    }

    // Time and Date
    function updateDateTime() {
        const now = new Date();
        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('date');

        if (timeElement) {
            timeElement.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
        }

        if (dateElement) {
            dateElement.textContent = now.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);


    const quotes = [
        { content: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { content: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
        { content: "Change your thoughts, change your world.", author: "Norman Vincent Peale" },
        { content: "Make each day your masterpiece.", author: "John Wooden" },
        { content: "The only way out is through.", author: "Robert Frost" },
        { content: "Perfection is the enemy of progress.", author: "Winston Churchill" },
        { content: "Stay hungry, stay foolish.", author: "Steve Jobs" },
        { content: "Be yourself; everyone else is taken.", author: "Oscar Wilde" },
        { content: "Act as if what you do matters.", author: "William James" },
        { content: "Happiness is not by chance, but choice.", author: "Jim Rohn" },
        { content: "Don't wait. The time will never be right.", author: "Napoleon Hill" },
        { content: "Do what you can, with what you have.", author: "Theodore Roosevelt" },
        { content: "Live simply so others can simply live.", author: "Mahatma Gandhi" },
        { content: "Great things never come from comfort zones.", author: "Neil Strauss" },
        { content: "Patience is bitter, but its fruit sweet.", author: "Jean-Jacques Rousseau" },
        { content: "Don't quit. Suffer now, live as champion.", author: "Muhammad Ali" },
        { content: "Life begins at the end of comfort zones.", author: "Neale Donald Walsch" },
        { content: "Gratitude turns what we have into enough.", author: "Aesop" },
        { content: "The only limit to our realization is imagination.", author: "Franklin D. Roosevelt" },
        { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { content: "The best revenge is massive success.", author: "Frank Sinatra" },
        { content: "What you do today can improve tomorrow.", author: "Ralph Marston" },
        { content: "Act as if it were impossible to fail.", author: "Dorothy Broude" },
        { content: "Success is not final, failure not fatal.", author: "Winston Churchill" },
        { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { content: "The harder you work, the luckier you get.", author: "Gary Player" },
        { content: "Don't watch the clock; do what it does.", author: "Sam Levenson" },
        { content: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { content: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
        { content: "Your time is limited, don't waste it.", author: "Steve Jobs" },
        { content: "The best way to predict the future is create it.", author: "Peter Drucker" },
        { content: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
        { content: "Success usually comes to those who are too busy.", author: "Henry David Thoreau" },
        { content: "Don't be afraid to give up the good.", author: "John D. Rockefeller" },
        { content: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { content: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { content: "Hardships often prepare ordinary people for destiny.", author: "C.S. Lewis" },
        { content: "The future depends on what you do today.", author: "Mahatma Gandhi" },
        { content: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
        { content: "The only limit to our realization is imagination.", author: "Franklin D. Roosevelt" },
        { content: "What we think, we become.", author: "Buddha" },
        { content: "With the new day comes new strength.", author: "Eleanor Roosevelt" },
        { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { content: "Life is what happens when you're busy making plans.", author: "John Lennon" },
        { content: "Get busy living or get busy dying.", author: "Stephen King" },
        { content: "You only live once, but if you do it right.", author: "Mae West" },
        { content: "The best dreams happen when you're awake.", author: "Cherie Gilderbloom" },
        { content: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
        { content: "The best way out is always through.", author: "Robert Frost" },
        { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { content: "Your time is limited, don't waste it.", author: "Steve Jobs" },
        { content: "The only way to do great work is love.", author: "Steve Jobs" },
        { content: "Success is not the key to happiness.", author: "Albert Schweitzer" },
        { content: "Happiness depends upon ourselves.", author: "Aristotle" },
        { content: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
        { content: "Keep your face always toward the sunshine.", author: "Walt Whitman" },
        { content: "You must be the change you wish to see.", author: "Mahatma Gandhi" },
        { content: "What lies behind us and what lies before.", author: "Walt Disney" },
        { content: "The best is yet to come.", author: "Frank Sinatra" },
        { content: "Act as if it were impossible to fail.", author: "Dorothy Broude" },
        { content: "Success is not in what you have.", author: "Zig Ziglar" },
        { content: "The best way to predict your future.", author: "Abraham Lincoln" },
        { content: "Life is 10% what happens to us.", author: "Charles R. Swindoll" },
        { content: "The best revenge is massive success.", author: "Frank Sinatra" },
        { content: "Don't count the days, make the days count.", author: "Muhammad Ali" },
        { content: "You are never too old to set another goal.", author: "C.S. Lewis" },
        { content: "Great things take time.", author: "Vince Lombardi" },
        { content: "The key to success is action.", author: "Thomas Edison" },
        { content: "Dream big. Start small. Act now.", author: "Robin Sharma" },
        { content: "Never give up on your dreams.", author: "John Wooden" },
        { content: "Believe in the power of yet.", author: "Carol Dweck" },
        { content: "Every strike brings me closer.", author: "Babe Ruth" },
        { content: "The journey of a thousand miles.", author: "Lao Tzu" },
        { content: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
        { content: "Success is walking from failure to failure.", author: "Winston Churchill" },
        { content: "Don't wait for opportunity, create it.", author: "George Bernard Shaw" },
        { content: "The secret to getting ahead is getting started.", author: "Mark Twain" },
        { content: "Do what you love. Love what you do.", author: "Wayne Dyer" },
        { content: "The best way to find yourself.", author: "Buddha" },
        { content: "Start where you are. Use what you have.", author: "Arthur Ashe" },
        { content: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
        { content: "Don't let yesterday take up too much today.", author: "Will Rogers" },
        { content: "Hardships often prepare ordinary people for destiny.", author: "C.S. Lewis" },
        { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { content: "The future belongs to those who believe.", author: "Eleanor Roosevelt" },
        { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { content: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
        { content: "Act as if it were impossible to fail.", author: "Dorothy Broude" },
        { content: "What you do today can improve tomorrow.", author: "Ralph Marston" },
        { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { content: "Success is not the key to happiness.", author: "Albert Schweitzer" },
        { content: "The only limit to our realization is imagination.", author: "Franklin D. Roosevelt" },
        { content: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
        { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { content: "Life is what happens when you're busy.", author: "John Lennon" },
        { content: "Get busy living or get busy dying.", author: "Stephen King" },
        { content: "You only live once, but if you do it right.", author: "Mae West" },
        { content: "The best dreams happen when awake.", author: "Cherie Gilderbloom" },
        { content: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
        { content: "The best way out is always through.", author: "Robert Frost" },
        { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { content: "Your time is limited, don't waste it.", author: "Steve Jobs" },
        { content: "The only way to do great work is love.", author: "Steve Jobs" },
        { content: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
        { content: "Happiness depends upon ourselves.", author: "Aristotle" },
        { content: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
        { content: "Keep your face always toward the sunshine.", author: "Walt Whitman" },
        { content: "You must be the change you wish to see.", author: "Mahatma Gandhi" },
        { content: "What lies behind us and what lies before.", author: "Walt Disney" },
        { content: "The best is yet to come.", author: "Frank Sinatra" },
        { content: "Success is not in what you have.", author: "Zig Ziglar" },
        { content: "The best way to predict your future.", author: "Abraham Lincoln" },
        { content: "Life is 10% what happens to us.", author: "Charles R. Swindoll" },
        { content: "The best revenge is massive success.", author: "Frank Sinatra" },
        { content: "Don't count the days, make days count.", author: "Muhammad Ali" },
        { content: "You are never too old to set goals.", author: "C.S. Lewis" },
        { content: "Great things take time.", author: "Vince Lombardi" },
        { content: "The key to success is action.", author: "Thomas Edison" },
        { content: "Dream big. Start small. Act now.", author: "Robin Sharma" },
        { content: "Never give up on your dreams.", author: "John Wooden" },
        { content: "Believe in the power of yet.", author: "Carol Dweck" },
        { content: "Every strike brings me closer.", author: "Babe Ruth" },
        { content: "The journey of a thousand miles.", author: "Lao Tzu" },
        { content: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
        { content: "Success is walking from failure to failure.", author: "Winston Churchill" },
        { content: "Don't wait for opportunity, create it.", author: "George Bernard Shaw" },
        { content: "The secret to getting ahead is starting.", author: "Mark Twain" },
        { content: "Do what you love. Love what you do.", author: "Wayne Dyer" },
        { content: "The best way to find yourself.", author: "Buddha" },
        { content: "Start where you are. Use what you have.", author: "Arthur Ashe" },
    ];

    function updateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        if (quoteElement) quoteElement.textContent = quotes[randomIndex].content;
        if (authorElement) authorElement.textContent = `― ${quotes[randomIndex].author}`;
    }

    updateQuote();
    setInterval(updateQuote, 60000);

    // Google Apps Menu
    const googleApps = [
        { name: 'Search', icon: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png', url: 'https://www.google.com' },
        { name: 'Maps', icon: 'https://maps.gstatic.com/mapfiles/maps_lite/pwa/icons/maps15_bnuw3a_round_48x48.png', url: 'https://maps.google.com' },
        { name: 'YouTube', icon: 'https://www.youtube.com/s/desktop/12d6b690/img/favicon_48x48.png', url: 'https://www.youtube.com' },
        { name: 'Play', icon: 'https://www.gstatic.com/images/branding/product/1x/play_48dp.png', url: 'https://play.google.com' },
        { name: 'News', icon: 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=w48-rw', url: 'https://news.google.com' },
        { name: 'Gmail', icon: 'https://www.gstatic.com/images/branding/product/1x/gmail_48dp.png', url: 'https://mail.google.com' },
        { name: 'Meet', icon: 'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png', url: 'https://meet.google.com' },
        { name: 'Chat', icon: 'https://www.gstatic.com/images/branding/product/1x/chat_48dp.png', url: 'https://chat.google.com' },
        { name: 'Contacts', icon: 'https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png', url: 'https://contacts.google.com' },
        { name: 'Drive', icon: 'https://ssl.gstatic.com/images/branding/product/1x/drive_48dp.png', url: 'https://drive.google.com' },
        { name: 'Calendar', icon: 'https://ssl.gstatic.com/images/branding/product/1x/calendar_48dp.png', url: 'https://calendar.google.com' },
        { name: 'Translate', icon: 'https://ssl.gstatic.com/translate/favicon.ico', url: 'https://translate.google.com' }
    ];

    function createGoogleAppsMenu() {
        const menuContainer = document.querySelector('.google-apps-grid');
        if (menuContainer) {
            googleApps.forEach(app => {
                const appElement = document.createElement('a');
                appElement.href = app.url;
                appElement.className = 'google-app';
                appElement.innerHTML = `
                  <img src="${app.icon}" alt="${app.name} icon">
                  <span>${app.name}</span>
              `;
                menuContainer.appendChild(appElement);
            });
        }
    }

    createGoogleAppsMenu();

    // Apps Menu Toggle
    const appsMenuToggle = document.querySelector('.apps-menu-toggle');
    const googleAppsMenu = document.querySelector('.google-apps-menu');

    if (appsMenuToggle && googleAppsMenu) {
        appsMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            googleAppsMenu.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!googleAppsMenu.contains(e.target)) {
                googleAppsMenu.classList.remove('open');
            }
        });
    }
});
// Search bar code 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchEngineOptions = document.querySelectorAll('input[name="searchEngine"]');

    const searchEngines = {
        google: 'https://www.google.com/search?q=',
        bing: 'https://www.bing.com/search?q=',
        yahoo: 'https://search.yahoo.com/search?p=',
        duckduckgo: 'https://duckduckgo.com/?q=',
        ecosia: 'https://www.ecosia.org/search?q='
    };

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const selectedEngine = document.querySelector('input[name="searchEngine"]:checked').value;
            const searchUrl = searchEngines[selectedEngine] + encodeURIComponent(query);
            window.location.href = searchUrl;
        }
    }

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });

    // Update placeholder text when changing search engines
    searchEngineOptions.forEach(option => {
        option.addEventListener('change', () => {
            const selectedEngine = option.value;
            searchInput.placeholder = `Search ${selectedEngine.charAt(0).toUpperCase() + selectedEngine.slice(1)}`;

            // Add animation when switching search engines
            const label = option.closest('.search-engine-option');
            label.style.transform = 'scale(1.05)';
            setTimeout(() => {
                label.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Initialize placeholder text
    const initialEngine = document.querySelector('input[name="searchEngine"]:checked').value;
    searchInput.placeholder = `Search ${initialEngine.charAt(0).toUpperCase() + initialEngine.slice(1)}`;
});


document.addEventListener('DOMContentLoaded', () => {
    const customizeSidebar = document.getElementById('customizeSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const customizeButton = document.querySelector('.customize-button');

    // Sidebar Dragging
    let isDragging = false;
    let offsetX, offsetY;

    customizeSidebar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - customizeSidebar.getBoundingClientRect().left;
        offsetY = e.clientY - customizeSidebar.getBoundingClientRect().top;
        customizeSidebar.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        customizeSidebar.style.left = `${x}px`;
        customizeSidebar.style.top = `${y}px`;
        customizeSidebar.style.transform = 'none'; // Disable centering during drag
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        customizeSidebar.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Open sidebar
    customizeButton.addEventListener('click', () => {
        customizeSidebar.classList.add('open');
        customizeSidebar.style.left = '20px'; // Reset position if dragged off-screen
        customizeSidebar.style.top = '50%';
        customizeSidebar.style.transform = 'translateY(-50%)';
    });

    // Close sidebar
    closeSidebar.addEventListener('click', () => {
        customizeSidebar.classList.remove('open');
        customizeSidebar.style.left = '-400px'; // Move the sidebar back out of view
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const toolsMenu = document.querySelector('.tools-menu');
    const toggleToolsMenuInput = document.getElementById('toggleToolsMenu');

    // Load tools menu state from localStorage
    const isToolsMenuEnabled = localStorage.getItem('toolsMenuEnabled') === 'true' || localStorage.getItem('toolsMenuEnabled') === null;
    toggleToolsMenuInput.checked = isToolsMenuEnabled;
    toolsMenu.style.display = isToolsMenuEnabled ? 'block' : 'none';

    // Update state on toggle
    toggleToolsMenuInput.addEventListener('change', () => {
        const isEnabled = toggleToolsMenuInput.checked;
        localStorage.setItem('toolsMenuEnabled', isEnabled);
        toolsMenu.style.display = isEnabled ? 'block' : 'none';
    });

    // Sidebar logic
    const closeSidebar = document.getElementById('closeSidebar');
    const customizeSidebar = document.getElementById('customizeSidebar');
    const customizeButton = document.querySelector('.customize-button');

    customizeButton.addEventListener('click', () => {
        customizeSidebar.classList.add('open');
    });

    closeSidebar.addEventListener('click', () => {
        customizeSidebar.classList.remove('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const sidebarContent = document.getElementById('sidebarContent');
    const addToolsMenu = document.getElementById('addToolsMenu');
    const addToolsButton = document.getElementById('addToolsButton');
    const backButton = document.getElementById('backButton');
    const closeSidebar = document.getElementById('closeSidebar');
    const customizeSidebar = document.getElementById('customizeSidebar');
    const toggleToolsMenuInput = document.getElementById('toggleToolsMenu');
    const toolsMenu = document.querySelector('#toolsMenu');
    const toolsToggle = document.querySelector('#toolsToggle');
    const addToolsContainer = document.getElementById('addToolsContainer');
    const darkModeToggle = document.getElementById('darkMode'); // Assuming you have a toggle for dark mode

    // Tool Data
    const tools = [
        { name: 'ChatGPT', img: 'https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png', link: 'https://chat.openai.com/' },
        { name: 'Google Gemini', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s', link: 'https://gemini.google.com/app?hl=en-IN' },
        { name: 'Claude', img: 'https://cdni.comss.net/logo/2024-07-17_11-22-19.png?width=180&height=180', link: 'https://claude.ai/' },
        { name: 'Microsoft Copilot', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzj6bNF084cHQZOW05R_K1214R-C0-qMOQC4_20SUDGeI_GZVxXLKAaup3ts7vctA4T8E&usqp=CAU', link: 'https://copilot.microsoft.com/' },
        { name: 'DeepL', img: 'https://www.appengine.ai/uploads/images/profile/logo/DeepL-AI.png', link: 'https://www.deepl.com/en/translator' },
        { name: 'Canva Magic Studio', img: 'https://cdn.prod.website-files.com/65f9d7f5c88d4a9940b06735/661eb997313070644ca56af7_Canva_icon_2021.webp', link: 'https://www.canva.com/en_in/magic/' },
        { name: 'Poe by Quora', img: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/07/86/64c4878d34ada_com.poe.android.png', link: 'https://poeai.quora.com/' },
        { name: 'Jasper AI', img: 'https://assets.wheelhouse.com/media/_solution_logo_04162024_61721611.png', link: 'https://www.jasper.ai/' },
        { name: 'Copy.ai', img: 'https://res.cloudinary.com/apideck/image/upload/v1612305070/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/lwumruy6fbpftzfu2rxj.png', link: 'https://www.copy.ai/' },


        { name: 'Perplexity AI', img: 'https://www.silicon.co.uk/wp-content/uploads/2024/11/Perplexity-AI-logo.-Image-credit-Perplexity-684x513.jpg', link: 'https://www.perplexity.ai/' },
        { name: 'Character AI', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9n0N2F5XU7dfD_w1hltVfCCEik4NFa3pAw&s', link: 'https://beta.character.ai/' },
        { name: 'Remove.bg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC698bq65dz3P9UGxKAUdL_RO_UI5Ia1CVnQ&s', link: 'https://www.remove.bg/' },
        { name: 'QuillBot', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTkn2rXck6IKTrKS92pY8xXnU117yhEijOg&s', link: 'https://quillbot.com/' },
        { name: 'Grammarly', img: 'https://yt3.googleusercontent.com/Wq2im6eIMZ_0KqvhfQmaFxTntUMWwIP_ppoPh19chjB1pyrWz0eRqJVSZxCjv1-kDrLcpmc6=s900-c-k-c0x00ffffff-no-rj', link: 'https://www.grammarly.com/' },
        { name: 'Suno', img: 'https://a.fsdn.com/allura/s/suno-ai/icon?39face8a8a55014d4704228f79ee89749173f22e18a34fff87fe2e56ebc9a5bf?&w=148', link: 'https://www.suno.ai/' },
        { name: 'Quizizz', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmeAGxa1rZfQXSag1oSf0JTfgvRG7DAcb3g&s', link: 'https://quizizz.com/' },
        { name: 'Luma AI', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zYmCWhfg7RFliTIFQafuCXUr_T-7ARflFg&s', link: 'https://lumalabs.ai/' },
        { name: 'ElevenLabs', img: 'https://martsbd.com/wp-content/uploads/2024/04/ElevenLabs-Premium-Subscription.png', link: 'https://elevenlabs.io/' },
        { name: 'Synthesia', img: 'https://assets.wheelhouse.com/media/_solution_logo_04162024_679873.jpeg', link: 'https://www.synthesia.io/' },
        { name: 'Midjourney', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/480px-Midjourney_Emblem.png', link: 'https://www.midjourney.com/' },
        { name: 'Writesonic', img: 'https://media.licdn.com/dms/image/v2/C4D0BAQGhlUgn8QU4Hg/company-logo_200_200/company-logo_200_200/0/1650618028463/writesonic_logo?e=2147483647&v=beta&t=pUQYY83b76uFQI2Rh4W8kQBlq-4SvjX_HnffU0QTlz8', link: 'https://writesonic.com/' },
        { name: 'Rytr', img: 'https://cdn.prod.website-files.com/63994dae1033718bee6949ce/639ccecbbf9aaf0babda8644_639bc61c9fd058ba9e0df836_logo-spaced.png', link: 'https://rytr.me/' },
        { name: 'Neuronwriter', img: 'https://cdn-1.webcatalog.io/catalog/neuronwriter/neuronwriter-icon-filled-256.png?v=1714779378022', link: 'https://neuronwriter.com/' },


    ];

    // Load Tools from LocalStorage or Default Tools
    let activeTools = JSON.parse(localStorage.getItem('activeTools')) || tools.slice(0, 5);

    // Update Tools Menu
    function updateToolsMenu() {
        toolsMenu.innerHTML = '';
        activeTools.forEach(tool => {
            const toolLink = document.createElement('a');
            toolLink.href = tool.link;
            toolLink.target = '_blank';
            toolLink.innerHTML = `<img src="${tool.img}" alt="${tool.name}">`;
            toolsMenu.appendChild(toolLink);
        });
        localStorage.setItem('activeTools', JSON.stringify(activeTools));
    }

    // Populate Add Tools Menu
    function populateAddToolsMenu() {
        addToolsContainer.innerHTML = '';
        tools.forEach(tool => {
            const isAdded = activeTools.some(activeTool => activeTool.name === tool.name);
            const toolOption = document.createElement('div');
            toolOption.className = 'tool-option';
            toolOption.innerHTML = `
                <span>${tool.name}</span>
                <i class="fas fa-${isAdded ? 'minus-circle remove' : 'plus-circle'} add-remove-icon"></i>
            `;
            const toggleTool = () => {
                if (isAdded) {
                    activeTools = activeTools.filter(activeTool => activeTool.name !== tool.name);
                } else if (activeTools.length < 5) {
                    activeTools.push(tool);
                } else {
                    alert('Not more than 5 tools can be added.');
                    return;
                }
                populateAddToolsMenu();
                updateToolsMenu();
            };
            toolOption.addEventListener('click', toggleTool);
            addToolsContainer.appendChild(toolOption);
        });
    }

    // Show Add Tools Menu
    addToolsButton.addEventListener('click', () => {
        sidebarContent.style.transform = 'translateX(-100%)';
        addToolsMenu.style.transform = 'translateX(0)';
    });

    // Back to Main Menu
    backButton.addEventListener('click', () => {
        addToolsMenu.style.transform = 'translateX(100%)';
        sidebarContent.style.transform = 'translateX(0)';
    });

    // Close Sidebar
    closeSidebar.addEventListener('click', () => {
        // Always reset to main menu when sidebar is reopened
        sidebarContent.style.transform = 'translateX(0)';
        addToolsMenu.style.transform = 'translateX(100%)';
    });

    // Toggle Tools Menu Visibility
    toolsToggle.addEventListener('click', () => {
        toolsMenu.classList.toggle('visible');
    });

    // Apply Dark Theme
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });

    // Initial Setup
    updateToolsMenu();
    populateAddToolsMenu();
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleGoogleApps = document.getElementById('toggleGoogleApps');
    const appsMenuToggle = document.getElementById('appsMenuToggle');
    const darkModeToggle = document.getElementById('darkMode');
    const body = document.body;

    // Load the Google Apps toggle state from localStorage or set default to true
    const googleAppsState = localStorage.getItem('googleAppsState');
    if (googleAppsState !== null) {
        toggleGoogleApps.checked = JSON.parse(googleAppsState);
    }

    // Google Apps Visibility Control
    toggleGoogleApps.addEventListener('change', () => {
        if (toggleGoogleApps.checked) {
            // Show the Google Apps (and the 3 dots menu button)
            appsMenuToggle.style.display = 'block';
            localStorage.setItem('googleAppsState', 'true');
        } else {
            // Hide the Google Apps and the 3 dots menu button
            appsMenuToggle.style.display = 'none';
            localStorage.setItem('googleAppsState', 'false');
        }
    });

    // Initialize based on the current state of Google Apps toggle
    if (!toggleGoogleApps.checked) {
        appsMenuToggle.style.display = 'none'; // Hide initially if unchecked
    }

    // Theme toggle for Dark Mode (Optional)
    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-theme', darkModeToggle.checked);
    });

    // Initial Setup
    if (toggleGoogleApps.checked) {
        appsMenuToggle.style.display = 'block'; // Show by default
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const addSocialButton = document.getElementById('addSocialButton');
    const addSocialMenu = document.getElementById('addSocialMenu');
    const backSocialButton = document.getElementById('backSocialButton');
    const socialLinksContainer = document.getElementById('socialLinksContainer');
    const socialLinksSection = document.querySelector('.social-links');

    // Social Media Data
    const socialMedia = [
        { name: 'Facebook', icon: 'fab fa-facebook-f', link: 'https://www.facebook.com' },
        { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com' },
        { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://www.twitter.com' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com' },
        { name: 'Pinterest', icon: 'fab fa-pinterest', link: 'https://www.pinterest.com' },
        { name: 'Reddit', icon: 'fab fa-reddit', link: 'https://www.reddit.com' },
        { name: 'TikTok', icon: 'fab fa-tiktok', link: 'https://www.tiktok.com' },
        { name: 'Snapchat', icon: 'fab fa-snapchat', link: 'https://www.snapchat.com' },
        { name: 'YouTube', icon: 'fab fa-youtube', link: 'https://www.youtube.com' },
        { name: 'Discord', icon: 'fab fa-discord', link: 'https://discord.com' },
        { name: 'Tumblr', icon: 'fab fa-tumblr', link: 'https://www.tumblr.com' },
        { name: 'Medium', icon: 'fab fa-medium', link: 'https://www.medium.com' },
        { name: 'Vimeo', icon: 'fab fa-vimeo-v', link: 'https://vimeo.com' },
        { name: 'Flickr', icon: 'fab fa-flickr', link: 'https://www.flickr.com' },
        { name: 'Dribbble', icon: 'fab fa-dribbble', link: 'https://dribbble.com' },
        { name: 'Behance', icon: 'fab fa-behance', link: 'https://www.behance.net' },
        { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com' },
        { name: 'Slack', icon: 'fab fa-slack', link: 'https://slack.com' },
        { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://www.whatsapp.com' },
        { name: 'Telegram', icon: 'fab fa-telegram', link: 'https://telegram.org' },
        { name: 'Quora', icon: 'fab fa-quora', link: 'https://www.quora.com' },
        { name: 'WeChat', icon: 'fab fa-weixin', link: 'https://www.wechat.com' },
        { name: 'Skype', icon: 'fab fa-skype', link: 'https://www.skype.com' },
        { name: 'Line', icon: 'fab fa-line', link: 'https://line.me' },
        { name: 'Slack (Alt)', icon: 'fab fa-slack-hash', link: 'https://slack.com' },
        { name: 'Twitch', icon: 'fab fa-twitch', link: 'https://www.twitch.tv' },
        { name: 'Mix', icon: 'fab fa-mix', link: 'https://mix.com' },
        { name: 'DeviantArt', icon: 'fab fa-deviantart', link: 'https://www.deviantart.com' },
        { name: 'Blogger', icon: 'fab fa-blogger', link: 'https://www.blogger.com' }
      ];
      

    // Load active social links from localStorage or set default
    let activeSocialLinks = JSON.parse(localStorage.getItem('activeSocialLinks')) || socialMedia.slice(0, 4);

    // Update Social Links Section
    function updateSocialLinks() {
        socialLinksSection.innerHTML = '';
        activeSocialLinks.forEach(social => {
            const socialLink = document.createElement('a');
            socialLink.href = social.link;
            socialLink.className = 'social-icon';
            socialLink.innerHTML = `<i class="${social.icon}"></i>`;
            socialLinksSection.appendChild(socialLink);
        });
        localStorage.setItem('activeSocialLinks', JSON.stringify(activeSocialLinks));
    }

    // Get scroll position
    function getScrollPosition(element) {
        return element.scrollTop;
    }

    // Set scroll position
    function setScrollPosition(element, position) {
        element.scrollTop = position;
    }

    // Populate Add Social Menu
    function populateSocialMenu() {
        const scrollContainer = socialLinksContainer.querySelector('div');
        const scrollPosition = scrollContainer ? getScrollPosition(scrollContainer) : 0;

        socialLinksContainer.innerHTML = '';
        
        // Create a scrollable container
        const newScrollContainer = document.createElement('div');
        newScrollContainer.style.height = '100%';
        newScrollContainer.style.overflowY = 'auto';
        newScrollContainer.style.paddingRight = '10px';
        newScrollContainer.style.boxSizing = 'border-box';

        socialMedia.forEach(social => {
            const isAdded = activeSocialLinks.some(link => link.name === social.name);
            const socialOption = document.createElement('div');
            socialOption.className = `social-option ${isAdded ? 'added' : ''}`;
            socialOption.innerHTML = `
                <span>${social.name}</span>
               <i class="fas fa-${isAdded ? 'minus-circle remove' : 'plus-circle'} add-remove-icon"></i>
            `;
            socialOption.addEventListener('click', (event) => {
                event.preventDefault();
                if (isAdded) {
                    activeSocialLinks = activeSocialLinks.filter(link => link.name !== social.name);
                } else if (activeSocialLinks.length < 7) {
                    activeSocialLinks.push(social);
                } else {
                    alert('You can only add up to 7 social links.');
                    return;
                }
                const currentScrollPosition = getScrollPosition(newScrollContainer);
                populateSocialMenu();
                updateSocialLinks();
                setScrollPosition(socialLinksContainer.querySelector('div'), currentScrollPosition);
            });
            newScrollContainer.appendChild(socialOption);
        });

        socialLinksContainer.appendChild(newScrollContainer);
        setScrollPosition(newScrollContainer, scrollPosition);
    }

    // Show Add Social Menu
    addSocialButton.addEventListener('click', () => {
        document.getElementById('sidebarContent').style.transform = 'translateX(-100%)';
        addSocialMenu.style.transform = 'translateX(0)';
        populateSocialMenu();
        setScrollPosition(socialLinksContainer.querySelector('div'), 0);
    });

    // Back to Main Menu
    backSocialButton.addEventListener('click', () => {
        addSocialMenu.style.transform = 'translateX(100%)';
        document.getElementById('sidebarContent').style.transform = 'translateX(0)';
    });

    // Initialize Social Links
    updateSocialLinks();
    populateSocialMenu();
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedBackground = document.querySelector('.animated-background');
    const socialLinks = document.querySelectorAll('.social-links a');
    const colorCircles = document.querySelectorAll('.color-circle');
    const sidebarContent = document.getElementById('sidebarContent');
    const changeBackgroundMenu = document.getElementById('changeBackgroundMenu');
    const changeBackgroundButton = document.getElementById('changeBackgroundButton');
    const backBackgroundButton = document.getElementById('backBackgroundButton');

    // Load saved background from localStorage
    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        animatedBackground.style.background = savedBackground;
        updateSocialLinksTheme(savedBackground);
    }

    // Update Social Links Color Based on Background
    function updateSocialLinksTheme(backgroundColor) {
        socialLinks.forEach(link => {
            link.style.background = `linear-gradient(135deg, ${getContrastingColor(backgroundColor)}, ${adjustBrightness(backgroundColor, -20)})`;
        });
    }

    // Helper Functions for Adjusting Colors
    function getContrastingColor(color) {
        // Logic to calculate contrasting color (e.g., white or black based on brightness)
        return '#ffffff'; // Simplified; customize for full contrast handling
    }

    function adjustBrightness(color, amount) {
        // Logic to adjust brightness of a given color
        return color;
    }

    // Event Listener for Color Circles
    colorCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            const color = circle.getAttribute('data-color');
            animatedBackground.style.background = color;
            updateSocialLinksTheme(color);
            localStorage.setItem('background', color);
        });
    });

    // Sidebar Navigation
    changeBackgroundButton.addEventListener('click', () => {
        sidebarContent.style.transform = 'translateX(-100%)';
        changeBackgroundMenu.style.transform = 'translateX(0)';
    });

    backBackgroundButton.addEventListener('click', () => {
        changeBackgroundMenu.style.transform = 'translateX(100%)';
        sidebarContent.style.transform = 'translateX(0)';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const animatedBackground = document.querySelector('.animated-background');
    const changeBackgroundButton = document.getElementById('changeBackgroundButton');
    const changeBackgroundMenu = document.getElementById('changeBackgroundMenu');
    const backBackgroundButton = document.getElementById('backBackgroundButton');
    const backgroundOptions = document.querySelectorAll('.background-option');

    const themeToSocialIconColor = {
        'default': '#46a7ff',
        'vibrant-neon': '#007BFF',
        'geometric-shapes': '#008080',
        'abstract-blob': '#C71585',
        'particle-flow': '#3EB489',
        'comic-pop-art': '#FFFFFF',
        'firefly-glow': '#FFBF00',
        'candyland': '#FF69B4',
        'pixel-art': '#556B2F',
        'liquid-motion': '#0386c8',
        'rainbow-hues': '#FFFFF0',
        'aurora-borealis': '#008080'
    };

    function setBackground(bgType) {
        animatedBackground.className = 'animated-background';
        animatedBackground.innerHTML = '';

        switch (bgType) {
            case 'default':
                animatedBackground.classList.add('default-bg');
                createDefaultCircles();
                break;
            case 'vibrant-neon':
                animatedBackground.classList.add('vibrant-neon-bg');
                createNeonParticles();
                break;
            case 'geometric-shapes':
                animatedBackground.classList.add('geometric-shapes-bg');
                createGeometricShapes();
                break;
            case 'abstract-blob':
                animatedBackground.classList.add('abstract-blob-bg');
                createBlobs();
                break;
            case 'particle-flow':
                animatedBackground.classList.add('particle-flow-bg');
                createParticleFlow();
                break;
            case 'comic-pop-art':
                animatedBackground.classList.add('comic-pop-art-bg');
                createComicEmojis();
                break;
            case 'firefly-glow':
                animatedBackground.classList.add('firefly-glow-bg');
                createFireflies();
                break;
            case 'candyland':
                animatedBackground.classList.add('candyland-bg');
                createCandyEmojis();
                break;
            case 'pixel-art':
                animatedBackground.classList.add('pixel-art-bg');
                createPixelArt();
                break;
            case 'liquid-motion':
                animatedBackground.classList.add('liquid-motion-bg');
                createLiquidMotion();
                break;
            case 'rainbow-hues':
                animatedBackground.classList.add('rainbow-hues-bg');
                createRainbowHues();
                break;
            case 'aurora-borealis':
                animatedBackground.classList.add('aurora-borealis-bg');
                createAuroraBorealis();
                break;
        }

        updateSocialIconColors(bgType);
        localStorage.setItem('background', bgType);
    }

    function updateSocialIconColors(theme) {
        const socialIcons = document.querySelectorAll('.social-links a');
        const newColor = themeToSocialIconColor[theme] || themeToSocialIconColor['default'];

        socialIcons.forEach(icon => {
            icon.style.color = newColor;
        });

        // Update the CSS variable for consistency
        document.documentElement.style.setProperty('--social-icon-color', newColor);
    }

    // Background Selection
    backgroundOptions.forEach(option => {
        option.addEventListener('click', () => {
            const bgType = option.getAttribute('data-bg');
            setBackground(bgType);
        });
    });

    // Load saved background from localStorage and apply it
    const savedBackground = localStorage.getItem('background') || 'default';
    setBackground(savedBackground);

    // Show Change Background Menu
    changeBackgroundButton.addEventListener('click', () => {
        document.getElementById('sidebarContent').style.transform = 'translateX(-100%)';
        changeBackgroundMenu.style.transform = 'translateX(0)';
    });

    // Back to Main Menu
    backBackgroundButton.addEventListener('click', () => {
        changeBackgroundMenu.style.transform = 'translateX(100%)';
        document.getElementById('sidebarContent').style.transform = 'translateX(0)';
    });

    // Helper functions for creating background elements
    function createDefaultCircles() {
        for (let i = 0; i < 5; i++) {
            const circle = document.createElement('div');
            circle.className = 'default-circle';
            circle.style.width = `${Math.random() * 80 + 20}px`;
            circle.style.height = circle.style.width;
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.top = `${Math.random() * 100}%`;
            circle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            circle.style.animationDelay = `${Math.random() * 5}s`;
            animatedBackground.appendChild(circle);
        }
    }

    function createNeonParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'neon-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            animatedBackground.appendChild(particle);
        }
    }

    function createGeometricShapes() {
        const shapes = ['triangle', 'square', 'pentagon', 'hexagon'];
        for (let i = 0; i < 20; i++) {
            const shape = document.createElement('div');
            shape.className = `geometric-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.width = `${Math.random() * 100 + 50}px`;
            shape.style.height = shape.style.width;
            shape.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
            animatedBackground.appendChild(shape);
        }
    }

    function createBlobs() {
        for (let i = 0; i < 5; i++) {
            const blob = document.createElement('div');
            blob.className = 'blob';
            blob.style.left = `${Math.random() * 100}%`;
            blob.style.top = `${Math.random() * 100}%`;
            blob.style.width = `${Math.random() * 300 + 100}px`;
            blob.style.height = blob.style.width;
            blob.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            blob.style.animationDuration = `${Math.random() * 10 + 20}s`;
            blob.style.animationDelay = `${Math.random() * 10}s`;
            animatedBackground.appendChild(blob);
        }
    }

    function createParticleFlow() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        animatedBackground.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        const particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    function createComicEmojis() {
        const emojis = ['😀', '😁', '😆', '😂', '😛', '😋', '🤯', '😔', '🙂', '🥳', '🤩', '😌', '😉', '🙃', '🙂', '😇', '😊', '🤗', '🫣', '😥', '😨', '🥶', '🤯', '😗', '😘', '💋', '🤝', '🙏', '🫰', '🤘', '🤙', '👍', '👆', '🤚', '🫳', '🧠', '👻', '👺', '🤡', '😲', '🤤', '🤭', '🫢', '😭', '🤠', '🤑', '😹', '😽', '🙀', '🥶', '😨', '😥'];
        for (let i = 0; i < 20; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'comic-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.top = `${Math.random() * 100}%`;
            emoji.style.animationDelay = `${Math.random() * 5}s`;
            animatedBackground.appendChild(emoji);
        }
    }

    function createFireflies() {
        for (let i = 0; i < 50; i++) {
            const firefly = document.createElement('div');
            firefly.className = 'firefly';
            firefly.style.left = `${Math.random() * 100}%`;
            firefly.style.top = `${Math.random() * 100}%`;
            firefly.style.animationDuration = `${Math.random() * 5 + 5}s`;
            firefly.style.animationDelay = `${Math.random() * 5}s`;
            animatedBackground.appendChild(firefly);
        }
    }

    function createCandyEmojis() {
        const candies = ['🍬', '🍭', '🍓', '🍡', '🍬', '🍭', '🍭', '🩷', '🍭', '🍬', '🍨', '🎀', '🧁', '🍭', '🍫', '📍', '🍰', '🍬', '🍭', '𖥔', '݁', '˖', '°', '🩷', '🍭', '🍬', 'ʚ', '𖦹', 'ɞ', '⋆', '⑅', '˚', '₊', 'ೀ', '🍨', '‧', '˚', '🎀', '⊹˚', '♡', '🧁', '˚', '₊', '𝐶𝑎𝑛𝑑𝑦', '🍭ྀི', '🍫', '📍', '🍰', '🍬', '🍭'];
        for (let i = 0; i < 30; i++) {
            const candy = document.createElement('div');
            candy.className = 'candy-emoji';
            candy.textContent = candies[Math.floor(Math.random() * candies.length)];
            candy.style.left = `${Math.random() * 100}%`;
            candy.style.top = `${Math.random() * 100}%`;
            candy.style.animationDuration = `${Math.random() * 2 + 3}s`;
            candy.style.animationDelay = `${Math.random() * 5}s`;
            animatedBackground.appendChild(candy);
        }
    }

    function createPixelArt() {
        const pixelColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7d794', '#ff8b94'];
        const gridSize = 20;
        const pixelSize = Math.ceil(Math.max(window.innerWidth, window.innerHeight) / gridSize);

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (Math.random() > 0.7) {
                    const pixel = document.createElement('div');
                    pixel.className = 'pixel';
                    pixel.style.width = `${pixelSize}px`;
                    pixel.style.height = `${pixelSize}px`;
                    pixel.style.left = `${i * pixelSize}px`;
                    pixel.style.top = `${j * pixelSize}px`;
                    pixel.style.backgroundColor = pixelColors[Math.floor(Math.random() * pixelColors.length)];
                    pixel.style.animationDelay = `${Math.random() * 2}s`;
                    animatedBackground.appendChild(pixel);
                }
            }
        }
    }

    function createLiquidMotion() {
        for (let i = 0; i < 5; i++) {
            const blob = document.createElement('div');
            blob.className = 'liquid-blob';
            blob.style.left = `${Math.random() * 100}%`;
            blob.style.top = `${Math.random() * 100}%`;
            blob.style.width = `${Math.random() * 300 + 100}px`;
            blob.style.height = blob.style.width;
            blob.style.animationDuration = `${Math.random() * 10 + 20}s`;
            blob.style.animationDelay = `${Math.random() * 10}s`;
            animatedBackground.appendChild(blob);
        }
    }

    function createRainbowHues() {
        for (let i = 0; i < 5; i++) {
            const streak = document.createElement('div');
            streak.className = 'rainbow-streak';
            streak.style.top = `${Math.random() * 100}%`;
            streak.style.animationDuration = `${Math.random() * 3 + 2}s`;
            streak.style.animationDelay = `${Math.random() * 5}s`;
            animatedBackground.appendChild(streak);
        }
    }

    function createAuroraBorealis() {
        for (let i = 0; i < 3; i++) {
            const aurora = document.createElement('div');
            aurora.className = 'aurora';
            aurora.style.top = `${i * 30}%`;
            aurora.style.animationDelay = `${i * 2}s`;
            animatedBackground.appendChild(aurora);
        }
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const changeWatchFaceButton = document.getElementById('changeWatchFaceButton');
    const changeWatchFaceMenu = document.getElementById('changeWatchFaceMenu');
    const backWatchFaceButton = document.getElementById('backWatchFaceButton');
    const watchFaceOptions = document.querySelectorAll('.watch-face-option');
    const dateTimeContainer = document.querySelector('.date-time');

    // Set default watch face
    let currentWatchFace = localStorage.getItem('watchFace') || 'standard-digital';
    setWatchFace(currentWatchFace);

    // Watch face menu navigation
    changeWatchFaceButton.addEventListener('click', () => {
        document.getElementById('sidebarContent').style.transform = 'translateX(-100%)';
        changeWatchFaceMenu.style.transform = 'translateX(0)';
    });

    backWatchFaceButton.addEventListener('click', () => {
        changeWatchFaceMenu.style.transform = 'translateX(100%)';
        document.getElementById('sidebarContent').style.transform = 'translateX(0)';
    });

    // Watch face selection
    watchFaceOptions.forEach(option => {
        option.addEventListener('click', () => {
            const watchType = option.getAttribute('data-watch');
            setWatchFace(watchType);
            localStorage.setItem('watchFace', watchType);
        });
    });

    function setWatchFace(watchType) {
        dateTimeContainer.innerHTML = '';
        dateTimeContainer.className = 'date-time';

        switch (watchType) {
            case 'standard-digital':
                createStandardDigital();
                break;
            case 'glass-digital':
                createGlassDigital();
                break;
            case 'analog':
                createAnalogWatch();
                break;
        }
    }

    function createStandardDigital() {
        const timeDiv = document.createElement('div');
        timeDiv.className = 'standard-digital time';
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';

        dateTimeContainer.appendChild(timeDiv);
        dateTimeContainer.appendChild(dateDiv);

        function updateTime() {
            const now = new Date();
            timeDiv.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            dateDiv.textContent = now.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                weekday: 'long'
            });
        }

        updateTime();
        setInterval(updateTime, 1000);
    }

    function createGlassDigital() {
        const wrapper = document.createElement('div');
        wrapper.className = 'glass-digital';

        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';

        wrapper.appendChild(timeDiv);
        wrapper.appendChild(dateDiv);
        dateTimeContainer.appendChild(wrapper);

        function updateTime() {
            const now = new Date();
            timeDiv.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            dateDiv.textContent = now.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                weekday: 'long'
            });
        }

        updateTime();
        setInterval(updateTime, 1000);
    }

    function createAnalogWatch() {
        const analogWatch = document.createElement('div');
        analogWatch.className = 'analog-watch';

        const hourHand = document.createElement('div');
        hourHand.className = 'hand hour-hand';

        const minuteHand = document.createElement('div');
        minuteHand.className = 'hand minute-hand';

        const secondHand = document.createElement('div');
        secondHand.className = 'hand second-hand';

        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';

        analogWatch.appendChild(hourHand);
        analogWatch.appendChild(minuteHand);
        analogWatch.appendChild(secondHand);

        dateTimeContainer.appendChild(analogWatch);
        dateTimeContainer.appendChild(dateDiv);

        function updateClock() {
            const now = new Date();
            const hours = now.getHours() % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourDeg = (hours + minutes / 60) * 30;
            const minuteDeg = (minutes + seconds / 60) * 6;
            const secondDeg = seconds * 6;

            hourHand.style.transform = `rotate(${hourDeg}deg)`;
            minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
            secondHand.style.transform = `rotate(${secondDeg}deg)`;

            dateDiv.textContent = now.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                weekday: 'long'
            });
        }

        updateClock();
        setInterval(updateClock, 1000);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    initExtensionName();
    initCustomizeSidebar();
});

function initExtensionName() {
    const extensionNameElement = document.getElementById('extensionName');
    const nameInput = document.getElementById('nameInput');
    const nameChangeButton = document.getElementById('nameChangeButton');

    // Load saved name from storage
    chrome.storage.sync.get(['customName'], (result) => {
        if (result.customName) {
            extensionNameElement.textContent = result.customName;
        }
    });

    // Handle name change
    nameChangeButton.addEventListener('click', updateName);

    // Handle Enter key press
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            updateName();
        }
    });

    function updateName() {
        const newName = nameInput.value.trim();
        if (newName) {
            extensionNameElement.textContent = newName;
            chrome.storage.sync.set({ customName: newName }, () => {
                console.log('Name updated and saved');
            });
            nameInput.value = '';
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '7787bac0dac4d36d104b2f14076ce622';

    function showWeatherLoading(show) {
        const weatherWidget = document.querySelector('.weather-widget');
        let loadingElement = document.getElementById('weatherLoading');

        if (!loadingElement && show) {
            loadingElement = document.createElement('div');
            loadingElement.id = 'weatherLoading';
            loadingElement.className = 'weather-loading';
            loadingElement.innerHTML = '<p>Loading weather data. Please wait...</p>';
            weatherWidget.appendChild(loadingElement);
        }

        if (loadingElement) {
            loadingElement.style.display = show ? 'flex' : 'none';
        }
    }

    async function getWeather() {
        showWeatherLoading(true);
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const { latitude, longitude } = position.coords;

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!data || !data.list || data.list.length === 0) {
                throw new Error('Invalid data received from the weather API');
            }

            updateCurrentWeather(data.list[0], data.city);
            updateForecast(data.list);
            updateHourlyForecast(data.list);
            updateDetailedWeather(data.list[0]);
            toggleForecastDisplay();
        } catch (error) {
            console.error('Error fetching weather:', error);
            const weatherWidget = document.querySelector('.weather-widget');
            if (weatherWidget) {
                weatherWidget.innerHTML = `<p>Unable to fetch weather data: Please try again later or check your Network connnection or Refresh the tab again</p>`;
            }
        } finally {
            showWeatherLoading(false);
        }
    }

    function updateCurrentWeather(currentWeather, cityData) {
        const temperatureElement = document.getElementById('temperature');
        const weatherDescriptionElement = document.getElementById('weather-description');
        const weatherIconElement = document.getElementById('weather-icon');
        const locationElement = document.getElementById('location');
        const precipitationElement = document.getElementById('precipitation');
        const sunriseElement = document.getElementById('sunrise');
        const sunsetElement = document.getElementById('sunset');

        if (temperatureElement) temperatureElement.textContent = `${Math.round(currentWeather.main.temp)}°C`;
        if (weatherDescriptionElement) weatherDescriptionElement.textContent = currentWeather.weather[0].description;
        if (weatherIconElement) weatherIconElement.innerHTML = getAnimatedWeatherIcon(currentWeather.weather[0].icon);
        if (locationElement) locationElement.textContent = cityData.name;

        // Update precipitation chances
        if (precipitationElement) {
            const rainChance = currentWeather.pop * 100; // pop is probability of precipitation
            const rainIcon = rainChance > 0 ?
                '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-1.svg" alt="Rain">' :
                '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg" alt="No Rain">';
            precipitationElement.innerHTML = `${rainIcon} ${rainChance > 0 ? `Rain: ${Math.round(rainChance)}%` : 'No rain expected'}`;
        }

        // Update sunrise and sunset times
        if (sunriseElement && sunsetElement) {
            const sunriseTime = new Date(cityData.sunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            const sunsetTime = new Date(cityData.sunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            sunriseElement.innerHTML = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg" alt="Sunrise"> Sunrise: ${sunriseTime}`;
            sunsetElement.innerHTML = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/night.svg" alt="Sunset"> Sunset: ${sunsetTime}`;
        }
    }

    function updateForecast(weatherList) {
        const forecastElement = document.getElementById('forecast');
        if (forecastElement) {
            forecastElement.innerHTML = '';

            const dailyData = weatherList.filter(reading =>
                reading.dt_txt.includes('12:00:00')
            ).slice(1, 5);

            dailyData.forEach(day => {
                const date = new Date(day.dt * 1000);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

                forecastElement.innerHTML += `
                    <div class="forecast-day">
                        <div class="forecast-icon">${getAnimatedWeatherIcon(day.weather[0].icon)}</div>
                        <div class="forecast-date">${dayName}</div>
                        <div class="forecast-temp">${Math.round(day.main.temp)}°C</div>
                    </div>
                `;
            });
        }
    }

    function updateHourlyForecast(weatherList) {
        const hourlyForecastElement = document.getElementById('hourly-forecast');
        if (hourlyForecastElement) {
            hourlyForecastElement.innerHTML = '';

            const hourlyData = weatherList.slice(0, 8);

            hourlyData.forEach(hour => {
                const date = new Date(hour.dt * 1000);
                const time = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });

                hourlyForecastElement.innerHTML += `
                    <div class="hourly-item">
                        <div class="hourly-time">${time}</div>
                        <div class="hourly-icon">${getAnimatedWeatherIcon(hour.weather[0].icon)}</div>
                        <div class="hourly-temp">${Math.round(hour.main.temp)}°C</div>
                    </div>
                `;
            });
        }
    }

    function updateDetailedWeather(weatherData) {
        const detailsContainer = document.getElementById('weatherDetails');
        if (!detailsContainer) return;

        const windDirection = getWindDirection(weatherData.wind.deg);

        detailsContainer.innerHTML = `
            <div class="weather-detail-item">
                <span class="weather-detail-label">Humidity</span>
                <span class="weather-detail-value">${weatherData.main.humidity}%</span>
            </div>
            <div class="weather-detail-item">
                <span class="weather-detail-label">Wind Speed</span>
                <span class="weather-detail-value">${Math.round(weatherData.wind.speed * 3.6)} km/h</span>
            </div>
            <div class="weather-detail-item">
                <span class="weather-detail-label">Wind Direction</span>
                <span class="weather-detail-value">${windDirection}</span>
            </div>
            <div class="weather-detail-item">
                <span class="weather-detail-label">Pressure</span>
                <span class="weather-detail-value">${weatherData.main.pressure} hPa</span>
            </div>
        `;
    }

    function getWindDirection(degrees) {
        const directions = [
            'North', 'North-Northeast', 'Northeast', 'East-Northeast',
            'East', 'East-Southeast', 'Southeast', 'South-Southeast',
            'South', 'South-Southwest', 'Southwest', 'West-Southwest',
            'West', 'West-Northwest', 'Northwest', 'North-Northwest'
        ];
        const index = Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 22.5) % 16;
        return directions[index];
    }

    function getAnimatedWeatherIcon(iconCode) {
        const iconMap = {
            '01d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg" alt="Clear sky">',
            '01n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/night.svg" alt="Clear sky">',
            '02d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg" alt="Few clouds">',
            '02n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-night-1.svg" alt="Few clouds">',
            '03d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Scattered clouds">',
            '03n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Scattered clouds">',
            '04d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Broken clouds">',
            '04n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Broken clouds">',
            '09d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg" alt="Shower rain">',
            '09n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg" alt="Shower rain">',
            '10d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-3.svg" alt="Rain">',
            '10n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-5.svg" alt="Rain">',
            '11d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/thunder.svg" alt="Thunderstorm">',
            '11n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/thunder.svg" alt="Thunderstorm">',
            '13d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-3.svg" alt="Snow">',
            '13n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-5.svg" alt="Snow">',
            '50d': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Mist">',
            '50n': '<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Mist">'
        };
        return iconMap[iconCode] || '❓';
    }

    // Weather Toggle with localStorage
    const toggleDetailedWeather = document.getElementById('toggleDetailedWeather');
    const weatherWidget = document.querySelector('.weather-widget');
    const forecastElement = document.getElementById('forecast');
    const hourlyForecastElement = document.getElementById('hourly-forecast');

    // Load toggle state from localStorage
    toggleDetailedWeather.checked = localStorage.getItem('detailedWeather') === 'true';

    function toggleForecastDisplay() {
        const isDetailed = toggleDetailedWeather.checked;

        // Save state to localStorage
        localStorage.setItem('detailedWeather', isDetailed);

        // Toggle visibility of elements
        weatherWidget.classList.toggle('detailed', isDetailed);
        forecastElement.style.display = isDetailed ? 'none' : 'flex';
        hourlyForecastElement.style.display = isDetailed ? 'flex' : 'none';
    }

    toggleDetailedWeather.addEventListener('change', toggleForecastDisplay);

    // Initial toggle state application
    toggleForecastDisplay();

    // Call getWeather immediately and set up periodic refresh
    getWeather();
    setInterval(getWeather, 600000); // Refresh every 10 minutes
});


document.addEventListener('DOMContentLoaded', () => {
    const cryptoButton = document.getElementById('cryptoButton');
    const cryptoDashboard = document.getElementById('cryptoDashboard');
    const closeDashboard = document.querySelector('.close-dashboard');
    const cryptoSearch = document.getElementById('cryptoSearch');
    const detailedViewToggle = document.getElementById('detailedViewToggle');
    const cryptoTableBody = document.getElementById('cryptoTableBody');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const errorMessage = document.getElementById('errorMessage');

    let cryptoData = [];
    const COINGECKO_API = 'https://api.coingecko.com/api/v3';
    let lastFetchTime = 0;
    const FETCH_COOLDOWN = 10000; // 10 seconds cooldown between API calls
    let fetchTimeout;

    // Initialize detailed view from localStorage or default to true
    let isDetailedView = localStorage.getItem('cryptoDetailedView') !== 'false';
    detailedViewToggle.checked = isDetailedView;
    updateDetailedView();

    // Toggle Dashboard
    async function toggleDashboard() {
        cryptoDashboard.classList.toggle('open');
        if (cryptoDashboard.classList.contains('open')) {
            // Clear any existing error message
            errorMessage.style.display = 'none';
            // Immediate fetch when opening
            await fetchCryptoData(true);
            // Start the refresh interval
            startAutoRefresh();
        } else {
            // Stop the refresh interval when closing
            stopAutoRefresh();
        }
    }

    function startAutoRefresh() {
        stopAutoRefresh(); // Clear any existing interval
        fetchTimeout = setInterval(async () => {
            if (cryptoDashboard.classList.contains('open')) {
                await fetchCryptoData();
            }
        }, FETCH_COOLDOWN);
    }

    function stopAutoRefresh() {
        if (fetchTimeout) {
            clearInterval(fetchTimeout);
            fetchTimeout = null;
        }
    }

    cryptoButton.addEventListener('click', toggleDashboard);
    closeDashboard.addEventListener('click', toggleDashboard);

    // Prevent dashboard from closing when clicking inside
    cryptoDashboard.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Toggle Detailed View with localStorage
    detailedViewToggle.addEventListener('change', () => {
        isDetailedView = detailedViewToggle.checked;
        updateDetailedView();
        localStorage.setItem('cryptoDetailedView', isDetailedView);
    });

    function updateDetailedView() {
        document.querySelector('.crypto-list').classList.toggle('detailed-view', isDetailedView);
    }

    // Format numbers
    function formatNumber(num) {
        if (!num) return '0.00';
        if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toFixed(2);
    }

    // Format percentage
    function formatPercentage(num) {
        if (!num) return '<span class="change">0.00%</span>';
        const formatted = parseFloat(num).toFixed(2);
        const cls = num >= 0 ? 'positive' : 'negative';
        return `<span class="change ${cls}">${formatted}%</span>`;
    }

    // Show loading overlay
    function showLoading() {
        loadingOverlay.classList.add('visible');
    }

    // Hide loading overlay
    function hideLoading() {
        loadingOverlay.classList.remove('visible');
    }

    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    // Fetch Crypto Data with rate limiting and proper error handling
    async function fetchCryptoData(forceRefresh = false) {
        const now = Date.now();
        if (!forceRefresh && now - lastFetchTime < FETCH_COOLDOWN) {
            console.log('Skipping fetch due to cooldown');
            return;
        }

        showLoading();
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            const [marketDataResponse, coinsResponse] = await Promise.all([
                fetch(`${COINGECKO_API}/global`, { headers }),
                fetch(`${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`, { headers })
            ]);

            if (!marketDataResponse.ok) {
                throw new Error(`Market data API failed: ${marketDataResponse.status}`);
            }
            if (!coinsResponse.ok) {
                throw new Error(`Coins API failed: ${coinsResponse.status}`);
            }

            const marketData = await marketDataResponse.json();
            const newCryptoData = await coinsResponse.json();

            if (!marketData.data || !Array.isArray(newCryptoData)) {
                throw new Error('Invalid data format received from API');
            }

            updateMarketOverview(marketData.data);
            cryptoData = newCryptoData;
            renderCryptoTable(cryptoData);
            errorMessage.style.display = 'none';
            lastFetchTime = now;

        } catch (error) {
            console.error('Error fetching crypto data:', error);
            showError('Failed to fetch cryptocurrency data. Please try again later.');
            // If we have existing data, keep showing it
            if (cryptoData.length > 0) {
                renderCryptoTable(cryptoData);
            }
        } finally {
            hideLoading();
        }
    }

    // Update Market Overview with null checks
    function updateMarketOverview(data) {
        if (!data) return;

        const marketCap = document.getElementById('totalMarketCap');
        const marketCapChange = document.getElementById('marketCapChange');
        const volume = document.getElementById('total24hVolume');

        if (marketCap) {
            marketCap.textContent = '$' + formatNumber(data.total_market_cap?.usd);
        }
        if (marketCapChange) {
            marketCapChange.innerHTML = formatPercentage(data.market_cap_change_percentage_24h_usd);
        }
        if (volume) {
            volume.textContent = '$' + formatNumber(data.total_volume?.usd);
        }
    }

    // Render Crypto Table with error handling
    function renderCryptoTable(data) {
        if (!Array.isArray(data) || !cryptoTableBody) return;

        cryptoTableBody.innerHTML = '';

        data.forEach((coin, index) => {
            if (!coin) return;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>
                    <div class="coin-info">
                        <img src="${coin.image || '/placeholder.svg'}" alt="${coin.name || 'Unknown'}" 
                             onerror="this.src='/placeholder.svg'">
                        <div>
                            <div>${coin.name || 'Unknown'}</div>
                            <div style="opacity: 0.7">${(coin.symbol || 'N/A').toUpperCase()}</div>
                        </div>
                    </div>
                </td>
                <td>$${coin.current_price ? coin.current_price.toFixed(2) : '0.00'}</td>
                <td>${formatPercentage(coin.price_change_percentage_24h)}</td>
                <td class="detailed-column">${formatPercentage(coin.price_change_percentage_7d_in_currency)}</td>
                <td class="detailed-column">$${formatNumber(coin.total_volume)}</td>
                <td class="detailed-column">$${formatNumber(coin.market_cap)}</td>
                <td class="detailed-column">
                    ${coin.sparkline_in_7d?.price ?
                    `<canvas class="sparkline" data-prices="${coin.sparkline_in_7d.price.join(',')}" width="100" height="40"></canvas>` :
                    '<div class="no-data">No data</div>'}
                </td>
            `;
            cryptoTableBody.appendChild(row);
        });

        // Draw sparklines
        document.querySelectorAll('.sparkline').forEach(canvas => {
            try {
                const prices = canvas.dataset.prices.split(',').map(Number);
                if (prices.some(price => !isNaN(price))) {
                    drawSparkline(canvas, prices);
                }
            } catch (error) {
                console.error('Error drawing sparkline:', error);
            }
        });
    }

    // Draw Sparkline with error handling
    function drawSparkline(canvas, prices) {
        if (!canvas || !Array.isArray(prices) || prices.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const range = max - min || 1; // Prevent division by zero

        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = prices[0] <= prices[prices.length - 1] ? '#4caf50' : '#f44336';
        ctx.lineWidth = 1.5;
        ctx.beginPath();

        prices.forEach((price, i) => {
            const x = (i / (prices.length - 1)) * width;
            const y = height - ((price - min) / range) * height;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.stroke();
    }

    // Search Functionality with error handling
    cryptoSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (!Array.isArray(cryptoData)) return;

        const filteredData = cryptoData.filter(coin => {
            if (!coin) return false;
            return (coin.name && coin.name.toLowerCase().includes(searchTerm)) ||
                (coin.symbol && coin.symbol.toLowerCase().includes(searchTerm));
        });
        renderCryptoTable(filteredData);
    });

    // Cleanup function
    function cleanup() {
        stopAutoRefresh();
    }

    // Clean up when the page is unloaded
    window.addEventListener('unload', cleanup);
});

document.addEventListener('DOMContentLoaded', () => {
    const toolsMenu = document.querySelector('.tools-menu');
    const toggleToolsMenuInput = document.getElementById('toggleToolsMenu');
    const addToolsButton = document.getElementById('addToolsButton');
    
    // Load tools menu state from localStorage
    const isToolsMenuEnabled = localStorage.getItem('toolsMenuEnabled') !== 'false';
    toggleToolsMenuInput.checked = isToolsMenuEnabled;
    updateToolsMenuVisibility(isToolsMenuEnabled);
    
    // Update state on toggle
    toggleToolsMenuInput.addEventListener('change', () => {
        const isEnabled = toggleToolsMenuInput.checked;
        localStorage.setItem('toolsMenuEnabled', isEnabled);
        updateToolsMenuVisibility(isEnabled);
    });
  
    function updateToolsMenuVisibility(isEnabled) {
        toolsMenu.style.display = isEnabled ? 'block' : 'none';
        addToolsButton.classList.toggle('disabled', !isEnabled);
        addToolsButton.style.pointerEvents = isEnabled ? 'auto' : 'none';
    }
  
    // Existing sidebar logic
    const closeSidebar = document.getElementById('closeSidebar');
    const customizeSidebar = document.getElementById('customizeSidebar');
    const customizeButton = document.querySelector('.customize-button');
  
    customizeButton.addEventListener('click', () => {
        customizeSidebar.classList.add('open');
    });
  
    closeSidebar.addEventListener('click', () => {
        customizeSidebar.classList.remove('open');
    });
  
    // Add Tools functionality
    addToolsButton.addEventListener('click', (e) => {
        if (!toggleToolsMenuInput.checked) {
            e.preventDefault();
            return;
        }
        // Existing add tools logic here
        console.log('Add tools clicked');
    });
  
    // ... (rest of your existing JavaScript code) ...
  });// Improve DOM update performance - 2024-11-12T09:54:57
// Add analytics placeholder events - 2024-11-13T09:49:53
// Add clock update logic and timezone support - 2024-11-14T13:40:00
// Add weather API fetch stub and placeholder - 2024-11-15T10:44:49
// Wire up quick links click handlers - 2024-11-18T16:57:24
// Add crypto API fetch stub and render logic - 2024-11-19T12:33:48
// Refactor modular functions - 2024-11-22T17:36:50
// Add theme toggle and localStorage save/load - 2024-11-23T15:41:23
// Refactor event listeners for clarity - 2024-11-24T09:48:55
