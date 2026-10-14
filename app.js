'use strict';
const form = document.getElementById('form');
const code = document.getElementById('code');
const error = document.getElementById('error');
const result = document.getElementById('result');
const url = document.getElementById('url');
const openLink = document.getElementById('open');
const status = document.getElementById('status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = code.value.trim();
  if (!/^[0-9]{7}$/.test(value)) {
    error.textContent = '請輸入 7 位數字，例如 5758673。';
    error.hidden = false;
    code.setAttribute('aria-invalid', 'true');
    result.hidden = true;
    code.focus();
    return;
  }
  code.value = value;
  error.hidden = true;
  code.removeAttribute('aria-invalid');
  const href = 'https://www5.inservice.edu.tw/NAPP/CourseView.aspx?cid=' + value;
  url.textContent = href;
  url.href = href;
  openLink.href = href;
  status.textContent = '';
  result.hidden = false;
});

code.addEventListener('input', () => {
  result.hidden = true;
  error.hidden = true;
  code.removeAttribute('aria-invalid');
  status.textContent = '';
});

document.getElementById('copy').addEventListener('click', async () => {
  const text = url.textContent;
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = '已複製網址，可以貼上分享。';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(url);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = '請長按選取的網址，或按 Ctrl+C（Mac：⌘C）複製。';
  }
});
