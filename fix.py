content = """{
  "crons": [
    {
      "path": "/api/cron/generate-slots",
      "schedule": "0 3 * * *"
    }
  ]
}
"""
open('vercel.json', 'w', encoding='utf-8').write(content)
print('готово')
print(open('vercel.json', encoding='utf-8').read())