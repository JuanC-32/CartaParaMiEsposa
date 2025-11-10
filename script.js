$(document).ready(function () {
  const envelope = $("#envelope");
  const btnOpen = $("#open");
  const btnReset = $("#reset");

  function open() {
    envelope.addClass("open").removeClass("close");
    envelope.addClass("vibrate");
    setTimeout(() => envelope.removeClass("vibrate"), 500);
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    envelope.addClass("vibrate");
    setTimeout(() => envelope.removeClass("vibrate"), 500);
  }

  envelope.click(open);
  btnOpen.click(open);
  btnReset.click(close);
});

