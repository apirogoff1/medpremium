content = open(r'features/clinic/ui/BookingForm.tsx', encoding='utf-8').read()

old = """const fieldStyle = {
  width: '100%',
  height: '48px',
  background: '#F8FAFD',
  border: '1px solid #D9E2EE',
  borderRadius: '14px',
  padding: '12px 18px',
  fontSize: '16px',
  fontWeight: 500,
  color: '#304156',
  transition: '.25s ease',
  outline: 'none',
} as React.CSSProperties"""

new = """const fieldStyle = {
  width: '100%',
  height: '56px',
  background: '#F8FAFD',
  border: '1px solid #D9E2EE',
  borderRadius: '14px',
  padding: '12px 18px',
  fontSize: '16px',
  fontWeight: 500,
  color: '#304156',
  transition: '.25s ease',
  outline: 'none',
  cursor: 'pointer',
} as React.CSSProperties"""

result = content.replace(old, new)
open(r'features/clinic/ui/BookingForm.tsx', 'w', encoding='utf-8').write(result)
print("Done")