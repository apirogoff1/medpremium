content = open(r'app/clinic/admin/appointments/page.tsx', encoding='utf-8').read()

old = "import { prisma } from '@/shared/lib/prisma'"
new = "import { prisma } from '@/shared/lib/prisma'\nexport const dynamic = 'force-dynamic'"

result = content.replace(old, new)
open(r'app/clinic/admin/appointments/page.tsx', 'w', encoding='utf-8').write(result)
print("Done")