content = open(r'app/layout.tsx', encoding='utf-8').read()

old = "import type { Metadata } from 'next'"
new = "import type { Metadata, Viewport } from 'next'"

result = content.replace(old, new)

old2 = "export const viewport = {"
new2 = "export const viewport: Viewport = {"

result = result.replace(old2, new2)

open(r'app/layout.tsx', 'w', encoding='utf-8').write(result)
print("Done")