function manipulateDom() {
  document.querySelectorAll('.quote').forEach((el) => {
    el.style.borderColor = 'blue';
    el.style.backgroundColor = 'lightblue';
    el.style.fontStyle = 'italic';
  });
}

export { manipulateDom };
