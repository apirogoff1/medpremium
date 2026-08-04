content = open(r'C:\Users\raund\Desktop\portfolio\Medpremium\app\clinic\admin\page.tsx', encoding='utf-8').read()
content = content.lstrip('\ufeff')  # убираем BOM

new_content = "export const dynamic = 'force-dynamic'\n" + content

with open(r'C:\Users\raund\Desktop\portfolio\Medpremium\app\clinic\admin\page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("OK")
print(new_content[:100])