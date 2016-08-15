'use strict';
var Alexa = require('alexa-sdk');
var appId = require('config');

var APP_ID = appId; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = '3 Minute Hero lyric of the day';

/**
 * Array containing song lyrics.
 */
var LYRICS = [
    "From the song, Hook Hole, off the album F Minus Uncollected Works... run run away from your problems, skip and jump from responsibility, learn to love sweet futility, protect yourself from your ability",
    "From the song, Jelly Donut, off the album Everyday Ninjas... Gotta get me some of that Jelly Donut?",
    "From the song, Happy, off the album F Minus Uncollected Works...We're so happy we're going to pee in your pants!",
    "From the song, Spider Monkey, off the album F Minus Uncollected Works...pumping gasoline for fruit filled pies!",
    "From the song, Mean Man, off the album Everyday Ninjas...If you ever find your gift, think before you use it well!",
    "From the song, Geeks on Bikes, off the album Bingo...we drive down main to the Dairy Queen, always in single file, and the fun piles up behind us yeah, mile after mile!",
    "From the song, Robot Factory, off the album Operation Brownstar...You sleep and you dream of a robot factory, the tenth dimension egg shaped universe you no longer see",
    "From the song, Too Much Wine, off the album Operation Brownstar...Too much wine will get you in trouble, too much wine will make you see double",
    "From the song, Big Porch, off the album Everyday Ninjas...When I finally get my house its gonna have a big big porch, with a hardwood floor and a loud swing door and a bug zapper like a welding torch",
    "From the song, Babbit, off the album Bingo...grey slacks, grey shirt, grey tie grey all around, livin in a corporate shanty town",
    "From the song, Parking Lot, off the album Bingo... everybody's bothered, everbody's hot, gotta party in the parking lot",
    "From the song, Bathroom Graffiti, off the album Everyday Ninjas...the truth is right there, so bare down and stare, the truth of bathroom graffiti",
    "From the song, Las Vegas, off the album F Minus Uncollected Works...I'm plowing up earth, I'm gonna melt steel, I'm gonna build where no one else will. I'll take the blackest hours and turn them into light, I'm gonna take tomorrow and make it tonight",
    "From the song, Little Dog, off the album F Minus Uncollected Works...I will do what the little dog tells me to do, I will say what the little dog tells me to day, with him behind me, I'm no longer afraid",
    "From the song, Love Special, off the album F Minus Uncollected Works...we take our shoes off",
    "From the song, Wish I was Single, off the album Operation Brownstar...just two short months ago, hanging at the grocery store, met a gorgeous girl whos plans for me I'd never know",
    "From the song, Spies, off the album Operation Brownstar...twilight is the dawn of my new day, the microfilm is safely stowed away, and so I aim my watch up at the satellites",
    "From the song, Firefly, off the upcoming album Jumbojet Whispers and Thunder Lizard Serenades...jumbojet whispers and thunder lizard serenades and other things that chase away the blues, like sitting on my couch watching dog the bounty hunter, trying to get through yesterday without the pills and booze",
    "From the song, Crazy Uncle, off the upcoming album Jumbojet Whispers and Thunder Lizard Serenades...he's mixing margaritas, its not even noon, its not even eleven, but it will be soon",
    "From the song, Brown Flamingos, off the upcoming album Jumbojet Whispers and Thunder Lizard Serenades...permanent flip flop tan lines are a sign youre doing something right, you're screws are not too loose, your screws are not too tight",
    "From the song, Ice Cream, off the upcoming album Jumbojet Whispers and Thunder Lizard Serenades...It's so hot I'm gonna bleed tobasco, its so hot I'm pissing sand"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetLyric');
    },
    'GetNewLyricIntent': function () {
        this.emit('GetLyric');
    },
    'GetLyric': function () {
        // Get a random song lyric from the song lyrics list
        var lyricIndex = Math.floor(Math.random() * LYRICS.length);
        var randomLyric = LYRICS[lyricIndex];

        // Create speech output
        var speechOutput = "Here's your song lyric: " + randomLyric;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomLyric)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a lyric from a 3 Minute Hero song, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
