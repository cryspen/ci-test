window.BENCHMARK_DATA = {
  "lastUpdate": 1746543306892,
  "repoUrl": "https://github.com/cryspen/ci-test",
  "entries": {
    "ML-DSA Benchmark": [
      {
        "commit": {
          "author": {
            "name": "clara",
            "username": "clara"
          },
          "committer": {
            "name": "GitHub",
            "username": "GitHub"
          },
          "id": "dccbe51330d49d82a37c1e07b1f78e42fb56d217",
          "message": "Merge pull request #19 from cryspen/wysiwys/mldsa-bench\n\nadd ML-DSA workflow",
          "timestamp": "2025-05-06T14:52:22Z",
          "url": "/commits/dccbe51330d49d82a37c1e07b1f78e42fb56d217"
        },
        "date": 1746543306003,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 43,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 230,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 60,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 32,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "neon"
          },
          {
            "value": 152,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "neon"
          },
          {
            "value": 35,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "neon"
          },
          {
            "value": 22,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 81,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 28,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "auto"
          },
          {
            "value": 86,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 262,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 82,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 61,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "neon"
          },
          {
            "value": 234,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "neon"
          },
          {
            "value": 54,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "neon"
          },
          {
            "value": 50,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 113,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 40,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "auto"
          },
          {
            "value": 122,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 327,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 122,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 75,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "neon"
          },
          {
            "value": 263,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "neon"
          },
          {
            "value": 115,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "neon"
          },
          {
            "value": 75,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 186,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 66,
            "unit": "μs/iter",
            "os": "macos-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "auto"
          }
        ]
      }
    ]
  },
  "groupBy": [
    "implementation",
    "label",
    "os"
  ],
  "schema": [
    "implementation",
    "keySize",
    "label",
    "hardware",
    "os"
  ]
}