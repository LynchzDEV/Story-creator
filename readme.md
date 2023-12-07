### Practice Problem: Interactive Story Creator

**Objective:** Develop a simple web application where users can create a short interactive story. This will involve JavaScript for logic and data manipulation, along with basic HTML for the interface.

### `displayStoryPart()` Function

**Purpose:** This function is responsible for displaying a specific part of the story on the webpage.

#### Basic Steps:
1. **Select the Story Part:** Based on an ID or other identifier, find the corresponding story part from your story array.
2. **Display the Story Text:** Use DOM manipulation to display the text of the story part on the webpage.
3. **Clear Previous Options:** If there are any existing options shown, clear them before displaying new ones. (optional, you can join new storyline into same string)
4. **Call `updateOptions()`:** To display the new set of options related to this part of the story.

#### Conceptual Example:
```javascript
function displayStoryPart(storyPartId) {
  //implement here
}
```

### `updateOptions()` Function

**Purpose:** This function updates the story options displayed on the webpage, allowing the user to choose the next part of the story.

#### Basic Steps:
1. **Access the Options Container:** Get the HTML element where the options will be displayed.
2. **Create Buttons/Links for Each Option:** For each option in the provided array, create a button or link.
3. **Add Event Listeners:** Each button/link should have an event listener that calls `displayStoryPart()` with the ID of the next story part.
4. **Append Options to the Container:** Add the created buttons/links to the options container.

#### Conceptual Example:
```javascript
function updateOptions(options) {
  //implement here
}
```

### Documentation Resources

For more detailed guidance, you might want to refer to the following documentation:
- [MDN Web Docs: Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Web Docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

---
