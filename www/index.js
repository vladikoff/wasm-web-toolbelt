import * as wasm from "wasm-web-toolbelt";

//wasm.greet();

const base64DecodeTextarea = document.querySelector('#base64decode');
const base64EncodeTextarea = document.querySelector('#base64encode');

function base64decode() {
  const result = wasm.base64decode(base64DecodeTextarea.value);
  base64EncodeTextarea.value = result;
}

base64DecodeTextarea.addEventListener('paste', base64decode);
base64DecodeTextarea.addEventListener('change', base64decode);
