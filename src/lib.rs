extern crate cfg_if;
extern crate wasm_bindgen;
extern crate base64;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;
use std::str;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub fn base64decode(encoded: String) -> String {
  // "aGVsbG8gd29ybGQ="
  let base64val = match base64::decode(&encoded) {
    Ok(decoded) => decoded,
    Err(_) => vec![240, 159, 146, 150]
  };
  let bytes = str::from_utf8(&base64val).unwrap();
  bytes.to_owned()
}
