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
        content: `They walked deep into the forest until they found an old, silent tent.

No one was there.

What they didn’t know was that the owner of this tent had once been part of the massacre.

They waited, hoping someone would return.
But as the hours passed, winter crept in.
The cold grew sharper.

Left with no choice, they entered the house.

They ate the food their uncle had given them and tried to rest.
But soon, Fatma’s body began to burn with fever.

Miran stayed awake all night.

He tried to calm her, talked to her softly, made her laugh when she could.
Inside, he was breaking.
Outside, he smiled — pretending to be strong.

That night, one laughed to hide fear,
and one watched the darkness to protect.

Eventually, exhaustion won.
They fell asleep.


---

Morning — Episode Continues

Miran woke up early.

He cleaned the house, explored the nearby area,
and built a small cooking place using soil and stones — simple, but safe.

When everything was ready,
Fatma woke up.

She slowly walked to him, held his hand, and said softly:

“Brother… I’m hungry.”

__________________________________________`
    },
    {
        title: "Episode 2",
        content: `Miran nodded softly.
“Okay, Fatma.”

He went outside to look for food. After some time, Fatma suddenly called out,
“Brother, come here fast!”

When Miran rushed back, he saw that Fatma had reheated the food from the previous night. It was simple, but warm. They sat together and ate quietly.

Soon after, Fatma’s fever started rising again. Feeling weak, she lay down to rest.

Miran understood that food was becoming a serious problem. Before leaving, he gently said,
“Fatma, I’m going out to arrange food. I’ll come back soon.”

As he held her hand, he felt it — her hand was ice-cold.

“Please don’t go, brother,” Fatma said softly, almost whispering.

“I’ll be just outside. You can call me anytime, okay?” Miran replied, trying to sound calm.

“Okay, brother,” she answered.

Outside, Miran stood thinking desperately. Then he remembered the house. He searched every corner carefully — and finally found two apples and a watermelon. His eyes lit up with relief.

He immediately grabbed an apple and went back.
“Wake up, sister! Look, I found an apple for you. Want to eat?”

Fatma slowly replied, “No…”

Her fever was getting worse.

Miran brought firewood inside and used the matches his uncle had given him. He built a small fire and prepared a warm resting place nearby. Then he went back to Fatma.

“Come on, sister. I’ve made a warm place for you. Wake up.”

“I don’t have enough energy…” Fatma cried weakly.

Before she could finish, Miran gently but firmly lifted her.
“Hey, come with me.”

He placed her carefully near the fire.

“Oh… thank you very much, brother,” Fatma whispered.

Later, Miran cut all the fruits and returned.
“It’s 7:20, sister. Please wake up.”

Fatma tried to speak but stopped.

“For my sake?” Miran said softly.

She held his hand and slowly sat beside him. Miran felt warmth returning to her fingers — slowly, but surely. They ate together, shared the silence, and soon drifted into sleep beside the fire.
`
    },
    {
        title: "Episode 3",
        content: `Miran woke up early again, and grab the axe-type weapon he remember his father calls it Commando, he grabbed it and start practicing for fighting he thinks that he have to save her sister and his life, that's why he wanted to become a good fighter.
After some time he came back to home and saw Fatma is standing in front of him looking good. Fatma hugged Miran and said  "Thanks you brother" Miran was very happy at that time he said "Oh dear" 

After it Fatma said "brother have you prepared something for the food, I was a bit hungry, Miran replied no sister but soon, then they here a sound shouting please don't do that this is a sound of a child less than Miran and Fatma Miran took her hand and took commando saying "shhh, wait!" The child said "You traitors give me my family's food" there was only one person standing here replied "Hey child even your father dont say me this than who you are Miran said to Fatma "Listen go to the right side and use your full power to throw a big stone when you throw come back to the child Okay" Fatma said "uh, I am tired bro I was not fully freshed but I will do it". Fatma throw the stone with her full power the stone comes near to the robber then Miran came and said slightly and throw another stone in full power to his back, he sat down Miran said to Fatma "grab him to home I'll come soon" the robber replied please dont do that I have a mother waiting for me if I don't give it to her she dead by starve please, Miran replied "uh, what" robber said because of the war many people died only my mother and I alive in whole family please don't take the food, Miran said "I understand your condition, I will give you some food but remind it don't rob any ones house because if you save your mother by robbery someones mother dies. Miran gave the robber 1/4 th part of that food. 

Then he moved back and saw Fatma and the child was seeing and smiling, "Fatma said "Brother how sweet are you! Ah, nd child said "Thanks you very much but why you don't kill him. Miran said "his mother was dying with starvation thats why he have do all that" Miran said "Now you can give me your homes address" then they move forward`
    },
    {
        title: "Episode 4",
        content: `They finally reached the child’s home.

The child ran ahead and grabbed both Miran and Fatma’s hands, pulling them inside.

The child’s father looked at them with relief.
“Oh, thank you so much! You saved us, children! We have enough food now to survive,” he said.

Miran raised an eyebrow.
“Wait… why didn’t you stop your child? He ran so fast to grab the food. I thought it was mine!”

The father laughed.
“Yes, he’s always impulsive. He saw the food and ran without thinking. Thank you for understanding, young man.”

Miran nodded, a small smile on his face.
“Okay, sir. We’ll meet again soon. Goodbye!”

As they were leaving, the child’s mother called out and handed them the food they had saved.
“This belongs to you,” she said warmly.

Miran accepted it gratefully.
“Thank you very much, ma’am.”


---

As they walked back home, Fatma giggled.
“Oh brother, I know you too well! You grabbed the food immediately because you didn’t want to take risks. If you had said no thanks, and if she don't gives to you then you would’ve had to find food elsewhere. That’s why you acted fast!”

Miran laughed, slightly embarrassed.
“Haha… you’re right, Fatma. I didn’t want to take any chances.”

He looked at the amount of food they had.
“This is more than enough. We can manage for at least three days.”

Back at their house, they prepared some food and preserved the rest carefully. They ate together, the warmth of the fire and the satisfaction of surviving filling the room.

Miran spoke seriously.
“Fatma, now we have a good head start. We should find more food before this runs out. I need to work somewhere.”

Fatma looked worried.
“Please, brother… what will I do? If you weren’t here, I’d be helpless…”

Miran smiled softly and put a hand on her shoulder.
“Shh… don’t worry, I won’t let anything hurt you. You’ll help me in your own way too, right?”

Fatma nodded, a little reluctantly.
“Yes… as you wish,” she said sadly.

After finishing cleaning the house, Fatma started her chores while Miran stepped outside to practice with his Commando.
The sun rose higher, and the forest around them seemed calm, but both knew the war was still far from over.
`
    },
    {
        title: "Episode 5",
        content: `Miran woke up early and stepped outside with the commando in his hands. The weapon felt heavier than before. As he practiced swinging it, trying to remember how his father once moved, his fingers accidentally pressed a hidden trigger. A loud gunshot echoed through the forest. Birds scattered. Miran froze.
Fatma rushed out of the house, fear on her face.
“Brother, what happened?”
Miran looked at the commando with wide eyes, half shocked, half excited.
“Fatma… it’s not just a tool. It’s a gun too.”
Fatma took it carefully and examined it. After a moment, her expression changed.
“Brother… there’s only one ammo left.”
Miran’s excitement faded into silence. Fatma handed it back and thought for a second. Inside her mind, another worry appeared — the food. She ran back to check it.
Miran sat on a stone, staring at the ground, thinking. Where would he find ammo? Were there towns nearby? Were there shops still alive after the war?
“Brother, the food is ready!” Fatma called.
“I’ll come in some time,” Miran replied, still lost in thought.
Fatma came closer and sat beside him.
“What happened, bro?”
“I need ammo. Without it, this weapon is useless. Maybe nearby towns sell it.”
Fatma tilted her head slightly.
“What if we check our old house? Maybe father kept something there.”
Miran looked at her, surprised, then smiled.
“Mashallah… you’re right, Fatma.”
“I’m going now,” he said, standing up.
Fatma grabbed his hand gently.
“Eat first, brother.”
“If I go with you, it might be dangerous,” Miran said softly.
Fatma looked at him, hurt.
“So you’ll leave me alone here waiting for you?”
Miran sighed. “Okay, my dear. Let’s go.”
She pulled him toward the house. “First food, then anywhere.”
After eating, they walked together toward the old house. Inside, everything was silent and empty. Behind a wooden wall, they pushed together and managed to move it. Fatma slipped inside and found an old locked wooden box.
Night had almost fallen.
“Run,” Miran said, grabbing her hand. “Before predators come.”
As they ran, a large white figure appeared in the darkness. Fatma whispered, trembling,
“Brother… is that a wolf?”
Miran’s whole body shook. He couldn’t speak. Then a soft sound came — a sheep’s cry. They both exhaled in relief and ran faster, not stopping until they reached home.
Inside, Miran tried breaking the box, but it was reinforced with iron.
“Try shooting the lock,” Fatma suggested.
Miran fired the last bullet. The lock broke. He opened the box slowly.
It was empty.
For a moment, there was only silence. Then Fatma burst out laughing.
“Sorry, brother… I couldn’t control it.”
Miran stared at the box, disappointed. Then he smiled faintly. The tension faded. They put the box aside, ate quietly, and lay down to sleep — tired, safe for the night, and together`
    },
    {
        title: "Episode 6",
        content: `Miran woke up with frustration burning inside him. He dragged the wooden box outside, placed it on a high stone, and picked up the commando. Without thinking, he started striking the box again and again. His anger controlled his hands.
On the third heavy hit, the box slipped from the stone and crashed onto the ground.
Crack.
The lid opened slightly.
Small metal objects rolled out and scattered on the soil.
Miran froze.
He dropped to his knees and picked one up.
Ammo.
Confused, he turned the box upside down and looked carefully. Inside, there was a hidden layer — a false bottom. It had made the box look empty, but beneath it…
Eighteen bullets.
His breath caught.
“Fatma!” he shouted.
She ran outside, startled. Miran grabbed her hands, almost laughing, almost crying.
“Look! There was a safety layer… eighteen ammos!”
Fatma smiled, her eyes shining, enjoying his excitement more than the discovery itself.
Later, Miran went a little distance away to practice. While moving through the trees, he noticed a small house nearby. An old man — a sailor — was leaving, carrying his things.
Fatma called Miran brother back for food. They ate quietly.
“Brother,” Fatma said softly, “the food will only last till 2-3. What have you planned next?”
Miran lowered his eyes.
“I don’t know, Fatma. I’ve tried… but I can’t find anything.”
She moved closer.
“We still have tomorrow. And if you want… I can help too.”
Miran smiled faintly.
“Inshallah… I’ll figure something out.”
Later that day, Miran went back and saw the sailor returning.
“Hello, sir,” Miran said politely. “I’m Miran. I live nearby. How much would it cost to sail to the nearest village?”
“One ariv per person,” the old man replied.
Miran nodded and walked back home, thinking. They needed work. They needed money.
That’s when he remembered the child.
He ran to the child’s house.
“Miran brother!” the boy said happily.
“I need a favor,” Miran said. “I need five arivs.”
“I have it,” the child replied without hesitation. “You can return it anytime.”
Miran thanked him deeply and returned home.
Night began to fall. Fatma was cleaning the house when Miran walked up behind her and gently covered her eyes with a cloth.
“Brother… what are you doing?” she laughed.
“Don’t you like surprises?” he asked.
“Yes.”
“Then come with me.”
And hand in hand, they stepped forward into whatever awaited them next.`
    },
    {
        title: "Episode 7",
        content: `Miran led Fatma onto the ship and gently removed the cloth from her eyes.
“See it, Fatma.”
For a second, she didn’t speak. Then her eyes filled with tears. She hugged Miran tightly, crying with happiness.
“Thank you, brother… it’s our first time on a boat.”
Miran smiled softly.
“You were holding too much tension inside. I wanted to make us happy… even if just for a while.”
Fatma wiped her tears and smiled.
Miran waved toward the shore.
“Hello, sir. I’m back.”
The old sailor stepped forward and looked at them carefully.
“You both really want to go? Do you have two arivs?”
“Yes,” Miran replied.
They stepped onto the boat.
The ship was old, built of worn wood, but peaceful. As it moved forward, the sound of water calmed their hearts. Miran and Fatma sat together, talking quietly, watching the sky change colors as they headed toward Poloarm village.
Night was beginning to fall.
Suddenly, another boat appeared from the side.
The old man stiffened. He slowed down and tried to move back.
A harsh voice came from the other boat.
“Stay where you are. Don’t try to move.”
A soldier jumped down, sword in hand.
“We don’t have anything,” the sailor said quickly.
Fatma clutched Miran’s chest, crying, her whole body shaking.
Miran held her tightly. Then he slowly picked up the commando.
“I will protect you, sister.”
His heart was pounding. Inside, fear screamed at him to run — but he couldn’t swim. He looked at Fatma. That fear turned into resolve.
Miran stepped forward.
He charged the soldier with everything he had. The sword slashed near him. Miran struck with all his strength and managed to hit the soldier’s chest.
But the man didn’t fall.
Miran staggered back, shaking. His hands moved on their own. He loaded the weapon.
The sound of the gunshot cut through the night.
The bullet pierced the soldier’s heart.
Silence.
Everyone froze.
The captain on the other boat turned to flee. Miran raised the weapon again, his hands trembling, and fired.
The body fell.
No one spoke.
They dragged the bodies to the nearby land and continued forward, shaken and quiet.
Miran glanced at the other boat.
“What about that one—”
The old sailor interrupted him calmly.
“That boat is yours now.”
Miran stared at him.
“What?”
“You earned it,” the man said. “But you don’t know how to sail. For now, leave it here. I’ll keep it safe. You can sell it to me… or learn to sail one day.”
Miran nodded slowly.
They left the boat hidden and continued toward the village.
Behind them, the water was calm.
But Miran’s heart was not.`
    },
    {
        title: "Episode 8",
        content: `They reached Pollarm Town with the old sailor by noon. The town felt alive — voices, footsteps, carts, and unfamiliar faces everywhere. Fatma’s eyes sparkled with curiosity, while the old man quietly asked Miran if they could buy some food.
“Fatma, stay with uncle for a bit,” Miran said gently. “I’ll be back soon.”
Fatma frowned slightly.
“Brother, aren’t we here to explore?”
“We are,” Miran smiled, “but first… work.”
Miran moved through the market, asking shopkeepers and traders for small jobs. Some shook their heads. Some ignored him. Still, he didn’t stop. Before returning, he bought a simple but beautiful dress — nothing expensive, but chosen carefully. He hid it in the sailor’s boat.
Meanwhile, Fatma explored the market with the old man, touching fabrics, watching people, smiling at small things she had never seen before.
When Miran returned, the sailor said, “I’ll be back after sunset.”
The siblings explored the town together — narrow streets, small stalls, quiet corners. While walking, Fatma asked softly,
“Did you find any work, brother?”
Miran shook his head.
“No. But maybe it’s better this way. If I work here… what will you do?”
He paused, then added, “I want to start something of our own. A small business. We’ll come here every week to sell.”
Fatma smiled warmly.
“Thank you, brother.”
As the sun dipped low, the boat returned. They boarded and headed back toward the forest, tired but peaceful.
That night, after eating, Miran said quietly,
“Fatma… I have something for you.”
Her eyes lit up.
“For me?”
He brought out the dress. Fatma froze for a second — then hugged him tightly, tears forming.
“You are the best person in my life, brother.”
She tried it on and stood shyly in front of him.
“You look beautiful,” Miran said honestly. “Seeing you happy makes me happy.”
Fatma smiled, then carefully folded the dress.
“I’ll wear it on a special day. It’s my first gift. I’ll never forget it.”
That night, they slept peacefully.
Morning came quietly. The food was almost gone. Miran woke early, staring at the ceiling. One ariv left. No supplies. No certainty.
He sat outside, thinking.
What kind of business should I start?`
    },
    {
        title: "Episode 9",
        content: `“I should start wood cutting,” Miran said quietly to himself.
“It’s a simple beginning… but a beginning.”
When he returned home, Fatma was already awake.
“Fatma,” Miran said, “I think wood cutting is the best option for now.”
Fatma smiled immediately.
“I’ll be happy if you do that, brother. I can help too.”
Miran laughed.
“You? The girl who struggles with cutting vegetables wants to cut wood?”
Fatma crossed her arms, pretending to be offended.
“Oh really? And how many times have you helped me, huh?”
She paused, then added softly, “Only yesterday… because I was tired after everything.”
Miran sighed and smiled.
“Alright, alright. Don’t be angry.”
Then more seriously, “But listen — I won’t allow you to do such hard work.”
Fatma narrowed her eyes playfully.
“We’ll see how you say no to me.”
Miran raised his hands.
“Sorry, my sister.”
Fatma smiled. The argument ended there — like always.
A little later, Miran said,
“When the food is ready, call me. After eating, we’ll go to the village.”
Before he could even turn away, Fatma replied quickly,
“It’s ready already! Just wait two minutes.”
After eating, they went to the old sailor.
“Oh, Miran!” the old man said warmly. “How are you, son?”
“I’m good, sir. Thank you.”
Then Miran hesitated. “Can you drop us to the town?”
The old man nodded. Miran reached for his pouch — then stopped. One ariv left.
“I… I’ll give you the it later,” Miran said honestly.
“That’s fine,” the sailor replied. “But don’t forget — your boat isn’t safe there. You’ll need to bring it back.”
“I will, sir.”
In town, Miran found an axe shop. He bought a strong axe and a small box — spending all the money he had.
Fatma looked at him and teased,
“Nothing for me, brother?”
Miran laughed.
“Even if I had money I don't buy it for yo.”
He held her hand, and they walked back toward the boat.
“Brother!” Fatma said, dragging the word dramatically.
At the shore, the old man helped them.
“Pull it slowly,” he instructed.
They dragged the boat into the water. The sailor showed Miran how to row.
“Push both paddles together. If one is late, the boat will turn. And if anything goes wrong — stop immediately. I’ll call you.”
Miran nodded seriously.
“Thank you, sir. You are a very good person.”
The old man laughed.
Miran gripped the paddles… and pushed.
The boat moved forward.
For the first time, Miran wasn’t just surviving —
he was starting something.`
    },
    {
        title: "Episode 10",
        content: `When Miran pushed the boat into the water, Fatma’s eyes lit up with excitement.
“Brother, can I come in your boat… please?” she asked eagerly.
Miran smiled. “Okay—come fast!”
As the boat moved forward, Miran tried to stop it, but there were no buttons, no brakes. Fatma laughed at his confused expression. Before the sailor could say anything, she spoke confidently,
“Brother, stop doing anything. It will stop by itself.”
Miran and the sailor both turned toward her in shock.
“How do you know that?” the sailor asked.
Fatma folded her hands proudly and said in a playful tone,
“Because I watched how you did it.”
Miran laughed in relief. “It stopped! Come on.”
Fatma held Miran’s hand and carefully stepped into the boat.
“Brother, can I help you with the paddles?”
Miran hesitated. “I want to say no… but I’m a little tired. Can you really do it?”
“Yes!” Fatma replied happily. She grabbed both paddles and began rowing with effort and excitement.
“Brother, are you seeing this? I’m driving a boat myself!”
Miran smiled softly. “Hmm… awesome.”
After a while, Fatma’s arms started to shake.
“Oh brother… can you take over now?”
Miran reacted dramatically. “What? Already tired?”
But in truth, he had closed his eyes and was pretending to sleep.
Fatma quickly handed him the paddles. “Sorry, brother, but—”
Before she could finish, Miran interrupted gently,
“Fatma… thank you, my sister.”
She hugged his arm tightly.
Because of that, Miran’s right hand continued paddling, but his left—held by Fatma—did not move. The boat tilted slightly. Fatma immediately let go.
The sailor said calmly,
“Don’t panic. Just paddle on the left.”
Miran followed his guidance, and the boat slowly corrected itself.
Miran laughed. “Fatma…”
She looked down shyly. “Sorry, brother. I didn’t think about it.”
After some time, they reached the forest. They parked the boat near the sailor’s house, since Miran’s home was a little farther away.
Fatma looked at Miran and said softly,
“Brother… thank you.”
Miran smiled. “Thank you for what?”
“For everything,” she said, hugging his arm again.
Later, Fatma asked,
“Brother, can you help me cook food?”
“Yes,” Miran replied.
Suddenly, there was a knock on the door. Fatma moved to open it, but Miran stopped her with a hand gesture, signaling her to step back.
“Who is it?” Miran asked carefully.
“It’s me—the sailor,” came the reply.
Both Miran and Fatma smiled with relief. Miran opened the door.
The sailor stood there holding cooked food.
“Don’t worry about dinner. I brought some.”
“Oh sir, thank you,” Miran said. “But Fatma was cooking—”
At that moment, Fatma widened her eyes and raised her eyebrows as if saying, What?
Miran laughed quietly.
The sailor smiled. “My family went to a wedding, so I thought I’d eat with you. If you don’t want—”
He pretended to leave, laughing.
“No, no—please come in,” Miran said quickly.
He called out, “Fatma, come here. It’s enough for all of us.”
Fatma washed her hands. As Miran was about to sit, she caught his hand and said,
“Brother, did you forget the water? Aren’t you helping me today?”
Miran chuckled. “Okay, okay… miss.”
They ate together peacefully. After finishing, the sailor stood up.
“I should go now. Take care, children.”
They tried to stop him, but he smiled and left.
That night, Miran and Fatma lay down to sleep—
safe, calm, and together.`
    },
    {
        title: "Episode 11",
        content: `Miran woke up to find Fatma already awake, quietly preparing things near the hearth.
“Brother, wait a little. I’ve almost finished,” she said.
Miran blinked in surprise. “Fatma, when did you wake up? And why so early?”
She looked at him seriously.
“Brother, from now on you’ll be going to work. You’ll need more energy. Working in the morning without rest is harder. Also… I want to help you.”
Miran smiled warmly. “Thank you, sister.”
After freshening up, he sat beside her. Fatma spoke again, her voice soft but thoughtful.
“Brother… today you’re going out again, right? Will you go toward the village? And… what about the child’s money?”
Miran paused, surprised. “Fatma… you’re growing up, my sister. I’m really glad. But how do you know about the money I got from the child?”
She answered calmly, almost proudly,
“Yesterday, the child came and asked for you. Later I thought about it… he was the only one you could have asked for help. Because you told the sailor you didn’t have money, right?”
“Oh, my sister…” Miran whispered, deeply touched.
Fatma’s eyes shimmered, and her voice grew a little firm.
“Brother, what’s this? I was asking you something, and you were just quiet. If you don’t want to answer, just say it—I wouldn’t ask again.”
Miran gently held her hand.
“Fatma, I love you. Yes, I took the money from the child yesterday and told him the truth. You were right about everything. Now, sister, let me go to work. But remember… I will always be with you.”
Fatma smiled, her heart warmed.
Miran’s work turned out to be harder than he expected. Cutting even a small tree took nearly an hour. By nightfall, he had chopped it into pieces and carried it back home. Thinking of Fatma, he hurried inside and found her sleeping.
“Fatma…?” he whispered, touching her hand gently.
“I woke up early… I needed some rest,” she murmured.
Miran smiled softly and rested his head against her hand.
“Oh, Fatma… I’m glad you’re alright.”
Later that night, Fatma stirred slightly.
“Brother… it’s night.”
“Yes,” Miran replied quietly, “but I need to finish bringing everything inside.”
He stepped out again, worked patiently until all the wood was stored safely, and finally returned inside.
The next day began…`
    },
    {
        title: "Episode 12",
        content: `Morning light slipped quietly into the house.
Fatma was already awake. She stood near the stove, carefully preparing food when she called out softly,
“Brother… it’s very late. Please wake up.”
Miran opened his eyes, surprised.
“You woke up early again, Fatma?”
She smiled gently.
“Yes, brother. It doesn’t matter. I’ve already prepared breakfast.”
She held his hand and pulled him up playfully. Miran stood, still half-asleep—then suddenly froze.
“Fatma…” he said in shock. “What happened to the wood? Why has its shape changed?”
He walked closer, removed the cloth covering it, and saw that all the wood had been cut into small, neat pieces.
Fatma looked at him nervously.
“Brother… is it good?”
Miran’s face softened.
“It’s… very good.”
Overwhelmed, he gently reached for her right hand, about to kiss it in gratitude—but Fatma pulled back quickly.
“Brother!” she cried and ran away.
“Fatma, what’s wrong?” Miran followed her and caught her hand again.
“Please, brother…” she whispered.
Only then did Miran notice the cloth wrapped tightly around her hand.
“Remove it,” he said quietly.
“Please don’t, brother…”
His voice suddenly rose, filled with fear and anger.
“Fatma! I said remove it!”
Her eyes filled with tears as her hands trembled. Slowly, she removed the cloth.
Miran saw a deep wound—clearly caused while cutting the wood.
His heart shattered.
“Didn’t I tell you not to do this?” he shouted, tears forming in his own eyes.
“Why did you hide it? Why, Fatma? This cloth is so tight… you were hurting, weren’t you?”
Unable to control himself, Miran turned and walked out.
“Brother… I—” Fatma tried to speak, but he was gone.
She sat on the floor, crying silently.
After some time, Miran stopped outside. His chest felt heavy.
I’ve never shouted at her like that…
He went back inside.
Fatma was still there, crying. When she saw him, she stood up quickly.
“I’m very, very sorry, brother…”
Miran pulled her into a tight embrace.
“Fatma… I love you. You are my sister.”
Both of them cried quietly.
“I became an obstacle—” she began.
“Fatma!” he interrupted sharply—then softened his voice.
“You are my life. If you ever call yourself an obstacle again, then no one is worse than me in this world.”
She smiled through her tears.
“Promise me,” Miran said gently, “you’ll never lie to me, and never do anything I haven’t allowed.”
“I promise,” Fatma replied.
“I won’t lie unless there’s a very big reason… and I won’t do anything without your permission—unless there’s a very big reason.”
Miran laughed softly, lifted her, and spun her around.
“You were amazing, Fatma.”
“Brother… have you forgiven me?” she asked.
“Yes,” he smiled. “Now I’m hungry. Can you bring the food?”
“It’s ready,” she said happily.
Inside, Miran couldn’t stop worrying about her hand.
Later, when they sat to eat, Fatma hesitated.
“Brother… the wound is on my right hand. Can you help me eat?”
Miran’s heart clenched.
“Of course. Come here.”
He gently fed her with his own hand, then ate beside her.
Fatma smiled brightly.
“Brother… when you’re here, I don’t need parents.”
Miran shook his head softly.
“No, Fatma. No one can replace their love. But I’ll give you everything I can.”
She smiled, and they ate together happily.`
    },
    {
        title: "Episode 13",
        content: `After some time, Miran heard distant voices.
“There are no armies here,” one voice said. “I only saw a few houses far away.”
Another voice replied coldly,
“Burn them. We don’t need anyone to know we were here.”
Miran’s heart tightened. He turned to Fatma urgently.
“Fatma—quickly. Pack only the essentials. Hurry.”
Fatma looked confused.
“Why, brother?”
“Don’t ask now,” Miran said firmly. “Just do it fast. I’ll explain later.”
They gathered what they could in haste and stepped outside.
What they saw froze them.
The sailor was crying, his voice shaking.
“Miran! Fatma! Take the boats and tools and go—now! My house has been burned. Run!”
Before Miran could respond, an arrow flew past them, barely missing.
“Pick it up,” Miran told Fatma quickly.
He handed her the commando, grabbed the remaining items, and tore down the tent. The three of them rushed toward the boats.
The sailor climbed into his own boat and began rowing hard. Miran and Fatma entered theirs. Miran hesitated for a moment—driving alone under fear—but Fatma, terrified yet brave, helped him push harder.
Suddenly, a soldier appeared with a flaming arrow.
Without hesitation, Miran raised the commando and fired.
The soldier fell.
They rowed faster, hearts pounding.
Ahead, the river split into two paths.
“Right!” the sailor shouted. “You go left!”
Miran turned left—but his breath caught in his throat.
The village ahead was nothing but ashes. Burned homes. Silence. Death.
Miran immediately changed direction and continued straight into the darkness.
Night fell. Hunger and exhaustion crept in.
After some time, Miran saw it—a dead end.
“We’ll stop here,” he said quietly. “We’ll go back tomorrow.”
“Fatma?” he called.
No answer.
She had fallen asleep.
Miran stepped out of the boat and worked alone. He secured the boat, set up the tent, arranged the supplies, and prepared what little food they had for morning.
Then he returned and gently lifted Fatma in his arms, laying her down.
As he did, his hand brushed against hers.
Cold.
Too cold.
Fear rushed through him. He touched her cheek—cold as well.
“Fatma,” he whispered urgently. “Wake up.”
She opened her eyes slowly.
“Brother… it’s very cold.”
Miran’s heart sank.
Fever.
He quickly removed his coat and wrapped it around her, then added more wood to the fire.
“Fatma, please eat something,” he said softly, waking her again.
“Okay, brother,” she murmured.
Miran ate a little, then fed her with his own hands.
When she fell asleep again, Miran sat beside her, watching her breathe.
Tears slipped from his eyes.
After some time—exhausted, broken, and afraid—Miran finally fell asleep too.`
    },
    {
        title: "Episode 14",
        content: `The next morning, Miran went out to explore the nearby area. Not far from the house, he found a forest, a flowing river, and a wide patch of clear land. To his surprise, there were also four jackfruit trees—and a jamun tree heavy with ripe fruit.
It felt like a small blessing.
When Miran returned home, he saw Fatma crying.
The moment she noticed him, she said in a trembling voice,
“Brother… where were you? I’ve been calling you for so long.”
Miran sat beside her at once, gently wiping her tears.
“I was just around the house, Fatma,” he said softly. “You should rest properly, okay?”
He held her hand and felt the difference—her fever still hadn’t fully gone.
“Fatma,” he added carefully, “I found something. Do you want to see?”
She shook her head weakly and tightened her grip on his hand.
“No… just stay. I feel better when you talk to me.”
Miran smiled sadly. “I’ll be back in just two minutes, my dear. I promise.”
Fatma didn’t reply. She only held his hand a little tighter before slowly letting go.
Miran stepped outside quickly and returned with a handful of fresh jamun. He gently lifted the edge of her blanket and said,
“Look, Fatma. Jamun.”
Her eyes lit up. She smiled and sat up slightly.
“Oh, brother… thank you. Where did you find them?”
“Nearby,” he replied, feeling lighter just seeing her smile.
Miran touched her shoulders gently.
“Fatma, I need to cut some wood today.”
She whispered quietly, “Okay, brother… whatever you think is right.”
He paused, then said, “If you allow me, I’ll help you sit near the jamun tree. You can eat, watch me work, and talk to me.”
She nodded.
As Fatma tried to stand, she almost lost her balance—but Miran caught her immediately.
“Slowly,” he said. “You’re not well yet.”
He carried her carefully, wrapped her in her blanket, and settled her near the tree. He shook the branches lightly, and jamuns fell around them. Then he brought water from the river, washing each fruit carefully.
Fatma laughed as she tried to stop him.
“Brother! That’s enough!”
Miran laughed too.
“You used to say I was always angry and quiet,” she teased. “Look at you now.”
Inside, Miran felt something warm—hope. Seeing her laugh made everything feel lighter.
After some time, Fatma asked,
“Brother… those are jackfruit trees too, right?”
“Yes,” he said.
“Can we eat them later?”
“After cooking,” she smiled.
Miran cut two small trees while talking to her the whole time. When he finished, he carried everything back to the house—wood, fruits, and Fatma herself.
This time, she insisted on walking, holding his hand tightly. Miran supported her, his other hand resting on her shoulder.
Later, he prepared the jackfruit, and they ate together in silence, comfortable and calm.
As night fell, Fatma touched her cheek softly and whispered,
“Thank you, brother… because of you, I feel better now.”
Miran had already fallen asleep.
The night passed quietly.`
    },
    {
        title: "Episode 15",
        content: `Morning arrived quietly.
Miran returned home after finishing his work and immediately noticed Fatma was already awake. She sat upright, her breathing steady, her face no longer pale. Color had returned to her cheeks, and her eyes—once dull with fever—were clear again.
For a moment, Miran just stood there.
Then his face softened into relief.
“Fatma… are you feeling better now?”
She looked at him and nodded, a small but genuine smile forming on her lips.
“Yes, brother.”
Her gaze drifted around the room.
“Brother… where is the food?”
Miran paused, choosing his words carefully.
“There isn’t much left,” he said gently. “I thought… once you fully recover, we’ll leave and search for another village. Until then, we can manage with jackfruits.”
Fatma smiled faintly.
“Oh… so now we can go—”
Her voice stopped mid-sentence.
Both of them remembered the village—the smoke, the ashes, the silence left behind.
Miran spoke before the memory could hurt her further.
“We won’t go there,” he said softly.
“The sailor once told me there are other small villages nearby. That one was the closest… but now, we’ll search farther.”
Hope slowly returned to Fatma’s eyes.
“Oh, brother… then when are we going?”
“After we eat,” Miran replied. “I brought jackfruits. Can you cook them?”
“Yes,” she answered quietly.
They prepared the food together and ate in silence. It wasn’t much, but it was enough.
Afterward, Miran packed the firewood they had gathered. Most of it fit into the boat, but one bundle was too large—he left it behind. Before leaving, he took his axe and his weapon, just in case.
They pushed the boat into the river and followed a different route this time, moving upstream.
Hours passed.
The sun began to lower, painting the water gold. Still, there was nothing—no houses, no smoke, no signs of life. Fatma’s shoulders drooped, and Miran felt the familiar weight of uncertainty settle in his chest.
Then—
“There,” Fatma whispered.
Ahead, a village appeared.
Relief washed over Miran. Fatma’s face lit up with quiet joy as the boat drifted closer to shore.`
    },
    {
        title: "Episode 16",
        content: `They docked near the shore and gathered more wood before entering the village cautiously.
Miran sold the wood to a shopkeeper for seven arrives. With five, he bought food. With one, he bought utensils and tools. The last arrive, he hid away—for another day, another need.
As they walked back toward the boat, the air changed.
Footsteps.
Shadows moved between the buildings.
Four—no, five swordsmen emerged.
Miran stepped forward instantly.
“Fatma—go!”
She froze.
Fear filled her eyes, her body trembling—but she didn’t run. She believed in him.
The soldiers attacked.
Steel clashed. Miran fought with everything he had. His arms burned, his breath grew heavy. He struck one man down, blood staining the ground—but the others closed in.
He knew he couldn’t win.
Miran grabbed Fatma’s hand and ran.
They reached the boat. He shoved it into the water with all his strength.
The boat began to move.
The soldiers shouted and charged.
Miran jumped, reaching for the boat.
Fatma grabbed his hand—crying, screaming his name.
For one heartbeat, the world stopped.
Then a soldier seized Miran’s arm.
Their hands slipped apart.
“BROTHER!” Fatma screamed.
“FATMA!” Miran shouted back.
The boat drifted away.
The river swallowed her cries as the soldiers dragged Miran back.
He was bound and taken captive.
They were not many—about ten men. They called themselves the Acurs.
He was brought before their leader.
“Hey, child,” the man said coldly. “What’s your name?”
Miran lifted his head, eyes burning.
“What do you want from me? Why do you burn villages? Why do you kill people?”
The leader laughed bitterly.
“Because of need. Listen.”
And he told his story—
the Cease Kingdom burning his village,
his rise as a soldier,
his betrayal, imprisonment, escape,
and his oath to burn everything tied to the kingdom.
“Will you join us?” the leader asked.
Miran raised his head.
“No.”
His voice was calm, devastating.
Miran raised his head, eyes like shards of ice beneath a flame. The air around him seemed to grow still, charged with the weight of his words.
“No. I will not join you.”
His voice was low, but it cut through the silence, leaving no room for argument. He held the leader’s cold, tired gaze—not with a prisoner’s fear, but with the terrifying clarity of one who has already lost almost everything.
“You speak of your village burned to ashes. So was mine. I have seen the same smoke, smelled the same ruin, felt the same earth grow cold under my feet.”
He took a step forward, the bonds on his wrists feeling suddenly irrelevant.
“But where your hatred found a target, my heart found a responsibility. I did not need revenge. I needed peace. A single, fragile peace with the one person left to me—my sister. Your soldiers, in their blind rage, have just torn that last peace from me. You ask for my allegiance after severing my only reason to fight?”
A bitter, hollow laugh escaped him, devoid of all humor.
“You say you burn because of need? I see no need here. I see a poison, and you are drinking it deeply, mistaking it for water. You say the kingdom made you a monster? Look at your own hands. You attack villages filled with people you do not know. People like me. People like my sister, who have done nothing but try to survive the ashes your war scatters.”
His voice rose, not in a shout, but in a devastating, resonant truth.
“If you truly crave revenge, then have the courage of your conviction. Face the king. Face the army that wronged you. Burn his palaces, challenge his soldiers, break his throne. But what honor is there in setting fire to the huts of the forgotten? What justice is there in making orphans scream for the sins of a crown they’ve never seen?”
Miran’s eyes blazed with a final, damning verdict.
“By burning the innocent to get to the guilty, you have become a mirror of the very evil you hate. There is no more difference between you and him. You both create the same orphans. You both leave the same silence. You both rule through the same fear.”
He stood tall, his defiance complete.
“So take your offer and your hatred elsewhere. I will not join you. I will only pity you. For you have sacrificed your soul to your revenge, and now you have nothing left to burn… but yourself.”
When Miran finished, silence filled the space.
The leader stood, shaken.
“Put him in prison—”
Miran cried out, voice breaking.
“Please… let me go to my sister. She’s the only one I have.”
The leader stopped.
For a long moment, he said nothing.
Then, quietly—
“Free him. Let him go.”
`
    },
    {
        title: "Episode 17",
        content: `The soldiers hesitated.
“But why free him?” one of them asked.
“He could become a great warrior. And what about the soldier he killed?”
The leader’s voice was firm, yet heavy with emotion.
“The man he killed was defending himself,” he said. “And as for greatness—yes, he could become a great soldier. I wanted that too.”
He paused, his eyes lowering.
“But he has something stronger than any blade or army. His sister. Their bond.”
The soldiers fell silent.
“He doesn’t seek power,” the leader continued. “He seeks peace. And the pain he’s living through now… I once lived it myself.”
His voice cracked.
“When my father was burning with fever, I stood helpless—just like he did. The soldiers didn’t let me go. I accepted the kingdom’s offer, became their soldier… and later betrayed them for revenge.”
Tears filled his eyes.
“When I was finally freed and returned home… my father was already dead.”
The leader turned away.
“I will not let my mistake become another man’s fate. Free him. Now. I don’t want what happened to me to happen to anyone else.”
The soldiers obeyed.
Miran was released and guided toward the village.
Night passed as he moved—walking, running, swimming—driven by only one name in his heart.
“Fatma!”
The cry echoed outside the house.
Fatma froze.
She ran to the door, hands trembling, tears already falling. Slowly, she pulled the cloth aside—
And there he was.
“M—Brother…?”
Both of them broke.
Their hands shook as they reached for each other, then they collapsed into a tight embrace. No words—only sobs, only names whispered again and again.
Miran sank to one knee, exhaustion finally claiming him.
Fatma didn’t let go—not even for a moment. She held him as if the world might steal him away again.
After a while, Miran gently touched her shoulders and wiped her tears.
“I’m here, Fatma,” he said softly. “I came back for you.”
Her tears kept falling, but now they carried relief.
“B-Brother… is it really you?” she whispered, touching his face as if to be sure.
He smiled faintly. “Yes. It’s me.”
Then, gently, with warmth in his voice,
“Now help me stand. I’m very tired… and very hungry.”
She smiled through tears, touched his cheeks once more.
“Brother…”
Miran held her hands and helped her stand. Together, slowly, they walked inside.
“Fatma,” he said as he lay down, “please let me rest a little. Did you cook anything?”
She hesitated, nervous energy rushing through her.
“Y-Yes… I did.”
She hurried to prepare the food, hands shaking—until Miran reached out and held her wrist.
“Fatma,” he said softly. “Calm yourself. I’m here.”
She breathed. Smiled. Then cooked.
They ate together.
Later, they shared everything—what each had suffered while apart. The night grew deep.
As they lay down to sleep, Fatma slowly rested her head on Miran’s arm.
He was still awake.
He smiled, gently brushing her hair, resting his hand on her head—protective, grateful, present.
And finally…
he slept.`
    },
    {
        title: "Episode 18",
        content: `Morning did not arrive gently.
Miran woke long before dawn, when the world was still wrapped in darkness. Without waking Fatma, he quietly stepped outside, took his axe, and began working. The sound of wood splitting echoed softly through the forest. By the time the sky hinted at light, he had already cut two trees halfway through. His arms burned, his breath grew heavy—but he didn’t stop until his body forced him to.
Exhausted, he returned home.
Fatma was still asleep.
Miran stood there for a moment, watching her carefully, making sure her breathing was steady. Satisfied, he stepped outside again. His thoughts drifted back to the leader of the Acurs—the man who spoke of loss and revenge with the same fire Miran had once felt himself.
Kind… yet consumed, Miran thought.
Revenge had burned him from the inside.
After some time, Fatma woke up.
She looked around the quiet house.
“Brother…?”
No answer.
Her heart skipped. She rushed outside.
“Brother!”
“Yes,” Miran’s voice replied from nearby. “I’m here.”
She found him standing still, eyes distant, lost in thought. Without warning, she clapped her hands in front of his eyes.
“Brother! Where did you go?” she said, half sleepy, half playful.
“What are you worrying about so early?”
Miran blinked, then smiled softly at her.
“I was thinking about someone I met yesterday,” he said.
“He was kind… but revenge had burned him.”
Fatma, still half-awake, nodded slowly.
“Hm…” she murmured, not fully understanding, then turned back inside as sleep pulled her away again.
As the day went on, Miran returned to work. Fatma prepared food, and they ate together quietly. But even after that, Miran picked up the axe again and went back outside.
Again.
And again.
Fatma watched him from the doorway. Her chest tightened.
He’s doing everything for me… and I’m doing nothing.
Unable to hold it anymore, she ran to him and hugged him tightly.
Tears fell.
“Fatma?” Miran said, startled. “What happened? Why are you crying?”
She wiped her face, but more tears followed.
“Brother… can I ask you for one thing?”
“Of course,” he said immediately.
“I want to help you,” she said, her voice shaking.
“Can you find some work for me? Or buy another axe? I promise I won’t hurt myself… please, brother.”
Miran gently placed his hands on her shoulders and looked into her eyes.
“Fatma,” he said calmly, “I’m here. We’ll manage everything together.”
“I don’t want to hurt you. I don’t want to give you work that tires you.”
He smiled softly.
“You can ask me for anything… except this.”
Fatma looked at him, tears shining in her eyes, silently saying please.
Then she turned away and went back inside.
That evening, Miran returned home and saw Fatma cooking.
“What are you making?” he asked gently.
She didn’t reply. Her movements were slow, her silence heavy.
“Oh,” Miran said teasingly, “so you’re not talking to me now?”
Still no response.
He scratched his head.
“Well… I actually thought about work for you.”
Fatma froze.
She turned around, eyes lighting up, and rushed toward him. Miran raised his hands quickly.
“Hey! If you weren’t talking to me, then I wasn’t going to talk to you either!”
She stared at him, realized the lie—and smiled before hugging him tightly.
Both of them laughed.
“Okay, brother,” Fatma said softly.
“What work did you decide for me?”
“Cooking,” Miran replied seriously—
Then burst out laughing.
Fatma’s smile dropped instantly.
“I’m joking!” he said quickly.
“The real work is collecting good, edible leaves for the animals from the forest. It’s easy, safe, and perfect for you.”
Fatma smiled in relief.
“Oh… thank you, brother.”
Miran added gently,
“But first, your hand must heal properly. Only then will I allow you.”
“Brother, please!” Fatma protested.
“Why do you tease me so much? This is the first wish I’ve asked for since our parents died… please.”
Tears fell again.
Miran placed a hand on her shoulder and pulled her into a gentle half-hug.
“Alright,” he said softly.
“But don’t do too much work with your right hand. It needs rest, okay?”
Fatma smiled through her tears and hugged him tightly.
They talked casually—until a burnt smell filled the room.
Miran sniffed the air.
“…Fatma.”
Her eyes widened.
“The food!”
They rushed back inside. The meal was burnt.
Miran laughed.
“Maybe you should master cooking first before moving on to another job.”
“Oh brother, that’s enough!” she said, embarrassed.
She cooked again, and this time they ate properly.
That night, Fatma lay down thinking about her new work. Slowly, her thoughts faded and she fell asleep.
Miran was already asleep beside her.
The house grew quiet once more—
but the weight they carried continued to grow.`
    },
    {
        title: "Episode 19",
        content: `Fatma knew Miran would wake up early again.
So the night before, she quietly placed a small utensil beneath the blanket near his feet. If he moved even a little, it would make a sound.
A perfect plan, she thought.
Morning arrived just as she had hoped.
The utensil clinked softly.
Fatma’s eyes opened at once. She smiled to herself, but instead of getting up, she stayed still.
If I wake up now, brother will make me sleep again, she thought.
She waited.
Moments later, Miran carefully slipped out of bed and stepped outside.
Only then did Fatma rise.
She moved quickly but quietly, preparing food. While working, she noticed the axe still inside. Then her eyes fell on the water bottle.
He’ll come back, she thought.
Fatma lay down again, pretending to sleep.
Sure enough, Miran returned to grab the bottle. But he stopped.
The fireplace was warm.
Water was already boiling.
He turned toward her.
“Fatma… why are you acting?” he asked calmly.
She opened her eyes slowly.
“Oh… brother. I was caught,” she said shyly.
“I wanted to prepare food early so you could go to work faster.”
Miran raised an eyebrow.
“And how did you wake up?”
He paused. “Was the utensil your idea?”
She murmured softly, “Yes…”
“So,” he smiled faintly, “you used me as an alarm clock?”
She nodded again. Tears began to form.
Miran’s expression softened instantly. He stepped closer and spoke gently.
“Fatma… I love you, my sister.”
She looked up at him.
“Brother… aren’t you angry with me?”
“Why would I be?” he said.
“You did nothing wrong. You were only trying to help me. And I already allowed you to work.”
Then his tone became protective.
“But listen—don’t go outside before me, okay?”
Her face lit up.
“Yes, brother. I love you too.”
The water boiled over, pulling them back to reality. Fatma returned to cooking while Miran stepped outside.
A little later, Fatma followed him.
“Okay, brother,” she said seriously.
“Now explain. Or give me a demo.”
Miran smiled.
“First, I’ll cut the branches,” he explained.
“They’ll fall to the ground. You just need to pick the good ones and put them into the boat. And make sure to wash them first—there can be insects or dirt.”
She nodded carefully.
They worked side by side until evening.
By then, they had gathered many branches, but three full trees couldn’t fit.
“We’ll take the branches now,” Miran decided.
“We’ll come back for the trees later.”
They set off.
Night had fallen by the time they reached the market.
They sold the branches for two arrives.
Miran smiled, satisfied.
Fatma, however, stood frozen—eyes wide, hands trembling. She was shocked… and unbelievably happy.
“Brother,” she said suddenly, “I want to buy something.”
Miran looked at her.
“But it’s a surprise,” she added quickly.
“So… can I cover your eyes?”
He chuckled.
“Alright.”
She wrapped cloth over his eyes, held his hand, and led him to a shop. She bought what she wanted quietly.
“Brother,” she asked afterward, “do you want to buy anything?”
“No,” he replied honestly.
She guided him back to the boat and placed the surprise inside.
As they moved toward home, Miran tried to ask—
But Fatma smiled mischievously.
“Tomorrow, brother.”`
    },
    {
        title: "Episode 20",
        content: `They returned home at night.
Miran kept glancing at the small box Fatma had brought with her. Curiosity quietly grew inside him. He waited, thinking she might show it to him before sleeping.
But Fatma noticed his restlessness.
“Brother,” she said with a teasing smile, “I told you tomorrow. Why are you thinking I’ll show it to you now?”
Miran blinked. “How did you know I was thinking that?”
Fatma laughed softly to herself and returned to cooking. Miran stayed silent, still wondering—how did she know? And why tomorrow, not today?
Unable to hold it, he asked again, “Fatma… why tomorrow?”
She replied gently, without looking back,
“Because I want the surprise to be more precious. And curiosity makes it even better. So wait.”
Miran sighed in defeat, pretending to be sad.
After some time, Fatma called him to eat. They shared their meal quietly, then lay down to sleep.
Morning arrived.
Miran woke up early. Fatma was still asleep—her sleep was light, sensitive to even the smallest sound. He moved carefully toward the box. Slowly, he opened it.
It was empty.
His heart skipped for a moment. Confused, he stared inside, wondering what had happened. He wanted to ask Fatma—but if he did, she’d know he tried to peek.
So he said nothing.
He picked up his tools and went outside to work.
Fatma woke up soon after.
She checked beneath her pillow—and smiled. The surprise was still there. She noticed the box had been opened, but instead of getting upset, her smile grew wider.
She stood up, prepared food, then took the surprise in her hands and called out,
“Brother!”
Miran returned.
She placed something softly into his hands. He felt cloth beneath his fingers. Slowly, he unfolded it.
A beautiful piece of clothing.
Miran smiled—deeply, honestly. His eyes softened. He gently kissed her hand.
“Fatma… it’s beautiful.”
He was genuinely happy. Seeing his expression, Fatma felt even happier.
“You did this because my first gift to you was also clothes, right?” Miran asked.
She shook her head.
“No, brother,” she said simply.
“I did it because I love you.”
They ate together after that, talking softly. Later, they went outside and sat on a stone near the house, sharing quiet thoughts.
After a while, Fatma asked,
“Brother… now we have to work, right?”
Miran replied,
“Not yet. Later we’ll go sell the wood.”
“Oh… hmm,” she nodded.
They went to the village and sold the wood. On the way back, Fatma looked around and said,
“Brother, this place is good… why don’t we settle here?”
Miran answered calmly, thoughtfully,
“We sell wood and branches, but there’s no forest nearby. No one here knows us. If we ask for work, people won’t trust us at first—and you’d be alone.”
He paused, then added softly,
“Our place is peaceful. We are safe there. We don’t need to go anywhere.”
Fatma smiled and nodded.
“Okay.”
They turned back toward their home—
And that’s when they saw…`
    },
    {
        title: "Episode 21",
        content: `They saw it.

Their house had been burned to ashes.

Miran and Fatma froze. Their bodies trembled as they ran forward, hoping—desperately—that something might still be safe. But inside, everything was destroyed. The fire had burned for a long time; nothing remained.

Fear swallowed them whole.

Fatma broke down, crying uncontrollably.
“Brother… it happened again,” she sobbed. “We lost our home again.”

Miran’s eyes filled with tears, but he forced himself to stay strong. He pulled her into a gentle embrace, holding her tightly, trying to calm her shaking body.

At that moment, the Acurs arrived.

They saw Miran standing there in shock. Their leader stepped forward, his voice trembling.

“Hey… child—h-how did this happen? Have you seen them?”

Miran shook his head. “N-no… I don’t know.”

The leader took a deep breath and said,

“Listen carefully. The war between the kingdoms has reached its final stage. They’re destroying entire territories. I’ve made a plan—to kill one of the king. If one king die, the war will end. And the other will win.”

Miran stepped back instinctively, closer to Fatma.

“Why are you telling me this?” he asked.

“My chosen soldier died,” the leader replied. “If you help us, this war will end. You and your sister can finally live in peace.”

Miran’s voice cracked.
“W-what? Are you crazy? I’m not going to be part of any war!”

The leader’s tone softened, but his eyes burned with pain.

“You already are, Miran. Look at what they’ve done to you. I’m not asking you to fight for us—I’m asking you to save the country. Think about the people. Your house burned today… countless others are burning too. Don’t you want to stop that fire? Don’t you want to pour water on it?”

Tears formed in the leader’s eyes. Behind him stood seven soldiers, silent and broken. Slowly, the leader dropped to his knees.

“Please, Miran.”

Fatma clutched Miran’s clothes, crying desperately.
“Please don’t, brother… please.”

Miran stood frozen between them.

The leader turned to Fatma and said softly,

“Girl… this is for the future. For you. For people like you who suffer endlessly and receive nothing in return. Please… allow him.”

Fatma cried even harder.

Then Miran spoke.

“I will do it.”

Fatma froze—and collapsed.

Miran caught her before she hit the ground. He sat down, laying her gently across his legs. Tears streamed down his face. Even the soldiers looked away, hearts heavy.

He kissed Fatma’s forehead and looked up at the leader.

“I’ll do it. But nothing must happen to my family.”

The leader nodded and explained the entire plan.

And they began.


---

After the plan was set, the leader said urgently,

“Miran, we have to go now. The king isn’t far. Are you ready?”

Miran panicked.
“Now?! Fatma is unconscious—and you’re telling me to leave her here?”

“There’s no other choice,” the leader said sadly. “The king’s convoy moves faster than us.”

Miran cried silently. He hugged Fatma tightly, kissed her hand, then turned away and followed them.


---

The plan began.

They ran—faster and faster. In about an hour, exhausted and drained, they reached the king’s route. They changed their clothes.

A poor figure appeared on the road, face hidden, clothes torn.

The convoy stopped.

Soldiers stepped forward.
“Move away.”

The figure pleaded, “Please help me. My brother is dying from starvation. Just a little food—”

“I said move away. We don’t have time.”

“Please!”

A soldier raised his arrow.

Suddenly—a child rushed forward, holding a strange weapon. He aimed straight at the king.

Bang.

Arrows flew, but seven soldiers stepped in front, shields raised.

Chaos erupted.

“The king is dead!” someone shouted.

The forward soldiers attacked. The poor figure vanished. Five soldiers and the poor man retreated with Miran’s group.

As the king’s soldiers chased, the poor man pushed the child into the bushes.

“Run. As fast as you can.”

The soldiers raised their hands.

“We killed your king.”

The commander shouted, “What about the child?”

At that moment, the leader stepped forward.

“I am the leader of the Acurs. I pretended to be the child. My soldiers distracted you. I fired the shot.”

They surrendered—choosing capture over escape.

To save Miran’s life.

Miran ran.

He looked back, crying, as the leader smiled faintly.

“Our work is done,” the leader whispered to his soldiers. “Now… we can die in peace.”

They were arrested—crying, yet smiling.

And far away, Miran ran—tears falling—as the war quietly began to end.`
    },
    {
        title: "Episode 22",
        content: `Fatma woke up and saw two soldiers of the Acurs standing at a distance, protecting her. She suddenly realized everything and screamed,
“Brother!!!”
She burst into tears.
The soldiers came closer, their voices heavy with sorrow.
“Y-your brother followed the plan,” one of them said softly. “He asked us to tell you this…”
They hesitated, then continued,
“If something bad happens to me, my last words are: Live long, Fatma. I will love you even after this life.”
Fatma collapsed to her knees, crying uncontrollably.
“Brother!!!”
After the fall of the Acurs, Miran—exhausted, broken, and filled with pain—could no longer hold himself back. He turned and ran toward her with all the strength he had left.
After some time…
Miran saw that familiar, precious face again.
“Fatma!” he shouted.
She was crying nonstop. When she heard his voice, she froze in shock—then stood up.
They ran to each other and hugged tighter than ever before, crying together, calling each other’s names as if afraid the moment might disappear.
After a while, Fatma gently touched his cheeks and said,
“Brother… promise me you won’t ever do anything without my permission.”
She hugged him again.
Miran whispered,
“I love you, Fatma.”
A little later, they noticed the soldiers nearby—crying.
Miran laughed through his tears and asked,
“Why are you crying?”
One soldier replied softly,
“Because the love between siblings… is the purest love.”
Fatma smiled.
She and Miran walked a little farther, holding each other’s hands. Fatma said,
“We will live long… and we will love each other even after this life.”
Miran smiled.
The soldiers, still emotional, returned to their homes.
Miran then said quietly,
“I’m sorry I couldn’t save your leader. He said to thank you—because with you, his dream came true.”
After that, Miran and Fatma were alone again. Miran told her everything that had happened. Fatma trembled in fear hearing the story.
They lit a small fire with some wood and eventually fell asleep on the ground.
When Miran woke up, he saw Fatma’s hand resting on his chest. He gently moved it aside, and she slowly woke up too.
A new morning began.
New struggles awaited.
and the war has ended.
They stood up, looked at the sky, held each other’s hands, and once again said together,
“We will live longer and love each other even after life.”
Now, 15-year-old Miran and 12-year-old Fatma—children who had suffered endless pain—finally began to live peacefully. They rebuilt their house and lived there happily.
Last Scene
After eleven days, an old man was released from the king’s prison. He traveled by boat along a familiar route—one he had once given to someone.
There, he found Miran and Fatma.
It was the old sailor.
They hugged him tightly, and the sailor began living with them.
Once again…
they were all happy.`
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