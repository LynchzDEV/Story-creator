import { storyParts } from './stories.js';

function displayStoryPart(partId) {
  const displayStoryIndex = findStoryIndex(storyParts, partId);
  const displayField = document.getElementById('story-text');
  displayField.textContent += storyParts[displayStoryIndex].text;;
  const currentOption = storyParts[displayStoryIndex].options;
  updateOptions(currentOption);
}

function updateOptions(currentOption) {
  const optionContainer = document.getElementById('options-container');
  const optionOne = document.createElement('button');
  optionContainer.innerHTML = '';
  optionOne.classList = currentOption[0];
  optionOne.textContent = storyParts[currentOption[0]].text;
  optionOne.addEventListener('click', () => {
    displayStoryPart(currentOption[0]);
  });
  optionContainer.appendChild(optionOne);

  const optionTwo = document.createElement('button');
  optionTwo.classList = currentOption[1];
  optionTwo.textContent = storyParts[currentOption[1]].text;
  optionTwo.addEventListener('click', () => {
    displayStoryPart(currentOption[1]);
    localStorage.clear();
  });
  optionContainer.appendChild(optionTwo);
}

function findStoryIndex(collection, findId) {
  return collection.findIndex((storyline) => storyline.id === findId);
}

// Start the story
displayStoryPart(1);
