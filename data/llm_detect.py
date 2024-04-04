import json
import requests

url = 'https://contentatscale.ai/ai-content-detector/'
headers = {
    'authority': 'contentatscale.ai',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'cookie': '_cas_stats=eyJVc2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTIyLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJMYW5ndWFnZSI6ImVuLVVTIiwiU2NyZWVuV2lkdGgiOjE2OTIsIlNjcmVlbkhlaWdodCI6MzAwOCwiQ29sb3JEZXB0aCI6MjQsIlRpbWVab25lT2Zmc2V0IjoyNDAsIlBsdWdpbnMiOiJQREYgVmlld2VyLCBDaHJvbWUgUERGIFZpZXdlciwgQ2hyb21pdW0gUERGIFZpZXdlciwgTWljcm9zb2Z0IEVkZ2UgUERGIFZpZXdlciwgV2ViS2l0IGJ1aWx0LWluIFBERiJ9',
    'dnt': '1',
    'origin': 'https://contentatscale.ai',
    'referer': 'https://contentatscale.ai/ai-content-detector/',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
}

text = """
<p>In a quaint village nestled between rolling hills, there lived an old clockmaker named Elias. His shop, with its weathered sign swinging gently in the breeze, was a haven for the villagers. It wasn't just a place to repair broken timepieces; it was a sanctuary where stories were shared, laughter echoed, and the ticking of countless clocks created a soothing symphony.

Elias was more than a craftsman; he was a keeper of time itself. His hands, weathered from years of delicate work, could breathe life back into the oldest of clocks. Every tick and tock was a heartbeat of the village, marking the rhythm of its life.

One day, a mysterious stranger arrived in the village. She wore a cloak as dark as the night sky and carried an air of intrigue that captured the attention of all who crossed her path. With a solemn expression, she approached Elias' shop and presented him with a pocket watch unlike any he had seen before.</p>
"""

data = {
    'content': text,
    'action': 'checkaiscore'
}

response = requests.post(url, headers=headers, data=data)

if response.status_code == 200:
    # Get JSON data from the response
    json_data = response.json()
    print(json.dumps(json_data, indent=4))
else:
    print("Request was not successful. Status code:", response.status_code)