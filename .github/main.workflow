workflow "Build Rust project" {
  on = "push"
  resolves = [
    "Build",
    "gh-pages",
  ]
}

action "Format" {
  uses = "icepuma/rust-github-actions/fmt@master"
  args = "-- --check"
}

action "Clippy" {
  uses = "icepuma/rust-github-actions/clippy@master"
  args = "-- -Dwarnings"
  needs = "Format"
}

action "Build" {
  uses = "icepuma/rust-github-actions/build@master"
  needs = "Clippy"
}

action "gh-pages" {
  uses = "vladikoff/actions-wasm-deploy-gh-pages@master"
  secrets = ["GITHUB_TOKEN"]
}
