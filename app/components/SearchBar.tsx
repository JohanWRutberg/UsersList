// Props: value (nuvarande söktext) och en funktion för att uppdatera den
type Props = {
  value: string
  onChange: (value: string) => void
}

// Komponent för sökfältet
const SearchBar = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      value={value} // Binder inputvärdet till söktexten
      onChange={(e) => onChange(e.target.value)} // Uppdaterar texten vid ändring
      placeholder="Sök efter namn..."
      className="border border-gray-300 rounded-md p-2 flex-1"
    />
  )
}

export default SearchBar
