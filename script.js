document.addEventListener('DOMContentLoaded', () => {
    const bear = document.querySelector('.bear');
    const cloud = document.querySelector('.cloud');
    const cup = document.querySelector('.cup');
    const pillow = document.querySelector('.pillow');
    const book = document.querySelector('.book');
    const soundEffect = document.getElementById('soundEffect');
    
    // Messages in English
    const messages = [
        "You're the best! ❤️",
        "I appreciate you! 💕",
        "Smile! 😊",
        "You're sunshine! ☀️",
        "Hugs! 🤗",
        "You can do it! 💪",
        "I'm always with you! 🌈",
        "You're wonderful! ✨",
        "I'm proud of you! 🏆",
        "Kisses! 💋",
        "Cris the best!!!",
        "You are special to me! 💖"
    ];
    
    const cupMessages = [
        "Tea with love! 🍵",
        "Warming you up! 🔥",
        "Drink slowly! 😌"
    ];
    
    const pillowMessages = [
        "Sweet dreams! 🌙",
        "Rest wellll! 😴",
        "Sleep tight! 🛏️"
    ];
    
    const bookMessages = [
        "You are so smart! 📚",
        "Interesting story? 🤓",
        "Lets read together! 💑"
    ];
    
    function showMessage(text) {
        cloud.textContent = text;
        cloud.classList.add('visible');
        
        setTimeout(() => {
            cloud.classList.remove('visible');
        }, 3000);
    }
    
    function playSound(type) {
        const sounds = {
            jump: "sounds/jump.mp3",
            drink: "sounds/drink.mp3",
            sleep: "sounds/sleep.mp3",
            read: "sounds/page.mp3"
        };
        
        soundEffect.src = sounds[type] || "";
        soundEffect.play().catch(e => console.log("Sound not played:", e));
    }
    
    // Bear click
    bear.addEventListener('click', () => {
        bear.classList.add('jump');
        playSound('jump');
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        showMessage(randomMessage);
        
        setTimeout(() => {
            bear.classList.remove('jump');
        }, 800);
    });
    
    // Cup click
    cup.addEventListener('click', () => {
        bear.classList.add('drink');
        playSound('drink');
        const randomMessage = cupMessages[Math.floor(Math.random() * cupMessages.length)];
        showMessage(randomMessage);
        
        setTimeout(() => {
            bear.classList.remove('drink');
        }, 1500);
    });
    
    // Pillow click
    pillow.addEventListener('click', () => {
        bear.classList.add('sleep');
        playSound('sleep');
        const randomMessage = pillowMessages[Math.floor(Math.random() * pillowMessages.length)];
        showMessage(randomMessage);
        
        setTimeout(() => {
            bear.classList.remove('sleep');
        }, 2000);
    });
    
    // Book click
    book.addEventListener('click', () => {
        bear.classList.add('read');
        playSound('read');
        const randomMessage = bookMessages[Math.floor(Math.random() * bookMessages.length)];
        showMessage(randomMessage);
        
        setTimeout(() => {
            bear.classList.remove('read');
        }, 1200);
    });
});
