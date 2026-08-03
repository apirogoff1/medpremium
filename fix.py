path = r'C:\Users\raund\Desktop\portfolio\Medpremium\features\clinic\ui\DoctorsList.tsx'
content = open(path, encoding='utf-8').read()
fixed = content.replace('  photoUrl?: string', '  photoUrl?: string | null')
with open(path, 'w', encoding='utf-8') as f:
    f.write(fixed)
print('OK')
print(fixed[200:350])