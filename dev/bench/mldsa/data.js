window.BENCHMARK_DATA = {
  "lastUpdate": 1746543507690,
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
      },
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
        "date": 1746543330669,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 78,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 327,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 87,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 75,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "avx2"
          },
          {
            "value": 91,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "avx2"
          },
          {
            "value": 35,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "avx2"
          },
          {
            "value": 25,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 77,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 31,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "auto"
          },
          {
            "value": 153,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 539,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 144,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 154,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "avx2"
          },
          {
            "value": 142,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "avx2"
          },
          {
            "value": 68,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "avx2"
          },
          {
            "value": 44,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 126,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 49,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "auto"
          },
          {
            "value": 222,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 651,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 229,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 241,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "avx2"
          },
          {
            "value": 176,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "avx2"
          },
          {
            "value": 80,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "avx2"
          },
          {
            "value": 70,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 144,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 75,
            "unit": "μs/iter",
            "os": "ubuntu-latest_64",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "auto"
          }
        ]
      },
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
        "date": 1746543372877,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 110,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 328,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 104,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 68,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "avx2"
          },
          {
            "value": 108,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "avx2"
          },
          {
            "value": 44,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "avx2"
          },
          {
            "value": 197,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 537,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 155,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 116,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "avx2"
          },
          {
            "value": 155,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "avx2"
          },
          {
            "value": 55,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "avx2"
          },
          {
            "value": 236,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 575,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 235,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 210,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "avx2"
          },
          {
            "value": 204,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "avx2"
          },
          {
            "value": 85,
            "unit": "μs/iter",
            "os": "macos-13_64",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "avx2"
          }
        ]
      },
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
        "date": 1746543507386,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 210,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 535,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 207,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 260,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 803,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 286,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "44",
            "label": "Verify",
            "hardware": "auto"
          },
          {
            "value": 399,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 874,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 365,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 476,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 1.31,
            "unit": "ms/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 475,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "65",
            "label": "Verify",
            "hardware": "auto"
          },
          {
            "value": 631,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "portable"
          },
          {
            "value": 1.14,
            "unit": "ms/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "portable"
          },
          {
            "value": 603,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "libcrux ML-DSA",
            "keySize": "87",
            "label": "Verify",
            "hardware": "portable"
          },
          {
            "value": 779,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "KeyGen",
            "hardware": "auto"
          },
          {
            "value": 1.67,
            "unit": "ms/iter",
            "os": "ubuntu-latest_32",
            "implementation": "pqclean ML-DSA",
            "keySize": "87",
            "label": "Sign",
            "hardware": "auto"
          },
          {
            "value": 802,
            "unit": "μs/iter",
            "os": "ubuntu-latest_32",
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