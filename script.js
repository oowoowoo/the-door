
//use the american nightmare as our reference to this code, matches the vision the most 
//im just figuring things out over here
//the function for the text is going to have to use inner.html stuff 


let storage = [],
  itsNotOver = true,
  storyContainer = document.getElementById('text'),
  buttonContainer = document.getElementById('buttons');

    const storyElements = {
        intro: {
            text: 'Test Tubes and Thermometers, Inc. was a seemingly ordinary science supply company, yet it was anything but. Albert Average, a run-of-the-mill office worker with an innate thirst for knowledge, has hopes to soon uncover the secrets of his own workplace. <br><br>He is a lanky man with a strange smile, often adorned with ill-fitting business clothes, and light-brown stiff hair that never has a strand out of place. Because of his unusual presence, Albert is not highly favored in his workplace by his coworkers. Since almost the entire office decided not to be his friend, the thoughts of what could be hidden in the janitor’s closet were the only thing that had plagued his mind. His boss explained on his first day that the janitor’s closet was strictly off-limits to any employees besides himself',
            choices: [
                ['Sneak into the closet', 'sneakfail'], ['Keep working', 'work'],
            ],
        },

        sneakFail: {
            text: 'Albert’s curiosity continues to edge him towards breaking the rules and entering that closet, but his need for employment and fear is what stops him. If he were to lose this job, he would be losing his only source of income. Many would assume that Albert would be thankful to leave this dead-end job and pursue a career in criminal investigation, but he would insist that it was always his dream to work in a small office and market science tools, surrounded by people who don’t like him. Instead, he turns his attention back to his computer and resumes work.',
            choices: [
                ['Continue working', 'work'],
            ],
        },
        
        work: {
            text: '<br><br>"Albert, Boss asked for those files from Thursday, do you have them?" The receptionist made her way over to Albert’s desk, looking to him for an answer.<br><br> Cynthia Stone has been working for the company for about six years, receiving many awards for her receptionist work during that time. Her thick black hair had a soft shine, and was styled into a bob. She often wore business casual clothing with some kind of goth twist, today she donned a suit entirely in black. Cynthia is known to Albert as the only person who treats him half-kindly, and the only accessible person who has knowledge of the closet. After a night of overtime, he spotted her creeping out of the closet very quickly. He had not ever questioned her about this, fearing that it would lose him his job. Today, though, he decided it was the perfect time to bring up such a topic.',
            choices: [
                ['Ask Cynthia what she knows','info'],
            ],
        },

        info: {
            text: '<br><br>“Yes, right here…” Albert opened the drawer on his desk containing the files she asked for. Before handing them to her, he looked into her eyes and asked her, “what do you know about that janitor closet, Cynthia?”<br><br> Her eyes widened for a moment, before she smiled and stared at him. She reached for a pad of sticky notes atop his desk and quickly scribbled something down, then peeled off and handed the sticky note to him. <br><br>It read: Something’s being hidden in that closet, something that isn’t really human but not an animal. If you really wanna know more about it, meet me in the parking lot once we get off our shifts. I’ll be near my car. Boss can’t be here when we do this.<br<br>Albert looked up to her and she smiled, beginning to walk away.<br><br>“That’s your next appointment, remember to not be late!” She sat back at her desk and the two of them continued their work like nothing happened.',
            choices: [
                ['Sneak into the closet right away','sneakCloset'], ['Ask to know more', 'askMore']
            ],
        },
        
        sneakCloset: {
            text: '<br><br>Albert started thinking about the closet and nearly fell out of his seat from excitement. Something non-human, and it was only thirty feet away from him. Not even glancing over to Cynthia, he sprung up from his seat and made his way to the closet. Moments before he was able to latch onto the door handle and pull it open, Cynthia grabbed him by the collar of his shirt and pulled him to a hallway.<br><br>“Are you insane?! Why would you go in there right away? Didn’t I just tell you to meet me after work?!” Cynthia scolded him, still gripping his collar. She groaned and peered back into the office, scanning the area. “You’re so lucky Boss is in a meeting, he’d have had you fired, or worse. Plus, this door’s got a lock on it anyway.<br><br>Albert gulped and began to sweat more than he already was. He wasn’t very intent on finding out what that last statement about their boss meant. He reached up and peeled her hand off of his collar, avoiding the fiery look in her eyes. <br><br>Cynthia composed herself and muttered to him, “don’t follow me out right away, pretend to use the restroom or something."<br><br> He sighed and did as he was told, returning to his desk a few minutes later',
            choices: [
                ['Continue working', 'contWork']
            ]
        },

        askMore: {
            text: '<br><br>Eager to know more, Albert quietly rose from his seat and moved to Cynthia’s desk. She sighed and looked up at him, anticipating his question.<br><br>“Are you able to tell me anything right now?” He had a soft smile on his face, hoping to learn more before he committed himself to seeing the closet. <br><br>“Er…” Cynthia glanced over to Boss’s office, checking for his eagle eyes “not really. Everything I could say was on that note… I’m scared that anything else will get you too antsy.” <br><br>Albert’s shoulders dropped and his smile faltered for a moment, but it rose again when he nodded goodbye and returned to his desk. He really had to wait until five P.M.',
            choices: [
                ['Continue working', 'contWork']
            ]
        },

        contWork: {
            text: '<br><br>Although he was nervous, Albert was excited to learn the secret of the closet. Finally, after about three years of waiting and wondering, he was going to know. It’s a feat that the company was able to keep this secret under wraps for so long, only now allowing a new person into the mix. Maybe it was a good thing that he had no friends, considering he would now have nobody to run to with whatever information was in this closet.',
            choices: [
                ['Continue working excitedly', 'workExcited']
            ]
        },

        workExcited: {
            text: '<br><br>During his work, Albert could feel a strange sensation at the nape of his neck. He had hoped to play it off as nerves, or maybe the thrill of new prospects, but this was an all too familiar feeling. The feeling of somebody watching him, boring their eyes into his back',
            choices: [
                ['Turn around', 'turnTrue'], ['Dont turn around', 'turnFalse']
            ]
        },

        turnTrue: {
            text: '<br><br>Slowly, Albert began to turn his head towards the only thing behind him– the closet itself. The area was a bit dim because of some lightbulbs having burnt out, but Albert caught a glimpse of a shiny figure retreating into the closet from the top of the door, sealing it with a click. Instantly, he broke out in what felt like a flood of sweat. <br><br><i>Why was something actually looking at me?!</i>',
            choices: [
                ['Finish work with an anxious feeling', 'finished']
            ]
        },

        turnFalse: {
            text: '<br><br>Opting to ignore the feeling, Albert turned back to his files and continued his work. All the way to five o’ clock, the feeling did not subside. He was on edge the entire time, but managed to finish what he needed to anyway.',
            choices: [
                ['Continue work in ignorant bliss', 'finished']
            ]
        },

        finished: {
            text: '<br><br>Leaning back into his chair with a sigh, Albert pushed away from his desk and stood up to stretch. After tidying up his desk one last time, he gathered his belongings and made his way to the parking lot.<i><br>I still don’t know what to expect. I’m nervous, but excited, but super nervous… like, really nervous. Gosh.</i><br> His thoughts raced as he rode the elevator to the first floor. The receptionist that worked on the first floor had left the second he was able, so it was just Albert. By the time he had wandered around, played some meaningless games on his phone, and replied to some emails, about half an hour had passed.  It was time for him to really meet with Cynthia. He took a deep breath and left to the parking lot.<br><br>Once he had almost reached her, she waved to him quickly and met him halfway. “You ready?”',
            choices: [
                ['Ask Cynthia for more info', 'ask'], ['Tell Cynthia you are ready', 'tell'], ['Change your mind and leave','leave']
            ]
        },

        ask: {
            text: '<br><br>“I’m gonna be totally honest with you Albert, I have no idea what’s actually inside the closet. I only know that something is living inside of it and Boss wants it kept secret from the rest of the company. I’m breaking that rule right now, but… I guess that’s a risk I’m taking.” She put a hand on his shoulder and gave him a reassuring smile. It did not reassure him at all.',
            choices: [
                ['Tell Cynthia you are ready', 'tell'], ['Change your mind and leave', 'leave']
            ]
        },

        tell: {
            text: '<br><br>Cynthia grinned at him, it seemed that she was just as excited to go into the room as he was. He hadn’t even considered that possibility, assuming she would be as emotionless about this as she typically was at work. Granted, she seemed to like their coworkers as much as they liked Albert. While traveling up the elevator, Cynthia began to fumble in her pockets looking for something. She pulled out a key and held it up to him.<br><br>“Boss gave me this a couple years back, for emergencies. Satisfying your curiosity is an emergency, right?” She winked at him and walked out of the elevator once a ding sounded and the doors slid open. He scratched his head and smiled, following after her. <br><br>They reached the closet and she inserted the key, turning it for what felt like ages to Albert. She unlocked the door, and turned the handle, pulling the door open slowly. If he thought hard enough, he could dramatize this and imagine strange fog spilling out of the door frame floating towards them. A bright light shone through the door frame, making Albert squint because of the contrast between it and the dark office.', 
            choices: [
                ['Brace yourself...', 'enterRosebud']
            ]
        },

        leave: {
            text: '<br><br>With his shirt glued to him with sweat, and his mind completely jumbled from the idea of a living thing having been beside him all those years, Albert began to panic. <br><br>Cynthia was looking at him worriedly, and he started to back away from her, saying “I don’t think I want to do this anymore.” <br><br>Cynthia stared at him for a moment, before turning around and heading back to her car, shaking her head while she walked. She looked back at him with her lips in a thin line. <br><br>“So you did all that just to back out? I thought this was like, your big interest in the company? Whatever. Just don’t talk or ask about it ever again.”<br><br>Albert stood alone in the parking lot for a while before returning home himself, and not once did he discuss that closet during his career again.',
            choices: [
                ['Bad ending', 'restart']
            ]
        },

        enterRosebud: {
            text: '<br><br>Cynthia pulled the door open, stepping back and looking at Albert with his jaw dropped in awe. In front of them was this strange light pink creature, with four stalks topped with a large eyeball on each end looking towards the two of them. The creature’s body was essentially a big blob of flesh, and the entire thing looked like it was wet and slimy. Albert pinched himself.<br><br>“Ehm… Hi!” It spoke, somehow, and the middle stem pushed towards the front of itself, lowering itself to meet our heights. It hadn’t quite set in yet, but this thing was about nine feet tall, three feet taller than Albert. He assumed that this stalk was their “leader”.',
            choices: [
                ['Speak to them', 'speak'], [`Don't speak at all`, 'dontSpeak']
            ]
        },

        speak: {
            text: '<br><br>“Wh-what’s…” Albert swallowed and forced a smile out of himself to the beast, locking eyes with their… eye. “What’s your name?”<br><br>“My name? Our name is Rosebud! We’re a… Well, your people refer to us as aliens. I guess my species specifications are not essential to this conversation…” Rosebud slithered further back into the room, allowing Albert and Cynthia to step inside. “I don’t believe you have permission to see me, though? Haha, don’t worry I won’t snitch!”.<br><br>“Even though we all share one name, we all have different personalities.” The green eye explained. “To begin with, there is me.Ive assumed the leader role due to the fact that I’m the biggest one here.<br><br>”The purple eye moved forward with intense energy, “then me! I love love love meeting new people!” Albert hadn’t noticed at first, but this stalk was wearing a purple and yellow party hat that was topped with a silver and green ball. It sparkled brightly under the white LEDs. <br><br> Each eye turned itself towards the brown eye, and the group waited a couple of moments for them to speak. The green eye made a throat clearing noise and the brown eye groaned. “Ugh.” <br><br>Glaring at Cynthia and Albert, they spoke. “Hi. Is that enough for you?” The brown eye squinted at the green eye, then rolled their eye.<br><br>“Okay… well. They aren’t very keen on meeting new people, or moving to new places, or… doing anything.” The green eye sighed before the icy blue eye burst forward and roared. <br><br>“Who are you?!” Their volume was thunderous, causing Albert and Cynthia to cover their ears. The other stalks shushed them, and they muttered a short apology before snapping back to the two.<br><br> “Sorry, they are basically the processor of all of our negative emotions… typically fear and anger.” The green eye explained. <br><br>“Oh. Well, I’m Cynthia and this is Albert. We work in the office just outside of your room.” Cynthia smiled at them and a tentacle sprouted out of Rosebud’s body, making a disgusting squelch noise as the flesh assembled itself. She stared at it for a moment before deciding to reach out and shake it. “Nice to… meet you.”<br><br>Rosebud gently slithered towards Albert, extending the tentacle to him as well.',
            choices: [
                ['Shake tentacle', 'shakeTent'], [`Don't shake tentacle`, 'dontShakeTent']
            ]
        },

        dontSpeak:{
            text: '<br><br>Albert stood still and stared. For a moment, it was very silent. An awkward atmosphere began to set in and Cynthia cleared her throat. She introduced the two of them, and Rosebud explained their many stalks. What Albert gathered from the conversation was that the middle green eye was their leader, the purple eye loved people and to party because it wore a party hat, the brown eye was depressed and stubborn, and the icy blue eye was extremely angry.<br><br>“It’s very nice to meet you, Rosebud.” Cynthia smiled at them and a tentacle sprouted out of Rosebud’s body, making a disgusting squelch noise as the flesh assembled itself. She stared at it for a moment before deciding to reach out and shake it.<br><br>“It is very nice to meet you as well!” Rosebud spoke as they gently slithered towards Albert, extending the tentacle to him as well.',
            choices: [
                ['Shake tentacle', 'shakeTent'], [`Don't shake tentacle`, 'dontShakeTent']
            ]
        },

        shakeTent: {
            text: '<br><br>Albert sported a small smile as he reached to take Rosebud’s tentacle in his own hand. To his surprise, it was not wet at all. The texture resembled that of a shiny soccer ball. Albert’s mouth gaped again as he tried to understand the feeling.',
            choices: [
                [`Cynthia calls Albert's name`, 'listen']
            ]
        },

        dontShakeTent: {
            text: '<br><br>Albert looked at the tentacle and waved Rosebud off, refusing to shake their hand. If Rosebud had shoulders, they would have dropped at this. Albert muttered a sorry and averted his gaze from their eyes, stepping back.<br><br>“That’s alright. Nice to meet you, Albert.” The green eye spoke sadly.',
            choices: [
                [`Cynthia calls Albert's name`, 'listen']
            ]
        },

        listen: {
            text: '<br><br>Cynthia looks up from her watch and to Albert. “We’ve got about half an hour until the real janitor comes around this floor.” <br><br>Albert looked back to Rosebud and pondered for a moment, wondering what he should ask them. ',
            choices: [
                ['Why are you here?', 'whyHere'], ['What are you?', 'whatareyou']
            ]
        },

        whyHere: {
            text: '<br><br>“Why exactly are you here, Rosebud?”<br><br>“I don’t believe a human of your age was alive during this time, so I suppose we will explain the history of our species.” Rosebud moved to an empty whiteboard towards the back of the room and began drawing what Albert and Cynthia assumed to be their home planet.<br><br>“Approximately eighty years ago now, both human beings and aliens once lived together in harmony. Each side benefited from the other, exchanging resources and knowledge constantly. One day, though, a dispute that could not be resolved escalated into a large war. To my knowledge, your people have made attempts to cover such a thing ever happening. It is not covered in your… what are they called?” The green eye looked to the others in question.<br><br>“History books.” The brown eye responded.<br><br>“Yes! History books. The incident is kept secret, perhaps as to not stir curiosity in younger groups to seek us out. Of course, we still encounter attempts of communication, but a treaty agreed upon by both sides prevents either of us from answering calls. Anyway, it is only our superiors that are allowed to take such signals in the first place. They are well-versed in these rules.”<br><br>“Wow.” Cynthia stood with a sad look on her face. “So we could have been best buds this whole time, but some war stopped that?”<br><br>“I suppose. Both sides like to pretend it was for the better, yet I feel the truth is hidden.”<br><br>“And we could uncover that?” Cynthia muttered, but nobody else heard.<br><br>“Well, then why are you in our office’s janitor closet?” Albert shifted his weight from one leg to another, he was beginning to gain much more interest in this alien.<br><br>“Oh! Um, well, your boss agreed to hide us here since we were practically abandoned by our ship. It wasn’t their fault! But, we still have no means of returning.”<br><br>Albert hummed in response and looked at Cynthia.',
            choices: [
                ['What are you?', 'whatYou'], ['Interesting.', 'interested']
            ]
        },

        whatYou: {
            text: '<br><br>“Okay, well, what are you?” Albert asked, only to be met with a puzzled look from Rosebud. Cynthia sighed and shook her head.<br><br>“Albert, you can’t just go around asking people what they are. That’s like, kinda rude.” She crossed her arms and smiled, nudging Albert.<br><br>“We do not mind! We were just shocked, is all. No person besides your boss has been interested in the personal information of our body.” Rosebud pushed out a second tentacle and waved them both at the two in worry. Albert cringed at this.<br><br>I don’t know if I can get used to that. <br><br>“Our kind are called Zerabithians, local to the planet Theronia-” The green eye tried to explain, and the brown eye quickly butt in. <br><br>“Ridiculously localized as ‘zorps’ by your people.”<br><br>The green eye ignored them. “It is very distant and outside of your solar system, but our people have discovered travel through lightspeed. That is how we managed to arrive.”<br><br>“So, are there more, uh, Zerabithians like you?” Albert tilted his head, imagining many copies of Rosebud.<br><br>“Yes! Lots and lots and lots of our friends are just like us! But, there are also others that are different shapes! Like squares, and stuff.” The purple eye bent themself into a weird angle, trying to resemble a square. <br><br>“And how exactly did you get the name Rosebud?” Cynthia asked next.<br><br>“Well, our planet has roses which are called by the same name. In fact, our languages are extremely similar. Our siblings were named after various flowers as well, like Tulip Bulb and Gladiola.” They started drawing some of the flowers out on the board, reminiscent of their family.<br><br>“Oh.” Albert looked at Cynthia and they shared a sympathetic look.',
            choices: [
                ['Interesting', 'interested']
            ]
        },
    
        interested: {
            text: '<br><br>The group was silent for a bit, just standing and looking at each other. Albert was finally face to face with his biggest fixation, and he had run out of questions to ask. He was too shocked, just now learning that aliens had once coexisted with humans. During his train of thought, he noticed Rosebud tinkering with a strange object.<br><br>\“What’s that?” Albert leaned in, trying to look at the object. It was a shiny silver ball with other similarly round obtrusions around the center. <br><br>\“Wouldn’t you like to know!” The icy blue eye jut forward and exclaimed, and was immediately shushed by the others. They moved back and mumbled something, presumably an apology. <br><br>“We are attempting to fix our communications device. We currently have no means of returning to our home and, while we enjoy this planet, we are granted virtually no freedom. Being kept inside of this closet… it is not living. We would like to be home again.” The green eye turned the object around so Albert could see the rest of it.<br><br>“Is that the thing Boss had shipped in a few months ago? I opened it by accident and he almost threw a fit…” Cynthia rubbed the back of her neck as she took a closer look at it.<br><br>“Why haven’t you fixed it yet? If it got here months ago.” Albert motioned to Cynthia as he spoke.<br><br>“We are missing a major component of this device. The communications device you see here is basically a shell, and the part we need is hidden away in some kind of facility. We do not have knowledge on whether or not it has been destroyed, but we do know it exists.”<br><br>Cynthia looked thoughtful, and Albert got a strange feeling in his stomach seeing this.',
            choices: [
                ['Continue discussing with Rosebud', 'speak2']
            ]
        },
    
        speak2: {
            text: '<br><br>“We’ve got about five minutes before we’re busted, Albert. We gotta get out of here.” She moved out of the room and began moving towards the elevator, turning around and waiting for Albert. <br><br>“Sure thing.” Albert began to walk out of the room and turned around. Rosebud was waving at him.',
            choices: [
                ['Wave back','wave'],['Ignore Rosebud and leave','leave3']
            ]
        },
    
        wave: {
            text: '<br><br>“Rosebud, thanks for trusting us to say all this.”<br><br>“Of course, Albert! We do not believe you are a threat.” Rosebud waved harder and Albert smiled hard.<br><br>What’s that supposed to mean.<br><br>Albert chuckled and waved back, closing the door on his way out. He rode the elevator back down to the lobby with Cynthia and they headed to the parking lot.',
            choices: [
                ['Discuss with Cynthia','discuss']
            ]
        },
    
        leave3: {
            text: '<br><br>“Goodbye, Albert!” Rosebud waved very strongly towards him, but Albert was unaffected. He simply nodded and closed the door on his way out.<br><br>He rode the elevator back down to the lobby with Cynthia and they headed to the parking lot.',
            choices: [
                ['Discuss with Cynthia', 'discuss']
            ]
        },

        discuss: {
            text: '<br><br>Albert and Cynthia stood at her car for a few moments before she spoke.<br><br>“If we go back to them, we’re gonna have to help, you know.” The two of them sighed and looked around, making sure there was nobody to listen in on their conversation. Once the coast was clear, she turned to him and grabbed his shoulders.<br><br>“That device Rosebud had, I think we can help them fix it. Or we could go straight to the government. It’s up to you, really, but I really wanna get them home without much interference. I won’t be able to do this without you.” She looked him dead in the eyes and he began to sweat.<br><br>He was silent for a moment and gathered a deep breath. “I’ll… think about it tonight.”<br><br>She grinned and patted his shoulders, turning him around and pushing him towards his car.<br><br>“See ya tomorrow!” She quickly got into her car and drove away, leaving Albert all alone.',
            choices: [
                ['Drive home', 'driveHome']
            ]
        },
    
        driveHome: {
            text: '<br><br>Albert’s keys jingled as he pushed one into the keyhole, turning it and opening the door. He shut the door behind him and loosened his tie, moving directly to his couch. Once there, he practically collapsed.<br><br>Wow.<br><br>He had two options now. To help, or not to help, that is the question. He sits for a couple of hours, too nervous to even cook dinner. Constantly mulling over his options, he still wasn’t clear on what he should do. One risk was directly interfering with the government’s plans on aliens, and the second was possibly interfering with government plans but maybe succeeding and getting the part. <br><br>“What to do…”',
            choices: [
                ['Help Rosebud', 'help'], [`Don't help Rosebud`, 'dontHelp']
            ]
        },

        help: {
            text: '<br><br>Albert thought for a moment longer, and then smiled up at the ceiling.<br><br>“What do I have to lose?” He laughed and ran a hand through his hair. <br><br>Albert went to bed that night with waves crashing in his mind and in his stomach, but he managed to arrive at work the next day. <br><br>He walks up to Cynthia’s desk and checks the boss’s room, seeing that he was distracted with another meeting. They exchanged greetings, and he very hushly said “I’ll do it.<br><br>Seconds later, the boss walked out of his office and smiled at the two of them. “Albert, you’re making friends! I’m so proud of you.”<br><br>Albert shot a cheesy grin at him, and as soon as he left the two of them made plans to meet after work again.',
            choices: [
                ['Meet after work', 'meet']
            ]
        },

        dontHelp: {
            text: '<br><br>Albert sighed very hard. As much as he would enjoy investigating the history of these aliens and going through with his dreams, he knows there is too much at risk.<br><br>He arrived at the office that day very nervous. He didn’t know how Cynthia was going to react to his decision.<br><br>“Cynthia, I missed that meeting you told me about.” She looked at him like he was crazy, but it clicked in her head a moment later. For a second, she seemed to be angry, but her gaze quickly softened.<br><br>“That’s alright, Albert. It wasn’t really that important.”<br><br>Life after that resumed as it was, and Albert never tried to venture into the closet again. ',
            choices: [
                ['Ending', 'restart']
            ]
        },
    
        meet: {
            text: '<br><br>Cynthia practically came running to Albert’s desk once the clock hit five. The boss had left early for a business meeting, which meant the coast was clear for the two of them. While discussing their options, Albert noticed an eye peeking out of the closet and he smiled. <br><br>“I found out where to get that part by the way. Since I have access to practically everything in this office, I was able to look into Boss’s files without alerting him of it. It’s at some government facility, so it looks like we’re risking meeting them either way we go.” She looked around the room before speaking again.<br><br>“We could also just… go straight to the facility and explain their situation. It’s not an ideal choice, but maybe they won’t kill us on sight?” She shrugged.<br><br>The two of them sat in silence while they weighed their options.',
            choices: [
                ['Fix the device', 'fixDevice'], ['Go straight to the government', 'goToGovt']
            ]
        },
    
        fixDevice: {
            text: '<br><br>They found a way to sneak in, but the place is a maze. They manage to steal a key card from one of the workers without getting caught.<br><br>“Which way?” Albert asked.<br><br>They decided to split up, Cynthia and Rosebud went to the right side while Albert went to the left ',
            choices: [
                ['Right way','right'],['Left way', 'left']
            ]
        },
    
        goToGovt: {
            text: '<br><br>“If you say so, Albert. I just hope this doesn’t ruin Rosebud’s only chance of getting home. Or our own lives.” Cynthia stressfully rubbed her forehead and headed to her desk.<br>“What are you doing now?” Albert meekly asked, scared to disappoint her any further.<br><br>“Finding their email address. I was thinking that sending an email would delay them, you know? Give us some time to prepare.” She kept her eyes on her screen the entire time, typing away what Albert assumed to be the email. “There.” <br><br>Albert’s heart was beating out of his chest. He wasn’t sure what to expect when the team did arrive, not knowing if they would or not. <br><br>“Do you… hear that?” Cynthia asked Albert, slowly turning in her chair. Albert focused and could hear the rumbling of footsteps from outside of their office door.<br><br>Seconds later, a gentle knock sounded at the door. Neither of them wanted to answer it, but Cynthia walked to the door and cautiously turned the handle.<br><br>“Hello. I presume you are Cynthia Stone? And this man behind you is Albert Average?” A small woman spoke as the door opened.<br><br>Albert and Cynthia nodded.<br><br>“Perfect. Come in, boys.” She waved her hand, signaling about twenty fully-armed men into the room. Majority of them surrounded the entrance of the closet, while two split apart to detain Albert and Cynthia.<br><br>“The three of you are under arrest. Please do not struggle, we are simply following procedure. This conversation cannot be held in a compromising area.” <br><br>Albert and Cynthia looked at each other while the group brought Rosebud out, leading all three of them to the elevator and eventually into armored vehicles. Rosebud was separated from the two of them, which Cynthia shouted at the officers over.<br><br>“The nerve of these people…” She wore an angered expression the entire ride to their facilities.',
            choices: [
                ['Arrive', 'arrive']
            ]
        },
    
        arrive: {
            text: '<br><br>Albert and Cynthia were temporarily put into a cell before they were pulled out again and sent to an interrogation room, separating the two. <br><br>“Alright, Mr. Average. We just need to learn some things about your companion, Rosebud.” The detective spoke sweetly to him, offering a drink right after. <br><br>“...Okay.” Albert decided he would be truthful. He hoped Cynthia would as well, as he believed they were checking for their stories to match.<br><br>“Perfect.”<br><br>After what felt like hours, Albert finally finished his interrogation. It consisted of questions about his schedule, life history, and details about Rosebud. He was sent back to his holding cell where Cynthia was already sitting.<br><br>“What did they ask you about?” Cynthia asked and Albert explained. She nodded, saying they asked her the same questions. <br><br>“Alright.” The small lady walked up to their cell. “Our team has deemed the two of you to not directly be threats, but we still cannot permit you to leave this facility.”<br><br>Cynthia groaned.<br><br>“If you would allow me, I would like to learn more about this… Rosebud.”',
            choices: [
                ['Explain','explain']
            ]
        },
    
        explain: {
            text: '<br><br>Albert pondered what he should discuss with her. <br><br>“Well, Rosebud is an alien, who was localized by us as ‘Zorps’, is what we learned.” Albert began to speak.. “They’ve got four stalks with different personalities, and they have the ability to sprout limbs at will.”<br><br>Albert smiled at the woman and she had a serious look on her face.<br><br>“You said, ‘Zorps’, correct?”<br><br>Albert nodded at her.<br><br>“The aliens that came and caused the mass destruction all those decades ago?”<br><br>Albert felt his heart sink.<br><br>“What do you mean?” Cynthia asked her and crossed her arms.<br><br>The woman scoffed and leaned against the door of their cell, snickering lightly to herself. “Of course that thing wouldn’t really tell you the history of our war, how else would it leave?”<br><br>“Stop talking about Rosebud like he’s some… thing you play with”. Cynthia was getting angry now.<br><br>Mass destruction? Albert began to sweat. Did I say too much?<br><br>The woman walked away and both Albert and Cynthia sat on the floor, looking at each other.',
            choices: [
                ['Whoops', 'escapeStart']
            ]
        },
    
        escapeStart: {
            text: '<br><br>“Something tells me we’ve got no shot getting out of this place through… legal means.” Cynthia whispered to Albert and waved to their surroundings.<br><br>“I’m sorry for saying so much.” Albert frowned at Cynthia, regretting his words earlier. <br><br>She shook her head at him, “it wasn’t your fault. We didn’t know about some ‘mass destruction’, as she put it, which I’m suspicious of as it is. Rosebud never mentioned something like that, and they don’t seem like they’re in a position to leave out important details.”<br><br>Albert hummed in agreement and played with the hem of his shirt, thinking of what to say, “I think she might have overexaggerated her story.”',
            choices: [
                ['Examine room', 'examineRoom'], ['Sit and wait', 'sitWait'], ['Give up and cry', 'giveUpCry']
            ]
        },
    
        sitWait: {
            text: '<br><br>“Albert, there’s a vent at the top of the room. Looks like we could squeeze through it.” Cynthia pointed at a medium-sized vent cover at the top of the room that looked like it was moments away from disintegrating.<br><br>“How do we get up there?” Albert asked her.<br><br>“I’ll push you up there and you can pull me up after that.” She spoke as she moved towards it.<br><br>“Hey, what about the guard?” Albert whispered to her and the two of them looked over to the guard, fast asleep.<br><br>“...Nevermind.” Albert shook his head. <br><br>He moved to Cynthia, where she hoisted him up to the vent and he removed the cover. After he pushed his way in, he turned back around and pulled her up. Being a very spindly man, he had to use all of the strength in his body.<br><br>“It’s surprisingly roomy up here,” Cynthia grinned at him “now let’s get going.”<br><br>The two of them moved through the vents as quietly as possible in what is essentially a giant tin can. They passed over many rooms, some which smelled of coffee and others that seem to have been untouched for who knows how long. Eventually, they arrived at a fork between two vents.<br><br>“Great. Now we gotta make a choice that could determine if we live or die.”<br><br>Albert began to sweat at her words. Apparently, she felt this.<br><br>“Just kidding, Albert. We won’t die. Probably. Which way do you wanna try?”',
            choices: [
                ['Left', 'left'], ['Right', 'right']
            ]
        },
    
        examineRoom: {
            text: '<br><br>“Hey, Cynthia,” Albert whispered to her and poked her arm, getting her attention and pointing to a guard, “that guard there is pretty distracted.”<br><br>Cynthia hummed and nodded, “and?”<br><br>“And… we take his key.” Albert smiled strongly at her and she let out a drawn out ‘oh’, smiling back at him.<br><br>“Sometimes you’re a genius, Albert.” She patted him on the back.',
            choices: [
                ['Watch the guard and plan', 'planGuard'], ['Grab the key immediately', 'grabKeyFast']
            ]
        },
    
        giveUpCry: {
            text: '<br><br>While Albert sat in that cell and reconsidered the entire path of his life, his eyes began to water. Eventually, his body was being wracked with sobs and he couldn’t see clearly anymore.<br><br>“Dude, please don’t do this here. We gotta figure this out, for Rosebud.” Cynthia held his shoulders and tried to look him in the eyes, but his sobs only grew louder.<br><br>“I don’t want to!” He wailed and pushed himself away from her and went onto the cell bed, laying down and crying more.<br><br>“...wow.” Cynthia shook her head and left through a vent on the top of the wall after setting up a box to aid her.<br><br>Albert continued to cry for hours, only stopping when he was let out and had to go home. He only learned that the aliens had left a week later. Subsequently, he was fired.',
            choices: [
                ['Embarrassing ending.', 'restart']
            ]
        },
    
        left: {
            text: '<br><br>“Left it is,” Cynthia continued through the vent, checking for Albert’s presence behind her every few moments.<br><br>“…and I think that the thing is dangerous…” A voice sounded from one of the rooms. Albert listened again, trying to pinpoint which room the sound was coming from.<br><br>“Cynthia, wait!” Albert stopped her and she turned around, looking for a reason he stopped her.',
            choices: [
                []
            ]
        },
    
        right: {
            text: '<br><br>“Right-o,” Cynthia continued through the vent, checking for Albert’s presence behind her every few moments.<br><br>Both of them shuffled along until they were met with a dead-end. Albert peered ahead into the slits of the vent they were in front of, and had to hold back a gasp. He tapped on Cynthia’s arm and pointed into it. Her eyes widened out of shock.<br><br>Rosebud’s holding cell was directly beneath them.',
            choices: [
                ['Alert Rosebud','alertRosebud'], ['Keep moving', 'keepMove']
            ]
        },

        planGuard: {
            text: '<br><br>Thankfully, it was his time to go in only thirty minutes. Albert’s thin hands managed to reach through the bars fully and use the key, successfully opening the door of the cell. <br><br>“Shh…” Cynthia tiptoed out of the cell like a cartoon character, waving her hand for Albert to follow. Albert followed her and they entered a smaller room that looked like a janitor’s closet.<br><br>Cynthia let out a long sigh and finally relaxed her shoulders.',
            choices: [
                ['What now','whatNow']
            ]
        },
    
        grabKeyFast: {
            text: '<br><br>The moment Cynthia called him a genius, Albert reached out to grab the guard’s keys immediately. The guard had just finished a conversation with somebody, so he saw this as the prime moment.<br><br>“Hey, what are you doing?!” The guard shouted out as Albert’s hands missed his keys entirely and his fingers jabbed him in the side. <br><br>“Great going!” Cynthia snapped at him.<br><br>Albert turned beet red and began to sweat as the guard contacted somebody on his walkie talkie, saying the two of them would be taken to a higher security holding cell. A minute or two later, three more guards came in to escort them to their new cell.<br><br>“That was our last chance, Albert, and you blew it,” Cynthia’s stare felt like knives in his heart as they walked to their new cell.',
            choices: [
                ['Sad ending', 'restart']
            ]
        },
    
        whatNow: {
            text: '<br><br>“We don’t really know the layout of this place, do we?” Albert asked Cynthia and she shook her head.<br><br>“If only they gave us a free map when we got here!” Cynthia laughed and looked around the closet. “Well, we can’t stay here forever.”<br><br>“I think we can find a way out of here.”<br><br>“I have no other ideas so lead the way, Albert.”',
            choices: [
                ['Exit', 'exit']
            ]
        },
    
        exit: {
            text: '<br><br>“Albert, why are you leading me to the exit of this place?” Cynthia stopped walking behind him just before they went through the door.<br><br>“Er… I thought that we could let the government handle Rosebud?”<br><br>Cynthia deadpanned at him and started to turn around, “I’m not leaving without knowing that Rosebud is safe. You’re free to go if you wanna, but I’m not leaving.”<br><br>Albert stood in place and watched her walk away.',
            choices: [
                ['Albert leave with them','leave2'],['Albert decides to stay', 'stay']
            ]
        },
    
        leave2: {
            text: '<br><br>Albert groans and chooses to go straight home. He managed to slip through the security at the front gate by jumping a fence instead, and walked an hour towards the city to find a taxi cab. During this, red and blue lights began to flash behind the cab and Albert began to panic.<br><br>Why did I think I was just going to be allowed to walk away from that place? He was shaking now. The cab driver pulled the car over and rolled the window down. After a bit of discussion between the two, the officer opened the door to Albert’s side of the backseat.<br><br>“Albert, you are under arrest for attempting to escape from a government facility,” the officer explained. <br><br>He gets sentenced to five years of state prison for this. By the time he is released, Rosebud’s fate is unknown to him besides the fact that they are gone.',
            choices: [
                ['Bad ending.', 'restart']
            ]
        },
    
        stay: {
            text: '<br><br>Am I really just going to back out from this? After I got myself detained at a top secret facility? I can’t even leave if I wanted to. Plus I never felt so alive before. This is the best feeling I ever had. Albert crossed his arms and huffed, walking back into the building.<br><br>“Look what the cat dragged in,” Cynthia was leaning against the wall when Albert walked back inside. “I knew you couldn’t help it but come back. But I don’t blame you for hesitating.”<br><br>Albert awkwardly smiled and the two of them continued to sneak around, looking for any means of saving Rosebud.',
            choices: [
                ['Alarm','alarm']
            ]
        },
    
        alarm: {
            text: '<br><br>“Dangerous, yes, but extremely valuable. Think about the future of technology with this thing!” A man raised his voice at the group surrounding him. He was dressed entirely in military garb with not a thread out of place. <br><br>“Just gonna assume they mean Rosebud?” Cynthia whispered to Albert behind her.<br><br>“Probably. It sounds as though they have some plans to use Rosebud…” Albert sighed as they watched the man leave the room.',
            choices: [
                ['Enter the room,', 'enterRoom'],['Keep moving', 'moving']
            ]
        },
    
        enterRoom: {
            text: '<br><br>“Cynthia, we should check out that room for ourselves,” Albert spoke to her and she nodded, carefully removing the vent cover in front of them. After confirming once more that no people were inside the room, they dropped in.<br><br>“Jesus Christ, Albert, look at all of this,” Cynthia picked up a paper showcasing a device to force information out of Rosebud.<br><br>“If they have all of this written out, how long have they been planning to capture Rosebud? We only told them about this today,” Albert looked at the boards containing information they know about the alien race.<br><br>“I don’t know, but this file here seems really important,” Cynthia snagged it from the shelf it was sitting on and showed it to Albert. The stamped text on it read, ‘Top Secret: Alien Weapon Plans’.<br><br>Before Albert could respond, distant voices could be heard returning to the room. Albert and Cynthia quickly jumped back through the vent and crawled away.',
            choices: [
                ['Through the vents, again','vents']
            ]
        },

        vents: {
            text: '<br><br>During their trip through the vents, Albert could hear another conversation in the distance. Once again, they peered into the room to better hear them. “Our allies in France are starting to get antsy, General. If we don’t dispose of this thing or use it soon, they’re gonna rethink our partnership,” a stout man seemed to be barking at the large one“Do we have any means of contacting their leaders right now?” The general peered down at the man as he scrambled to set up an impromptu meeting. While Cynthia focused on their conversation, Albert began to look around the room. Against the right wall, he noticed a cherry-red button with a strange shape on the top of it. He assumed it was an image of an alien, as the stalks on it resembled Rosebud.“Come on, Albert. We aren’t getting anything out of this,” Cynthia began moving again.',
            choices: [
                []
            ]
        },

        alertRosebud: {
            text: '<br><br>“Psst! Rosebud!” Albert whisper-shouted to them and waved. Rosebud sprouted a tentacle and waved back.<br><br>“Hey!” A guard burst into the cell and looked into the vent, spotting Albert and Cynthia. Moments later, a blaring alarm began to sound.<br><br>“Nice job, dimwit!” Cynthia scuttered through the vent and quickly jumped into the first room they arrived at. It smelled like fresh coffee and sadness, it was a breakroom. <br><br>An employee stared at the two as he continued to chew his granola bar. Quickly, he reached for his walkie-talkie.',
            choices: [
                ['Jump on him', 'jump']
            ]
        },
        
        jump: {
            text: '<br><br>Letting out a primal scream, Albert jumped at the guard. Without touching him, the guard dropped to the floor from shock. Albert is surprised, but then smiles.<br><br>“Albert, I just got an idea. We need to strip him,” Cynthia began to pick the man up.<br><br>“Why?!” Albert recoiled.<br><br>“You two have almost the same exact body. If you put on his clothes and hide your hair with his hat, we might not get caught if you say you’re taking care of me. They’ll keep looking for you and we can get Rosebud out of here.”<br><br>Albert thought it over for a moment and tilted his head. He didn’t want to fully show it, but it was a brilliant idea.<br><br>Sorry, random dude. Albert thought as he stole his clothes.',
            choices: [
                ['Escort Cynthia', 'escort']
            ]
        },
        
        escort: {
            text: '<br><br>“Do you remember the way to Rosebud’s cell?” <br><br>Albert nodded and began to walk with Cynthia in that direction. On the way, they were stopped by another guard.<br><br>“You got her? Why didn’t you radio any of us?” He questioned Albert, looking to his waist for the object. “You ain’t even got it on you.”<br><br>“It… fell off. I couldn’t find it after I detained her.” Albert began to sweat hard, but hoped it didn’t show as bad as it felt.<br><br>“Hmm… Alright. Return her ASAP, General doesn’t want either of these chumps snooping around anymore.”<br><br>The guard walked away and Albert exhaled, not knowing that he was holding his breath. They continued walking towards Rosebud.',
            choices: [
                ['Conitnue walking', 'walk']
            ]
        },

        walk: {
            text: '<br><br>During the walk to Rosebud’s cell, the government had sent out a signal to Rosebud’s planet.  When it reaches the planet, the leader of his race is a bit hesitant toward it because he doesn’t know how one of his people is on another planet, let alone Earth.<br><br>“Impossible, this must be a joke,” the leader said loudly.<br><br>“Maybe one of the ships was attacked and was taken by one of the neighboring solar systems,” a worker said. Upon hearing this, the leader now arranges to take a whole army to the planet to see if it’s true.<br><br>When they make it to earth the leader says, “We are here because one of our own is being trapped on this disgusting planet, so return him or suffer the consequences.”',
            choices: [
                ['Conitnue walking', 'walk']
            ]
        },

        walk: {
            text: '<br><br>The government doesn’t take this threat lying down and uses the alien war weapons to start an all out war.<br><br>Cynthia says, “We can’t stop this, there’s too many of them.” <br><br>After being freed by one of his people, Rosebud tried to stop them from fighting but he died in the crossfire. Now the leader is even more fierce and puts out the weapons they have on Earth.<br><br>After a week into the war, the aliens have won and earth is in ruins.',
            choices: [
                ['Terrible ending', 'restart']
            ]
        },

        walk: {
            text: '<br><br>“Yeah, better off they don’t know we’re here,” Cynthia looked down at Rosebud pitifully. “Let’s keep moving.”<br><br>Albert and Cynthia kept moving through the vents until they arrived at a room whose vent covering was already gone. Dropping in, they realized it was a secluded room. Albert quietly celebrated behind Cynthia.',
            choices: [
                ['Look around', 'look']
            ]
        },

        look: {
            text: '<br><br>“I thought this was some kind of janitor’s closet, but look at these,” Cynthia showed Albert many files that were variously labeled with alien words.<br><br>Albert kept reading the contents in awe. This facility knew so much about these people, and it was all being withheld from the public. <br><br>“We keep seeing these files everywhere, why don’t we use them?” Albert suggested to her.',
            choices: [
                ['Assemble a plan', 'plan']
            ]
        },

        plan: {
            text: '<br><br>“So, we can blackmail these workers with their own information. Say we threaten to burn everything in here, do you think they’d buy it?” Cynthia asked.<br><br>Albert rubbed his chin with his hand and replied, “But we have nothing to burn things with?”<br><br>“They don’t know that, though, right? We’ve been out and about through their… poorly guarded facility… they don’t know whether or not we’ve been picking up tools.”<br><br>Albert let out an “oh” and nodded hard, “let’s do it then.”<br><br>Cynthia sighed and looked at the files in her hands and up at Albert. She gave him a tight hug before they stepped out of the room together, files in hand. By chance, the general was walking by at this moment. <br><br>“You two! Don’t move!” He shouted at them and grabbed his walkie-talkie to call for backup.',
            choices: [
                ['Let Cynthia say it', 'cynthiaSays'], ['Let Albert say it', 'albertSays']
            ]
        },

        cynthiaSays: {
            text: '<br><br>“How about you don’t move?! Look at what we have!” Cynthia threw the files at him and pointed to the closet behind them. Albert watched her outburst in shock.<br><br>“If you touch those files we’ll-”<br><br>“If you don’t let Rosebud return home we’re gonna burn that and everything you love down to the ground!” Cynthia was practically foaming at the mouth with her performance, and the general donned a nervous expression.<br><br>“Calm down!” The general put his hands up a bit, afraid of what Cynthia might do. “Alright, we’ll let it leave. Just don’t burn anything!”',
            choices: [
                ['Takes the blackmail', 'blackmail']
            ]
        },

        blackmail: {
            text: '<br><br>The government takes the blackmail and returns Rosebud to them.<br><br>“Also we expect no problem once Rosebud is sent home”, Cynthia said. Then they go to the alien landing area to take Rosebud home.<br><br>“Well this is it, this is goodbye”, Rosebud said tearfully,<br><br>“You help change our live Rosebud, we won’t forget that or you”, Albert said His alien ship comes in and says goodbye to Rosebud, and Albert and Cynthia return to their normal lives.',
            choices: [
                ['Sad Good ending', 'restart']
            ]
        },

        albertSays: {
            text: '<br><br>Albert tries to convince them but with his experience in public speaking he didn’t do so well.<br><br>Albert said nervously, “if you don’t give rosebud we’ll….we’ll…we’ll expose this to the world, these… files”, this doesn’t work and the government takes them to prison.<br><br>Now Rosebud remains in prison and is being experimented on, while Albert and Cynthia are just in state prison for 10 years.',
            choices: [
                ['Sad ending', 'restart']
            ]
        },
    }


function storyBuilder() {
    let string = ``;
    if (storage.length < 1) {
        return false;
    } else {
        for (part of storage) {
        string += `${storyElements[part].text}`;
        }
        return string;
    }
    }


function buttonBuilder() {
    let chapter = storyElements[storage[storage.length - 1]],
        choices = chapter.choices,
        choiceList = ``;
    
    if (choices.length > 0) {
        for (choice of choices) {
        choiceList += `<button data-dest='${choice[1]}' onclick='storyLoop(this.dataset.dest)'>${choice[0]}</button>`;
        }
    } else {
        choiceList = `<p>This story has concluded...</p> 
        <button onclick='reset()'>Click here to restart</button>`;
        let itsNotOver = false;
    }
    return choiceList;
    }

function storyLoop(choice) {
    if (!choice) {
    } else {
        storage.push(choice);
        console.log(storage);
    }

    let story = storyBuilder(),
        choices = buttonBuilder();

    storyContainer.innerHTML = story;
    buttonContainer.innerHTML = choices;

    if (itsNotOver) {
        return "The story goes on!";
      } else {
        return "This story is now over...";
      }
}

function reset() {
    itsNotOver = true;
    storage = [];
    storyLoop('start');
    return "The story has reset."
}
