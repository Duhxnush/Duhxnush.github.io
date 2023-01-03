SECRET_KEY = "0x06CFfFA157Aee66F51db17867D3d89446111dA18"
VERIFY_URL = "https://hcaptcha.com/siteverify"

token = request.POST_DATA['h-captcha-response']

data = { 'secret': SECRET_KEY, 'response': token }

response = http.post(url=VERIFY_URL, data=data)

response_json = JSON.parse(response.content)
success = response_json['success']

