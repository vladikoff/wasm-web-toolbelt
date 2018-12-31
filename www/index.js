import * as wasm from "wasm-web-toolbelt";

// base64

const base64DecodeTextarea = document.querySelector('#base64decode');
const base64EncodeTextarea = document.querySelector('#base64encode');

function base64decode() {
  const result = wasm.base64decode(base64DecodeTextarea.value);
  base64EncodeTextarea.value = result;
}

base64DecodeTextarea.addEventListener('paste', base64decode);
base64DecodeTextarea.addEventListener('change', base64decode);


function base64encode() {
  const result = wasm.base64encode(base64EncodeTextarea.value);
  base64DecodeTextarea.value = result;
}

base64EncodeTextarea.addEventListener('paste', base64encode);
base64EncodeTextarea.addEventListener('change', base64encode);

// hex

const hexDecodeTextarea = document.querySelector('#hexdecode');
const hexEncodeTextarea = document.querySelector('#hexencode');

function hexdecode() {
  const result = wasm.hexdecode(hexDecodeTextarea.value);
  hexEncodeTextarea.value = result;
}

hexDecodeTextarea.addEventListener('paste', hexdecode);
hexDecodeTextarea.addEventListener('change', hexdecode);


function hexencode() {
  const result = wasm.hexencode(hexEncodeTextarea.value);
  hexDecodeTextarea.value = result;
}

hexEncodeTextarea.addEventListener('paste', hexencode);
hexEncodeTextarea.addEventListener('change', hexencode);
