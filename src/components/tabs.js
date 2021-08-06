const topics = ['javascript', 'bootstrap', 'technology']

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //creates elements
  const topicsDiv = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  //add classes
  topicsDiv.classList.add('topics');
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');
  //adds content
  div1.textContent = topics[0];
  div2.textContent = topics[1];
  div3.textContent = topics[2];
  //assembly heirarchy
  const tabs = document.querySelector('.tabs-container');
  tabs.appendChild(topicsDiv);
  topicsDiv.appendChild(div1);
  topicsDiv.appendChild(div2);
  topicsDiv.appendChild(div3);

  return topicsDiv
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
