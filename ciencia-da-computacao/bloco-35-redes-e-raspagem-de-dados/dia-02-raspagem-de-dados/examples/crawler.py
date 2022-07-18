import time

import requests

for _ in range(5):
    try:
        response = requests.get("https://httpbin.org/delay/10", timeout=2)
        print(response.status_code)
    except requests.Timeout:
        print("Demorou muito")
