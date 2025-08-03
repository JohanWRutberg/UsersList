// Definierar tillåtna könsvärden som en typ
type Gender = 'all' | 'male' | 'female'

// Typdefinition för props som komponenten tar emot
type Props = {
  value: Gender                         // Det nuvarande valda könsvärdet
  onChange: (value: Gender) => void     // Callback-funktion som anropas när användaren byter könsfilter
}

// Funktionell React-komponent som visar en dropdown för könsval
const GenderFilter = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}  // Kontrollerar valt alternativ (styrt komponent)
      
      // När användaren väljer ett nytt alternativ anropas onChange med det nya värdet.
      // e.target.value är en sträng, så vi gör en "type assertion" till typen Gender.
      onChange={(e) => onChange(e.target.value as Gender)}

      // Tailwind CSS-klasser för stil
      className="border border-gray-300 rounded-md p-2"
    >
      {/* Alternativ i dropdown-menyn */}
      <option value="all">Alla</option>
      <option value="male">Man</option>
      <option value="female">Kvinna</option>
    </select>
  )
}

// Exporterar komponenten så att den kan importeras i andra filer
export default GenderFilter
