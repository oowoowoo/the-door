window.onload = function(){

//im just figuring things out over here
//the function for the text is going to have to use inner.html stuff 

    const story = {
        intro:{
            text: 'Test Tubes and Thermometers, Inc. was a seemingly ordinary science supply company, yet it was anything but. Albert Average, a run-of-the-mill office worker with an innate thirst for knowledge, has hopes to soon uncover the secrets of his own workplace. He is a lanky man with a strange smile, often adorned with ill-fitting business clothes, and light-brown stiff hair that never has a strand out of place. Because of his unusual presence, Albert is not highly favored in his workplace by his coworkers. Since almost the entire office decided not to be his friend, the thoughts of what could be hidden in the janitor’s closet were the only thing that had plagued his mind. His boss explained on his first day that the janitor’s closet was strictly off-limits to any employees besides himself',
            choices: [
                ['Sneak into the closet', 'sneakFail'], ['Keep working', 'sneakFail'],
            ],
        },
        
        sneakFail: {
            text: 'Albert’s curiosity continues to edge him towards breaking the rules and entering that closet, but his need for employment and fear is what stops him. If he were to lose this job, he would be losing his only source of income. Many would assume that Albert would be thankful to leave this dead-end job and pursue a career in criminal investigation, but he would insist that it was always his dream to work in a small office and market science tools, surrounded by people who don’t like him. Instead, he turns his attention back to his computer and resumes work.',
            choices: [
                ['Continue working', 'work'],
            ],
        },
        
        work: {
            text: '"Albert, Boss asked for those files from Thursday, do you have them?" The receptionist made her way over to Albert’s desk, looking to him for an answer. Cynthia Stone has been working for the company for about six years, receiving many awards for her receptionist work during that time. Her thick black hair had a soft shine, and was styled into a bob. She often wore business casual clothing with some kind of goth twist, today she donned a suit entirely in black. Cynthia is known to Albert as the only person who treats him half-kindly, and the only accessible person who has knowledge of the closet. After a night of overtime, he spotted her creeping out of the closet very quickly. He had not ever questioned her about this, fearing that it would lose him his job. Today, though, he decided it was the perfect time to bring up such a topic.',
            choices: [
                ['Ask Cynthia what she knows','info'],
            ],
        },

        info: {
            text: '“Yes, right here…” Albert opened the drawer on his desk containing the files she asked for. Before handing them to her, he looked into her eyes and asked her, “what do you know about that janitor closet, Cynthia?” Her eyes widened for a moment, before she smiled and stared at him. She reached for a pad of sticky notes atop his desk and quickly scribbled something down, then peeled off and handed the sticky note to him. It read: Something’s being hidden in that closet, something that isn’t really human but not an animal. If you really wanna know more about it, meet me in the parking lot once we get off our shifts. I’ll be near my car. Boss can’t be here when we do this. Albert looked up to her and she smiled, beginning to walk away.“That’s your next appointment, remember to not be late!” She sat back at her desk and the two of them continued their work like nothing happened.',
            choices: [
                ['Sneak into the closet right away','sneakCloset'], ['Ask to know more', 'askMore']
            ],
        },
        
        sneakCloset: {
            text: 'Albert started thinking about the closet and nearly fell out of his seat from excitement. Something non-human, and it was only thirty feet away from him. Not even glancing over to Cynthia, he sprung up from his seat and made his way to the closet. Moments before he was able to latch onto the door handle and pull it open, Cynthia grabbed him by the collar of his shirt and pulled him to a hallway. “Are you insane?! Why would you go in there right away? Didn’t I just tell you to meet me after work?!” Cynthia scolded him, still gripping his collar. She groaned and peered back into the office, scanning the area. “You’re so lucky Boss is in a meeting, he’d have had you fired, or worse. Plus, this door’s got a lock on it anyway.Albert gulped and began to sweat more than he already was. He wasn’t very intent on finding out what that last statement about their boss meant. He reached up and peeled her hand off of his collar, avoiding the fiery look in her eyes. Cynthia composed herself and muttered to him, “don’t follow me out right away, pretend to use the restroom or something. He sighed and did as he was told, returning to his desk a few minutes later',
            choices: [
                ['Continue working', 'work']
            ]
        },
        work: {
            text: 'Eager to know more, Albert quietly rose from his seat and moved to Cynthia’s desk. She sighed and looked up at him, anticipating his question.“Are you able to tell me anything right now?” He had a soft smile on his face, hoping to learn more before he committed himself to seeing the closet. “Er…” Cynthia glanced over to Boss’s office, checking for his eagle eyes “not really. Everything I could say was on that note… I’m scared that anything else will get you too antsy.” Albert’s shoulders dropped and his smile faltered for a moment, but it rose again when he nodded goodbye and returned to his desk. He really had to wait until five P.M.',
            choices: [
                ['Continue working', 'work']
            ]
        },
        work: {
            text: 'Although he was nervous, Albert was excited to learn the secret of the closet. Finally, after about three years of waiting and wondering, he was going to know. It’s a feat that the company was able to keep this secret under wraps for so long, only now allowing a new person into the mix. Maybe it was a good thing that he had no friends, considering he would now have nobody to run to with whatever information was in this closet.',
            choices: [
                ['Continue working', 'work']
            ]
        },
        work: {
            text: 'During his work, Albert could feel a strange sensation at the nape of his neck. He had hoped to play it off as nerves, or maybe the thrill of new prospects, but this was an all too familiar feeling. The feeling of somebody watching him, boring their eyes into his back',
            choices: [
                ['Turn around', 'turn'], ['Dont turn around', 'turn']
            ]
        },
        turn: {
            text: 'Slowly, Albert began to turn his head towards the only thing behind him– the closet itself. The area was a bit dim because of some lightbulbs having burnt out, but Albert caught a glimpse of a shiny figure retreating into the closet from the top of the door, sealing it with a click. Instantly, he broke out in what felt like a flood of sweat. Why was something actually looking at me?!',
            choices: [
                ['Finish work with an anxious feeling', 'finished']
            ]
        },
        finished:  {
            text: 'Opting to ignore the feeling, Albert turned back to his files and continued his work. All the way to five o’ clock, the feeling did not subside. He was on edge the entire time, but managed to finish what he needed to anyway.',
            choices: [
                ['Finish work in ignorant bliss', 'finished']
            ]
        },
        finished: {
            text: 'Leaning back into his chair with a sigh, Albert pushed away from his desk and stood up to stretch. After tidying up his desk one last time, he gathered his belongings and made his way to the parking lot.I still don’t know what to expect. I’m nervous, but excited, but super nervous… like, really nervous. Gosh. His thoughts raced as he rode the elevator to the first floor. The receptionist that worked on the first floor had left the second he was able, so it was just Albert. By the time he had wandered around, played some meaningless games on his phone, and replied to some emails, about half an hour had passed.  It was time for him to really meet with Cynthia. He took a deep breath and left to the parking lot.',
            choices: [
                ['Ask Cynthia for more info', 'ask'], ['Tell Cynthia you are ready', 'tell'], ['Change your mind and leave','leave']
            ]
        },
    }
  
} //do not put js after this tag