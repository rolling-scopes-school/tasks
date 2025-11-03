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
        this.activeKey = null;
        this.sequenceInput = null;
        this.playButton = null;
        this.maxSequenceLength = 14; // 7 sounds * 2
        this.isPlayingSequence = false;
        this.playbackDelay = 400; // ms between notes
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

            // Don't process piano keys when sequence input is focused or during playback
            if (document.activeElement === this.sequenceInput.input || this.isPlayingSequence) {
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

        // Handle keyboard layout independence
        document.addEventListener('keypress', (event) => {
            if (this.editingKey || this.isPlayingSequence) return;
            
            // Don't process piano keys when sequence input is focused
            if (document.activeElement === this.sequenceInput.input) {
                return;
            }
            
            const key = event.key.toUpperCase();
            if (/^[A-Z]$/.test(key)) {
                const keyCode = `Key${key}`;
                if (this.keyboardMap[keyCode] && !this.activeKey) {
                    event.preventDefault();
                    this.handleKeyPress(this.keyboardMap[keyCode]);
                }
            }
        });
    }

    handleKeyPress(note) {
        if (this.activeKey || this.isPlayingSequence) return;
        
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
            <p class="feature-info">• Single key processing • Keyboard layout independent • No sound overlap • Sequence playback</p>
        `;
        
        this.pianoContainer = document.createElement('div');
        this.pianoContainer.className = 'piano-container';
        
        // Create sequence input
        this.sequenceInput = this.createSequenceInput();
        
        this.editInput = this.createEditInput();
        
        this.appContainer.appendChild(title);
        this.appContainer.appendChild(instructions);
        this.appContainer.appendChild(this.sequenceInput.container);
        this.appContainer.appendChild(this.pianoContainer);
        this.appContainer.appendChild(this.editInput.container);
        
        document.body.appendChild(this.appContainer);
    }

    createSequenceInput() {
        const container = document.createElement('div');
        container.className = 'sequence-input-container';
        
        const label = document.createElement('label');
        label.textContent = 'Type a sequence to play (max 14 characters):';
        label.className = 'sequence-label';
        label.htmlFor = 'sequence-input';
        
        const inputContainer = document.createElement('div');
        inputContainer.className = 'sequence-input-wrapper';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'sequence-input';
        input.className = 'sequence-input';
        input.placeholder = 'Example: ASDFG or asdfg';
        input.maxLength = this.maxSequenceLength;
        
        const charCount = document.createElement('div');
        charCount.className = 'char-count';
        charCount.textContent = `0/${this.maxSequenceLength}`;
        
        // Create play button
        this.playButton = document.createElement('button');
        this.playButton.className = 'play-button';
        this.playButton.innerHTML = '▶ Play Sequence';
        this.playButton.disabled = true;
        
        const instruction = document.createElement('div');
        instruction.className = 'sequence-instruction';
        instruction.textContent = 'Only letters A,S,D,F,G,H,J are allowed (case insensitive)';
        
        // Get current allowed keys for the instruction
        this.updateSequenceInstruction(instruction);
        
        inputContainer.appendChild(input);
        inputContainer.appendChild(charCount);
        
        container.appendChild(label);
        container.appendChild(inputContainer);
        container.appendChild(this.playButton);
        container.appendChild(instruction);
        
        // Setup input validation
        this.setupSequenceInputValidation(input, charCount);
        
        // Setup play button functionality
        this.setupPlayButton();
        
        return {
            container,
            input,
            charCount,
            instruction
        };
    }

    setupSequenceInputValidation(input, charCount) {
        input.addEventListener('input', (e) => {
            let value = e.target.value.toUpperCase();
            
            // Filter out invalid characters - only allow assigned keys
            const allowedKeys = this.getAllowedSequenceKeys();
            const filteredValue = value.split('').filter(char => 
                allowedKeys.includes(char)
            ).join('');
            
            // Update the input value with filtered characters
            if (value !== filteredValue) {
                input.value = filteredValue;
                value = filteredValue;
            }
            
            // Update character count
            charCount.textContent = `${value.length}/${this.maxSequenceLength}`;
            
            // Update play button state
            this.playButton.disabled = value.length === 0 || this.isPlayingSequence;
            
            // Visual feedback
            if (value.length > 0) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
            
            // Update instruction with current allowed keys
            this.updateSequenceInstruction(this.sequenceInput.instruction);
        });
        
        input.addEventListener('keydown', (e) => {
            // Allow control keys (backspace, delete, arrows, etc.)
            if (e.ctrlKey || e.metaKey || [
                'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 
                'ArrowUp', 'ArrowDown', 'Tab', 'Home', 'End'
            ].includes(e.key)) {
                return;
            }
            
            // Prevent entering characters that aren't allowed
            const allowedKeys = this.getAllowedSequenceKeys();
            if (!allowedKeys.includes(e.key.toUpperCase())) {
                e.preventDefault();
                
                // Show temporary error
                this.showSequenceError(`"${e.key}" is not a valid key. Allowed keys: ${allowedKeys.join(', ')}`);
            }
        });
    }

    setupPlayButton() {
        this.playButton.addEventListener('click', () => {
            if (!this.isPlayingSequence && this.sequenceInput.input.value.trim().length > 0) {
                this.playSequence();
            }
        });
    }

    async playSequence() {
        if (this.isPlayingSequence) return;
        
        const sequence = this.sequenceInput.input.value.toUpperCase();
        if (sequence.length === 0) return;
        
        // Disable interactions
        this.setPlaybackState(true);
        
        try {
            for (let i = 0; i < sequence.length; i++) {
                const char = sequence[i];
                const note = this.getNoteFromCharacter(char);
                
                if (note) {
                    // Highlight and play the note
                    await this.playNoteWithVisual(note);
                    
                    // Add delay between notes (except for the last one)
                    if (i < sequence.length - 1) {
                        await this.delay(this.playbackDelay);
                    }
                }
            }
        } catch (error) {
            console.error('Error during sequence playback:', error);
        } finally {
            // Re-enable interactions
            this.setPlaybackState(false);
        }
    }

    async playNoteWithVisual(note) {
        return new Promise((resolve) => {
            const keyElement = document.querySelector(`[data-note="${note}"]`);
            if (!keyElement) {
                resolve();
                return;
            }
            
            // Highlight the key
            this.pressKey(keyElement);
            
            // Play the sound
            if (this.sounds[note]) {
                this.sounds[note].currentTime = 0;
                this.sounds[note].play().catch(error => {
                    console.warn(`Could not play sound for note ${note}:`, error);
                });
                
                // Wait for sound to end or timeout after 2 seconds
                const soundEnded = () => {
                    this.releaseKey(keyElement);
                    this.sounds[note].removeEventListener('ended', soundEnded);
                    resolve();
                };
                
                this.sounds[note].addEventListener('ended', soundEnded);
                
                // Safety timeout in case 'ended' event doesn't fire
                setTimeout(soundEnded, 2000);
            } else {
                // If no sound, just wait a bit then release
                setTimeout(() => {
                    this.releaseKey(keyElement);
                    resolve();
                }, 500);
            }
        });
    }

    pressKey(keyElement) {
        const note = keyElement.dataset.note;
        keyElement.classList.add('key-pressed');
        console.log(`Playing note: ${note}`);
    }

    releaseKey(keyElement) {
        const note = keyElement.dataset.note;
        keyElement.classList.remove('key-pressed');
    }

    getNoteFromCharacter(char) {
        const keyCode = `Key${char}`;
        return this.keyboardMap[keyCode];
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    setPlaybackState(isPlaying) {
        this.isPlayingSequence = isPlaying;
        
        // Disable/enable sequence input
        this.sequenceInput.input.disabled = isPlaying;
        
        // Disable/enable play button
        this.playButton.disabled = isPlaying || this.sequenceInput.input.value.trim().length === 0;
        
        // Update play button text
        this.playButton.innerHTML = isPlaying ? 
            '⏸ Playing...' : 
            '▶ Play Sequence';
        
        // Add/remove disabled styling
        if (isPlaying) {
            this.sequenceInput.input.classList.add('disabled');
            this.playButton.classList.add('disabled');
            this.appContainer.classList.add('playback-active');
        } else {
            this.sequenceInput.input.classList.remove('disabled');
            this.playButton.classList.remove('disabled');
            this.appContainer.classList.remove('playback-active');
        }
    }

    getAllowedSequenceKeys() {
        return Object.keys(this.keyboardMap).map(keyCode => 
            keyCode.replace('Key', '')
        );
    }

    updateSequenceInstruction(instructionElement) {
        const allowedKeys = this.getAllowedSequenceKeys();
        instructionElement.textContent = `Only letters ${allowedKeys.join(', ')} are allowed (case insensitive)`;
    }

    showSequenceError(message) {
        // Remove any existing error
        const existingError = this.sequenceInput.container.querySelector('.sequence-error');
        if (existingError) {
            existingError.remove();
        }

        const error = document.createElement('div');
        error.className = 'sequence-error';
        error.textContent = message;
        error.style.color = '#f44336';
        error.style.marginTop = '8px';
        error.style.fontSize = '0.9rem';
        error.style.textAlign = 'center';

        this.sequenceInput.container.appendChild(error);
        
        setTimeout(() => {
            if (error.parentNode) {
                error.remove();
            }
        }, 3000);
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
                if (!this.isPlayingSequence) {
                    this.startEditing(note, key);
                }
            });
            key.appendChild(editButton);
        }
        
        this.addKeyInteractions(key);
        
        return key;
    }

    addKeyInteractions(key) {
        key.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (!this.activeKey && !this.isPlayingSequence) {
                this.pressKey(key);
            }
        });
        
        key.addEventListener('mouseup', () => {
            if (this.activeKey === key.dataset.note && !this.isPlayingSequence) {
                this.releaseKey(key);
                this.activeKey = null;
            }
        });
        
        key.addEventListener('mouseleave', () => {
            if (this.activeKey === key.dataset.note && !this.isPlayingSequence) {
                this.releaseKey(key);
                this.activeKey = null;
            }
        });
        
        key.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!this.activeKey && !this.isPlayingSequence) {
                this.pressKey(key);
            }
        });
        
        key.addEventListener('touchend', () => {
            if (this.activeKey === key.dataset.note && !this.isPlayingSequence) {
                this.releaseKey(key);
                this.activeKey = null;
            }
        });
    }

    startEditing(note, keyElement) {
        if (this.activeKey || this.isPlayingSequence) {
            console.log('Cannot edit while a key is active or during playback');
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
        
        // Update sequence instruction when keys change
        this.updateSequenceInstruction(this.sequenceInput.instruction);
        
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