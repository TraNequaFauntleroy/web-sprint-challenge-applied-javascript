const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //create elements
  const headerDiv = document.createElement('div');
  const span1 = document.createElement('span');
  const header1 = document.createElement('h1');
  const span2 = document.createElement('span');
  //add classes
  headerDiv.classList.add('header');
  span1.classList.add('date');
  span2.classList.add('temp');
  //add content
  span1.textContent = date;
  header1.textContent = title;
  span2.textContent = temp;
  // assemble hierachy
  const mainHeader = document.querySelector('.header-container');
  mainHeader.appendChild(headerDiv);
  headerDiv.appendChild(span1);
  headerDiv.appendChild(header1);
  headerDiv.appendChild(span2)

  return headerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
}

export { Header, headerAppender }
