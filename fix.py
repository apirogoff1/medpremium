content = open(r'app/clinic/page.tsx', encoding='utf-8').read()

result = content.replace(
    '<div className="grid grid-cols-4 gap-6">',
    '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">'
)

result = result.replace(
    '<div className="grid grid-cols-4 gap-4">',
    '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">'
)

open(r'app/clinic/page.tsx', 'w', encoding='utf-8').write(result)
print("Done")