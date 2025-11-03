// Virtual Piano Application
console.log('Virtual Piano initialized');

class VirtualPiano {
    constructor() {
        this.appContainer = null;
        this.pianoContainer = null;
        this.sounds = {};
        this.keyboardMap = {
            'KeyA': 'C', 'KeyS': 'D', 'KeyD': 'E', 'KeyF': 'F',
            'KeyG': 'G', 'KeyH': 'A', 'KeyJ': 'B'
        };
        this.editingKey = null;
        this.editInput = null;
        this.activeKey = null; // Track currently active key to prevent multiple inputs
        this.init();
    }

    init() {
        this.createAppStructure();
        this.loadSounds();
        this.createPianoLayout();
        this.setupKeyboardListeners();
    }

    loadSounds() {
        const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        
        notes.forEach(note => {
            this.sounds[note] = new Audio(`sounds/${note.toLowerCase()}4.mp3`);
            this.sounds[note].load();
        });
    }

    setupKeyboardListeners() {
        document.addEventListener('keydown', (event) => {
            if (this.editingKey) {
                if (event.key === 'Escape' || /^[a-zA-Z]$/.test(event.key)) {
                    return;
                }
                event.preventDefault();
                return;
            }

            // Prevent multiple key processing
            if (this.activeKey) {
                event.preventDefault();
                return;
            }

            if (this.keyboardMap[event.code]) {
                event.preventDefault();
                this.handleKeyPress(this.keyboardMap[event.code]);
            }
        });

        document.addEventListener('keyup', (event) => {
            if (this.editingKey) return;

            if (this.keyboardMap[event.code]) {
                this.handleKeyRelease(this.keyboardMap[event.code]);
            }
        });

        // Handle keyboard layout independence - listen for keypress to catch actual character
        document.addEventListener('keypress', (event) => {
            if (this.editingKey) return;
            
            // Convert any keyboard layout to uppercase English letter
            const key = event.key.toUpperCase();
            if (/^[A-Z]$/.test(key)) {
                // Find if this character corresponds to any mapped key
                const keyCode = `Key${key}`;
                if (this.keyboardMap[keyCode] && !this.activeKey) {
                    event.preventDefault();
                    this.handleKeyPress(this.keyboardMap[keyCode]);
                }
            }
        });
    }

    handleKeyPress(note) {
        // Only process if no other key is active
        if (this.activeKey) return;
        
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (keyElement) {
            this.activeKey = note;
            this.pressKey(keyElement);
        }
    }

    handleKeyRelease(note) {
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (keyElement && this.activeKey === note) {
            this.releaseKey(keyElement);
            this.activeKey = null;
        }
    }

    createAppStructure() {
        this.appContainer = document.createElement('div');
        this.appContainer.className = 'app-container';
        
        const title = document.createElement('h1');
        title.textContent = 'Virtual Piano';
        title.className = 'piano-title';
        
        const instructions = document.createElement('div');
        instructions.className = 'instructions';
        instructions.innerHTML = `
            <p>Click the keys or use your keyboard:</p>
            <div class="keyboard-keys">
                <span>A</span><span>S</span><span>D</span><span>F</span><span>G</span><span>H</span><span>J</span>
            </div>
            <p class="edit-instruction">Click the edit button (✎) on any key to change its keyboard assignment</p>
            <p class="feature-info">• Single key processing • Keyboard layout independent • No sound overlap</p>
        `;
        
        this.pianoContainer = document.createElement('div');
        this.pianoContainer.className = 'piano-container';
        
        this.editInput = this.createEditInput();
        
        this.appContainer.appendChild(title);
        this.appContainer.appendChild(instructions);
        this.appContainer.appendChild(this.pianoContainer);
        this.appContainer.appendChild(this.editInput.container);
        
        document.body.appendChild(this.appContainer);
    }

    createEditInput() {
        const container = document.createElement('div');
        container.className = 'edit-input-container';
        container.style.display = 'none';
        
        const label = document.createElement('span');
        label.textContent = 'Assign new key for: ';
        label.className = 'edit-label';
        
        const noteDisplay = document.createElement('span');
        noteDisplay.className = 'edit-note-display';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'edit-key-input';
        input.placeholder = 'Press a key...';
        
        const instruction = document.createElement('div');
        instruction.className = 'edit-instruction';
        instruction.textContent = 'Press Enter to confirm or click outside to cancel';
        
        container.appendChild(label);
        container.appendChild(noteDisplay);
        container.appendChild(input);
        container.appendChild(instruction);
        
        return {
            container,
            noteDisplay,
            input
        };
    }

    createPianoLayout() {
        const keysContainer = document.createElement('div');
        keysContainer.className = 'keys-container';
        
        const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const blackKeys = ['C#', 'D#', '', 'F#', 'G#', 'A#', ''];
        
        whiteKeys.forEach((note, index) => {
            const whiteKey = this.createKey('white', note, index);
            keysContainer.appendChild(whiteKey);
            
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
        
        if (note) {
            const noteLabel = document.createElement('span');
            noteLabel.className = 'note-label';
            noteLabel.textContent = note;
            key.appendChild(noteLabel);
            
            const keyboardLabel = document.createElement('span');
            keyboardLabel.className = 'keyboard-label';
            
            const keyboardKey = Object.keys(this.keyboardMap).find(
                keyCode => this.keyboardMap[keyCode] === note
            );
            
            if (keyboardKey) {
                keyboardLabel.textContent = keyboardKey.replace('Key', '');
                key.appendChild(keyboardLabel);
            }
            
            const editButton = document.createElement('button');
            editButton.className = 'edit-button';
            editButton.textContent = '✎';
            editButton.title = 'Change keyboard assignment';
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.startEditing(note, key);
            });
            key.appendChild(editButton);
        }
        
        this.addKeyInteractions(key);
        
        return key;
    }

    addKeyInteractions(key) {
        // Mouse events with single-key processing
        key.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (!this.activeKey) {
                this.pressKey(key);
            }
        });
        
        key.addEventListener('mouseup', () => {
            if (this.activeKey === key.dataset.note) {
                this.releaseKey(key);
            }
        });
        
        key.addEventListener('mouseleave', () => {
            if (this.activeKey === key.dataset.note) {
                this.releaseKey(key);
            }
        });
        
        // Touch events with single-key processing
        key.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!this.activeKey) {
                this.pressKey(key);
            }
        });
        
        key.addEventListener('touchend', () => {
            if (this.activeKey === key.dataset.note) {
                this.releaseKey(key);
            }
        });
    }

    pressKey(key) {
        const note = key.dataset.note;
        
        // Set active key and update visual state
        this.activeKey = note;
        key.classList.add('key-pressed');
        
        // Play sound exactly once
        if (this.sounds[note]) {
            // Stop and reset the sound to ensure it plays from beginning
            this.sounds[note].pause();
            this.sounds[note].currentTime = 0;
            
            // Play the sound with error handling
            this.sounds[note].play().catch(error => {
                console.warn(`Could not play sound for note ${note}:`, error);
            });
        }
        
        console.log(`Playing note: ${note}`);
    }

    releaseKey(key) {
        const note = key.dataset.note;
        
        // Only release if this is the currently active key
        if (this.activeKey === note) {
            key.classList.remove('key-pressed');
            this.activeKey = null;
        }
    }

    startEditing(note, keyElement) {
        // Don't allow editing while a key is active
        if (this.activeKey) {
            console.log('Cannot edit while a key is active');
            return;
        }
        
        this.editingKey = note;
        
        this.editInput.noteDisplay.textContent = note;
        this.editInput.input.value = '';
        this.editInput.container.style.display = 'block';
        
        this.editInput.input.focus();
        
        this.setupEditInputListeners();
        
        keyElement.classList.add('key-editing');
    }

    setupEditInputListeners() {
        const handleInput = (e) => {
            if (e.key === 'Enter') {
                this.confirmEdit();
            } else if (e.key === 'Escape') {
                this.cancelEdit();
            } else if (e.type === 'input') {
                this.editInput.input.value = this.editInput.input.value.replace(/[^a-zA-Z]/g, '');
            }
        };

        const handleBlur = () => {
            setTimeout(() => {
                this.cancelEdit();
            }, 100);
        };

        this.editInput.input.removeEventListener('keydown', handleInput);
        this.editInput.input.removeEventListener('input', handleInput);
        this.editInput.input.removeEventListener('blur', handleBlur);

        this.editInput.input.addEventListener('keydown', handleInput);
        this.editInput.input.addEventListener('input', handleInput);
        this.editInput.input.addEventListener('blur', handleBlur);
    }

    confirmEdit() {
        const newKey = this.editInput.input.value.toUpperCase();
        
        if (!newKey) {
            this.cancelEdit();
            return;
        }

        if (!/^[A-Z]$/.test(newKey)) {
            this.showEditError('Please enter a single letter (A-Z)');
            return;
        }

        const keyCode = `Key${newKey}`;
        const existingNote = this.keyboardMap[keyCode];
        
        if (existingNote && existingNote !== this.editingKey) {
            this.showEditError(`Key "${newKey}" is already assigned to note "${existingNote}"`);
            return;
        }

        this.updateKeyAssignment(this.editingKey, keyCode);
        this.showEditSuccess(`Note ${this.editingKey} is now assigned to key "${newKey}"`);
        this.cancelEdit();
    }

    cancelEdit() {
        this.editInput.container.style.display = 'none';
        this.editInput.input.value = '';
        
        document.querySelectorAll('.key-editing').forEach(key => {
            key.classList.remove('key-editing');
        });
        
        this.editingKey = null;
    }

    updateKeyAssignment(note, newKeyCode) {
        const oldKeyCode = Object.keys(this.keyboardMap).find(
            key => this.keyboardMap[key] === note
        );
        
        if (oldKeyCode) {
            delete this.keyboardMap[oldKeyCode];
        }
        this.keyboardMap[newKeyCode] = note;
        
        this.updateKeyboardLabel(note, newKeyCode);
        
        console.log(`Updated ${note} to key: ${newKeyCode.replace('Key', '')}`);
    }

    updateKeyboardLabel(note, keyCode) {
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (!keyElement) return;
        
        const keyboardLabel = keyElement.querySelector('.keyboard-label');
        if (keyboardLabel) {
            keyboardLabel.textContent = keyCode.replace('Key', '');
        }
    }

    showEditError(message) {
        const existingError = this.editInput.container.querySelector('.edit-error');
        if (existingError) {
            existingError.remove();
        }

        const error = document.createElement('div');
        error.className = 'edit-error';
        error.textContent = message;
        error.style.color = '#f44336';
        error.style.marginTop = '8px';
        error.style.fontSize = '0.9rem';

        this.editInput.container.appendChild(error);
        this.editInput.input.focus();
        
        setTimeout(() => {
            if (error.parentNode) {
                error.remove();
            }
        }, 3000);
    }

    showEditSuccess(message) {
        const success = document.createElement('div');
        success.className = 'edit-success';
        success.textContent = message;
        success.style.color = '#4caf50';
        success.style.marginTop = '8px';
        success.style.fontSize = '0.9rem';
        success.style.textAlign = 'center';

        this.editInput.container.parentNode.insertBefore(success, this.editInput.container);
        
        setTimeout(() => {
            if (success.parentNode) {
                success.remove();
            }
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new VirtualPiano();
});