const isBossValid = require('./helpers').isBossValid;
const megamanBosses = [
    {
        id: 1,
        name: 'Cut Man',
        description: 'Cut Man has been known to be highly well-aware of his surroundings and is very cunning. He is also very stubborn and has a tendency to not listen to others. He likes kirie and haircuts, and has been known to be extremely bad at the game rock-paper-scissors.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/2/22/Cutman.png'
    },
    {
        id: 2,
        name: 'Guts Man',
        description: 'Guts Man possesses great physical strength, being capable of lifting and transporting heavy objects, including rocks of over two tons, with little effort. In battle, he can use his Super Arm to throw heavy objects, such as boulders and blocks, at his enemies. He can also use his strength to hit his enemies with a powerful tackle, and make the ground shake with his jumps.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/6/60/Gutsman.png'
    },
    {
        id: 3,
        name: 'Ice Man',
        description: 'Ice Man has been known to love showing off for crowds of people and can be known to be sometimes very self-centered, but he cares deeply for his friends. As his namesake he loves participating in activities revolving around snow, like snowball fights. Ice Man has been known to have a dislike of heat-related things, such as sauna baths and ironically enough, the Fire Storm.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/0/03/Iceman.png'
    },
    {
        id: 4,
        name: 'Bomb Man',
        description: 'Bomb Man\'s personality depicts him to be that of a teenager (possibly a nod to his mohawk). He enjoys fighting and is an expert in demolitions, being able to quickly create and throw Hyper Bombs with startling accuracy, capable of destroying most targets with ease. However, he also enjoys firework displays, festivals, and ten-pin bowling. He is also a daredevil and his attitude depicts it, but he can be a bit wasteful on money and his bombs and has a dislike for a match or lighter, possibly a relation to his weakness, the Fire Storm. Bomb Man is a playable character in both Mega Man Powered Up and Mega Man\'s Soccer.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/1/19/Bombman.png'
    },
    {
        id: 5,
        name: 'Fire Man',
        description: 'A hot-blooded and charismatic, albeit hot-tempered individual, Fire Man sees himself as something of a hero, obsessed with fire and the ideals of justice, often referring to himself as the "Flame of Justice". He enjoys camping in the summer, but has a particular dislike for rainy days and the cold, particularly from his weakness, the Ice Slasher.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/0/04/Fireman.png'
    },
    {
        id: 6,
        name: 'Elec Man',
        description: 'In terms of personality, Elec Man is conceited and egotistical, with something of a sadistic streak in him (which is especially present in Mega Man Powered Up), but is otherwise very responsible, smart and competent. In his spare time, he has taken up playing the electric guitar while singing. Fitting for his motif, he also despises products made of rubber.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/2/26/Elecman.png'
    },
    {
        id: 7,
        name: 'Bubble Man',
        description: 'Bubble Man attacks with normal shots from a cannon on his right arm, and can fire his Special Weapon, the Bubble Lead, from both the aforementioned arm cannon and a special Bubble Gun on top of his head. Bubble Man can utilise the bubbles for several different purposes, including hitting opponents with bursts of small bubbles and blowing larger and more durable bubbles to either wrap opponents inside to trap them temporarily, or for Bubble Man himself to hide in as a shield.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/d/d7/Bubbleman.png'
    },
    {
        id: 8,
        name: 'Flash Man',
        description: 'In combat, Flash Man can stop time to immobilize his opponents, before attacking them mercilessly with rapid barrages of shots from his buster while they cannot move. To his enemies, Flash Man appears to be moving at light speed or teleporting. It is believed that this ability is a perfected form of what the later-introduced Time Man was capable of- because unlike Time Man, who could only slow down time with Time Slow, Flash Man can stop it completely.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/9/9d/Flashman.png'
    },
    {
        id: 9,
        name: 'Metal Man',
        description: 'Whilst Metal Man is a quick and efficient worker, he possesses a dry wit, having something of a reputation amongst his colleagues for being sarcastic and often untrustworthy. Directly relating to his skill with throwing his Blades, he enjoys playing with Frisbees in his spare time, but dislikes it when dogs get in his way by catching them. When Dr. Light saw Metal Man for the first time, he remarked that he was "the dentist of the future".',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/d/d0/CW-09-MetalMan-Art.jpg'
    },
    {
        id: 10,
        name: 'Gemini Man',
        description: 'Gemini Man is an elegant fighter who is confident in his abilities, but is rather conceited. He is a narcissist, and likes to admire himself in a mirror or with one of his copies. Gemini Man also has a hatred and fear of snakes, mainly because his weakness is the Search Snake.',
        img: 'https://vignette.wikia.nocookie.net/megaman/images/6/65/Geminiman.png'
    }
]

const setupRoutes = router => {
    router.get('/bosses', (req, res) => {
        return res.json(megamanBosses);
    });
    router.get('/bosses/:id', (req, res) => {
        const boss = megamanBosses.find(mb => mb.id == req.params.id);
        if (!boss) { return res.sendStatus(404); }
        return res.json(boss);
    });
    router.patch('/bosses/:id', (req, res) => {
        const { name, description, img } = req.body;
        const boss = megamanBosses.find(mb => mb.id == req.params.id);
        if (!boss) { return res.sendStatus(404); }

        // Update properties
        if (name) { boss.name = name; }
        if (description) { boss.description = description; }
        if (img) { boss.img = img; }

        return res.sendStatus(204);
    });
    router.post('/bosses', (req, res) => {
        const { name, description, img } = req.body;
        if (!isBossValid(name, description, img)) { return res.sendStatus(400); }

        const newBoss = req.body;
        newBoss.id = megamanBosses.length + 1;

        megamanBosses.push(newBoss);

        return res.status(201).json({ id: newBoss.id });
    });
    router.delete('/bosses/:id', (req, res) => {
        const boss = megamanBosses.find(mb => mb.id == req.params.id);
        if (!boss) { return res.sendStatus(404); }
        const idx = megamanBosses.indexOf(boss);
        megamanBosses.splice(idx, 1);

        return res.sendStatus(204);
    });
};

module.exports = setupRoutes;
