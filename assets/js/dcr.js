  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
document.addEventListener('keydown', function (e) {
    // Block F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
      (e.ctrlKey && e.keyCode === 83) // Ctrl+S
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });