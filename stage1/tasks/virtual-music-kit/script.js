// Virtual Piano Application
console.log('Virtual Piano initialized');
// Virtual Piano Application
class VirtualPiano {
    constructor() {
        this.appContainer = null;
        this.pianoContainer = null;
        this.init();
    }

    init() {
        this.createAppStructure();
        this.createPianoLayout();
    }

    createAppStructure() {
        // Create main app container
        this.appContainer = document.createElement('div');
        this.appContainer.className = 'app-container';
        
        // Create title
        const title = document.createElement('h1');
        title.textContent = 'Virtual Piano';
        title.className = 'piano-title';
        
        // Create piano container
        this.pianoContainer = document.createElement('div');
        this.pianoContainer.className = 'piano-container';
        
        // Append to app container
        this.appContainer.appendChild(title);
        this.appContainer.appendChild(this.pianoContainer);
        
        // Append to body
        document.body.appendChild(this.appContainer);
    }

    createPianoLayout() {
        // This will be implemented in the next step
        console.log('Piano layout ready for keys');
    }

    createPianoLayout() {
        const keysContainer = document.createElement('div');
        keysContainer.className = 'keys-container';
        
        // Create one octave of piano keys (C to B)
        const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const blackKeys = ['C#', 'D#', '', 'F#', 'G#', 'A#', ''];
        
        whiteKeys.forEach((note, index) => {
            const whiteKey = this.createKey('white', note, index);
            keysContainer.appendChild(whiteKey);
            
            // Create black key if it exists for this position
            if (blackKeys[index]) {
                const blackKey = this.createKey('black', blackKeys[index], index);
                keysContainer.appendChild(blackKey);
            }
        });
        
        this.pianoContainer.appendChild(keysContainer);
    }

    createKey(type, note, position) {
        const key = document.createElement('div');
        key.className = `piano-key ${type}-key`;
        key.dataset.note = note;
        key.dataset.type = type;
        
        // Add note label
        if (note) {
            const noteLabel = document.createElement('span');
            noteLabel.className = 'note-label';
            noteLabel.textContent = note;
            key.appendChild(noteLabel);
        }
        
        return key;
    }
}

// Initialize the piano when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VirtualPiano();
});