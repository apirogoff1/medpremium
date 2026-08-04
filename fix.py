content = open(r'C:\Users\raund\Desktop\portfolio\Medpremium\components\VideoSlider.tsx', encoding='utf-8').read()

old = "style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}"
new = "style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', isolation: 'isolate', contain: 'strict' }}"

result = content.replace(old, new)

with open(r'C:\Users\raund\Desktop\portfolio\Medpremium\components\VideoSlider.tsx', 'w', encoding='utf-8') as f:
    f.write(result)

print("OK" if old in content else "СТРОКА НЕ НАЙДЕНА")