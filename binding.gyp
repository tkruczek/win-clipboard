{
  "targets": [
    {
      "target_name": "clipboard",
      "sources": [ "clipboard.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
