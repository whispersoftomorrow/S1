// Add special CSS for cover pages
const addCoverStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Cover Page Special Styling */
        .page.cover-page .page-title {
            font-size: 3.5rem;
            text-align: center;
            margin-top: 60px;
            border-bottom: none;
            color: #3498db;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            letter-spacing: 2px;
            position: relative;
            animation: titleGlow 2s ease-in-out infinite alternate;
        }
        
        .theme-dark .page.cover-page .page-title {
            color: #FFD700;
        }
        
        @keyframes titleGlow {
            from {
                text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            }
            to {
                text-shadow: 0 0 20px rgba(52, 152, 219, 0.6), 3px 3px 6px rgba(0,0,0,0.2);
            }
        }
        
        .theme-dark .page.cover-page .page-title {
            animation: titleGlowDark 2s ease-in-out infinite alternate;
        }
        
        @keyframes titleGlowDark {
            from {
                text-shadow: 3px 3px 6px rgba(0,0,0,0.4);
            }
            to {
                text-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 3px 3px 6px rgba(0,0,0,0.4);
            }
        }
        
        .page.cover-page .page-content {
            text-align: center;
            font-size: 1.4rem;
            line-height: 2;
            margin-top: 50px;
            min-height: 400px;
            position: relative;
            padding: 40px;
        }
        
        .page.cover-page .page-content::before {
            content: "✦";
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            color: #f1c40f;
            opacity: 0.5;
        }
        
        .page.cover-page .page-content::after {
            content: "✦";
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            color: #f1c40f;
            opacity: 0.5;
        }
        
        /* Outro Page Styling */
        .page.outro-page .page-title {
            font-size: 2.8rem;
            text-align: center;
            margin-top: 80px;
            border-bottom: none;
            color: #2c3e50;
            position: relative;
        }
        
        .theme-dark .page.outro-page .page-title {
            color: #ecf0f1;
        }
        
        .page.outro-page .page-content {
            text-align: center;
            font-size: 1.3rem;
            line-height: 1.8;
            margin-top: 60px;
            min-height: 400px;
            padding: 40px;
            background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(241, 196, 15, 0.1) 100%);
            border-radius: 15px;
            position: relative;
            overflow: hidden;
        }
        
        .page.outro-page .page-content::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #3498db, #f1c40f);
        }
        
        .page.outro-page .page-content::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #f1c40f, #3498db);
        }
        
        .page.outro-page .page-content .contact-info {
            font-size: 1.2rem;
            font-weight: bold;
            margin-top: 30px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            display: inline-block;
        }
        
        .theme-dark .page.outro-page .page-content .contact-info {
            background: rgba(255, 255, 255, 0.1);
        }
        
        /* Add decorative border to cover pages */
        .page.cover-page::before {
            content: "";
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 2px dashed rgba(52, 152, 219, 0.3);
            border-radius: 10px;
            pointer-events: none;
        }
        
        .page.outro-page::before {
            content: "";
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 2px solid rgba(241, 196, 15, 0.2);
            border-radius: 10px;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
};

// Call this function to add styles
addCoverStyles();

// All page content - replace empty strings with your content
const pages = [
    {
        title: "Whispers Of Tomorrow",
        content: `╔══════════╗
LIGHT NOVEL
╠══════════╣
WHISPERS OF TOMORROW
SEASON ONE
╠══════════╣
Total Episodes: 22
╠══════════╣
           Created By:
         ZEESHAN KHAN
╚══════════╝
`
    },
    {
        title: "Trailer",
        content: `One night, an entire village was burned to ashes by the Cease Kingdom.

Two children — Miran and Fatma — were not there that night.
They had gone to their uncle's house.

When they returned...
there was nothing left.

Houses reduced to smoke.
Silence where life once lived.

They searched their home —
and found their mother burned,
their father dead, still gripping an axe-like tool, as if he had fought till his last breath.

Shaken, terrified, and alone,
they took the tool and fled back to their uncle.

But war had already reached there.

Their uncle and his family tried to protect them —
helping Miran and Fatma escape into the jungle
with only a few tools and fading hope.

The uncle's family was captured.
Enslaved.

Two children.
A burning past.
A world at war.

And in the depths of the jungle...
their real story begins.

__________________________________________
`
    },
    {
        title: "Episode 1",
        content: ``
    },
    {
        title: "Episode 2",
        content: ``
    },
    {
        title: "Episode 3",
        content: ``
    },
    {
        title: "Episode 4",
        content: ``
    },
    {
        title: "Episode 5",
        content: ``
    },
    {
        title: "Episode 6",
        content: ``
    },
    {
        title: "Episode 7",
        content: ``
    },
    {
        title: "Episode 8",
        content: ``
    },
    {
        title: "Episode 9",
        content: ``
    },
    {
        title: "Episode 10",
        content: ``
    },
    {
        title: "Episode 11",
        content: ``
    },
    {
        title: "Episode 12",
        content: ``
    },
    {
        title: "Episode 13",
        content: ``
    },
    {
        title: "Episode 14",
        content: ``
    },
    {
        title: "Episode 15",
        content: ``
    },
    {
        title: "Episode 16",
        content: ``
    },
    {
        title: "Episode 17",
        content: ``
    },
    {
        title: "Episode 18",
        content: ``
    },
    {
        title: "Episode 19",
        content: ``
    },
    {
        title: "Episode 20",
        content: ``
    },
    {
        title: "Episode 21",
        content: ``
    },
    {
        title: "Episode 22",
        content: ``
    },
    {
        title: "The End",
        content: `╔══════════╗
           THANK YOU FOR READING
╠══════════╣
WHISPERS OF TOMORROW
SEASON ONE
╠══════════╣

Contact the Author:

storieswebsite1@gmail.com 
zeeshan40u@gmail.com

╠══════════╣
Stay tuned for Season Two!
╚══════════╝
`
    }
];

// Add special classes to cover and outro pages when rendering
document.addEventListener('DOMContentLoaded', () => {
    const renderPages = () => {
        const container = document.getElementById('pages-container');
        if (container) {
            // Add special class to first page (cover)
            const firstPage = container.querySelector('#page-1');
            if (firstPage) {
                firstPage.classList.add('cover-page');
            }
            
            // Add special class to last page (outro)
            const lastPage = container.querySelector('#page-25');
            if (lastPage) {
                lastPage.classList.add('outro-page');
            }
        }
    };
    
    // Run after a short delay to ensure pages are rendered
    setTimeout(renderPages, 100);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pages };
}