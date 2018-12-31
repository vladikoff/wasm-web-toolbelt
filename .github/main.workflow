workflow "Deploy" {
  on = "push"
  resolves = ["build"]
}

action "build" {
  uses = "actions/npm@e7aaefe"
  runs = "cd www && npm i "
}
